import { TrailerSynopsis } from "@/app/components/trailer-synopsis";
import { sectionIds, siteData } from "@/lib/site-data";

const next = siteData.nextFilm;
const trailerEmbedUrl =
  "https://www.youtube.com/embed/Hw8pmuU_vHA?si=fClJ121R0s3Dm36Z";

export function TrailerSynopsisSection() {
  return (
    <TrailerSynopsis
      id={sectionIds.trailer}
      title="Trailer"
      trailerUrl={trailerEmbedUrl}
      trailerThumbnailUrl={next.trailerThumbnailUrl}
      bridgeSentence={next.trailerBridge}
      ctaPrimary={{ label: "Watch Trailer", href: trailerEmbedUrl }}
      ctaSecondary={{ label: "Explore the Archive", href: `#${sectionIds.archive}` }}
    />
  );
}
