import Link from "next/link";
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { AutoOpenLeadModal } from "@/components/AutoOpenLeadModal";
import { UNIT_PRICING } from "@/lib/pricing";

export const metadata: Metadata = {
  title: `Enquire Now | ${BRAND.project} | PropNinja`,
  description: `Get exclusive details, pricing, and site visit for ${BRAND.project}. Submit your enquiry and our team will call you back.`,
  openGraph: {
    title: `Enquire Now — ${BRAND.project}`,
    description: `Get pricing, inventory, and site-visit for ${BRAND.project}. A Pop-up lead form opens automatically.`,
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function LeadsHomePage() {
  return (
    <div className="min-h-screen bg-ink-950 px-4 py-20 md:px-6">
      <AutoOpenLeadModal source="ads_leads_home" />
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-gold-400 underline-offset-2 hover:underline"
        >
          ← Back to project page
        </Link>

        <div className="mt-10">
          <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
            Exclusive Google Ads Offer
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
            {BRAND.project} — Enquiry Desk
          </h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            Thank you for your interest. Share your details in the popup and our
            property advisor will contact you within 30 minutes with{" "}
            <span className="text-zinc-200">
              current pricing, floor-wise inventory, and available payment
              plans.
            </span>
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Cost Sheet",
              text: "Breakdown of base price, PLC, GST, stamp duty & maintenance.",
            },
            {
              title: "Floor Plans",
              text: "Unit layouts, carpet area statement, and master plan PDF.",
            },
            {
              title: "Site Visit",
              text: "Schedule a guided site visit with a senior PropNinja advisor.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-ink-900/60 p-5"
            >
              <h3 className="font-display text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60">
          <div className="border-b border-white/10 px-6 py-4">
            <h2 className="font-display text-xl text-white">
              Indicative Starting Prices
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            {UNIT_PRICING.slice(0, 4).map((u) => (
              <div
                key={u.type}
                className="flex items-center justify-between px-6 py-4"
              >
                <div>
                  <div className="font-display text-white">{u.type}</div>
                  <div className="text-xs text-zinc-500">{u.size}</div>
                </div>
                <div className="text-sm font-semibold text-gold-300">
                  {u.heroPrice}
                </div>
              </div>
            ))}
          </div>
          <p className="px-6 pb-5 pt-3 text-xs text-zinc-500">
            *Subject to floor rise, facing, PLC, GST &amp; statutory charges.
          </p>
        </div>
      </div>
    </div>
  );
}
