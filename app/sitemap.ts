import type { MetadataRoute } from "next";
import { DEFAULT_SITE_URL } from "@/lib/constants";

function baseUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(
    /\/+$/,
    "",
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = baseUrl();
  const lastModified = new Date();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
