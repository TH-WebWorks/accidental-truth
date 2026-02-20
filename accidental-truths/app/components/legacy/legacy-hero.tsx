import Image from "next/image";
import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";
import { assets } from "../../../lib/assets";

const { metadata, headline } = mufonUfoRevelations;

export function LegacyHeroUfo() {
  return (
    <section
      id="original"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden scroll-mt-24"
    >
      {/* Background: local UFO Revelations hero + overlay */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute inset-0">
          <Image
            src={assets.original.heroBg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#050505]"
          aria-hidden
        />
      </div>
      <Container className="relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Accidental Truth
        </h1>
        <p className="mt-2 text-xl text-[#b2b2b2]">
          UFO Revelations
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="text-sm text-[#b2b2b2] uppercase tracking-wider">{metadata.rating}</span>
          <span className="text-sm text-[#b2b2b2] uppercase tracking-wider">{metadata.runtime}</span>
          <span className="text-sm text-[#b2b2b2] uppercase tracking-wider">{metadata.releaseYear}</span>
          <span className="text-sm text-[#b2b2b2] uppercase tracking-wider">{metadata.imdbScore}</span>
          <span className="text-sm text-[#b2b2b2] uppercase tracking-wider">{metadata.genre}</span>
        </div>
        <p className="mt-6 text-lg text-white max-w-3xl leading-relaxed">
          {headline}
        </p>
      </Container>
    </section>
  );
}
