import { Container } from "../Container";
import { WATCH_ORIGINAL } from "../../data/siteContent";

const FOOTER_LINKS = [
  { href: WATCH_ORIGINAL, label: "Watch UFO Revelations", external: true },
  { href: "#dvd-bluray", label: "DVD & Blu Ray" },
  { href: "#cast", label: "Cast" },
  { href: "#crew", label: "Crew" },
  { href: "#laurels", label: "Awards" },
  { href: "#merchandise", label: "Merchandise" },
  { href: "#mailing", label: "Mailing List" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" id="mailing">
      <Container>
        <div className="footer-inner">
          <p className="footer-brand">Accidental Truth</p>
          <nav className="footer-nav" aria-label="Footer">
            {FOOTER_LINKS.map((link, index) => (
              <span key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {link.label}
                </a>
                {index < FOOTER_LINKS.length - 1 ? (
                  <span className="footer-dot" aria-hidden>
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </nav>
          <p className="footer-crafted">
            Crafted by{" "}
            <a href="https://thwebworks.com" target="_blank" rel="noreferrer">
              T&H WebWorks
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
