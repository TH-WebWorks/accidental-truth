import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";

const {
  heading,
  lead,
  shopifyEmbedHtml,
  shopUrl,
  donateUrl,
  gridHeading,
  storeHeading,
  storePlaceholder,
  supportHeading,
  supportLead,
} = siteData.merch;

export function ShopifyEmbed() {
  const featuredMerch = [
    { title: "Official Poster", meta: "Collector Print" },
    { title: "Signature Tee", meta: "Limited Run" },
    { title: "Film Bundle", meta: "Digital + Bonus" },
  ];

  return (
    <section
      id={sectionIds.merch}
      data-section={sectionIds.merch}
      className="flow-section phase-shift bg-[var(--tone-base)] border-b border-[var(--tone-border)] scroll-mt-24"
    >
      <Container>
        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[var(--tone-muted)]">
            Merch
          </p>
          <h2 className="mb-4 text-2xl font-bold text-[var(--tone-text)] sm:text-3xl">{heading}</h2>
          <p className="max-w-2xl text-[var(--tone-muted)]">{lead}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <article className="rounded-xl border border-[var(--tone-border)] bg-[var(--tone-surface)] p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-semibold text-[var(--tone-text)]">{gridHeading}</h3>
            <p className="mb-5 max-w-xl text-sm text-[var(--tone-muted)]">
              Featured support items from the official store.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {featuredMerch.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-[var(--tone-border)] bg-[var(--tone-surface-2)] p-3"
                >
                  <div className="mb-3 aspect-square rounded border border-dashed border-[var(--tone-border)] bg-[var(--tone-base)]/30" />
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--tone-text)]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.08em] text-[var(--tone-muted)]">
                    {item.meta}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-[var(--tone-border)] bg-[var(--tone-surface)] p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-semibold text-[var(--tone-text)]">{storeHeading}</h3>
            {shopifyEmbedHtml ? (
              <div
                className="min-h-[220px] overflow-hidden rounded-lg border border-[var(--tone-border)] bg-[var(--tone-surface-2)] [&>iframe]:min-h-[400px] [&>iframe]:w-full"
                dangerouslySetInnerHTML={{ __html: shopifyEmbedHtml }}
              />
            ) : (
              <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-[var(--tone-border)] px-6 text-center text-[var(--tone-muted)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--tone-muted)]">
                    Store Module
                  </p>
                  <p className="mt-2">{storePlaceholder}</p>
                </div>
              </div>
            )}
            <p className="mt-4 text-sm text-[var(--tone-muted)]">Secure checkout will appear here.</p>
          </article>
        </div>

        <div className="mt-8 rounded-xl border border-[var(--tone-border)] bg-[var(--tone-surface)] p-6 sm:p-8">
          <h3 className="mb-2 text-lg font-semibold text-[var(--tone-text)]">{supportHeading}</h3>
          <p className="mb-5 text-[var(--tone-muted)]">{supportLead}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={shopUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[var(--tone-accent)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-[#031218] transition-colors hover:bg-[#54b9cc]"
            >
              Shop Merch
            </a>
            {donateUrl ? (
              <a
                href={donateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[var(--tone-border)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--tone-text)] transition-colors hover:bg-[var(--tone-surface-2)]"
              >
                Contribute
              </a>
            ) : (
              <button
                type="button"
                className="inline-flex min-h-[44px] cursor-not-allowed items-center justify-center rounded-lg border border-[var(--tone-border)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--tone-muted)]"
                disabled
              >
                Support Link Coming Soon
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
