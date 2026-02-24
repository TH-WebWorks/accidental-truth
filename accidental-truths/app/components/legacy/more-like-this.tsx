import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { moreLikeThis } = mufonUfoRevelations;

export function MoreLikeThis() {
  return (
    <div id="more-like-this" className="legacy-casefile__subsection scroll-mt-24">
      <div className="legacy-casefile__subsectionHead">
        <h3 className="legacy-casefile__subsectionTitle">More Like This</h3>
      </div>
      <ul className="legacy-casefile__mediaGrid">
        {moreLikeThis.map((item) => (
          <li key={item.title}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="legacy-casefile__mediaCard"
            >
              <span className="legacy-casefile__mediaTitle">{item.title}</span>
              <span className="legacy-casefile__mediaMeta">{item.duration}</span>
              <span className="legacy-casefile__mediaMeta">{item.category}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
