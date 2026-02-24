import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";
import { mufonUfoRevelations } from "../../lib/mufon-ufo-revelations";

const feature = siteData.originalFilm.secondaryFeature;
const legacy = mufonUfoRevelations;

export function SecondaryFilmFeature() {
  return (
    <section
      id={sectionIds.original}
      data-section={sectionIds.original}
      className="flow-section phase-shift bg-[var(--tone-base)] border-b border-[var(--tone-border)] scroll-mt-24"
    >
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          <aside className="border border-[var(--tone-border)] rounded-lg p-6 sm:p-8 space-y-4 bg-[var(--tone-surface)]">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--tone-muted)]">
              Legacy
            </p>
            <h2 className="text-xl sm:text-2xl font-medium text-[var(--legacy-heading)]">{feature.title}</h2>
            <p className="text-[var(--tone-muted)] leading-relaxed">{feature.summary}</p>
            <div className="space-y-1 text-xs uppercase tracking-[0.08em] text-[var(--tone-muted)]">
              <p>Runtime: {legacy.metadata.runtime}</p>
              <p>Release: {legacy.metadata.releaseYear}</p>
              <p>Genre: {legacy.metadata.genre}</p>
            </div>
            <a
              href={feature.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-[var(--tone-border)] text-[var(--tone-text)] rounded hover:bg-[var(--tone-surface-2)] transition-colors"
            >
              {feature.ctaLabel}
            </a>
          </aside>

          <article className="border border-[var(--tone-border)] rounded-lg p-6 sm:p-8 bg-[var(--tone-surface)]">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--tone-muted)] mb-4">
              Franchise Continuity
            </p>
            <div className="space-y-2 mb-5">
              <p className="text-[var(--tone-muted)] leading-relaxed">Key Witness: Luis Elizondo</p>
              <p className="text-[var(--tone-muted)] leading-relaxed">Narration: Matthew Modine</p>
              <p className="text-[var(--tone-muted)] leading-relaxed">Recognition: 28 festival awards</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-[var(--tone-border)] rounded-md p-4 bg-[var(--tone-surface-2)]">
                <p className="text-xs uppercase tracking-widest text-[var(--tone-muted)] mb-2">
                  Original Impact
                </p>
                <p className="text-sm text-[var(--tone-muted)] leading-relaxed">
                  Congressional visibility and 20+ festival recognitions established
                  audience trust for the NEXT chapter.
                </p>
              </div>
              <div className="border border-[var(--tone-border)] rounded-md p-4 bg-[var(--tone-surface-2)]">
                <p className="text-xs uppercase tracking-widest text-[var(--tone-muted)] mb-2">
                  Legacy Entry Point
                </p>
                <p className="text-sm text-[var(--tone-muted)] leading-relaxed">
                  New visitors can start with UFO Revelations before moving into current
                  disclosure developments in NEXT.
                </p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
