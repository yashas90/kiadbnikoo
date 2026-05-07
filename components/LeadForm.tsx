"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { trackLeadSubmit } from "@/lib/analytics";
import { CONFIG_OPTIONS } from "@/lib/pricing";

type LeadFormProps = {
  id?: string;
  variant?: "sticky" | "card" | "compact";
  source?: string;
  onSuccess?: () => void;
  className?: string;
};

const configs = [...CONFIG_OPTIONS];

export function LeadForm({
  id = "lead-form",
  variant = "card",
  source = "main",
  onSuccess,
  className = "",
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const consent = (
      form.elements.namedItem("consent") as HTMLInputElement
    )?.checked;
    if (!consent) {
      setMessage("Please agree to receive communication from PropNinja.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      configuration: (form.elements.namedItem("configuration") as HTMLSelectElement)
        .value,
      consent: true,
      source,
      page: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Submission failed");

      trackLeadSubmit(source);
      setStatus("done");
      const brochureUrl = process.env.NEXT_PUBLIC_BROCHURE_URL;
      setMessage(
        brochureUrl
          ? "Thank you. Use the button below to download the brochure."
          : "Thank you. Our advisor will contact you shortly."
      );
      form.reset();
      onSuccess?.();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us or use WhatsApp.");
    }
  }

  const shell =
    variant === "sticky"
      ? "rounded-2xl border border-white/10 bg-ink-900/95 p-4 shadow-xl backdrop-blur-xl"
      : variant === "compact"
        ? "rounded-2xl border border-white/10 bg-ink-850/80 p-4 backdrop-blur-md"
        : "rounded-2xl border border-gold-500/20 bg-gradient-to-b from-ink-850 to-ink-900 p-6 shadow-2xl shadow-black/40";

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${shell} ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <div>
          <p className="font-display text-lg text-white">Request details</p>
          <p className="text-xs text-zinc-400">
            PropNinja — independent marketing for this project
          </p>
        </div>
        <span className="rounded-full bg-gold-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-gold-400">
          Response within 24 hrs
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="sr-only" htmlFor={`${id}-name`}>
            Full name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Full name"
            className="w-full rounded-xl border border-white/10 bg-ink-950/80 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor={`${id}-phone`}>
            Mobile number
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Mobile number"
            pattern="^[0-9()+\\s-]{10,15}$"
            className="w-full rounded-xl border border-white/10 bg-ink-950/80 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor={`${id}-email`}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            required
            type="email"
            autoComplete="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-ink-950/80 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor={`${id}-config`}>
            Configuration interested
          </label>
          <select
            id={`${id}-config`}
            name="configuration"
            required
            className="w-full rounded-xl border border-white/10 bg-ink-950/80 px-4 py-3 text-sm text-white focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            defaultValue=""
          >
            <option value="" disabled>
              Configuration interested
            </option>
            {configs.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-xs text-zinc-400">
          <input
            name="consent"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-white/20 bg-ink-950 text-gold-500 focus:ring-gold-500/30"
          />
          <span>
            I agree to receive communication from PropNinja regarding this
            enquiry and related real estate updates, as per the{" "}
            <a href="/privacy" className="text-gold-400 underline-offset-2 hover:underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-gold-500/20 transition hover:from-gold-400 hover:to-gold-500 disabled:opacity-60"
        >
          {status === "loading" ? "Submitting…" : "Submit enquiry"}
        </button>

        {status === "done" && process.env.NEXT_PUBLIC_BROCHURE_URL && (
          <a
            href={process.env.NEXT_PUBLIC_BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl border border-gold-500/40 py-3 text-center text-sm font-semibold text-gold-200 transition hover:bg-white/5"
          >
            Download brochure (PDF)
          </a>
        )}

        {message && (
          <p
            className={`text-center text-sm ${
              status === "error" ? "text-red-400" : "text-emerald-400"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </motion.div>
  );
}
