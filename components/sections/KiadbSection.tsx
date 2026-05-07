"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Near KIADB Aerospace Park",
    desc: "Proximity to the aerospace & defence manufacturing belt.",
  },
  {
    title: "Upcoming metro connectivity",
    desc: "Improved public transport options planned along key corridors.",
  },
  {
    title: "Near Boeing campus",
    desc: "Strategic presence of global aerospace majors in the region.",
  },
  {
    title: "Near Foxconn & hardware park",
    desc: "Large-format employment hubs supporting steady housing demand.",
  },
  {
    title: "About 30 mins to Kempegowda Airport",
    desc: "Travel time varies with traffic; airport access remains a key draw.",
  },
  {
    title: "Rapid rental growth",
    desc: "Strong tenant demand from IT & industrial corridors — rents may fluctuate by segment.",
  },
  {
    title: "Strong appreciation potential",
    desc: "Infrastructure-led growth story; past trends do not guarantee future prices.",
  },
];

export function KiadbSection() {
  return (
    <section id="why-kiadb" className="scroll-mt-28 border-y border-white/5 bg-ink-900/40 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Why North Bangalore &amp; KIADB Matter
          </h2>
          <p className="mt-3 text-zinc-400">
            Employment corridors, planned connectivity, and expanding social
            infrastructure continue to shape buyer interest in this belt — useful
            for end-users and investors evaluating rental yield vs. ticket size.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.35) }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-850/90 to-ink-950 p-6 shadow-lg shadow-black/30"
            >
              <div className="absolute right-4 top-4 text-5xl font-display text-gold-500/10 transition group-hover:text-gold-500/20">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {p.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
