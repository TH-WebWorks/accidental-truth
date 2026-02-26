import { siteData } from "../../../lib/site-data";
const legacy = siteData.originalFilm;

export function HashtagsLine() {
  return (
    <div className="legacy-casefile__subsection">
      <p className="legacy-casefile__hashtags">{legacy.hashtags}</p>
    </div>
  );
}
