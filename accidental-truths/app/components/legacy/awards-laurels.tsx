import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { awardsBlock } = mufonUfoRevelations;

export function AwardsLaurels() {
  return (
    <section id="laurels" className="py-12 sm:py-16 bg-[#050505] scroll-mt-24">
      <Container>
        <h2 className="text-xl font-semibold text-white mb-2">Awards</h2>
        <p className="text-sm text-[#b2b2b2] mb-2">{awardsBlock.heading}</p>
        <p className="text-sm text-white font-medium mb-6">{awardsBlock.subheading}</p>
        <p className="text-sm text-[#b2b2b2] mb-4">{awardsBlock.ourLaurels}</p>
        <ul className="space-y-3">
          {awardsBlock.laurels.map((laurel) => {
            const label = `${laurel.name} – ${laurel.result}`;
            const className = "block py-2 px-4 rounded-lg bg-[#1a1a1a] border border-white/10 text-white text-sm hover:border-[#e65c01]/50 transition-colors";
            return (
              <li key={laurel.name}>
                {laurel.href ? (
                  <a href={laurel.href} target="_blank" rel="noreferrer" className={className}>
                    {label}
                  </a>
                ) : (
                  <span className={className}>{label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
