"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LeadForm } from "@/components/LeadForm";
import { BRAND } from "@/lib/constants";
import {
  defaultWhatsAppMessage,
  getWhatsAppHref,
  PHONE_TEL,
} from "@/lib/contact";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";
import { useLeadFormModal } from "@/components/LeadFormModalContext";
import { UNIT_PRICING } from "@/lib/pricing";

const imgs = {
  apt: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  growth: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  life: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
};

export function HeroSection() {
  const { openLeadModal } = useLeadFormModal();

  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh" />
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 md:grid-cols-2 md:gap-12 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-shine px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold-300"
          >
            North Bangalore • KIADB corridor
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-balance text-3xl leading-tight text-white md:text-4xl lg:text-[2.75rem]"
          >
            North Bangalore&apos;s Fastest Growing Investment Destination
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-balance text-lg text-zinc-300 md:text-xl"
          >
            <span className="block text-white md:inline md:after:content-['—'] md:after:mx-2">
              {BRAND.project} by Bhartiya City
            </span>{" "}
            <span className="block text-zinc-300 md:inline">
              {BRAND.tagline}
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-2 text-sm text-zinc-500"
          >
            {BRAND.locationLine}
          </motion.p>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
            {UNIT_PRICING.map((row) => (
              <div
                key={row.type}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >
                <p className="text-[11px] uppercase tracking-wider text-zinc-500">
                  {row.type}
                </p>
                <p className="mt-1 font-display text-sm text-gold-300 md:text-base">
                  {row.heroPrice}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-zinc-500">
            *Indicative starting prices mentioned by the developer / channel
            partner at the time of publishing; subject to availability, floor,
            facing, and taxes. Not an offer or commitment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#site-visit"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-gold-500/25 transition hover:from-gold-400 hover:to-gold-500"
            >
              Book free site visit
            </a>
            <button
              type="button"
              onClick={() => openLeadModal("hero_brochure")}
              className="inline-flex items-center justify-center rounded-xl border border-gold-500/40 bg-transparent px-6 py-3 text-sm font-semibold text-gold-200 transition hover:bg-white/5"
            >
              Download brochure
            </button>
            <button
              type="button"
              onClick={() => openLeadModal("hero_popup")}
              className="inline-flex items-center justify-center rounded-xl bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10 hover:ring-gold-500/30"
            >
              Open enquiry form
            </button>
            <a
              href={getWhatsAppHref(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero")}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/40 hover:text-emerald-300"
            >
              WhatsApp now
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackCallClick("hero")}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30"
            >
              Call now
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-2 md:gap-3">
            {[imgs.apt, imgs.growth, imgs.life].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width:768px) 33vw, 400px"
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
              </motion.div>
            ))}
          </div>
          <p className="mt-3 text-center text-[10px] text-zinc-600 md:text-left">
            Imagery for illustration — actual finishes &amp; views may vary.
          </p>
        </div>

        <div className="md:sticky md:top-28 md:self-start">
          <LeadForm id="lead-form" variant="card" source="hero_sticky" />
          <p className="mt-4 text-center text-xs text-zinc-500">
            Prefer email?{" "}
            <Link
              href={`mailto:${BRAND.email}`}
              className="text-gold-400 underline-offset-2 hover:underline"
            >
              {BRAND.email}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
