import { SiteHeader } from "./components/site-header";
import { LegacyCaseFile } from "./components/legacy";
import { SiteFooterSection } from "./sections/SiteFooter";
import { sectionRegistry } from "../lib/sections/section-registry";
import { sectionIds } from "../lib/site-data";
import { SHOW_EVIDENCE_INDEX } from "../lib/feature-flags";

const visibleSections = sectionRegistry.filter(
  (entry) => entry.id !== sectionIds.archive || SHOW_EVIDENCE_INDEX
);

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-(--tone-base) text-(--tone-text)">
        {visibleSections.map((entry) => {
          const SectionComponent = entry.component;

          return (
            <div key={entry.id}>
              {entry.id === sectionIds.original ? <LegacyCaseFile /> : <SectionComponent />}
            </div>
          );
        })}
      </main>
      <SiteFooterSection />
    </>
  );
}
