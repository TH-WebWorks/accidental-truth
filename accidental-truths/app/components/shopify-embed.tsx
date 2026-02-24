import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";

const { heading, lead, shopifyEmbedHtml, shopUrl, donateUrl } = siteData.merch;

export function ShopifyEmbed() {
  return (
    <section
      id={sectionIds.merch}
      data-section={sectionIds.merch}
      className="flow-section phase-shift bg-[var(--tone-base)] border-b border-[var(--tone-border)] scroll-mt-24"
    >
      <Container>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--tone-muted)] mb-3">
            Merch / Support Module
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--tone-text)] mb-4">{heading}</h2>
          <p className="text-[var(--tone-muted)] max-w-2xl">{lead}</p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10">
          <article className="rounded-lg border border-[var(--tone-border)] p-6 sm:p-8 bg-[var(--tone-surface)]">
            <h3 className="text-lg font-semibold text-[var(--tone-text)] mb-4">Product Grid Placeholder</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="border border-[var(--tone-border)] rounded-md p-3 bg-[var(--tone-surface-2)]">
                  <div className="aspect-square border border-dashed border-[var(--tone-border)] rounded mb-2" />
                  <p className="text-xs text-[var(--tone-muted)] uppercase tracking-[0.08em]">
                    Product Slot {idx + 1}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-[var(--tone-border)] p-6 sm:p-8 bg-[var(--tone-surface)]">
            <h3 className="text-lg font-semibold text-[var(--tone-text)] mb-4">Shopify Embed Container</h3>
            {shopifyEmbedHtml ? (
              <div
                className="min-h-[220px] rounded-lg border border-[var(--tone-border)] overflow-hidden bg-[var(--tone-surface-2)] [&>iframe]:w-full [&>iframe]:min-h-[400px]"
                dangerouslySetInnerHTML={{ __html: shopifyEmbedHtml }}
              />
            ) : (
              <div className="min-h-[220px] rounded-lg border border-dashed border-[var(--tone-border)] flex items-center justify-center px-6 text-center text-[var(--tone-muted)]">
                Shopify embed zone
              </div>
            )}
            <p className="mt-4 text-sm text-[var(--tone-muted)]">
              Optional commerce block for product fulfillment.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-lg border border-[var(--tone-border)] bg-[var(--tone-surface)] p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-[var(--tone-text)] mb-2">Support the Production</h3>
          <p className="text-[var(--tone-muted)] mb-5">
            Merchandise and direct support help sustain archive updates and future film work.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={shopUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide bg-[var(--tone-accent)] text-[#031218] rounded hover:bg-[#54b9cc] transition-colors"
            >
              Shop Merch
            </a>
            {donateUrl ? (
              <a
                href={donateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-[var(--tone-border)] text-[var(--tone-text)] rounded hover:bg-[var(--tone-surface-2)] transition-colors"
              >
                Contribute
              </a>
            ) : (
              <button
                type="button"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-[var(--tone-border)] text-[var(--tone-muted)] rounded cursor-not-allowed"
                disabled
              >
                Contribution Link Placeholder
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
