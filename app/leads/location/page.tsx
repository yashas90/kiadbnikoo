import Link from "next/link";
import type { Metadata } from "next";
import { BRAND, MAP_LOCATION_URL, MAP_EMBED_SRC } from "@/lib/constants";
import { AutoOpenLeadModal } from "@/components/AutoOpenLeadModal";

export const metadata: Metadata = {
  title: `Location Map & Connectivity | ${BRAND.project}`,
  description: `Exact location, connectivity, and nearby landmarks for ${BRAND.project}. Distance to KIADB Aerospace Park, airport, schools & hospitals.`,
  openGraph: {
    title: `${BRAND.project} — Location Map & Connectivity`,
    description: "Explore exact location, distance to KIADB, airport and social infrastructure.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function LeadsLocationPage() {
  return (
    <div className="min-h-screen bg-ink-950 px-4 py-20 md:px-6">
      <AutoOpenLeadModal source="ads_leads_location" />
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm text-gold-400 underline-offset-2 hover:underline"
        >
          ← Back to project page
        </Link>

        <div className="mt-10">
          <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
            Location Page
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
            {BRAND.project} — Location &amp; Connectivity
          </h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            {BRAND.locationLine}. Use the map below to explore the exact
            address, and share your details in the popup to receive a{" "}
            <span className="text-zinc-200">custom route plan and site-visit</span>{" "}
            with our property advisor.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60">
          <iframe
            src={MAP_EMBED_SRC}
            className="h-[420px] w-full border-0"
            title={`${BRAND.project} Location Map`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6">
            <h3 className="font-display text-lg text-white">
              Key distance markers
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex items-start justify-between">
                <span>KIADB Aerospace Park</span>
                <span className="font-semibold text-gold-300">~3–5 mins</span>
              </li>
              <li className="flex items-start justify-between">
                <span>Kempegowda International Airport</span>
                <span className="font-semibold text-gold-300">~30 mins</span>
              </li>
              <li className="flex items-start justify-between">
                <span>Hebbal / Ring Road</span>
                <span className="font-semibold text-gold-300">~25 mins</span>
              </li>
              <li className="flex items-start justify-between">
                <span>Manyata Tech Park</span>
                <span className="font-semibold text-gold-300">~20 mins</span>
              </li>
              <li className="flex items-start justify-between">
                <span>Thanisandra Main Road</span>
                <span className="font-semibold text-gold-300">~8 mins</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6">
            <h3 className="font-display text-lg text-white">
              Social infrastructure
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>🏫 Schools &amp; preschools within 3–5 km</li>
              <li>🏥 Multi-speciality hospitals within 5 km</li>
              <li>🛍️ Malls, supermarkets &amp; retail hubs nearby</li>
              <li>🌳 Parks, lakes &amp; green belts in the vicinity</li>
              <li>⛽ Petrol pumps, ATMs &amp; daily conveniences</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={MAP_LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
