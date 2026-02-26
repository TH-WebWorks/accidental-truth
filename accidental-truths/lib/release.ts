/**
 * Single source of truth for release status/date.
 * Update releaseStatus here; all UI, metadata, and structured data read from it.
 *
 * Environment variables override releaseStatus when set (for quick updates without code changes):
 * - NEXT_PUBLIC_RELEASE_LABEL (string)
 * - NEXT_PUBLIC_RELEASE_YEAR (number)
 * - NEXT_PUBLIC_RELEASE_PRECISION ("year" | "month" | "day")
 * - NEXT_PUBLIC_RELEASE_ISO (string, e.g. "2026-06-15" when precision is month/day)
 */

const VALID_PRECISIONS = ["year", "month", "day"] as const;
type Precision = (typeof VALID_PRECISIONS)[number];

export const releaseStatus = {
  label: "COMING 2026",
  year: 2026,
  precision: "year" as const,
  /** Only set when precision is "month" or "day" (e.g. "2026-06-01") */
  isoDate: null as string | null,
  lastUpdated: "2026-02-26",
};

function getEffectiveRelease(): {
  label: string;
  year: number;
  precision: Precision;
  isoDate: string | null;
} {
  const envLabel = process.env.NEXT_PUBLIC_RELEASE_LABEL?.trim();
  const envYear = process.env.NEXT_PUBLIC_RELEASE_YEAR;
  const envPrecision = process.env.NEXT_PUBLIC_RELEASE_PRECISION?.toLowerCase().trim();
  const envIso = process.env.NEXT_PUBLIC_RELEASE_ISO?.trim();

  const year =
    envYear && !Number.isNaN(Number(envYear)) ? Number(envYear) : releaseStatus.year;
  const precision: Precision =
    envPrecision && VALID_PRECISIONS.includes(envPrecision as Precision)
      ? (envPrecision as Precision)
      : (releaseStatus.precision as Precision);
  const isoDate =
    precision !== "year" && envIso ? envIso : releaseStatus.isoDate;

  return {
    label: envLabel || releaseStatus.label,
    year,
    precision,
    isoDate,
  };
}

/** User-facing short label (e.g. hero badge, info strip) */
export function getReleaseLabel(): string {
  return getEffectiveRelease().label;
}

/** Sentence-ready description (e.g. meta descriptions, hooks). Derived from label. */
export function getReleaseDescription(): string {
  const { label } = getEffectiveRelease();
  if (!process.env.NEXT_PUBLIC_RELEASE_LABEL?.trim()) {
    return "Coming 2026.";
  }
  const s = label.trim();
  const sentence = s.length > 0 ? s.charAt(0).toUpperCase() + s.slice(1) : "";
  return sentence.endsWith(".") ? sentence : `${sentence}.`;
}

/**
 * For schema.org date fields. Returns null when precision is year-only.
 * If a validator requires a full ISO date, use "2026-01-01" as placeholder
 * (see FilmStructuredData.tsx comment).
 */
export function getReleaseSchemaDate(): string | null {
  const { precision, isoDate } = getEffectiveRelease();
  if (precision === "year") return null;
  return isoDate;
}
