import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { swagBlock } = mufonUfoRevelations;

export function SwagCallout() {
  return (
    <section id="swag" className="py-12 sm:py-16 bg-[#1a1a1a] scroll-mt-24">
      <Container>
        <h2 className="text-xl font-semibold text-white mb-6">Get the SWAG!</h2>
        <div className="max-w-3xl space-y-6">
          {swagBlock.paragraphs.map((p, i) => (
            <p key={i} className="text-[#b2b2b2] leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
