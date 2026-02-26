/**
 * Local asset inventory for Accidental Truth site.
 * All images from accidental truths/assets. Use Next.js static imports.
 * Map logical names to imports; components resolve via this module.
 */

import heroAtNext from "../assets/hero_at_next.webp";
import heroAtUfoRevelations from "../assets/hero_at_ufo_revelations.webp";
import posterAtNext from "../assets/poster_at_next.webp";
import posterAtUfoRevelations from "../assets/poster_at_ufo_revelations.webp";
import ronLou from "../assets/ron_lou.jpg";

import next_01 from "../assets/screen_grabs/at_next/1.webp";
import next_02 from "../assets/screen_grabs/at_next/2.webp";
import next_03 from "../assets/screen_grabs/at_next/3.webp";
import next_04 from "../assets/screen_grabs/at_next/4.webp";
import next_05 from "../assets/screen_grabs/at_next/5.webp";
import next_06 from "../assets/screen_grabs/at_next/6.webp";
import next_07 from "../assets/screen_grabs/at_next/7.webp";
import next_08 from "../assets/screen_grabs/at_next/8.webp";
import next_09 from "../assets/screen_grabs/at_next/9.webp";
import next_10 from "../assets/screen_grabs/at_next/10.webp";
import next_11 from "../assets/screen_grabs/at_next/11.webp";
import next_12 from "../assets/screen_grabs/at_next/12.webp";
import next_13 from "../assets/screen_grabs/at_next/13.webp";
import next_14 from "../assets/screen_grabs/at_next/14.webp";
import next_15 from "../assets/screen_grabs/at_next/15.webp";
import ufo_controlRoom from "../assets/screen_grabs/at_ufo_rev/ControlRoom-960x540.jpg";
import ufo_crash1 from "../assets/screen_grabs/at_ufo_rev/Crash1-960x540.jpg";
import ufo_elizabethApril from "../assets/screen_grabs/at_ufo_rev/ElizabethApril-960x540.jpg";
import ufo_hangar from "../assets/screen_grabs/at_ufo_rev/Hangar-960x540.jpg";
import ufo_lab2 from "../assets/screen_grabs/at_ufo_rev/lab2-960x540.jpg";
import ufo_lou from "../assets/screen_grabs/at_ufo_rev/Lou-960x540.jpg";
import ufo_michioKaku from "../assets/screen_grabs/at_ufo_rev/MichioKaku-960x540.jpg";
import ufo_ralph from "../assets/screen_grabs/at_ufo_rev/Ralph-960x540.jpg";
import ufo_report from "../assets/screen_grabs/at_ufo_rev/Report-960x540.jpg";
import ufo_richardDolan from "../assets/screen_grabs/at_ufo_rev/RichardDolan-960x540.jpg";
import ufo_timBurchett from "../assets/screen_grabs/at_ufo_rev/Tim-Burchett-960x540.jpg";
import ufo_underwater from "../assets/screen_grabs/at_ufo_rev/underwater-960x540.jpg";

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
  "Tim-Burchett": ufo_timBurchett,
  Lou: ufo_lou,
  MichioKaku: ufo_michioKaku,
  lab2: ufo_lab2,
  Crash1: ufo_crash1,
  ControlRoom: ufo_controlRoom,
  Ralph: ufo_ralph,
  RichardDolan: ufo_richardDolan,
  ElizabethApril: ufo_elizabethApril,
  Hangar: ufo_hangar,
  underwater: ufo_underwater,
  Report: ufo_report,
};

/** Merch image keys from mufon-ufo-revelations merchItems. Use fallback until product images exist. */
type MerchKey = "tshirt" | "mug" | "mousepad" | "poster" | "dvd";

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
  /** Screen grabs for Accidental Truth: NEXT (at_next), in display order. */
  screenGrabsAtNext: [
    { id: "next_01", src: next_01 },
    { id: "next_02", src: next_02 },
    { id: "next_03", src: next_03 },
    { id: "next_04", src: next_04 },
    { id: "next_05", src: next_05 },
    { id: "next_06", src: next_06 },
    { id: "next_07", src: next_07 },
    { id: "next_08", src: next_08 },
    { id: "next_09", src: next_09 },
    { id: "next_10", src: next_10 },
    { id: "next_11", src: next_11 },
    { id: "next_12", src: next_12 },
    { id: "next_13", src: next_13 },
    { id: "next_14", src: next_14 },
    { id: "next_15", src: next_15 },
  ],
  /** Screen grabs for Accidental Truth: UFO Revelations (at_ufo_rev), in display order. */
  screenGrabsAtUfoRev: [
    { id: "Tim-Burchett", src: ufo_timBurchett },
    { id: "Lou", src: ufo_lou },
    { id: "MichioKaku", src: ufo_michioKaku },
    { id: "lab2", src: ufo_lab2 },
    { id: "Crash1", src: ufo_crash1 },
    { id: "ControlRoom", src: ufo_controlRoom },
    { id: "Ralph", src: ufo_ralph },
    { id: "RichardDolan", src: ufo_richardDolan },
    { id: "ElizabethApril", src: ufo_elizabethApril },
    { id: "Hangar", src: ufo_hangar },
    { id: "underwater", src: ufo_underwater },
    { id: "Report", src: ufo_report },
  ],
} as const;

export type Assets = typeof assets;
