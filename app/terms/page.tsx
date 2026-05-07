import Link from "next/link";
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BRAND.company}`,
  description:
    "Terms of use for the PropNinja marketing page for Bhartiya City Nikoo Homes 9.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ink-950 px-4 py-24 md:px-6">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-gold-400 underline-offset-2 hover:underline"
        >
          ← Back to project page
        </Link>
        <h1 className="mt-8 font-display text-4xl text-white">
          Terms &amp; conditions
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-6 text-zinc-400">
          <h2 className="font-display text-xl text-white">Nature of this website</h2>
          <p>
            This site is an independent marketing and lead-generation property of{" "}
            {BRAND.company}. It is not the official developer website for{" "}
            {BRAND.project}. Project facts must be verified with sanctioned plans,
            agreements, and registration records.
          </p>

          <h2 className="mt-8 font-display text-xl text-white">No offer</h2>
          <p>
            Nothing on this website constitutes an offer, solicitation, or binding
            commitment to sell or lease real estate. Inventory, pricing, schemes,
            and timelines may change without notice.
          </p>

          <h2 className="mt-8 font-display text-xl text-white">Indicative pricing</h2>
          <p>
            Prices and inventory indications are sourced from developer / channel
            communications at the time of publishing and may not reflect real-time
            availability.
          </p>

          <h2 className="mt-8 font-display text-xl text-white">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {BRAND.company} disclaims
            liability for decisions taken solely based on this website. Users should
            conduct independent diligence and consult qualified advisers.
          </p>

          <h2 className="mt-8 font-display text-xl text-white">Advertising measurement</h2>
          <p>
            We may use cookies and pixels for analytics and conversion measurement.
            Refer to our Privacy Policy for details.
          </p>

          <h2 className="mt-8 font-display text-xl text-white">Governing law</h2>
          <p>
            Use of this website is governed by the laws of India. Courts at
            Bengaluru, Karnataka shall have exclusive jurisdiction, subject to
            mandatory consumer protections.
          </p>
        </div>
      </article>
    </div>
  );
}
