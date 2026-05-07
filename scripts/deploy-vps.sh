#!/usr/bin/env bash
set -euo pipefail

# One-shot deploy script for Ubuntu VPS (GoDaddy or any provider).
# Run as root:
#   bash scripts/deploy-vps.sh
#
# Optional overrides:
#   DOMAIN=nikookiadb.com REPO_URL=https://github.com/you/repo.git bash scripts/deploy-vps.sh
#   ENABLE_SSL=true ADMIN_EMAIL=you@example.com bash scripts/deploy-vps.sh

DOMAIN="${DOMAIN:-nikookiadb.com}"
WWW_DOMAIN="${WWW_DOMAIN:-www.nikookiadb.com}"
APP_NAME="${APP_NAME:-nikookiadb}"
APP_DIR="${APP_DIR:-/var/www/nikookiadb}"
REPO_URL="${REPO_URL:-}"
BRANCH="${BRANCH:-main}"
NODE_MAJOR="${NODE_MAJOR:-20}"
PORT="${PORT:-3000}"
ENABLE_SSL="${ENABLE_SSL:-false}"          # true | false
ADMIN_EMAIL="${ADMIN_EMAIL:-}"             # required if ENABLE_SSL=true
ENV_FILE_SOURCE="${ENV_FILE_SOURCE:-/root/.env.nikookiadb}" # place your env here once

require_root() {
  if [[ "${EUID}" -ne 0 ]]; then
    echo "Please run as root: sudo bash scripts/deploy-vps.sh"
    exit 1
  fi
}

install_base_packages() {
  apt update
  apt install -y curl git nginx
}

install_node_pm2() {
  if ! command -v node >/dev/null 2>&1; then
    curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | bash -
    apt install -y nodejs
  fi
  if ! command -v pm2 >/dev/null 2>&1; then
    npm i -g pm2
  fi
}

prepare_app_code() {
  mkdir -p /var/www
  if [[ -n "${REPO_URL}" ]]; then
    if [[ ! -d "${APP_DIR}/.git" ]]; then
      git clone -b "${BRANCH}" "${REPO_URL}" "${APP_DIR}"
    else
      git -C "${APP_DIR}" fetch --all
      git -C "${APP_DIR}" checkout "${BRANCH}"
      git -C "${APP_DIR}" pull --ff-only origin "${BRANCH}"
    fi
  else
    echo "REPO_URL is empty. Place project files at ${APP_DIR} manually, then re-run."
    exit 1
  fi
}

setup_env() {
  cd "${APP_DIR}"
  if [[ -f "${ENV_FILE_SOURCE}" ]]; then
    cp "${ENV_FILE_SOURCE}" .env.local
    chmod 600 .env.local
    echo "Using env file from ${ENV_FILE_SOURCE}"
  elif [[ ! -f .env.local ]]; then
    cp .env.example .env.local
    echo "Created .env.local from .env.example."
    echo "Please edit ${APP_DIR}/.env.local and re-run this script."
    exit 1
  fi
}

build_app() {
  cd "${APP_DIR}"
  npm ci
  npm run build
}

start_pm2() {
  cd "${APP_DIR}"
  if pm2 describe "${APP_NAME}" >/dev/null 2>&1; then
    pm2 restart "${APP_NAME}"
  else
    pm2 start npm --name "${APP_NAME}" -- start
  fi
  pm2 save
  pm2 startup systemd -u root --hp /root >/dev/null || true
}

write_nginx_config() {
  cat >"/etc/nginx/sites-available/${APP_NAME}" <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} ${WWW_DOMAIN};

    location / {
        proxy_pass http://127.0.0.1:${PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

  ln -sf "/etc/nginx/sites-available/${APP_NAME}" "/etc/nginx/sites-enabled/${APP_NAME}"
  rm -f /etc/nginx/sites-enabled/default
  nginx -t
  systemctl restart nginx
}

enable_ssl() {
  if [[ "${ENABLE_SSL}" != "true" ]]; then
    echo "SSL skipped (ENABLE_SSL=false)."
    return
  fi

  if [[ -z "${ADMIN_EMAIL}" ]]; then
    echo "ENABLE_SSL=true requires ADMIN_EMAIL. Example:"
    echo "  ENABLE_SSL=true ADMIN_EMAIL=you@example.com bash scripts/deploy-vps.sh"
    exit 1
  fi

  apt install -y certbot python3-certbot-nginx
  certbot --nginx -d "${DOMAIN}" -d "${WWW_DOMAIN}" --agree-tos --email "${ADMIN_EMAIL}" --redirect -n
}

print_done() {
  echo
  echo "Deployment complete."
  echo "Domain: https://${DOMAIN}"
  echo "PM2 app: ${APP_NAME}"
  echo "App dir: ${APP_DIR}"
  echo
  echo "Useful commands:"
  echo "  pm2 status"
  echo "  pm2 logs ${APP_NAME}"
  echo "  systemctl status nginx"
}

require_root
install_base_packages
install_node_pm2
prepare_app_code
setup_env
build_app
start_pm2
write_nginx_config
enable_ssl
print_done

