import type { ComponentType } from "react";
import {
  sectionIds,
  homepageSectionDataKeys,
  type HomepageSectionDataKey,
  type SectionId,
} from "@/lib/site-data";
import { HeroSection } from "@/app/sections/Hero";
import { InfoStripSection } from "@/app/sections/InfoStrip";
import { FeatureCardsSection } from "@/app/sections/FeatureCards";
import { TrailerSynopsisSection } from "@/app/sections/TrailerSynopsis";
import { PeopleGridSection } from "@/app/sections/PeopleGrid";
import { QuotesGridSection } from "@/app/sections/QuotesGrid";
import { ShopifyEmbedSection } from "@/app/sections/ShopifyEmbed";
import { SectionDividerSection } from "@/app/sections/SectionDivider";
import { AboutSectionBlock } from "@/app/sections/AboutSection";
import { SiteFooterSection } from "@/app/sections/SiteFooter";

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
    id: sectionIds.info,
    label: "Info",
    component: InfoStripSection,
    dataKey: homepageSectionDataKeys.infoStrip,
  },
  {
    id: sectionIds.why,
    label: "Why",
    component: FeatureCardsSection,
    dataKey: homepageSectionDataKeys.why,
  },
  {
    id: sectionIds.trailer,
    label: "Trailer",
    component: TrailerSynopsisSection,
    dataKey: homepageSectionDataKeys.trailer,
  },
  {
    id: sectionIds.voices,
    label: "Voices",
    component: PeopleGridSection,
    dataKey: homepageSectionDataKeys.voices,
  },
  {
    id: sectionIds.quotes,
    label: "Quotes",
    component: QuotesGridSection,
    dataKey: homepageSectionDataKeys.quotes,
  },
  {
    id: sectionIds.merch,
    label: "Merch",
    component: ShopifyEmbedSection,
    dataKey: homepageSectionDataKeys.merch,
  },
  {
    id: sectionIds.original,
    label: "Original",
    component: SectionDividerSection,
    dataKey: homepageSectionDataKeys.originalDivider,
  },
  {
    id: sectionIds.about,
    label: "About",
    component: AboutSectionBlock,
    dataKey: homepageSectionDataKeys.about,
  },
  {
    id: sectionIds.footer,
    label: "Footer",
    component: SiteFooterSection,
    dataKey: homepageSectionDataKeys.footer,
  },
] as const;
