"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";

export function TrustSection() {
  return (
    <section id="trust" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Trust &amp; compliance
          </h2>
          <p className="mt-3 text-zinc-400">
            Transparency for paid traffic — read before you submit an enquiry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-ink-850/50 p-6 md:p-10"
        >
          <div>
            <h3 className="font-display text-lg text-gold-200">RERA disclaimer</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {BRAND.reraPlaceholder} Please verify project registration number,
              promoter details, and sanctioned plans on the official RERA portal
              before any payment.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold-200">
              Advertiser disclosure
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              This website is operated by{" "}
              <span className="text-zinc-200">{BRAND.company}</span> as an
              independent lead-generation and advisory marketing channel. We are not
              the developer&apos;s official website. PropNinja may receive marketing
              fees or brokerage as per applicable agreements — ask your advisor for
              details relevant to your transaction.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold-200">Important notice</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              This is an independent marketing website operated by{" "}
              {BRAND.company} for lead generation purposes. The project
              information provided here is for informational purposes only and
              subject to change. Offers, inventory, pricing, and specifications must
              be confirmed with official documentation and on site.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link
                href="/privacy"
                className="text-gold-400 underline-offset-2 hover:underline"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gold-400 underline-offset-2 hover:underline"
              >
                Terms &amp; conditions
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
