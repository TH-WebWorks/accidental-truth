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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--tone-text)] tracking-tight max-w-3xl">
            {d.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[var(--tone-muted)] max-w-2xl">
            {d.hook}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`#${sectionIds.trailer}`}
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 text-sm font-medium uppercase tracking-wide bg-[var(--tone-accent)] text-[#031218] rounded hover:bg-[#54b9cc] transition-colors"
            >
              {d.heroPrimaryCtaLabel}
            </a>
            <a
              href={`#${sectionIds.merch}`}
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 text-sm font-medium uppercase tracking-wide border border-[var(--tone-border)] text-[var(--tone-text)] rounded hover:bg-[var(--tone-surface-2)] transition-colors"
            >
              {d.heroSecondaryCtaLabel}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-[var(--tone-border)] bg-[var(--tone-surface)]/70 px-3 py-1 text-xs uppercase tracking-[0.08em] text-[var(--tone-muted)]">
              {d.release}
            </span>
            <span className="inline-flex items-center rounded-full border border-[var(--tone-border)] bg-[var(--tone-surface)]/70 px-3 py-1 text-xs uppercase tracking-[0.08em] text-[var(--tone-muted)]">
              {d.platform}
            </span>
            <span className="inline-flex items-center rounded-full border border-[var(--tone-border)] bg-[var(--tone-surface)]/70 px-3 py-1 text-xs uppercase tracking-[0.08em] text-[var(--tone-muted)]">
              {d.producer}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
