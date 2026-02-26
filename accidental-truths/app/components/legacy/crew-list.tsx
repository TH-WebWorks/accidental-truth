import { siteData } from "../../../lib/site-data";

const legacy = siteData.originalFilm;
const { crew, crewLabels } = legacy;

export function CrewList() {
  return (
    <div id="crew" className="legacy-casefile__subsection scroll-mt-24">
      <div className="legacy-casefile__subsectionHead">
        <h3 className="legacy-casefile__subsectionTitle">{legacy.crewHeading}</h3>
      </div>
      <div className="legacy-casefile__crewGrid">
        <article className="legacy-casefile__card">
          <h4 className="legacy-casefile__microHeading">{crewLabels.writtenDirectedProducedEditedBy}</h4>
          <p className="text-(--tone-text)">{crew.writtenDirectedProducedEditedBy}</p>
        </article>
        <article className="legacy-casefile__card">
          <h4 className="legacy-casefile__microHeading">{crewLabels.narratedBy}</h4>
          <p className="text-(--tone-text)">{crew.narratedBy}</p>
        </article>
        <article className="legacy-casefile__card">
          <h4 className="legacy-casefile__microHeading">{crewLabels.executiveProducers}</h4>
          <p className="text-(--tone-text)">{crew.executiveProducers.join(", ")}</p>
        </article>
        <article className="legacy-casefile__card">
          <h4 className="legacy-casefile__microHeading">{crewLabels.productionCompanies}</h4>
          <p className="text-(--tone-text)">{crew.productionCompanies.join(", ")}</p>
        </article>
        <article className="legacy-casefile__card md:col-span-2">
          <h4 className="legacy-casefile__microHeading">{crewLabels.producers}</h4>
          <p className="text-(--tone-text)">{crew.producers.join(", ")}</p>
        </article>
      </div>
    </div>
  );
}
