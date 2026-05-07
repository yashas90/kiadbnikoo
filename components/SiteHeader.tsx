"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { trackCallClick } from "@/lib/analytics";
import { useLeadFormModal } from "@/components/LeadFormModalContext";

const nav = [
  { href: "#why-kiadb", label: "KIADB" },
  { href: "#highlights", label: "Highlights" },
  { href: "#units", label: "Pricing" },
  { href: "#location", label: "Location" },
  { href: "#amenities", label: "Amenities" },
  { href: "#faq", label: "FAQ" },
  { href: "#trust", label: "Disclosures" },
];

export function SiteHeader() {
  const { openLeadModal } = useLeadFormModal();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg tracking-wide text-white md:text-xl">
            Bhartiya City{" "}
            <span className="text-gold-400">Nikoo Homes 9</span>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            Marketing by PropNinja
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-gold-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => trackCallClick("header")}
            className="hidden rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:border-gold-500/40 hover:text-gold-300 sm:inline-block"
          >
            {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            onClick={() => openLeadModal("header")}
            className="rounded-full bg-gold-500 px-4 py-2 text-xs font-semibold text-ink-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400"
          >
            Enquire
          </button>
        </div>
      </div>
      <p className="border-t border-white/5 bg-ink-900/50 px-4 py-1 text-center text-[10px] text-zinc-500 md:text-xs">
        Advertiser: {BRAND.company} — Marketing enquiry page for{" "}
        {BRAND.project}. Not the developer&apos;s official website.
      </p>
    </motion.header>
  );
}
