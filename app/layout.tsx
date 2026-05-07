import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { AppProviders } from "@/components/AppProviders";
import { JsonLd } from "@/components/JsonLd";
import { BRAND, DEFAULT_SITE_URL } from "@/lib/constants";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0b0f",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${BRAND.project} | Premium Apartments Near KIADB | PropNinja`,
  description: `${BRAND.project} — ${BRAND.tagline}. ${BRAND.locationLine}. Independent enquiry page by ${BRAND.company}. Request pricing & site visit.`,
  keywords: [
    "Nikoo Homes 9",
    "Bhartiya City",
    "KIADB Aerospace Park",
    "North Bangalore apartments",
    "Thanisandra",
    "PropNinja",
  ],
  openGraph: {
    title: `${BRAND.project} — North Bangalore`,
    description: `${BRAND.tagline}. ${BRAND.locationLine}.`,
    url: siteUrl,
    siteName: "PropNinja",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Premium apartments — illustrative imagery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.project} | PropNinja`,
    description: `${BRAND.tagline}. ${BRAND.locationLine}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-ink-950 pb-20 font-sans md:pb-0">
        <AnalyticsScripts />
        <JsonLd />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
