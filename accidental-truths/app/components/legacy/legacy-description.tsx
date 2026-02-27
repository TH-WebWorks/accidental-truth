import { siteData } from "../../../lib/site-data";
import {
  FilmDescriptionProseCard,
  FilmDescriptionSection,
  FilmDescriptionSplitLayout,
} from "../film/FilmDescriptionSection";

const legacy = siteData.originalFilm;
const { descriptionParagraphs, crew, crewLabels } = legacy;

export function LegacyDescription() {
  return (
    <div className="legacy-casefile__subsection scroll-mt-24">
      <FilmDescriptionSection title={legacy.descriptionHeading} variant="legacy">
        <FilmDescriptionSplitLayout
          left={
            <FilmDescriptionProseCard>
              {descriptionParagraphs.map((paragraph, idx) => (
                <p key={idx} className="film-copy-section__paragraph">
                  {paragraph}
                </p>
              ))}
            </FilmDescriptionProseCard>
          }
          right={
            <aside className="rounded-xl border border-[var(--tone-border)] bg-[var(--tone-surface)] p-6 sm:p-8">
              <div className="mb-5">
                <h3 className="text-base font-semibold text-[var(--tone-text)]">{legacy.crewHeading}</h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <article className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-4">
                  <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                    {crewLabels.writtenDirectedProducedEditedBy}
                  </h4>
                  <p className="mt-1 text-[var(--tone-text)]">{crew.writtenDirectedProducedEditedBy}</p>
                </article>

                <article className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-4">
                  <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                    {crewLabels.narratedBy}
                  </h4>
                  <p className="mt-1 text-[var(--tone-text)]">{crew.narratedBy}</p>
                </article>
              </div>

              <div className="mt-5 space-y-3">
                <article className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-4">
                  <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                    {crewLabels.executiveProducers}
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {crew.executiveProducers.map((name) => (
                      <li key={name} className="text-[var(--tone-muted)]">
                        {name}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-4">
                  <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                    {crewLabels.productionCompanies}
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {crew.productionCompanies.map((company) => (
                      <li key={company} className="text-[var(--tone-muted)]">
                        {company}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-4">
                  <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                    {crewLabels.producers}
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {crew.producers.map((producer) => (
                      <li key={producer} className="text-[var(--tone-muted)]">
                        {producer}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </aside>
          }
        />
      </FilmDescriptionSection>
    </div>
  );
}
