/**
 * Client-side tracking helpers. IDs come from NEXT_PUBLIC_* env vars.
 * Replace placeholder conversion labels in production.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
}

/** Google Ads conversion (configure AW-XXXX / label in env). */
export function trackGoogleAdsConversion(label?: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  const sendTo =
    label ||
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ||
    "";
  if (!sendTo) return;
  window.gtag("event", "conversion", {
    send_to: sendTo,
  });
}

export function trackMetaEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", eventName, params);
}

export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", { source });
  trackMetaEvent("Contact", { content_name: "whatsapp", source });
}

export function trackCallClick(source: string) {
  trackEvent("call_click", { source });
  trackMetaEvent("Contact", { content_name: "call", source });
}

export function trackLeadSubmit(source: string) {
  trackEvent("generate_lead", { source });
  trackMetaEvent("Lead", { content_name: "form_submit", source });
  trackGoogleAdsConversion();
}
