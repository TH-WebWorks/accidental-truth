import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";

const archive = siteData.archive;

export function ArchiveTeaser() {
  return (
    <section
      id={sectionIds.archive}
      data-section={sectionIds.archive}
      className="flow-section phase-shift bg-[var(--tone-base)] border-b border-[var(--tone-border)] scroll-mt-24"
    >
      <Container>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--tone-muted)]">
            Archive Intake Interface
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--tone-text)]">
            {archive.heading}
          </h2>
          <p className="text-[var(--tone-muted)] max-w-3xl">{archive.lead}</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-10 items-start">
          <div className="border border-[var(--tone-border)] rounded-lg p-5 sm:p-6 bg-[var(--tone-surface)]">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--tone-muted)] mb-4">
              Evidence Index Grid
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {archive.evidenceLabels.map((label) => (
                <article
                  key={label}
                  className="border border-[var(--tone-border)] rounded-md p-4 bg-[var(--tone-surface-2)]"
                >
                  <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--tone-muted)] mb-2">
                    Classified Record
                  </p>
                  <div className="aspect-video border border-dashed border-[var(--tone-accent-soft)] rounded mb-3 flex items-center justify-center text-[11px] uppercase tracking-[0.08em] text-[var(--tone-muted)]">
                    Evidence Thumb
                  </div>
                  <p className="text-xs leading-relaxed text-[var(--tone-muted)]">{label}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="border border-[var(--tone-border)] rounded-lg p-6 sm:p-7 space-y-4 bg-[var(--tone-surface)]">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--tone-muted)]">
              Case Files
            </p>
            <ul className="space-y-2 text-sm text-[var(--tone-muted)]">
              <li>Witness Statements</li>
              <li>Timeline Reconstruction</li>
              <li>Flight & Sensor Logs</li>
              <li>Classified Leads</li>
            </ul>
            <a
              href={archive.ctaHref}
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-[var(--tone-accent)] text-[var(--tone-text)] rounded hover:bg-[var(--tone-surface-2)] transition-colors"
            >
              {archive.ctaLabel}
            </a>
          </aside>
        </div>
      </Container>
    </section>
  );
}
