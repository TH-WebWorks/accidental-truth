import Link from "next/link";
import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";

const { socials, contactEmail, primaryCta } = siteData.site;
const {
  filmsLabel,
  supportLabel,
  socialLabel,
  contactLabel,
  pressKitLabel,
  pressKitUrl,
  newsletterHeading,
  newsletterPlaceholder,
  newsletterCta,
  legalLinks,
} = siteData.footer;

export function SiteFooter() {
  return (
    <footer className="flow-section bg-[var(--tone-base)] border-t border-[var(--tone-border)]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--tone-muted)] mb-4">
              {filmsLabel}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`#${sectionIds.top}`} className="text-[var(--tone-text)] hover:text-[var(--tone-muted)] transition-colors">
                  Watch NEXT
                </Link>
              </li>
              <li>
                <Link href={`#${sectionIds.story}`} className="text-[var(--tone-text)] hover:text-[var(--tone-muted)] transition-colors">
                  Story So Far
                </Link>
              </li>
              <li>
                <Link href={`#${sectionIds.original}`} className="text-[var(--tone-text)] hover:text-[var(--tone-muted)] transition-colors">
                  Previously Released Film
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--tone-muted)] mb-4">
              {supportLabel}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`#${sectionIds.merch}`} className="text-[var(--tone-text)] hover:text-[var(--tone-muted)] transition-colors">
                  Merch
                </Link>
              </li>
              {siteData.merch.donateUrl && (
                <li>
                  <a
                    href={siteData.merch.donateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--tone-text)] hover:text-[var(--tone-muted)] transition-colors"
                  >
                    Donate
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--tone-muted)] mb-4">
              Press
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={pressKitUrl}
                  className="text-[var(--tone-text)] hover:text-[var(--tone-muted)] transition-colors"
                >
                  {pressKitLabel}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--tone-muted)] mb-4">
              {socialLabel}
            </h3>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--tone-text)] hover:text-[var(--tone-muted)] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--tone-muted)] mb-4">
              {contactLabel}
            </h3>
            <a
              href={`mailto:${contactEmail}`}
              className="text-[var(--tone-text)] hover:text-[var(--tone-muted)] transition-colors"
            >
              {contactEmail}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--tone-border)] grid md:grid-cols-[1fr_auto] gap-6 items-end">
          <form className="max-w-md">
            <label
              htmlFor="newsletter-email"
              className="block text-xs font-semibold uppercase tracking-wider text-[var(--tone-muted)] mb-3"
            >
              {newsletterHeading}
            </label>
            <div className="flex gap-3">
              <input
                id="newsletter-email"
                type="email"
                placeholder={newsletterPlaceholder}
                className="flex-1 min-h-[44px] rounded border border-[var(--tone-border)] bg-transparent px-3 text-[var(--tone-text)] placeholder:text-[var(--tone-muted)]"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-medium uppercase tracking-wide border border-[var(--tone-border)] text-[var(--tone-text)] rounded"
              >
                {newsletterCta}
              </button>
            </div>
          </form>

          <a
            href={primaryCta.href.startsWith("#") ? primaryCta.href : primaryCta.href}
            target={primaryCta.href.startsWith("#") ? undefined : "_blank"}
            rel={primaryCta.href.startsWith("#") ? undefined : "noreferrer"}
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide bg-[var(--tone-accent)] text-[#031218] rounded hover:bg-[#54b9cc] transition-colors"
          >
            {primaryCta.label}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--tone-border)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-[var(--tone-muted)]">
            © {new Date().getFullYear()} {siteData.site.logoText}. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--tone-muted)] hover:text-[var(--tone-text)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
