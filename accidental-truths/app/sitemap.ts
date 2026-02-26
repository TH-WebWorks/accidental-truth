import type { MetadataRoute } from "next";
import { getMetadataBase } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getMetadataBase();
  return [
    {
      url: base.origin + "/",
      lastModified: new Date(),
    },
  ];
}
