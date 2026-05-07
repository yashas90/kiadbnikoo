"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { LeadForm } from "@/components/LeadForm";
import { useLeadFormModal } from "@/components/LeadFormModalContext";
import { trackEvent } from "@/lib/analytics";

export function LeadFormModal() {
  const { isOpen, closeLeadModal, modalSource, openLeadModal } =
    useLeadFormModal();

  useEffect(() => {
    if (!isOpen) return;
    trackEvent("lead_modal_open", { source: modalSource });
  }, [isOpen, modalSource]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLeadModal();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, closeLeadModal]);

  // Expose for testing / deep links: open from ?enquire=1
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("enquire") === "1") {
      openLeadModal("url_query");
      params.delete("enquire");
      const next =
        window.location.pathname +
        (params.toString() ? `?${params}` : "") +
        window.location.hash;
      window.history.replaceState(null, "", next);
    }
  }, [openLeadModal]);

  // Auto popup every 30 seconds on the main landing page.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;

    const id = window.setInterval(() => {
      if (document.hidden || isOpen) return;
      openLeadModal("timer_30s");
    }, 30000);

    return () => window.clearInterval(id);
  }, [isOpen, openLeadModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/75 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLeadModal();
          }}
        >
          <motion.div
            className="relative z-10 max-h-[min(90vh,760px)] w-full max-w-md overflow-y-auto rounded-2xl border border-white/10 bg-ink-900 p-6 shadow-2xl"
            initial={{ y: 48, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 32, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLeadModal}
              className="absolute right-4 top-4 z-10 rounded-lg border border-white/10 bg-ink-950/80 px-2.5 py-1 text-xs text-zinc-400 transition hover:bg-white/10 hover:text-white"
            >
              Close
            </button>
            <h2
              id="lead-modal-title"
              className="pr-14 font-display text-xl text-white md:text-2xl"
            >
              Get project details
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Share your details — we&apos;ll call you with inventory,
              indicative pricing, and site-visit options.
            </p>
            <div className="mt-5">
              <LeadForm
                id="popup-lead-form"
                variant="compact"
                source={modalSource}
                onSuccess={() => {
                  setTimeout(() => closeLeadModal(), 2800);
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
