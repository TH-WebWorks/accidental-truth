import type { Metadata } from "next";
import { getReleaseDescription } from "./release";

/**
 * Resolves the canonical base URL for metadata (Open Graph, etc.).
 * Order: NEXT_PUBLIC_SITE_URL > VERCEL_URL > localhost:3000
 */
export function getMetadataBase(): URL {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env && env.startsWith("https://")) return new URL(env);

  const vercel = process.env.VERCEL_URL;
  if (vercel) return new URL(`https://${vercel}`);

  return new URL("http://localhost:3000");
}

const metadataBase = getMetadataBase();

const defaultTitle = "Accidental Truth: NEXT – Beyond UFO Disclosure";
const defaultDescription = `Accidental Truth: NEXT: Beyond UFO Disclosure. ${getReleaseDescription()} A cinematic documentary by Ron James, narrated by Matthew Modine. While Washington spins its wheels on UFO disclosure, today's most advanced thinkers look beyond non-human intelligence to the bigger question: What's NEXT?`;
const defaultKeywords = [
  "UFO",
  "UAP",
  "Disclosure",
  "Ron James",
  "Accidental Truth",
  "Non-Human Intelligence",
];
const siteName = "Accidental Truth";
const ogImagePath = "/assets/og-poster.webp";

export const defaultMetadata: Metadata = {
  metadataBase,
  alternates: { canonical: "/" },
  title: {
    default: defaultTitle,
    template: "%s | Accidental Truth",
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: "Ron James", url: "https://www.mufontelevision.com" }],
  creator: "Ron James Television",
  publisher: "Ron James Television",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    locale: "en_US",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Accidental Truth: NEXT – Beyond UFO Disclosure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImagePath],
  },
};

/**
 * Helper for future route-specific metadata overrides.
 * Merges overrides with defaults from defaultMetadata.
 */
export function createPageMetadata(
  overrides: Metadata & { title?: string | { default?: string; template?: string } }
): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph as object),
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...(overrides.twitter as object),
    },
  };
}
