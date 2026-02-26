"use client";

import { useState } from "react";
import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";

const nextFilm = siteData.nextFilm;
const story = nextFilm.storySoFar;
const credits = nextFilm.credits;

type AccordionKey = "featuring" | "executiveProducers" | "producers";

export function StorySoFar() {
  const [openGroups, setOpenGroups] = useState<Record<AccordionKey, boolean>>({
    featuring: true,
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
      className="flow-section phase-shift-soft bg-[var(--tone-base)] border-b border-[var(--tone-border)] scroll-mt-24"
    >
      <Container>
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-14 items-start">
          <article className="border border-[var(--tone-border)] rounded-lg p-6 sm:p-8 bg-[var(--tone-surface)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--tone-text)] mb-6">
              {nextFilm.storyHeading}
            </h2>
            <div className="space-y-4">
              {story.map((paragraph, idx) =>
                paragraph === "What’s NEXT?" ? (
                  <p
                    key={idx}
                    className="text-lg sm:text-xl font-semibold text-[var(--tone-text)]"
                  >
                    {paragraph}
                  </p>
                ) : (
                  <p key={idx} className="text-[var(--tone-muted)] leading-relaxed">
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </article>

          <aside className="border border-[var(--tone-border)] rounded-lg p-6 sm:p-8 space-y-6 bg-[var(--tone-surface)]">
            <div>
              <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--tone-muted)] mb-2">
                Written, directed, and produced by
              </h3>
              <p className="text-[var(--tone-text)]">{credits.writtenDirectedProducedBy}</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--tone-muted)] mb-2">
                Narrated by
              </h3>
              <p className="text-[var(--tone-text)]">{credits.narratedBy}</p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => toggleGroup("featuring")}
                className="w-full flex items-center justify-between gap-3 text-left"
                aria-expanded={openGroups.featuring}
              >
                <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                  Featuring
                </h3>
                <span
                  className={`inline-flex text-[var(--tone-muted)] transition-transform duration-200 ${
                    openGroups.featuring ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 0 1 1.1 1.02l-4.25 4.52a.75.75 0 0 1-1.1 0L5.21 8.25a.75.75 0 0 1 .02-1.04Z" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openGroups.featuring ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-70 mt-2"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {credits.featuring.map((name) => (
                      <li key={name} className="text-[var(--tone-muted)] leading-relaxed">
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => toggleGroup("executiveProducers")}
                className="w-full flex items-center justify-between gap-3 text-left"
                aria-expanded={openGroups.executiveProducers}
              >
                <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                  Executive Producers
                </h3>
                <span
                  className={`inline-flex text-[var(--tone-muted)] transition-transform duration-200 ${
                    openGroups.executiveProducers ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 0 1 1.1 1.02l-4.25 4.52a.75.75 0 0 1-1.1 0L5.21 8.25a.75.75 0 0 1 .02-1.04Z" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openGroups.executiveProducers
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-70 mt-2"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[var(--tone-muted)] leading-relaxed">
                    {credits.executiveProducers.join("; ")}.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => toggleGroup("producers")}
                className="w-full flex items-center justify-between gap-3 text-left"
                aria-expanded={openGroups.producers}
              >
                <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                  Producers
                </h3>
                <span
                  className={`inline-flex text-[var(--tone-muted)] transition-transform duration-200 ${
                    openGroups.producers ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 0 1 1.1 1.02l-4.25 4.52a.75.75 0 0 1-1.1 0L5.21 8.25a.75.75 0 0 1 .02-1.04Z" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openGroups.producers ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-70 mt-2"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[var(--tone-muted)] leading-relaxed">
                    {credits.producers.join("; ")}.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
