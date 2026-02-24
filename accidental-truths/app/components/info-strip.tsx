import { sectionIds, siteData } from "../../lib/site-data";

const items = siteData.nextFilm.infoStrip;

export function InfoStrip() {
  return (
    <section
      id={sectionIds.info}
      data-section={sectionIds.info}
      className="flow-section--tight bg-[var(--tone-base)] border-b border-[var(--tone-border)]"
      aria-label="Quick info"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4 text-sm">
          {items.map((item, index) => (
            <div
              key={item.label}
              className={`min-w-[190px] flex flex-col gap-1 border-l pl-4 ${
                index === 0 ? "border-(--tone-accent)" : "border-(--tone-border)"
              }`}
            >
              <span className="text-[var(--tone-muted)] uppercase tracking-wider text-xs">
                {item.label}
              </span>
              <span
                className={`font-medium ${
                  index === 0 ? "text-(--tone-accent)" : "text-(--tone-text)"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
