import { sectionIds } from "../../../lib/site-data";
import { Container } from "../Container";
import { LegacyHeroUfo } from "./legacy-hero";
import { WatchLinks } from "./watch-links";
import { LegacyDescription } from "./legacy-description";
import { ImminentBookCallout } from "./imminent-book-callout";
import { DvdBlurayPromo } from "./dvd-bluray-promo";
import { CastList } from "./cast-list";
import { CrewList } from "./crew-list";
import { AwardsLaurels } from "./awards-laurels";
import { MoreLikeThis } from "./more-like-this";
import { HashtagsLine } from "./hashtags-line";

export function LegacyCaseFile() {
  return (
    <section
      id={sectionIds.original}
      data-section={sectionIds.original}
      className="flow-section phase-shift legacy-casefile bg-(--tone-base) border-b border-(--tone-border) scroll-mt-24"
    >
      <Container>
        <div className="legacy-casefile__header">
          <p className="legacy-casefile__kicker">Appendix</p>
          <h2 className="legacy-casefile__title">Legacy Case File</h2>
        </div>

        <div className="legacy-casefile__body">
          <LegacyHeroUfo />
          <WatchLinks />
          <LegacyDescription />
          <ImminentBookCallout />
          <DvdBlurayPromo />
          <div className="legacy-casefile__split">
            <CastList />
            <CrewList />
          </div>
          <AwardsLaurels />
          <MoreLikeThis />
          <HashtagsLine />
        </div>
      </Container>
    </section>
  );
}
