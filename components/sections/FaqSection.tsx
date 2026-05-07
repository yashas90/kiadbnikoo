"use client";

import { motion } from "framer-motion";
import { faqItems } from "@/lib/faq-data";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-28 border-y border-white/5 bg-ink-900/30 py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl text-white md:text-4xl"
        >
          Frequently asked questions
        </motion.h2>
        <dl className="mt-10 space-y-6">
          {faqItems.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-ink-850/40 p-5"
            >
              <dt className="font-display text-lg text-gold-200">
                {item.question}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.answer}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
