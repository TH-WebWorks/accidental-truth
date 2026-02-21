import Image from "next/image";
import Link from "next/link";
import { sectionIds, siteData } from "../../lib/site-data";
import { assets } from "../../lib/assets";

const d = siteData.nextFilm;

export function SectionHero() {
  return (
    <section
      id={sectionIds.top}
      data-section={sectionIds.top}
      className="relative min-h-screen flex flex-col justify-end pb-16 sm:pb-24 pt-20 overflow-hidden scroll-mt-0"
    >
      {/* Background: local hero image + dark overlay */}
      <div className="absolute inset-0 bg-[#050505]">
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
          className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/70 to-[#050505]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight max-w-3xl">
          {d.title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-[#b2b2b2] max-w-xl">
          {d.hook}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={d.watchUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 text-sm font-medium uppercase tracking-wide bg-[#e65c01] text-white rounded hover:bg-[#e65c01]/90 transition-colors"
          >
            Watch / Buy
          </a>
          <Link
            href={`#${sectionIds.trailer}`}
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 text-sm font-medium uppercase tracking-wide border border-white/40 text-white rounded hover:bg-white/10 transition-colors"
          >
            Watch Trailer
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-6 text-xs sm:text-sm text-[#b2b2b2] uppercase tracking-wider">
          <span>{d.runtime}</span>
          <span>{d.release}</span>
          <span>{d.platform}</span>
          <span>{d.producer}</span>
        </div>
      </div>
    </section>
  );
}
