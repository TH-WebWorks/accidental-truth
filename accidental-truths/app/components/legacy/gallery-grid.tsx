"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "../Container";
import { assets } from "../../../lib/assets";

export function GalleryGrid() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const selectedImage =
    selectedImageIndex === null ? null : assets.screenGrabsAtUfoRev[selectedImageIndex];

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
    <section className="legacy-casefile__subsection scroll-mt-24">
      <Container>
        <div className="legacy-casefile__subsectionHead">
          <h3 className="legacy-casefile__subsectionTitle">Gallery</h3>
        </div>
        <p className="text-(--tone-muted) mb-6 max-w-3xl">
          Stills from Accidental Truth: UFO Revelations.
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 list-none p-0 m-0">
          {assets.screenGrabsAtUfoRev.map((img, index) => (
            <li
              key={img.id}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-(--tone-surface) border border-(--tone-border)"
            >
              <button
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                className="group relative h-full w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--tone-accent)"
                aria-label={`Open UFO Revelations still ${img.id}`}
              >
                <Image
                  src={img.src}
                  alt={`UFO Revelations still ${img.id}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
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
            aria-label="UFO Revelations enlarged image"
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
                alt={`UFO Revelations still ${selectedImage.id}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
