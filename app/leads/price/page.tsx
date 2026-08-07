import Link from "next/link";
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { AutoOpenLeadModal } from "@/components/AutoOpenLeadModal";
import { UNIT_PRICING } from "@/lib/pricing";

export const metadata: Metadata = {
  title: `Price List & Cost Sheet | ${BRAND.project}`,
  description: `Latest price list for ${BRAND.project} near KIADB Aerospace Park. Get complete cost sheet with GST, stamp duty & hidden charges.`,
  openGraph: {
    title: `${BRAND.project} — Price List & Cost Sheet`,
    description: "Get indicative starting prices and a complete unit-wise cost sheet.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function LeadsPricePage() {
  return (
    <div className="min-h-screen bg-ink-950 px-4 py-20 md:px-6">
      <AutoOpenLeadModal source="ads_leads_price" />
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-gold-400 underline-offset-2 hover:underline"
        >
          ← Back to project page
        </Link>

        <div className="mt-10">
          <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
            Pricing Page
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
            {BRAND.project} — Price List &amp; Cost Sheet
          </h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            Check indicative starting prices below. Our team is ready to share
            the <span className="text-zinc-200">exact unit-wise cost sheet</span>{" "}
            — including GST, stamp duty, registration, maintenance, and PLC — in
            the popup form.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-zinc-500">
                <th className="px-5 py-4 font-medium">Configuration</th>
                <th className="px-5 py-4 font-medium">Size (approx.)</th>
                <th className="px-5 py-4 font-medium">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              {UNIT_PRICING.map((u) => (
                <tr
                  key={u.type}
                  className="border-b border-white/5 last:border-0"
                >
                  <td className="px-5 py-4 font-display text-white">
                    {u.type}
                  </td>
                  <td className="px-5 py-4 text-zinc-300">{u.size}</td>
                  <td className="px-5 py-4 text-gold-300">{u.heroPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-6">
          <h3 className="font-display text-lg text-white">
            What you&apos;ll receive in your inbox:
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>✅ Complete unit-wise cost sheet (Excel / PDF)</li>
            <li>✅ Bifurcation: Base price + PLC + GST + Stamp duty + Maintenance</li>
            <li>✅ Payment schedule &amp; construction-linked plan</li>
            <li>✅ Any ongoing festive / limited-period offers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
