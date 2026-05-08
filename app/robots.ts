import type { MetadataRoute } from "next";
import { DEFAULT_SITE_URL } from "@/lib/constants";

function baseUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(
    /\/+$/,
    "",
  );
}

export default function robots(): MetadataRoute.Robots {
  const base = baseUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
