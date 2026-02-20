import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { cast } = mufonUfoRevelations;

export function CastList() {
  return (
    <section id="cast" className="py-12 sm:py-16 bg-[#050505] scroll-mt-24">
      <Container>
        <h2 className="text-xl font-semibold text-white mb-6">Cast</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cast.map((name) => (
            <li
              key={name}
              className="py-3 px-4 rounded-lg bg-[#1a1a1a] border border-white/10 text-white text-sm"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
