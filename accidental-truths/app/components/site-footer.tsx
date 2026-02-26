import Link from "next/link";
import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";

const { primaryCta } = siteData.site;

export function SiteFooter() {
  const quickLinks = [
    { label: "Top", href: `#${sectionIds.top}` },
    { label: "Story", href: `#${sectionIds.story}` },
    { label: "Trailer", href: `#${sectionIds.trailer}` },
    { label: "Gallery", href: `#${sectionIds.gallery}` },
    { label: "Legacy", href: `#${sectionIds.original}` },
    { label: "Merch", href: `#${sectionIds.merch}` },
  ];

  return (
    <footer className="flow-section bg-[var(--tone-base)] border-t border-[var(--tone-border)]">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--tone-muted)]">
              {siteData.site.logoText}
            </p>
            <nav aria-label="Footer quick links" className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded border border-[var(--tone-border)] px-3 py-1.5 text-xs uppercase tracking-wide text-[var(--tone-muted)] transition-colors hover:text-[var(--tone-text)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <a
            href={primaryCta.href.startsWith("#") ? primaryCta.href : primaryCta.href}
            target={primaryCta.href.startsWith("#") ? undefined : "_blank"}
            rel={primaryCta.href.startsWith("#") ? undefined : "noreferrer"}
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-medium uppercase tracking-wide bg-[var(--tone-accent)] text-[#031218] rounded hover:bg-[#54b9cc] transition-colors"
          >
            {primaryCta.label}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--tone-border)] flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[var(--tone-muted)]">
            © {new Date().getFullYear()} {siteData.site.logoText}. All rights reserved.
          </p>
          <a
            href="https://thwebworks.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--tone-muted)] hover:text-[var(--tone-text)] transition-colors"
          >
            developed by T&amp;H WebWorks
          </a>
        </div>
      </Container>
    </footer>
  );
}
