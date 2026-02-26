import { siteData } from "../../../lib/site-data";

const legacy = siteData.originalFilm;
const { descriptionParagraphs } = legacy;

export function LegacyDescription() {
  return (
    <div className="legacy-casefile__subsection scroll-mt-24">
      <div className="legacy-casefile__subsectionHead">
        <h3 className="legacy-casefile__subsectionTitle">{legacy.descriptionHeading}</h3>
      </div>
      <div className="legacy-casefile__prose">
        {descriptionParagraphs.map((p, i) => (
          <p key={i} className="text-(--tone-muted) leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
