import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { moreLikeThis } = mufonUfoRevelations;

export function MoreLikeThis() {
  return (
    <section id="more-like-this" className="py-12 sm:py-16 bg-[#1a1a1a] scroll-mt-24">
      <Container>
        <h2 className="text-xl font-semibold text-white mb-8">More Like This</h2>
        <ul className="space-y-4">
          {moreLikeThis.map((item) => (
            <li key={item.title}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-wrap items-baseline gap-3 py-3 px-4 rounded-lg bg-[#050505] border border-white/10 hover:border-white/20 transition-colors group"
              >
                <span className="text-white group-hover:text-[#e65c01] transition-colors">
                  {item.title}
                </span>
                <span className="text-sm text-[#b2b2b2]">{item.duration}</span>
                <span className="text-xs text-[#b2b2b2] uppercase tracking-wider">
                  {item.category}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
