import { BRAND } from "./constants";

/** Digits only, with country code, no + */
export const WHATSAPP_DIGITS =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || BRAND.whatsappDigits;

export const PHONE_TEL = process.env.NEXT_PUBLIC_PHONE_TEL || BRAND.phoneTel;

export const PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY || BRAND.phoneDisplay;

export function getWhatsAppHref(text: string) {
  const q = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_DIGITS}?text=${q}`;
}

export const defaultWhatsAppMessage =
  "Hi PropNinja, I would like to know more about Nikoo Homes 9 near KIADB, North Bangalore.";
