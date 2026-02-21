import { TrailerSynopsis } from "@/app/components/trailer-synopsis";
import { sectionIds, siteData } from "@/lib/site-data";

const next = siteData.nextFilm;

export function TrailerSynopsisSection() {
  return (
    <TrailerSynopsis
      id={sectionIds.trailer}
      title="Trailer & Synopsis"
      trailerUrl={next.trailerUrl}
      synopsis={next.synopsis}
      ctaPrimary={{ label: "Watch / Buy", href: next.watchUrl }}
      ctaSecondary={{ label: "Featured Voices", href: `#${sectionIds.voices}` }}
    />
  );
}
