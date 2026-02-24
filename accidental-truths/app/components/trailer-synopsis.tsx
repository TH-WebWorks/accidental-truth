"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "./Container";

type Props = {
  id: string;
  title: string;
  trailerUrl: string;
  trailerThumbnailUrl?: string;
  bridgeSentence?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export function TrailerSynopsis({
  id,
  title,
  trailerUrl,
  trailerThumbnailUrl,
  bridgeSentence,
  ctaPrimary,
  ctaSecondary,
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playUrl = useMemo(
    () => (trailerUrl.includes("?") ? `${trailerUrl}&autoplay=1` : `${trailerUrl}?autoplay=1`),
    [trailerUrl],
  );

  return (
    <section
      id={id}
      data-section={id}
      className="flow-section bg-[var(--tone-base)] border-b border-[var(--tone-border)] scroll-mt-24"
    >
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--tone-text)] mb-4 text-center">
          {title}
        </h2>
        {bridgeSentence && (
          <p className="text-[var(--tone-muted)] text-center max-w-3xl mx-auto mb-8">
            {bridgeSentence}
          </p>
        )}

        <div className="max-w-5xl mx-auto">
          {!isPlaying ? (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="group relative w-full aspect-video rounded-lg overflow-hidden bg-[var(--tone-surface)] border border-[var(--tone-border)] shadow-[0_10px_28px_rgba(0,0,0,0.34)] text-left"
              aria-label="Play trailer"
            >
              {trailerThumbnailUrl ? (
                <img
                  src={trailerThumbnailUrl}
                  alt={`${title} thumbnail`}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
              ) : (
                <div className="absolute inset-0 bg-[var(--tone-surface-2)]" />
              )}
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex items-center justify-center min-h-[52px] px-7 py-3 text-sm font-medium uppercase tracking-wide bg-[var(--tone-accent)] text-[#031218] rounded group-hover:bg-[#54b9cc] transition-colors">
                  Watch Trailer
                </span>
              </div>
            </button>
          ) : (
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-[var(--tone-surface)] border border-[var(--tone-border)] shadow-[0_10px_28px_rgba(0,0,0,0.34)]">
              <iframe
                src={playUrl}
                title={`${title} trailer`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {ctaPrimary && (
              <a
                href={ctaPrimary.href}
                target={ctaPrimary.href.startsWith("http") ? "_blank" : undefined}
                rel={ctaPrimary.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide bg-[var(--tone-accent)] text-[#031218] rounded hover:bg-[#54b9cc] transition-colors"
              >
                {ctaPrimary.label}
              </a>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-[var(--tone-border)] text-[var(--tone-text)] rounded hover:bg-[var(--tone-surface-2)] transition-colors"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
