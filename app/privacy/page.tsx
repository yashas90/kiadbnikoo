import Link from "next/link";
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND.company}`,
  description:
    "How PropNinja collects, uses, and protects personal data for Nikoo Homes 9 enquiries.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ink-950 px-4 py-24 md:px-6">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-gold-400 underline-offset-2 hover:underline"
        >
          ← Back to project page
        </Link>
        <h1 className="mt-8 font-display text-4xl text-white">Privacy policy</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-6 text-zinc-400">
          <h2 className="font-display text-xl text-white">Controller</h2>
          <p>
            {BRAND.company} (“PropNinja”, “we”) processes personal data submitted
            through this website for responding to property enquiries related to{" "}
            {BRAND.project}.
          </p>

          <h2 className="mt-8 font-display text-xl text-white">Data we collect</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Identity &amp; contact details you provide (name, phone, email).
            </li>
            <li>
              Enquiry preferences (configuration interest) and communication
              consent.
            </li>
            <li>
              Technical data such as approximate location (from IP), device, and
              referrer — via analytics if enabled.
            </li>
          </ul>

          <h2 className="mt-8 font-display text-xl text-white">Purposes &amp; legal basis</h2>
          <p>
            We use your information to respond to your enquiry, share project
            updates you opted into, improve our marketing measurement, and comply
            with legal obligations. Where required, we rely on consent (checkbox)
            for promotional communication.
          </p>

          <h2 className="mt-8 font-display text-xl text-white">Sharing</h2>
          <p>
            We may share leads with authorised advisor teams, CRM tools, Google
            Sheets / automation endpoints you configure, and advertising /
            analytics platforms (e.g. Google, Meta) strictly for enquiry handling
            and campaign measurement.
          </p>

          <h2 className="mt-8 font-display text-xl text-white">Retention</h2>
          <p>
            Data is retained only as long as needed for sales follow-up, compliance,
            or dispute resolution — typically up to 36 months unless a shorter /
            longer period is required by law.
          </p>

          <h2 className="mt-8 font-display text-xl text-white">Your rights</h2>
          <p>
            Subject to Indian law, you may request access, correction, or deletion
            of your personal data and withdraw marketing consent by writing to{" "}
            <a href={`mailto:${BRAND.email}`} className="text-gold-400">
              {BRAND.email}
            </a>
            .
          </p>

          <h2 className="mt-8 font-display text-xl text-white">Contact</h2>
          <p>
            {BRAND.company}
            <br />
            {BRAND.address}
            <br />
            Email: {BRAND.email}
          </p>
        </div>
      </article>
    </div>
  );
}
