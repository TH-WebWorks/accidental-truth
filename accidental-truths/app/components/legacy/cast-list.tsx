import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { cast } = mufonUfoRevelations;

export function CastList() {
  return (
    <div id="cast" className="legacy-casefile__subsection scroll-mt-24">
      <div className="legacy-casefile__subsectionHead">
        <h3 className="legacy-casefile__subsectionTitle">Cast</h3>
      </div>
      <ul className="legacy-casefile__nameGrid">
        {cast.map((name) => (
          <li key={name} className="legacy-casefile__nameCell">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
