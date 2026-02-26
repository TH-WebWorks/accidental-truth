import { siteData } from "../../../lib/site-data";

const block = siteData.originalFilm.imminentBookBlock;

export function ImminentBookCallout() {
  return (
    <div className="legacy-casefile__subsection scroll-mt-24">
      <div className="legacy-casefile__note">
        <p className="text-(--tone-text) leading-relaxed">{block.quote}</p>
        <p className="mt-4 text-(--tone-muted) italic">{block.credit}</p>
        <p className="mt-4 text-(--tone-text) font-medium">{block.congrats}</p>
        <p className="mt-2 text-(--tone-muted)">{block.ctaLine}</p>
        <a
          href={block.signedCopyUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-(--tone-border) text-(--tone-text) rounded hover:bg-(--tone-surface-2) transition-colors"
        >
          {block.ctaButton}
        </a>
      </div>
    </div>
  );
}
