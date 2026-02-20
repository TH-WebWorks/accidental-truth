/**
 * Local asset inventory for Accidental Truth site.
 * All images from th-webworks-site/assets. Use Next.js static imports.
 * Map logical names to imports; components resolve via this module.
 */

import heroAtNext from "../assets/hero_at_next.webp";
import heroAtUfoRevelations from "../assets/hero_at_ufo_revelations.webp";
import posterAtNext from "../assets/poster_at_next.webp";
import posterAtUfoRevelations from "../assets/poster_at_ufo_revelations.webp";
import ronLou from "../assets/ron_lou.jpg";

/** Fallback image when a gallery/merch asset is not yet in assets. Use local only. */
const fallbackImage = posterAtUfoRevelations;

/**
 * MUFON gallery order: Tim-Burchett, Lou, MichioKaku, lab2, Crash1, ControlRoom,
 * Ralph, RichardDolan, ElizabethApril, Hangar, underwater, Report.
 * When gallery images are added to assets (e.g. tim_burchett.webp), add imports
 * and map them here by key; until then each key uses fallback.
 */
const galleryKeys = [
  "Tim-Burchett",
  "Lou",
  "MichioKaku",
  "lab2",
  "Crash1",
  "ControlRoom",
  "Ralph",
  "RichardDolan",
  "ElizabethApril",
  "Hangar",
  "underwater",
  "Report",
] as const;

type GalleryKey = (typeof galleryKeys)[number];

const galleryMap: Record<GalleryKey, typeof fallbackImage> = {
  "Tim-Burchett": fallbackImage,
  Lou: fallbackImage,
  MichioKaku: fallbackImage,
  lab2: fallbackImage,
  Crash1: fallbackImage,
  ControlRoom: fallbackImage,
  Ralph: fallbackImage,
  RichardDolan: fallbackImage,
  ElizabethApril: fallbackImage,
  Hangar: fallbackImage,
  underwater: fallbackImage,
  Report: fallbackImage,
};

/** Merch image keys from mufon-ufo-revelations merchItems. Use fallback until product images exist. */
const merchKeys = ["tshirt", "mug", "mousepad", "poster", "dvd"] as const;
type MerchKey = (typeof merchKeys)[number];

const merchMap: Record<MerchKey, typeof fallbackImage> = {
  tshirt: fallbackImage,
  mug: fallbackImage,
  mousepad: fallbackImage,
  poster: posterAtUfoRevelations,
  dvd: posterAtUfoRevelations,
};

export const assets = {
  logos: {},
  next: {
    heroBg: heroAtNext,
    poster: posterAtNext,
  },
  original: {
    heroBg: heroAtUfoRevelations,
    poster: posterAtUfoRevelations,
  },
  about: {
    creator: ronLou,
  },
  fallback: {
    image: fallbackImage,
  },
  /** Resolve gallery image by MUFON name. Returns local asset (fallback until gallery files added). */
  getGalleryImage(name: string): typeof fallbackImage {
    return galleryMap[name as GalleryKey] ?? fallbackImage;
  },
  /** Resolve merch image by imageKey. Returns local asset. */
  getMerchImage(key: string): typeof fallbackImage {
    return merchMap[key as MerchKey] ?? fallbackImage;
  },
  /** Ordered gallery keys for MUFON display order. */
  galleryKeys,
} as const;

export type Assets = typeof assets;
