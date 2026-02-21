import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";

const people = siteData.nextFilm.voices;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function PeopleGrid() {
  return (
    <section id={sectionIds.voices} data-section={sectionIds.voices} className="py-16 sm:py-24 bg-[#1a1a1a] scroll-mt-24">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Featured Voices
        </h2>
        <p className="text-[#b2b2b2] max-w-xl mb-12">
          The people behind the story.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {people.map((person) => (
            <article
              key={person.name}
              className="p-4 sm:p-6 rounded-lg bg-[#050505] border border-white/10 text-center"
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-lg sm:text-xl font-semibold text-[#b2b2b2]"
                aria-hidden
              >
                {getInitials(person.name)}
              </div>
              <h3 className="text-sm font-semibold text-white">{person.name}</h3>
              <p className="text-xs text-[#b2b2b2] mt-1">{person.role}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
