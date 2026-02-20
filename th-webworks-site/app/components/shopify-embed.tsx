import { Container } from "./Container";
import { siteData } from "../../lib/site-data";

const { heading, lead, shopifyEmbedHtml, shopUrl, donateUrl } = siteData.merch;

export function ShopifyEmbed() {
  return (
    <section id="merch" className="py-16 sm:py-24 bg-[#1a1a1a] scroll-mt-24">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-[#b2b2b2] max-w-xl mb-10">
          {lead}
        </p>
        {shopifyEmbedHtml ? (
          <div
            className="min-h-[200px] rounded-lg border border-white/10 overflow-hidden bg-[#050505] [&>iframe]:w-full [&>iframe]:min-h-[400px]"
            dangerouslySetInnerHTML={{ __html: shopifyEmbedHtml }}
          />
        ) : (
          <div className="min-h-[280px] rounded-lg border border-white/10 flex flex-col items-center justify-center gap-4 bg-[#050505] p-8 text-center">
            <p className="text-[#b2b2b2]">Store embed will appear here when configured.</p>
            <a
              href={shopUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide bg-[#e65c01] text-white rounded hover:bg-[#e65c01]/90 transition-colors"
            >
              Shop on MUFON TV
            </a>
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={shopUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-white/40 text-white rounded hover:bg-white/10 transition-colors"
          >
            Shop All
          </a>
          {donateUrl && (
            <a
              href={donateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-[#0099ff]/50 text-[#0099ff] rounded hover:bg-[#0099ff]/10 transition-colors"
            >
              Donate
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
