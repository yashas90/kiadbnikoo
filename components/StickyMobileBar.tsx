"use client";

import { getWhatsAppHref, defaultWhatsAppMessage, PHONE_TEL } from "@/lib/contact";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";
import { useLeadFormModal } from "@/components/LeadFormModalContext";

export function StickyMobileBar() {
  const { openLeadModal } = useLeadFormModal();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-px bg-white/10">
        <a
          href={`tel:${PHONE_TEL}`}
          onClick={() => trackCallClick("sticky_bar")}
          className="flex flex-col items-center justify-center bg-ink-950 py-3 text-xs font-medium text-white"
        >
          <span className="mb-0.5 text-base" aria-hidden>
            📞
          </span>
          Call
        </a>
        <a
          href={getWhatsAppHref(defaultWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("sticky_bar")}
          className="flex flex-col items-center justify-center bg-ink-950 py-3 text-xs font-medium text-emerald-300"
        >
          <span className="mb-0.5 text-base" aria-hidden>
            WA
          </span>
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => openLeadModal("sticky_bar")}
          className="flex flex-col items-center justify-center bg-gradient-to-t from-gold-600 to-gold-500 py-3 text-xs font-semibold text-ink-950"
        >
          <span className="mb-0.5 text-base" aria-hidden>
            ✉
          </span>
          Enquire
        </button>
      </div>
    </div>
  );
}
