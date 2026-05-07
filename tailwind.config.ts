import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0b0f",
          900: "#0f1118",
          850: "#141824",
          800: "#1a1d2a",
          700: "#252836",
        },
        gold: {
          300: "#e8d5a3",
          400: "#d4af65",
          500: "#c9a227",
          600: "#a8841e",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-shine":
          "linear-gradient(135deg, rgba(212,175,101,0.15) 0%, rgba(201,162,39,0.05) 50%, rgba(212,175,101,0.12) 100%)",
        "hero-mesh":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212,175,101,0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(26,29,42,0.8), transparent)",
      },
      animation: {
        shimmer: "shimmer 8s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
