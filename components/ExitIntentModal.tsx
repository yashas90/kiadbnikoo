"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LeadForm } from "@/components/LeadForm";

const STORAGE_KEY = "pn_exit_intent_shown";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }

    function onDocMouseOut(e: MouseEvent) {
      const rel = (e as MouseEvent & { relatedTarget?: EventTarget | null })
        .relatedTarget;
      if (rel) return;
      if (e.clientY > 24) return;
      try {
        if (sessionStorage.getItem(STORAGE_KEY)) return;
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
    }

    document.addEventListener("mouseout", onDocMouseOut);
    return () => document.removeEventListener("mouseout", onDocMouseOut);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-intent-title"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-ink-900 p-6 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-lg border border-white/10 px-2 py-1 text-xs text-zinc-400 hover:bg-white/5 hover:text-white"
            >
              Close
            </button>
            <h2
              id="exit-intent-title"
              className="font-display pr-10 text-xl text-white"
            >
              Want the cost sheet &amp; floor plans?
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Leave your details — our advisor will share verified inventory &
              pricing. No automated downloads; brochure links are emailed after
              verification where applicable.
            </p>
            <div className="mt-6">
              <LeadForm
                id="exit-lead-form"
                variant="compact"
                source="exit_intent"
                onSuccess={() => setTimeout(() => setOpen(false), 2500)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
