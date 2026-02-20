import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const block = mufonUfoRevelations.dvdBluRayBlock;

export function DvdBlurayPromo() {
  return (
    <section id="dvd-bluray" className="py-12 sm:py-16 bg-[#050505] scroll-mt-24">
      <Container>
        <div className="p-6 sm:p-8 rounded-lg bg-[#1a1a1a] border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">
            {block.title}
          </h2>
          {block.paragraphs.map((p, i) => (
            <p key={i} className="text-[#b2b2b2] leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mt-6 mb-2">
            Bonus features
          </h3>
          <ul className="list-disc list-inside text-[#b2b2b2] space-y-1 mb-6">
            {block.bonusFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="text-white font-medium mb-6">{block.pricingText}</p>
          <a
            href={block.productUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide bg-[#e65c01] text-white rounded hover:bg-[#e65c01]/90 transition-colors"
          >
            {block.addToCartLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
