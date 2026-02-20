import { Container } from "./Container";
import { siteData } from "../../lib/site-data";

const cards = siteData.nextFilm.whyCards;

export function FeatureCards() {
  return (
    <section id="why" className="py-16 sm:py-24 bg-[#050505] scroll-mt-24">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Why This Film Matters
        </h2>
        <p className="text-[#b2b2b2] max-w-xl mb-12">
          Three reasons the next chapter of Accidental Truth matters.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="p-6 sm:p-8 rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-sm text-[#b2b2b2] leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
