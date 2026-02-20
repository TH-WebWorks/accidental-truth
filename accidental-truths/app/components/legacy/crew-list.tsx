import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { crew } = mufonUfoRevelations;

export function CrewList() {
  return (
    <section id="crew" className="py-12 sm:py-16 bg-[#1a1a1a] scroll-mt-24">
      <Container>
        <h2 className="text-xl font-semibold text-white mb-6">Crew</h2>
        <div className="max-w-2xl space-y-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#b2b2b2] mb-1">
              Written, Directed, Produced and Edited by:
            </h3>
            <p className="text-white">{crew.writtenDirectedProducedEditedBy}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#b2b2b2] mb-1">
              Narrated By:
            </h3>
            <p className="text-white">{crew.narratedBy}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#b2b2b2] mb-1">
              Executive Producers:
            </h3>
            <p className="text-white">{crew.executiveProducers.join(", ")}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#b2b2b2] mb-1">
              Production Companies:
            </h3>
            <p className="text-white">{crew.productionCompanies.join(", ")}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#b2b2b2] mb-1">
              Producers:
            </h3>
            <p className="text-white">{crew.producers.join(", ")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
