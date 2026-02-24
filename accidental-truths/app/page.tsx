import { SiteHeader } from "./components/site-header";
import { LegacyCaseFile } from "./components/legacy";
import { sectionRegistry } from "../lib/sections/section-registry";
import { sectionIds } from "../lib/site-data";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-(--tone-base) text-(--tone-text)">
        {sectionRegistry.map((entry) => {
          const SectionComponent = entry.component;

          return (
            <div key={entry.id}>
              {entry.id === sectionIds.original ? <LegacyCaseFile /> : <SectionComponent />}
            </div>
          );
        })}
      </main>
    </>
  );
}
