"use client";

import { Container } from "@/app/components/Container";
import ArchiveTeaserAiStudio from "./design/ai-studio/ArchiveTeaser/src/App";

export default function ArchiveTeaser() {
  return (
    <section
      id="archive"
      data-section="archive"
      className="flow-section phase-shift bg-(--tone-base) border-b border-(--tone-border) scroll-mt-24"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.14em] text-(--tone-muted)">
            Classified Evidence Archive
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-(--tone-text)">
            Explore the Evidence Index
          </h2>
          <p className="mt-4 text-(--tone-muted) leading-relaxed">
            Step into the working archive behind the disclosure story. Review witness statements,
            timeline records, and linked case files in one investigative interface.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <span className="rounded-full border border-(--tone-border) bg-(--tone-surface) px-3 py-1 text-[11px] uppercase tracking-wide text-(--tone-muted)">
              Indexed Files: 8
            </span>
            <span className="rounded-full border border-(--tone-border) bg-(--tone-surface) px-3 py-1 text-[11px] uppercase tracking-wide text-(--tone-muted)">
              Last Update: 2024.11.02
            </span>
            <span className="rounded-full border border-(--tone-border) bg-(--tone-surface) px-3 py-1 text-[11px] uppercase tracking-wide text-(--tone-muted)">
              Access Level: Controlled
            </span>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute -top-8 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[rgba(62,169,191,0.08)]" />
          <div className="rounded-xl border border-(--tone-border) bg-(--tone-base) p-0.5">
            <ArchiveTeaserAiStudio />
          </div>
        </div>
      </Container>
    </section>
  );
}

export const ArchiveTeaserSection = ArchiveTeaser;
