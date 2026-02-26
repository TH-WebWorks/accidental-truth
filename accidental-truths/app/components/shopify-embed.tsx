import Image from "next/image";
import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";
import tshirtImage from "../../assets/store/t-shirt.webp";
import mugImage from "../../assets/store/mug.webp";
import mousepadImage from "../../assets/store/mousepad.webp";
import posterImage from "../../assets/store/signed-poster.jpg";
import dvdImage from "../../assets/store/dvd-blueray.png";

const {
  heading,
  lead,
  shopUrl,
  donateUrl,
  gridHeading,
  supportHeading,
  supportLead,
} = siteData.merch;

export function ShopifyEmbed() {
  const featuredMerch = [
    {
      title: "Limited Edition T-Shirt",
      meta: "Apparel",
      href: "https://www.mufontelevision.com/product/the-limited-edition-accidental-truth-t-shirt/?",
      image: tshirtImage,
    },
    {
      title: "15 oz Coffee Mug",
      meta: "Swag",
      href: "https://www.mufontelevision.com/product/accidental-truth-15-oz-coffee-mug/?",
      image: mugImage,
    },
    {
      title: "Accidental Truth Mouse Pad",
      meta: "Swag",
      href: "https://www.mufontelevision.com/product/the-accidental-truth-mouse-pad/?",
      image: mousepadImage,
    },
    {
      title: "Framed Autographed Poster",
      meta: "Collector",
      href: "https://www.mufontelevision.com/product/matthew-modine-framed-autographed-poster-11-x-17-free-shipping/?",
      image: posterImage,
    },
    {
      title: "Blu-ray / DVD",
      meta: "Physical Media",
      href: "https://www.mufontelevision.com/product/accidental-truth-ufo-revelations-now-on-dvd-blu-ray/?",
      image: dvdImage,
    },
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

        <article className="rounded-xl border border-[var(--tone-border)] bg-[var(--tone-surface)] p-6 sm:p-8">
          <h3 className="mb-4 text-lg font-semibold text-[var(--tone-text)]">{gridHeading}</h3>
          <p className="mb-5 max-w-3xl text-sm text-[var(--tone-muted)]">
            Featured support items from the official MUFON store. Tap any item to open its product page.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {featuredMerch.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[var(--tone-border)] bg-[var(--tone-surface-2)] p-3 transition-colors hover:bg-[var(--tone-surface)]"
              >
                <div className="relative mb-3 aspect-square overflow-hidden rounded border border-[var(--tone-border)] bg-[var(--tone-base)]/30">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--tone-text)]">
                  {item.title}
                </p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.08em] text-[var(--tone-muted)]">
                  {item.meta}
                </p>
              </a>
            ))}
          </div>
        </article>

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
