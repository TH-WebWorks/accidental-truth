import Link from "next/link";
import { Container } from "./Container";
import { siteData } from "../../lib/site-data";

type Props = {
  id: string;
  title: string;
  trailerUrl: string;
  synopsis: readonly string[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export function TrailerSynopsis({
  id,
  title,
  trailerUrl,
  synopsis,
  ctaPrimary,
  ctaSecondary,
}: Props) {
  return (
    <section id={id} className="py-16 sm:py-24 bg-[#050505] scroll-mt-24">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">{title}</h2>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-[#1a1a1a] border border-white/10">
            <iframe
              src={trailerUrl}
              title={`${title} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div>
            {synopsis.map((p, i) => (
              <p key={i} className="text-[#b2b2b2] leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-4">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  target={ctaPrimary.href.startsWith("http") ? "_blank" : undefined}
                  rel={ctaPrimary.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide bg-[#e65c01] text-white rounded hover:bg-[#e65c01]/90 transition-colors"
                >
                  {ctaPrimary.label}
                </a>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide border border-white/40 text-white rounded hover:bg-white/10 transition-colors"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
