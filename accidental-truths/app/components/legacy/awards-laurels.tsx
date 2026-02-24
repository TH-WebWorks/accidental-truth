import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { awardsBlock } = mufonUfoRevelations;

export function AwardsLaurels() {
  return (
    <div id="laurels" className="legacy-casefile__subsection scroll-mt-24">
      <div className="legacy-casefile__subsectionHead">
        <h3 className="legacy-casefile__subsectionTitle">Awards / Laurels</h3>
      </div>
      <p className="text-sm text-(--tone-muted) mb-1">{awardsBlock.heading}</p>
      <p className="text-sm text-(--tone-text) font-medium mb-5">{awardsBlock.subheading}</p>
      <p className="text-sm text-(--tone-muted) mb-4">{awardsBlock.ourLaurels}</p>
      <ul className="legacy-casefile__laurelGrid">
        {awardsBlock.laurels.map((laurel) => {
          const label = `${laurel.name} – ${laurel.result}`;
          const className =
            "legacy-casefile__laurelCell";
          return (
            <li key={laurel.name}>
              {laurel.href ? (
                <a href={laurel.href} target="_blank" rel="noreferrer" className={className}>
                  {label}
                </a>
              ) : (
                <span className={className}>{label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
