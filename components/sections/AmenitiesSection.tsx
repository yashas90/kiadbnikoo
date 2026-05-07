"use client";

import { motion } from "framer-motion";

const amenities = [
  "Clubhouse",
  "Swimming pool",
  "Gym",
  "Jogging track",
  "Kids play area",
  "Co-working space",
  "Sports courts",
  "Landscaped gardens",
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="scroll-mt-28 border-y border-white/5 bg-ink-900/40 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Lifestyle amenities
          </h2>
          <p className="mt-3 text-zinc-400">
            Amenity mix may vary by phase — confirm the latest masterplan during
            your site visit.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-ink-850 to-ink-950 p-6 text-center shadow-lg"
            >
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gold-500/60" />
              <p className="font-display text-lg text-white">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
