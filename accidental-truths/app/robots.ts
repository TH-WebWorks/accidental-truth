import type { MetadataRoute } from "next";
import { getMetadataBase } from "@/lib/metadata";

const isProduction =
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith("https://");

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }
  const base = getMetadataBase();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base.origin}/sitemap.xml`,
  };
}
