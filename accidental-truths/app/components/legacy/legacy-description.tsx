import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { descriptionParagraphs } = mufonUfoRevelations;

export function LegacyDescription() {
  return (
    <section className="py-12 sm:py-16 bg-[#1a1a1a] scroll-mt-24">
      <Container>
        <h2 className="text-xl font-semibold text-white mb-6 sr-only">Film description</h2>
        <div className="max-w-3xl space-y-6">
          {descriptionParagraphs.map((p, i) => (
            <p key={i} className="text-[#b2b2b2] leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
