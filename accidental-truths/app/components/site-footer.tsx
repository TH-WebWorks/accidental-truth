import Link from "next/link";
import { Container } from "./Container";
import { siteData } from "../../lib/site-data";

const { navLinks, socials, contactEmail, primaryCta } = siteData.site;
const { filmsLabel, supportLabel, socialLabel, contactLabel } = siteData.footer;

export function SiteFooter() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#b2b2b2] mb-4">
              {filmsLabel}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#watch-next" className="text-white hover:text-[#b2b2b2] transition-colors">
                  Watch NEXT
                </Link>
              </li>
              <li>
                <Link href="#trailer-next" className="text-white hover:text-[#b2b2b2] transition-colors">
                  Trailer
                </Link>
              </li>
              <li>
                <Link href="#original" className="text-white hover:text-[#b2b2b2] transition-colors">
                  Original Film
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#b2b2b2] mb-4">
              {supportLabel}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#merch" className="text-white hover:text-[#b2b2b2] transition-colors">
                  Merch
                </Link>
              </li>
              {siteData.merch.donateUrl && (
                <li>
                  <a
                    href={siteData.merch.donateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#b2b2b2] transition-colors"
                  >
                    Donate
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#b2b2b2] mb-4">
              {socialLabel}
            </h3>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#b2b2b2] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#b2b2b2] mb-4">
              {contactLabel}
            </h3>
            <a
              href={`mailto:${contactEmail}`}
              className="text-white hover:text-[#b2b2b2] transition-colors"
            >
              {contactEmail}
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#b2b2b2]">
            © {new Date().getFullYear()} {siteData.site.logoText}. All rights reserved.
          </p>
          <a
            href={primaryCta.href.startsWith("#") ? primaryCta.href : primaryCta.href}
            target={primaryCta.href.startsWith("#") ? undefined : "_blank"}
            rel={primaryCta.href.startsWith("#") ? undefined : "noreferrer"}
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide bg-[#e65c01] text-white rounded hover:bg-[#e65c01]/90 transition-colors"
          >
            {primaryCta.label}
          </a>
        </div>
      </Container>
    </footer>
  );
}
