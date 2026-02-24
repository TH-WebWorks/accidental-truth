import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const block = mufonUfoRevelations.dvdBluRayBlock;

export function DvdBlurayPromo() {
  return (
    <div id="dvd-bluray" className="legacy-casefile__subsection scroll-mt-24">
      <div className="legacy-casefile__subsectionHead">
        <h3 className="legacy-casefile__subsectionTitle">DVD/Blu-ray + Bonus Features</h3>
      </div>
      <div className="legacy-casefile__card">
        <h4 className="legacy-casefile__cardTitle">{block.title}</h4>
        {block.paragraphs.map((p, i) => (
          <p key={i} className="text-(--tone-muted) leading-relaxed mb-4">
            {p}
          </p>
        ))}
        <h5 className="legacy-casefile__microHeading">Bonus features</h5>
        <ul className="list-disc list-inside text-(--tone-muted) space-y-1 mb-6">
          {block.bonusFeatures.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <p className="text-(--tone-text) font-medium mb-6">{block.pricingText}</p>
        <a
          href={block.productUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-(--tone-border) text-(--tone-text) rounded hover:bg-(--tone-surface-2) transition-colors"
        >
          {block.addToCartLabel}
        </a>
      </div>
    </div>
  );
}
