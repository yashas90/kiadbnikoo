"use client";

import { motion } from "framer-motion";
import { useLeadFormModal } from "@/components/LeadFormModalContext";
import { UNIT_PRICING } from "@/lib/pricing";

export function PricingSection() {
  const { openLeadModal } = useLeadFormModal();

  return (
    <section id="units" className="scroll-mt-28 border-y border-white/5 bg-ink-900/30 py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Unit configurations
          </h2>
          <p className="mt-3 text-zinc-400">
            Indicative pricing — subject to floor rise, facing, PLC, GST &amp;
            statutory charges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-ink-950/80"
        >
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-zinc-500">
                <th className="px-5 py-4 font-medium">Type</th>
                <th className="px-5 py-4 font-medium">Size (approx.)</th>
                <th className="px-5 py-4 font-medium">Starting from</th>
              </tr>
            </thead>
            <tbody>
              {UNIT_PRICING.map((r) => (
                <tr
                  key={r.type}
                  className="border-b border-white/5 last:border-0"
                >
                  <td className="px-5 py-4 font-display text-white">{r.type}</td>
                  <td className="px-5 py-4 text-zinc-300">{r.size}</td>
                  <td className="px-5 py-4 text-gold-300">{r.tablePrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-4 text-center text-xs text-zinc-500">
          *Source: developer / channel indications at publish date — not an offer
          to sell. Confirm at booking.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => openLeadModal("pricing_cost_sheet")}
            className="inline-flex rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-gold-500/25 transition hover:from-gold-400 hover:to-gold-500"
          >
            Get complete cost sheet
          </button>
        </div>
      </div>
    </section>
  );
}
