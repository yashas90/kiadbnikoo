import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-xl text-white">
            Prop<span className="text-gold-400">Ninja</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            {BRAND.company}
            <br />
            {BRAND.address}
          </p>
        </div>
        <div className="text-sm text-zinc-400">
          <p className="font-medium text-white">Contact</p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-2 block hover:text-gold-300"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${BRAND.email}`}
            className="mt-1 block hover:text-gold-300"
          >
            {BRAND.email}
          </a>
        </div>
        <div className="text-sm">
          <p className="font-medium text-white">Legal</p>
          <Link
            href="/privacy"
            className="mt-2 block text-zinc-400 hover:text-gold-300"
          >
            Privacy policy
          </Link>
          <Link
            href="/terms"
            className="mt-2 block text-zinc-400 hover:text-gold-300"
          >
            Terms &amp; conditions
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-xs text-zinc-600 md:px-6">
        © {year} {BRAND.company}. All rights reserved. Project visuals &amp; maps
        for representation.
      </p>
    </footer>
  );
}
