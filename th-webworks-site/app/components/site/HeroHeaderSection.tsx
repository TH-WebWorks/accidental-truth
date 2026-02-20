import Image from "next/image";
import heroAtNext from "../../../assets/hero_at_next.webp";

const NAV_LINKS = [
  { href: "#new-film", label: "N E X T" },
  { href: "#original-film", label: "UFO REVELATIONS" },
  { href: "#dvd-bluray", label: "DVD & Blu Ray" },
  { href: "#cast", label: "Cast" },
  { href: "#crew", label: "Crew" },
  { href: "#laurels", label: "Awards" },
  { href: "#merchandise", label: "Merchandise" },
  { href: "#about", label: "About" },
];

export function HeroHeaderSection() {
  return (
    <section className="hero-block hero-new" id="top">
      <div className="hero-block-bg hero-new-bg">
        <div className="hero-block-bg-inner">
          <Image
            src={heroAtNext}
            alt="Accidental Truth: N E X T"
            fill
            priority
            sizes="100vw"
            className="hero-block-img hero-new-img"
          />
        </div>
        <div className="hero-block-overlay" />
      </div>
      <div className="hero-block-content">
        <nav className="hero-nav" aria-label="Primary">
          <a href="#top" className="hero-nav-home">
            Accidental Truth
          </a>
          <div className="hero-nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="hero-block-text">
          <p className="hero-block-badge">New installment</p>
          <h1 className="hero-block-title">Accidental Truth: N E X T</h1>
          <p className="hero-block-subtitle">The next chapter</p>
          <p className="hero-block-status">The story continues.</p>
          <div className="hero-block-btns">
            <a href="#mailing" className="hero-btn hero-btn-primary">
              Join Mailing List
            </a>
            <a href="#original-film" className="hero-btn hero-btn-outline">
              Watch UFO REVELATIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
