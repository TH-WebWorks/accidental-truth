import { getMetadataBase } from "@/lib/metadata";
import { getReleaseDescription, getReleaseSchemaDate } from "@/lib/release";

/**
 * Movie schema (JSON-LD) for Accidental Truth: NEXT.
 * Release is year-only (precision: "year") — we omit datePublished when precision
 * is year to avoid implying a month/day. If a validator strictly requires an ISO
 * date, set datePublished to "2026-01-01" with comment: placeholder for schema
 * compliance only, exact date not announced.
 */
export function FilmStructuredData() {
  const base = getMetadataBase();
  const url = base.toString().replace(/\/$/, "") + "/";
  const imageUrl = url + "assets/og-poster.webp";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: "Accidental Truth: NEXT – Beyond UFO Disclosure",
    description: `Accidental Truth: NEXT: Beyond UFO Disclosure. ${getReleaseDescription()} A cinematic documentary by Ron James, narrated by Matthew Modine. While Washington spins its wheels on UFO disclosure, today's most advanced thinkers look beyond non-human intelligence to the bigger question: What's NEXT?`,
    url,
    image: imageUrl,
    // Omitting datePublished when precision is year; add "2026-01-01" if validator requires it (placeholder for schema compliance only)
    ...(getReleaseSchemaDate() && { datePublished: getReleaseSchemaDate() }),
    director: { "@type": "Person", name: "Ron James" },
    author: { "@type": "Organization", name: "Ron James Television" },
    publisher: { "@type": "Organization", name: "Ron James Television" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
