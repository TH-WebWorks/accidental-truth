"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteData } from "../../lib/site-data";

const NAV = siteData.site.navLinks;
const CTA = siteData.site.primaryCta;
const LOGO_HREF = NAV[0]?.href ?? CTA.href;

function NavLinks({
  onNavigate,
  onLinkClick,
}: {
  onNavigate?: () => void;
  onLinkClick: () => void;
}) {
  const handleNavItemClick = () => {
    onNavigate?.();
    onLinkClick();
  };

  return (
    <>
      {NAV.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={handleNavItemClick}
          className="text-sm font-medium text-white/90 hover:text-white transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/10"
    : "bg-transparent border-b border-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between gap-4">
          <Link
            href={LOGO_HREF}
            className="text-lg font-semibold text-white hover:text-white/90 transition-colors"
          >
            {siteData.site.logoText}
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8"
          >
            <NavLinks onLinkClick={() => setMenuOpen(false)} />
            <a
              href={CTA.href.startsWith("#") ? CTA.href : CTA.href}
              target={CTA.href.startsWith("#") ? undefined : "_blank"}
              rel={CTA.href.startsWith("#") ? undefined : "noreferrer"}
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-medium uppercase tracking-wide bg-[#e65c01] text-white rounded hover:bg-[#e65c01]/90 transition-colors"
            >
              {CTA.label}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center w-10 h-10 gap-1.5 p-2 text-white"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-16 bg-[#050505] transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col items-center justify-center gap-8 pt-12 px-6"
          aria-label="Mobile"
        >
          <NavLinks onNavigate={() => setMenuOpen(false)} onLinkClick={() => setMenuOpen(false)} />
          <a
            href={CTA.href.startsWith("#") ? CTA.href : CTA.href}
            target={CTA.href.startsWith("#") ? undefined : "_blank"}
            rel={CTA.href.startsWith("#") ? undefined : "noreferrer"}
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 text-sm font-medium uppercase tracking-wide bg-[#e65c01] text-white rounded"
          >
            {CTA.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
