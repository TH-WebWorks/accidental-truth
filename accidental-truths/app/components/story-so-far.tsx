import Link from "next/link";
import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";

const story = siteData.nextFilm.storySoFar;

export function StorySoFar() {
  return (
    <section
      id={sectionIds.story}
      data-section={sectionIds.story}
      className="flow-section phase-shift-soft bg-[var(--tone-base)] border-b border-[var(--tone-border)] scroll-mt-24"
    >
      <Container>
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-14 items-start">
          <article className="border border-[var(--tone-border)] rounded-lg p-6 sm:p-8 bg-[var(--tone-surface)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--tone-text)] mb-6">
              Story
            </h2>
            <p className="text-sm uppercase tracking-[0.12em] text-[var(--tone-muted)] mb-5">
              The Story So Far
            </p>
            <div className="space-y-4">
              {story.map((paragraph, idx) => (
                <p key={idx} className="text-[var(--tone-muted)] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <aside className="border border-[var(--tone-border)] rounded-lg p-6 sm:p-8 space-y-5 bg-[var(--tone-surface)]">
            <blockquote className="border-l-2 border-[var(--tone-accent-soft)] pl-4 text-[var(--tone-muted)]">
              &ldquo;What began as disclosure pressure is now an evidence trail.&rdquo;
            </blockquote>
            <Link
              href={`#${sectionIds.trailer}`}
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-[var(--tone-border)] text-[var(--tone-text)] rounded hover:bg-[var(--tone-surface-2)] transition-colors"
            >
              Continue to Trailer
            </Link>
          </aside>
        </div>
      </Container>
    </section>
  );
}
