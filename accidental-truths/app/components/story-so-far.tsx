"use client";

import { useState } from "react";
import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";
import {
  FilmDescriptionPill,
  FilmDescriptionProseCard,
  FilmDescriptionSection,
  FilmDescriptionSplitLayout,
} from "./film/FilmDescriptionSection";

const nextFilm = siteData.nextFilm;
const story = nextFilm.storySoFar;
const credits = nextFilm.credits;

type AccordionKey = "featuring" | "executiveProducers" | "producers";
type CreditGroup = {
  key: AccordionKey;
  label: string;
};

const creditGroups: CreditGroup[] = [
  { key: "featuring", label: "Featuring" },
  { key: "executiveProducers", label: "Executive Producers" },
  { key: "producers", label: "Producers" },
];

export function StorySoFar() {
  const [openGroups, setOpenGroups] = useState<Record<AccordionKey, boolean>>({
    featuring: false,
    executiveProducers: false,
    producers: false,
  });

  const toggleGroup = (group: AccordionKey) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  return (
    <section
      id={sectionIds.story}
      data-section={sectionIds.story}
      className="flow-section phase-shift-soft bg-[var(--tone-base)] scroll-mt-24 !pt-8 sm:!pt-10 md:!pt-12 !pb-0"
    >
      <Container>
        <FilmDescriptionSection
          eyebrow={nextFilm.storySubheading}
          title={nextFilm.storyHeading}
          intro="A focused overview of the NEXT film narrative and the voices behind it."
          pillLabel={nextFilm.storyQuote}
          compactBottom
        >
          {({ pillLabel }) => (
            <FilmDescriptionSplitLayout
              left={
                <>
                  <FilmDescriptionProseCard>
                    {story.map((paragraph, idx) =>
                      paragraph === nextFilm.storyQuote ? (
                        <FilmDescriptionPill key={idx} label={pillLabel} />
                      ) : (
                        <p key={idx} className="film-copy-section__paragraph">
                          {paragraph}
                        </p>
                      )
                    )}
                  </FilmDescriptionProseCard>

                  <article className="rounded-xl border border-[var(--tone-border)] bg-[var(--tone-surface)] p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                      Film Snapshot
                    </h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-3">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                          Release
                        </p>
                        <p className="mt-1 text-sm text-[var(--tone-text)]">{nextFilm.release}</p>
                      </div>
                      <div className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-3">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                          Runtime
                        </p>
                        <p className="mt-1 text-sm text-[var(--tone-text)]">{nextFilm.runtime}</p>
                      </div>
                      <div className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-3">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                          Platform
                        </p>
                        <p className="mt-1 text-sm text-[var(--tone-text)]">{nextFilm.platform}</p>
                      </div>
                    </div>
                  </article>
                </>
              }
              right={
                <aside className="rounded-xl border border-[var(--tone-border)] bg-[var(--tone-surface)] p-6 sm:p-8">
                  <div className="mb-5">
                    <h3 className="text-base font-semibold text-[var(--tone-text)]">Credits & Contributors</h3>
                    <p className="mt-2 text-sm text-[var(--tone-muted)]">
                      Principal credits plus full contributor lists.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-4">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                        Written, Directed, Produced By
                      </p>
                      <p className="mt-1 text-[var(--tone-text)]">{credits.writtenDirectedProducedBy}</p>
                    </div>

                    <div className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-4">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                        Narrated By
                      </p>
                      <p className="mt-1 text-[var(--tone-text)]">{credits.narratedBy}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {creditGroups.map((group) => {
                      const isOpen = openGroups[group.key];
                      const items = credits[group.key];

                      return (
                        <section key={group.key} className="rounded-lg border border-[var(--tone-border)] bg-white/5 p-4">
                          <button
                            type="button"
                            onClick={() => toggleGroup(group.key)}
                            className="flex w-full items-center justify-between gap-3 text-left"
                            aria-expanded={isOpen}
                            aria-controls={`credits-list-${group.key}`}
                          >
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                                {group.label}
                              </h4>
                              <span className="rounded-full border border-[var(--tone-border)] px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[var(--tone-muted)]">
                                {items.length}
                              </span>
                            </div>
                            <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--tone-muted)]">
                              {isOpen ? "Hide" : "Show"}
                              <span
                                className={`inline-flex transition-transform duration-200 ${
                                  isOpen ? "rotate-180" : "rotate-0"
                                }`}
                                aria-hidden
                              >
                                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                                  <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 0 1 1.1 1.02l-4.25 4.52a.75.75 0 0 1-1.1 0L5.21 8.25a.75.75 0 0 1 .02-1.04Z" />
                                </svg>
                              </span>
                            </span>
                          </button>

                          {isOpen && (
                            <div id={`credits-list-${group.key}`} className="mt-3">
                              {group.key === "featuring" ? (
                                <ul className="grid gap-x-5 gap-y-2 sm:grid-cols-2">
                                  {items.map((name) => (
                                    <li key={name} className="text-[var(--tone-muted)]">
                                      {name}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <ul className="space-y-1.5">
                                  {items.map((name) => (
                                    <li key={name} className="text-[var(--tone-muted)]">
                                      {name}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </section>
                      );
                    })}
                  </div>
                </aside>
              }
            />
          )}
        </FilmDescriptionSection>
      </Container>
    </section>
  );
}
