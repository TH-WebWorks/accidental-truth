import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { crew } = mufonUfoRevelations;

export function CrewList() {
  return (
    <div id="crew" className="legacy-casefile__subsection scroll-mt-24">
      <div className="legacy-casefile__subsectionHead">
        <h3 className="legacy-casefile__subsectionTitle">Crew</h3>
      </div>
      <div className="legacy-casefile__crewGrid">
        <article className="legacy-casefile__card">
          <h4 className="legacy-casefile__microHeading">Written, Directed, Produced and Edited by</h4>
          <p className="text-(--tone-text)">{crew.writtenDirectedProducedEditedBy}</p>
        </article>
        <article className="legacy-casefile__card">
          <h4 className="legacy-casefile__microHeading">Narrated By</h4>
          <p className="text-(--tone-text)">{crew.narratedBy}</p>
        </article>
        <article className="legacy-casefile__card">
          <h4 className="legacy-casefile__microHeading">Executive Producers</h4>
          <p className="text-(--tone-text)">{crew.executiveProducers.join(", ")}</p>
        </article>
        <article className="legacy-casefile__card">
          <h4 className="legacy-casefile__microHeading">Production Companies</h4>
          <p className="text-(--tone-text)">{crew.productionCompanies.join(", ")}</p>
        </article>
        <article className="legacy-casefile__card md:col-span-2">
          <h4 className="legacy-casefile__microHeading">Producers</h4>
          <p className="text-(--tone-text)">{crew.producers.join(", ")}</p>
        </article>
      </div>
    </div>
  );
}
