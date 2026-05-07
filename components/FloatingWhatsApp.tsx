"use client";

import { getWhatsAppHref, defaultWhatsAppMessage } from "@/lib/contact";
import { trackWhatsAppClick } from "@/lib/analytics";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppHref(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("floating")}
      className="fixed bottom-[88px] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl shadow-black/40 transition hover:scale-105 md:bottom-10 md:right-6"
      aria-label="Chat on WhatsApp"
    >
      <svg
        aria-hidden
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm0 17.85c-1.63 0-3.22-.43-4.6-1.24l-.33-.19-3.07.81.82-2.99-.22-.36c-.89-1.46-1.36-3.14-1.36-4.85 0-4.47 3.64-8.11 8.11-8.11 4.47 0 8.11 3.64 8.11 8.11 0 4.47-3.64 8.11-8.11 8.11zm4.44-5.89c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.08 3.62.57.25 1.01.4 1.35.51.57.18 1.09.16 1.5.1.46-.06 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
      </svg>
    </a>
  );
}
