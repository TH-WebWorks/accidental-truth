import Image from "next/image";
import { sectionIds, siteData } from "../../lib/site-data";
import { assets } from "../../lib/assets";

const d = siteData.nextFilm;

export function SectionHero() {
  return (
    <section
      id={sectionIds.top}
      data-section={sectionIds.top}
      className="flow-section relative overflow-hidden scroll-mt-0 border-b border-[var(--tone-border)] md:flex md:flex-col md:justify-center md:pt-20 lg:pt-24 md:min-h-[68vh] !pb-8 sm:!pb-10 md:!pb-12"
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
          className="absolute inset-0 bg-linear-to-b from-[#06090d]/35 via-[#06090d]/55 to-[#06090d]/95"
          aria-hidden
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(1200px_700px_at_18%_38%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_45%,rgba(0,0,0,0)_70%),radial-gradient(900px_600px_at_0%_0%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_60%),linear-gradient(to_bottom,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.10)_45%,rgba(0,0,0,0.35)_100%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1560px] px-4 py-8 sm:px-6 md:pb-0 md:pt-6 lg:pt-8 lg:px-8 xl:px-12">
        <div className="relative mx-auto max-w-4xl rounded-xl border border-[var(--tone-border)] bg-[var(--tone-surface)]/85 p-5 text-center backdrop-blur-[1px] sm:p-7 md:mx-0 md:max-w-4xl md:border-0 md:bg-transparent md:p-0 md:text-left md:backdrop-blur-0">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-8 -inset-y-10 z-0 bg-[radial-gradient(700px_420px_at_25%_35%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.30)_45%,rgba(0,0,0,0)_72%)]"
          />
          <div className="relative z-10">
          <h1 className="hero-title max-w-3xl text-4xl font-bold tracking-tight text-[var(--tone-text)] sm:text-5xl md:text-6xl">
            Accidental Truth: NEXT
          </h1>
          <p className="mt-4 max-w-[38rem] text-lg text-white/85 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:text-xl">
            Beyond UFO Disclosure
          </p>
          <p className="mt-4 max-w-[38rem] text-lg text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:text-xl">
            Disclosure is no longer the question.
            <br />
            The question is what comes next.
            <br /><br />
            A new feature documentary by Ron James.
            <br />
            Narrated by Matthew Modine.
            <br />
            Coming 2026.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={`#${sectionIds.trailer}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[var(--tone-accent)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#031218] transition-colors hover:bg-[#54b9cc]"
            >
              Watch Clip
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
      </div>
    </section>
  );
}
