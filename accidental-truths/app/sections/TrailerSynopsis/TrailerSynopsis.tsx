import { TrailerSynopsis } from "@/app/components/trailer-synopsis";
import { sectionIds, siteData } from "@/lib/site-data";

const next = siteData.nextFilm;

export function TrailerSynopsisSection() {
  return (
    <TrailerSynopsis
      id={sectionIds.trailer}
      title={next.trailerHeading}
      trailerUrl={next.trailerUrl}
      bridgeSentence={next.trailerBridge}
      trailerIntro={next.trailerIntro}
      comingSoonLabel={next.trailerStatus}
      placeholderMessage={next.trailerPlaceholder}
    />
  );
}
