import { SiteHeader } from "./components/site-header";
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
import { sectionRegistry } from "../lib/sections/section-registry";
import { sectionIds } from "../lib/site-data";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#050505] text-white">
        {sectionRegistry.map((entry) => {
          const SectionComponent = entry.component;

          return (
            <div key={entry.id}>
              <SectionComponent />
              {entry.id === sectionIds.original && (
                <>
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
                </>
              )}
            </div>
          );
        })}
      </main>
    </>
  );
}
