import { AboutSection } from "./components/site/AboutSection";
import { HeroHeaderSection } from "./components/site/HeroHeaderSection";
import { MerchandiseSection } from "./components/site/MerchandiseSection";
import { NewFilmSpotlightSection } from "./components/site/NewFilmSpotlightSection";
import { OriginalFilmSections } from "./components/site/OriginalFilmSections";
import { PressSection } from "./components/site/PressSection";
import { SiteFooter } from "./components/site/SiteFooter";
import { TrailerSection } from "./components/site/TrailerSection";

export default function Home() {
  return (
    <main className="site">
      <HeroHeaderSection />
      <NewFilmSpotlightSection />
      <OriginalFilmSections />
      <TrailerSection />
      <MerchandiseSection />
      <PressSection />
      <AboutSection />
      <SiteFooter />
    </main>
  );
}
