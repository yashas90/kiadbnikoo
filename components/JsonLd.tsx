import { BRAND, DEFAULT_SITE_URL } from "@/lib/constants";
import { faqItems } from "@/lib/faq-data";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: BRAND.company,
    description:
      "Independent marketing enquiries for Bhartiya City Nikoo Homes 9, North Bangalore.",
    url: process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL,
    telephone: BRAND.phoneTel,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "KA",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Place",
      name: "North Bangalore, Karnataka",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
