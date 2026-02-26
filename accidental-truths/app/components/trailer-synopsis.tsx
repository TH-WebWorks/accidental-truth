"use client";

import { useRef, useState } from "react";
import { Container } from "./Container";

type Props = {
  id: string;
  title: string;
  trailerUrl?: string;
  bridgeSentence?: string;
  trailerIntro?: string;
  comingSoonLabel?: string;
  placeholderMessage?: string;
};

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    let videoId = "";

    if (host === "youtu.be") {
      videoId = parsed.pathname.split("/").filter(Boolean)[0] ?? "";
    } else if (host === "youtube.com" || host === "m.youtube.com") {
      videoId = parsed.searchParams.get("v") ?? "";
      if (!videoId && parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/").filter(Boolean)[1] ?? "";
      }
    }

    if (!videoId) return "";
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  } catch {
    return "";
  }
}

export function TrailerSynopsis({
  id,
  title,
  trailerUrl,
  bridgeSentence,
  trailerIntro,
  comingSoonLabel,
  placeholderMessage,
}: Props) {
  const [isInteractive, setIsInteractive] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const embedUrl = trailerUrl ? getYouTubeEmbedUrl(trailerUrl) : "";

  const enableInteraction = () => {
    setIsInteractive(true);
    requestAnimationFrame(() => iframeRef.current?.focus());
  };

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
        {trailerIntro && (
          <p className="text-[var(--tone-muted)] text-center max-w-4xl mx-auto mb-8">
            {trailerIntro}
          </p>
        )}

        <div className="max-w-5xl mx-auto">
          {embedUrl ? (
            <div
              className="relative aspect-video w-full rounded-lg overflow-hidden bg-[var(--tone-surface)] border border-[var(--tone-border)] shadow-[0_10px_28px_rgba(0,0,0,0.34)]"
              onMouseLeave={() => setIsInteractive(false)}
            >
              <iframe
                ref={iframeRef}
                src={embedUrl}
                title={`${title} trailer`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                tabIndex={isInteractive ? 0 : -1}
                className={`h-full w-full ${isInteractive ? "pointer-events-auto" : "pointer-events-none"}`}
              />
              {!isInteractive && (
                <button
                  type="button"
                  onClick={enableInteraction}
                  className="absolute inset-0 flex items-center justify-center bg-black/25 text-[var(--tone-text)] transition-colors hover:bg-black/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tone-accent)]"
                  aria-label="Enable trailer interaction"
                >
                  <span className="rounded-full border border-[var(--tone-border)] bg-[var(--tone-surface)]/90 px-4 py-2 text-xs font-medium uppercase tracking-wide text-[var(--tone-muted)]">
                    Click to interact
                  </span>
                </button>
              )}
            </div>
          ) : (
            <div className="aspect-video w-full rounded-lg border border-dashed border-[var(--tone-border)] bg-[var(--tone-surface)] p-8 sm:p-10 flex flex-col justify-center items-center text-center">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                {comingSoonLabel ?? "Coming Soon"}
              </p>
              <p className="mt-3 max-w-xl text-[var(--tone-muted)]">
                {placeholderMessage ?? "Trailer will be published here soon."}
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
