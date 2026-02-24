"use client";

import { useMemo, useState } from "react";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";
import { siteData } from "../../../lib/site-data";

const { metadata } = mufonUfoRevelations;
const legacyTrailerUrl = siteData.originalFilm.trailerUrl;
const legacyTrailerThumb = siteData.originalFilm.trailerThumbnailUrl;
const legacyPrimaryCta = siteData.originalFilm.secondaryFeature;

export function LegacyHeroUfo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playUrl = useMemo(
    () =>
      legacyTrailerUrl.includes("?")
        ? `${legacyTrailerUrl}&autoplay=1`
        : `${legacyTrailerUrl}?autoplay=1`,
    [],
  );

  return (
    <div className="legacy-casefile__subsection">
      <div className="legacy-casefile__subsectionHead">
        <h3 className="legacy-casefile__subsectionTitle">Accidental Truth: UFO Revelations</h3>
      </div>

      <div className="legacy-casefile__overviewCard">
        <div className="legacy-casefile__overviewMeta">
          <span>{metadata.runtime}</span>
          <span>{metadata.releaseYear}</span>
          <span>{metadata.genre}</span>
          <span>{metadata.rating}</span>
          <span>{metadata.imdbScore}</span>
        </div>

        <div className="legacy-casefile__overviewGrid">
          <div className="legacy-casefile__overviewMedia">
            {!isPlaying ? (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="group relative w-full aspect-video rounded-lg overflow-hidden border border-(--tone-border) bg-(--tone-surface)"
                aria-label="Play legacy trailer"
              >
                {legacyTrailerThumb ? (
                  <img
                    src={legacyTrailerThumb}
                    alt="Legacy trailer thumbnail"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                ) : (
                  <div className="absolute inset-0 bg-(--tone-surface-2)" />
                )}
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center justify-center min-h-[40px] px-5 py-2 text-xs font-medium uppercase tracking-wide bg-(--tone-accent) text-[#031218] rounded group-hover:bg-[#54b9cc] transition-colors">
                    Watch Trailer
                  </span>
                </div>
              </button>
            ) : (
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-(--tone-border) bg-(--tone-surface)">
                <iframe
                  src={playUrl}
                  title="Legacy trailer"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            )}
          </div>

          <div className="legacy-casefile__overviewCopy">
            <a
              href={legacyPrimaryCta.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-(--tone-border) text-(--tone-text) rounded hover:bg-(--tone-surface-2) transition-colors"
            >
              {legacyPrimaryCta.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
