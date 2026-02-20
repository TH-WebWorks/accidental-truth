import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const block = mufonUfoRevelations.imminentBookBlock;

export function ImminentBookCallout() {
  return (
    <section className="py-12 sm:py-16 bg-[#050505] scroll-mt-24">
      <Container>
        <div className="p-6 sm:p-8 rounded-lg border-l-4 border-[#e65c01] bg-[#1a1a1a]/80">
          <p className="text-white leading-relaxed">{block.quote}</p>
          <p className="mt-4 text-[#b2b2b2] italic">{block.credit}</p>
          <p className="mt-4 text-white font-medium">{block.congrats}</p>
          <p className="mt-2 text-[#b2b2b2]">{block.ctaLine}</p>
          <a
            href={block.signedCopyUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide bg-[#e65c01] text-white rounded hover:bg-[#e65c01]/90 transition-colors"
          >
            {block.ctaButton}
          </a>
        </div>
      </Container>
    </section>
  );
}
