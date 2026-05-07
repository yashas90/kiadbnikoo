"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Township living",
    body: "Integrated masterplan context within Bhartiya City’s larger ecosystem.",
  },
  {
    title: "Clubhouse & lifestyle amenities",
    body: "Curated indoor-outdoor spaces designed for daily recreation.",
  },
  {
    title: "Smart urban design",
    body: "Layouts tuned for modern households with efficient circulation.",
  },
  {
    title: "High rental-demand catchment",
    body: "Proximity to employment hubs supports leasing interest.",
  },
  {
    title: "Established developer footprint",
    body: "Bhartiya City’s township experience across Bangalore.",
  },
  {
    title: "Green open spaces",
    body: "Landscaping & open zones within the development philosophy.",
  },
];

export function HighlightsSection() {
  return (
    <section id="highlights" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Project highlights
          </h2>
          <p className="mt-3 text-zinc-400">
            Snapshot positioning — verify specifications, amenities, and timelines
            on site / with official documentation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-gold-500/15 bg-gradient-to-b from-ink-850 to-ink-950 p-8 shadow-xl"
            >
              <div className="mb-4 h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" />
              <h3 className="font-display text-xl text-gold-200">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
