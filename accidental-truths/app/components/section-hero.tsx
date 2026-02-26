import Image from "next/image";
import { sectionIds, siteData } from "../../lib/site-data";
import { assets } from "../../lib/assets";

const d = siteData.nextFilm;

export function SectionHero() {
  return (
    <section
      id={sectionIds.top}
      data-section={sectionIds.top}
      className="flow-section relative overflow-hidden scroll-mt-0 border-b border-[var(--tone-border)] md:min-h-dvh md:flex md:flex-col md:justify-center md:pt-24 lg:pt-28"
    >
      {/* Mobile hero poster: full image visible, no clipping */}
      <div className="relative md:hidden">
        <Image
          src={assets.next.poster}
          alt={d.title}
          priority
          sizes="100vw"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Desktop background hero */}
      <div className="absolute inset-0 hidden bg-[var(--tone-base)] md:block">
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
          className="absolute inset-0 bg-linear-to-b from-[#06090d]/45 via-[#06090d]/72 to-[#06090d]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 md:py-0 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-xl border border-[var(--tone-border)] bg-[var(--tone-surface)]/85 p-5 text-center backdrop-blur-[1px] sm:p-7 md:mx-0 md:max-w-4xl md:border-0 md:bg-transparent md:p-0 md:text-left md:backdrop-blur-0">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--tone-muted)] mb-4">
            {d.heroKicker}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--tone-text)] sm:text-5xl md:text-6xl">
            {d.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--tone-muted)] sm:text-xl">
            {d.hook}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
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
          <div className="mt-7 flex flex-wrap gap-2.5 justify-center md:justify-start">
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
