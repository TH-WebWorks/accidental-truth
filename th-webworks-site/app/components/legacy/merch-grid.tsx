import Image from "next/image";
import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";
import { assets } from "../../../lib/assets";

const { merchItems } = mufonUfoRevelations;

export function MerchGrid() {
  return (
    <section id="merch-legacy" className="py-12 sm:py-16 bg-[#050505] scroll-mt-24">
      <Container>
        <h2 className="text-xl font-semibold text-white mb-8">Merchandise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {merchItems.map((item) => (
            <article
              key={item.title}
              className="rounded-lg bg-[#1a1a1a] border border-white/10 overflow-hidden"
            >
              <div className="relative aspect-square bg-[#0a0a0a]">
                <Image
                  src={assets.getMerchImage(item.imageKey)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#b2b2b2]">{item.priceText}</p>
                <a
                  href={item.productUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-[#e65c01] hover:underline"
                >
                  View product
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
