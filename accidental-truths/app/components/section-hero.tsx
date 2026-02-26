import Image from "next/image";
import { sectionIds, siteData } from "../../lib/site-data";
import { assets } from "../../lib/assets";

const d = siteData.nextFilm;

export function SectionHero() {
  return (
    <section
      id={sectionIds.top}
      data-section={sectionIds.top}
      className="flow-section relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 overflow-hidden scroll-mt-0 border-b border-[var(--tone-border)]"
    >
      {/* Background: local hero image + dark overlay */}
      <div className="absolute inset-0 bg-[var(--tone-base)]">
        <div className="absolute inset-0">
          <Image
            src={assets.next.heroBg}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 bg-linear-to-b from-[#06090d]/35 via-[#06090d]/68 to-[#06090d]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--tone-muted)] mb-4">
            {d.heroKicker}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--tone-text)] sm:text-5xl md:text-6xl">
            {d.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--tone-muted)] sm:text-xl">
            {d.hook}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`#${sectionIds.trailer}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[var(--tone-accent)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#031218] transition-colors hover:bg-[#54b9cc]"
            >
              {d.heroPrimaryCtaLabel}
            </a>
            <a
              href={`#${sectionIds.merch}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[var(--tone-border)] bg-[var(--tone-surface)]/60 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--tone-text)] transition-colors hover:bg-[var(--tone-surface-2)]"
            >
              {d.heroSecondaryCtaLabel}
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center rounded-full border border-[var(--tone-border)] bg-[var(--tone-surface)]/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--tone-muted)]">
              {d.release}
            </span>
            <span className="inline-flex items-center rounded-full border border-[var(--tone-border)] bg-[var(--tone-surface)]/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--tone-muted)]">
              {d.platform}
            </span>
            <span className="inline-flex items-center rounded-full border border-[var(--tone-border)] bg-[var(--tone-surface)]/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--tone-muted)]">
              {d.producer}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
