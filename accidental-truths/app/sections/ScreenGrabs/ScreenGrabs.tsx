"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { sectionIds, siteData } from "@/lib/site-data";
import { assets } from "@/lib/assets";

export function ScreenGrabsSection() {
  const nextFilm = siteData.nextFilm;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const selectedImage = selectedImageIndex === null ? null : assets.screenGrabsAtNext[selectedImageIndex];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <SectionShell
      id={sectionIds.gallery}
      className="flow-section bg-[var(--tone-base)] border-b border-[var(--tone-border)] scroll-mt-24"
      ariaLabel="Gallery from Accidental Truth: NEXT"
    >
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--tone-text)] mb-2 text-center">
          {nextFilm.galleryHeading}
        </h2>
        <p className="text-[var(--tone-muted)] text-center max-w-2xl mx-auto mb-10">
          {nextFilm.galleryLead}
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 list-none p-0 m-0">
          {assets.screenGrabsAtNext.map((img, index) => (
            <li
              key={img.id}
              className="relative aspect-video rounded-lg overflow-hidden bg-[var(--tone-surface)] border border-[var(--tone-border)]"
            >
              <button
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                className="group relative h-full w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tone-accent)]"
                aria-label={`Open ${nextFilm.galleryAltPrefix} ${img.id}`}
              >
                <Image
                  src={img.src}
                  alt={`${nextFilm.galleryAltPrefix} ${img.id}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>

        {selectedImage && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 px-4 py-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${nextFilm.galleryAltPrefix} enlarged image`}
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImageIndex(null)}
              className="absolute right-4 top-4 inline-flex min-h-[40px] items-center justify-center rounded border border-white/30 bg-black/40 px-3 text-xs font-semibold uppercase tracking-[0.08em] text-white hover:bg-black/60"
              aria-label="Close enlarged image"
            >
              Close
            </button>

            <div
              className="relative h-[85vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={`${nextFilm.galleryAltPrefix} ${selectedImage.id}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </Container>
    </SectionShell>
  );
}
