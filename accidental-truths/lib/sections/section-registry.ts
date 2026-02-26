import type { ComponentType } from "react";
import {
  sectionIds,
  homepageSectionDataKeys,
  type HomepageSectionDataKey,
  type SectionId,
} from "@/lib/site-data";
import { HeroSection } from "@/app/sections/Hero";
import { StorySoFarSection } from "@/app/sections/StorySoFar/StorySoFar";
import { TrailerSynopsisSection } from "@/app/sections/TrailerSynopsis";
import { ScreenGrabsSection } from "@/app/sections/ScreenGrabs";
import { SecondaryFilmSection } from "@/app/sections/SecondaryFilm/SecondaryFilm";
import { ShopifyEmbedSection } from "@/app/sections/ShopifyEmbed";

/**
 * How to add a new homepage section:
 * 1) Add or reuse a stable ID in lib/site-data.ts (sectionIds).
 * 2) Add/update a typed data key in lib/site-data.ts (homepageSectionDataKeys).
 * 3) Create a section component folder in app/sections/<SectionName>/.
 * 4) Add a new ordered entry below with id, label, component, and dataKey.
 */
export type HomeSectionEntry = {
  id: SectionId;
  label: string;
  component: ComponentType;
  dataKey: HomepageSectionDataKey;
};

export const sectionRegistry: readonly HomeSectionEntry[] = [
  {
    id: sectionIds.top,
    label: "Top",
    component: HeroSection,
    dataKey: homepageSectionDataKeys.hero,
  },
  {
    id: sectionIds.story,
    label: "Story",
    component: StorySoFarSection,
    dataKey: homepageSectionDataKeys.storySoFar,
  },
  {
    id: sectionIds.trailer,
    label: "Trailer",
    component: TrailerSynopsisSection,
    dataKey: homepageSectionDataKeys.trailer,
  },
  {
    id: sectionIds.gallery,
    label: "Gallery",
    component: ScreenGrabsSection,
    dataKey: homepageSectionDataKeys.gallery,
  },
  {
    id: sectionIds.original,
    label: "Original",
    component: SecondaryFilmSection,
    dataKey: homepageSectionDataKeys.originalFeature,
  },
  {
    id: sectionIds.merch,
    label: "Merch",
    component: ShopifyEmbedSection,
    dataKey: homepageSectionDataKeys.merch,
  },
] as const;
