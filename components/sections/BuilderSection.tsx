"use client";

import { motion } from "framer-motion";

export function BuilderSection() {
  return (
    <section id="builder" className="scroll-mt-28 py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gold-500/20 bg-gradient-to-br from-ink-850/90 to-ink-950 p-8 md:p-12"
        >
          <h2 className="font-display text-2xl text-white md:text-3xl">
            About Bhartiya City
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Bhartiya City is among Bangalore&apos;s widely recognised township-led
            developers, known for large-format urban communities that blend
            residential formats with retail and social infrastructure. Buyers
            typically evaluate masterplan execution, handover track record, and
            maintenance philosophy alongside pricing.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            This summary is for general orientation only and does not constitute an
            endorsement or valuation opinion by PropNinja.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
