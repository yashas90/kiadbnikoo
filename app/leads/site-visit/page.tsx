import Link from "next/link";
import type { Metadata } from "next";
import { BRAND, MAP_LOCATION_URL } from "@/lib/constants";
import { AutoOpenLeadModal } from "@/components/AutoOpenLeadModal";

export const metadata: Metadata = {
  title: `Book a Site Visit | ${BRAND.project}`,
  description: `Schedule a guided site visit for ${BRAND.project} near KIADB Aerospace Park. Meet our property advisor and explore sample flats.`,
  openGraph: {
    title: `${BRAND.project} — Book a Site Visit`,
    description: "Schedule your guided site visit with a PropNinja advisor.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function LeadsSiteVisitPage() {
  return (
    <div className="min-h-screen bg-ink-950 px-4 py-20 md:px-6">
      <AutoOpenLeadModal source="ads_leads_sitevisit" />
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-gold-400 underline-offset-2 hover:underline"
        >
          ← Back to project page
        </Link>

        <div className="mt-10">
          <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
            Site Visit Page
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
            Book Your Site Visit — {BRAND.project}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            Share your preferred date &amp; time in the popup form. A senior
            PropNinja advisor will guide you through the{" "}
            <span className="text-zinc-200">
              sample flat, clubhouse, and master plan
            </span>{" "}
            on-site.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "1. Pick a Date",
              text: "Weekday or weekend slots available between 10:00 AM – 6:00 PM.",
            },
            {
              title: "2. Get a Call",
              text: "Advisor calls within 15 minutes to confirm the slot and logistics.",
            },
            {
              title: "3. Site Walkthrough",
              text: "Guided tour — unit, tower, clubhouse, amenities & surrounding locality.",
            },
          ].map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-ink-900/60 p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 font-display text-lg text-gold-400">
                {i + 1}
              </div>
              <h3 className="font-display text-lg text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-6 md:p-8">
          <h3 className="font-display text-xl text-white">
            What you get during your visit:
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
            <li>👤 Personal one-to-one with a PropNinja property expert</li>
            <li>🏢 Sample flat / show-apartment walkthrough (as per availability)</li>
            <li>📋 Exact cost sheet with current offers & best-plan recommendation</li>
            <li>🧭 Locality briefing — schools, hospitals, commute, upcoming infra</li>
            <li>💬 Clarification of payment plans, home-loan process, documentation</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-ink-900/60 p-5 sm:flex-row">
          <div className="text-sm text-zinc-400">
            📍 Need directions? Open the site in Google Maps first.
          </div>
          <a
            href={MAP_LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </div>
  );
}
