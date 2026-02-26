import { siteData } from "../../../lib/site-data";

const legacy = siteData.originalFilm;
const { watchLinks } = legacy;

export function WatchLinks() {
  return (
    <div className="legacy-casefile__subsection">
      <div className="legacy-casefile__subsectionHead">
        <h3 className="legacy-casefile__subsectionTitle">{legacy.watchLinksHeading}</h3>
      </div>
      <div className="legacy-casefile__watchGrid">
        {watchLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="legacy-casefile__watchCard"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
