import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { descriptionParagraphs } = mufonUfoRevelations;

export function LegacyDescription() {
  return (
    <div className="legacy-casefile__subsection scroll-mt-24">
      <div className="legacy-casefile__subsectionHead">
        <h3 className="legacy-casefile__subsectionTitle">Film Description</h3>
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
