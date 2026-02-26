"use client";

import { Container } from "@/app/components/Container";
import { sectionIds, siteData } from "@/lib/site-data";

const archive = siteData.archive;

export default function ArchiveTeaser() {
  return (
    <section
      id={sectionIds.archive}
      data-section={sectionIds.archive}
      className="flow-section phase-shift bg-(--tone-base) border-b border-(--tone-border) scroll-mt-24"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.14em] text-(--tone-muted)">
            Archive
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-(--tone-text)">
            {archive.heading}
          </h2>
          <p className="mt-4 text-(--tone-muted) leading-relaxed">
            {archive.lead}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {archive.evidenceLabels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-(--tone-border) bg-(--tone-surface) px-3 py-1 text-[11px] uppercase tracking-wide text-(--tone-muted)"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-(--tone-border) bg-(--tone-surface) p-8 text-center">
          <p className="text-sm uppercase tracking-[0.12em] text-(--tone-muted)">
            Case files preview
          </p>
          <p className="mt-2 text-(--tone-muted)">
            Full archive interface is coming soon.
          </p>
          <div className="mt-6">
            <a
              href={archive.ctaHref}
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-(--tone-border) text-(--tone-text) rounded hover:bg-(--tone-surface-2) transition-colors"
            >
              {archive.ctaLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export const ArchiveTeaserSection = ArchiveTeaser;
