import Link from "next/link";
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { AutoOpenLeadModal } from "@/components/AutoOpenLeadModal";

const amenities = [
  "Clubhouse",
  "Swimming pool",
  "Gym",
  "Jogging track",
  "Kids play area",
  "Co-working space",
  "Sports courts",
  "Landscaped gardens",
  "Party hall",
  "Amphitheatre",
  "Senior citizens corner",
  "Yoga / Meditation deck",
];

export const metadata: Metadata = {
  title: `Amenities & Lifestyle Features | ${BRAND.project}`,
  description: `Explore world-class amenities at ${BRAND.project} — clubhouse, pool, gym, sports courts, landscaped gardens and more near KIADB.`,
  openGraph: {
    title: `${BRAND.project} — Amenities & Lifestyle Features`,
    description: "Clubhouse, swimming pool, gym, sports courts, kids zone and more.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function LeadsAmenitiesPage() {
  return (
    <div className="min-h-screen bg-ink-950 px-4 py-20 md:px-6">
      <AutoOpenLeadModal source="ads_leads_amenities" />
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm text-gold-400 underline-offset-2 hover:underline"
        >
          ← Back to project page
        </Link>

        <div className="mt-10">
          <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
            Amenities Page
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
            {BRAND.project} — Amenities &amp; Lifestyle
          </h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            A carefully crafted mix of lifestyle amenities for your family. Share
            your details in the popup to receive the{" "}
            <span className="text-zinc-200">
              complete master plan, amenity-wise specifications, and phase-wise
              allocation.
            </span>
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a) => (
            <div
              key={a}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-ink-850 to-ink-950 p-6 shadow-lg"
            >
              <div className="mb-3 h-1 w-10 rounded-full bg-gold-500/60" />
              <p className="font-display text-lg text-white">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-ink-900/60 p-6 md:p-8">
          <h2 className="font-display text-2xl text-white">
            What&apos;s in the full amenity brochure?
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>📐 Size / area allocation of each amenity (clubhouse, pool deck, etc.)</li>
            <li>🗺️ Master plan with tower, podium, and open-space layout</li>
            <li>🌳 Landscaping &amp; green areas narrative</li>
            <li>🏗️ Finishes, fixtures, and specifications matrix</li>
            <li>📅 Tentative possession &amp; construction milestones</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
