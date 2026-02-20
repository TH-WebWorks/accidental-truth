import { SiteHeader } from "./components/site-header";
import { SectionHero } from "./components/section-hero";
import { InfoStrip } from "./components/info-strip";
import { FeatureCards } from "./components/feature-cards";
import { TrailerSynopsis } from "./components/trailer-synopsis";
import { PeopleGrid } from "./components/people-grid";
import { QuotesGrid } from "./components/quotes-grid";
import { ShopifyEmbed } from "./components/shopify-embed";
import { SectionDivider } from "./components/section-divider";
import {
  LegacyHeroUfo,
  WatchLinks,
  ImminentBookCallout,
  LegacyDescription,
  DvdBlurayPromo,
  SwagCallout,
  MerchGrid,
  GalleryGrid,
  CastList,
  CrewList,
  AwardsLaurels,
  HashtagsLine,
  MoreLikeThis,
} from "./components/legacy";
import { AboutSection } from "./components/about-section";
import { SiteFooter } from "./components/site-footer";
import { siteData } from "../lib/site-data";

export default function Home() {
  const next = siteData.nextFilm;

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#050505] text-white">
        {/* 1) Hero: NEW FILM */}
        <SectionHero />

        {/* 2) Quick info strip */}
        <InfoStrip />

        {/* 3) Why This Film Matters */}
        <FeatureCards />

        {/* 4) Trailer + Synopsis (NEXT) */}
        <TrailerSynopsis
          id="trailer-next"
          title="Trailer & Synopsis"
          trailerUrl={next.trailerUrl}
          synopsis={next.synopsis}
          ctaPrimary={{ label: "Watch / Buy", href: next.watchUrl }}
          ctaSecondary={{ label: "Featured Voices", href: "#voices" }}
        />

        {/* 5) Featured Voices / Cast grid */}
        <PeopleGrid />

        {/* 6) Press / Quotes */}
        <QuotesGrid />

        {/* 7) Support the Film / Merch (NEXT) */}
        <ShopifyEmbed />

        {/* 8) Hard divider: The Original Film */}
        <SectionDivider />

        {/* 9) LEGACY: UFO Revelations (full MUFON page content) — #original */}
        <LegacyHeroUfo />
        <WatchLinks />
        <ImminentBookCallout />
        <LegacyDescription />
        <DvdBlurayPromo />
        <SwagCallout />
        <MerchGrid />
        <GalleryGrid />
        <CastList />
        <CrewList />
        <AwardsLaurels />
        <HashtagsLine />
        <MoreLikeThis />

        {/* 10) About the Project */}
        <AboutSection />

        {/* 11) Footer */}
        <SiteFooter />
      </main>
    </>
  );
}
