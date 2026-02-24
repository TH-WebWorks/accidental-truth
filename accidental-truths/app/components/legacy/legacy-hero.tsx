"use client";

import { useMemo, useRef, useState } from "react";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";
import { siteData } from "../../../lib/site-data";

const { metadata } = mufonUfoRevelations;
const legacyTrailerUrl = siteData.originalFilm.trailerUrl;
const legacyTrailerThumb = siteData.originalFilm.trailerThumbnailUrl;

export function LegacyHeroUfo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playUrl = useMemo(
    () =>
      legacyTrailerUrl.includes("?")
        ? `${legacyTrailerUrl}&autoplay=1`
        : `${legacyTrailerUrl}?autoplay=1`,
    [],
  );

  const enableInteraction = () => {
    setIsInteractive(true);
    requestAnimationFrame(() => iframeRef.current?.focus());
  };

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

        <div className="legacy-casefile__overviewMedia">
          {!isPlaying ? (
            <button
              type="button"
              onClick={() => {
                setIsPlaying(true);
                setIsInteractive(false);
              }}
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
            <div
              className="relative aspect-video w-full rounded-lg overflow-hidden border border-(--tone-border) bg-(--tone-surface)"
              onMouseLeave={() => setIsInteractive(false)}
            >
              <iframe
                ref={iframeRef}
                src={playUrl}
                title="Legacy trailer"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                tabIndex={isInteractive ? 0 : -1}
                className={`h-full w-full ${isInteractive ? "pointer-events-auto" : "pointer-events-none"}`}
              />
              {!isInteractive && (
                <button
                  type="button"
                  onClick={enableInteraction}
                  className="absolute inset-0 flex items-center justify-center bg-black/25 text-(--tone-text) transition-colors hover:bg-black/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--tone-accent)"
                  aria-label="Enable legacy trailer interaction"
                >
                  <span className="rounded-full border border-(--tone-border) bg-(--tone-surface)/90 px-4 py-2 text-xs font-medium uppercase tracking-wide text-(--tone-muted)">
                    Click to interact
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
