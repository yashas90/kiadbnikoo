"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

export function SiteVisitSection() {
  const [open, setOpen] = useState(!!bookingUrl);

  if (!bookingUrl) {
    return (
      <section id="site-visit" className="scroll-mt-28 border-y border-white/5 bg-ink-900/50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl text-white">Book a site visit</h2>
          <p className="mt-3 text-zinc-400">
            Set <code className="text-gold-400">NEXT_PUBLIC_BOOKING_URL</code> to
            your Cal.com, Calendly, or Google Appointment schedule URL to enable the
            embedded calendar.
          </p>
          <a
            href="#lead-form"
            className="mt-8 inline-flex rounded-xl bg-gold-500 px-8 py-3 text-sm font-semibold text-ink-950"
          >
            Request visit via form
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="site-visit" className="scroll-mt-28 border-y border-white/5 bg-ink-900/50 py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Schedule your site visit
          </h2>
          <p className="mt-3 text-zinc-400">
            Pick a convenient slot. Our team will confirm before you travel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-ink-950 shadow-2xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-3">
            <p className="text-xs text-zinc-500">
              Calendar hosted by a third-party scheduler — subject to their terms.
            </p>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="text-xs text-gold-400 underline-offset-2 hover:underline"
            >
              {open ? "Hide calendar" : "Show calendar"}
            </button>
          </div>
          {open && (
            <div className="aspect-[4/5] w-full min-h-[560px] md:aspect-[16/10] md:min-h-[640px]">
              <iframe
                title="Site visit booking"
                src={bookingUrl}
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
