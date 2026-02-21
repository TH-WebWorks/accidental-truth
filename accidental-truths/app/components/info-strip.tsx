import { sectionIds, siteData } from "../../lib/site-data";

const items = siteData.nextFilm.infoStrip;

export function InfoStrip() {
  return (
    <section
      id={sectionIds.info}
      data-section={sectionIds.info}
      className="bg-[#1a1a1a] border-y border-white/10"
      aria-label="Quick info"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sm">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
              <span className="text-[#b2b2b2] uppercase tracking-wider">{item.label}</span>
              <span className="text-white font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
