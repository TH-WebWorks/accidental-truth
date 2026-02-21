import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";

const quotes = siteData.nextFilm.quotes;

export function QuotesGrid() {
  return (
    <section id={sectionIds.quotes} data-section={sectionIds.quotes} className="py-16 sm:py-24 bg-[#050505] scroll-mt-24">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Press &amp; Recognition
        </h2>
        <p className="text-[#b2b2b2] max-w-xl mb-12">
          What critics and audiences are saying.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <blockquote
              key={i}
              className="p-6 rounded-lg bg-[#1a1a1a] border border-white/10"
            >
              <p className="text-white leading-relaxed mb-4">&ldquo;{q.quote}&rdquo;</p>
              <footer className="text-sm text-[#b2b2b2] font-medium uppercase tracking-wider">
                — {q.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
