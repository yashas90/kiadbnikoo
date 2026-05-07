"use client";

import { motion } from "framer-motion";
import { BRAND, MAP_EMBED_SRC, MAP_LOCATION_URL } from "@/lib/constants";

const connectivity = [
  { label: "KIADB Aerospace Park", icon: "✈" },
  { label: "Boeing India", icon: "◎" },
  { label: "Manyata Tech Park", icon: "◇" },
  { label: "Kempegowda Airport", icon: "▫" },
  { label: "Upcoming metro", icon: "≡" },
  { label: "International schools", icon: "▸" },
  { label: "Hospitals", icon: "+" },
  { label: "Tech parks", icon: "◆" },
];

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Location advantages
          </h2>
          <p className="mt-3 text-zinc-400">
            {BRAND.project} — {BRAND.locationLine}. Distances &amp; drive times vary
            by route and traffic.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {connectivity.map((item, i) => (
            <motion.div
              key={item.label}
              role="presentation"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-850/60 px-4 py-4 text-left transition hover:border-gold-500/30 hover:bg-ink-850"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-xl text-gold-400"
                aria-hidden
              >
                {item.icon}
              </span>
              <span className="text-sm font-medium text-zinc-200">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl"
        >
          <div className="aspect-[21/9] w-full min-h-[280px] md:min-h-[360px]">
            <iframe
              title="Map — Bhartiya City area, North Bangalore"
              src={MAP_EMBED_SRC}
              className="h-full w-full border-0 grayscale-[30%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="border-t border-white/10 px-4 py-3 text-center text-xs text-zinc-500">
            Map for orientation only — not a legal demarcation of the project
            boundary.
          </p>
          <div className="border-t border-white/10 px-4 py-3 text-center">
            <a
              href={MAP_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gold-300 underline-offset-2 hover:underline"
            >
              Open exact location in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
