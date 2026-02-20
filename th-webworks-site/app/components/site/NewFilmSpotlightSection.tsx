import Image from "next/image";
import { Container } from "../Container";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionShell } from "../SectionShell";
import { MOCK, TRAILER_URL } from "../../data/siteContent";
import heroAtNext from "../../../assets/hero_at_next.webp";

export function NewFilmSpotlightSection() {
  return (
    <RevealOnScroll>
      <SectionShell id="new-film" variant="default" size="lg" divider="top" className="spotlight-section">
        <Container>
          <div className="spotlight">
            <div className="spotlight-poster">
              <Image
                src={heroAtNext}
                alt="Accidental Truth: N E X T — key art"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="spotlight-poster-img"
              />
            </div>
            <div className="spotlight-body">
              <div className="spotlight-body-header">
                <p className="spotlight-label">New Film Spotlight</p>
                <h2 className="spotlight-title">Accidental Truth: N E X T</h2>
              </div>
              <p className="spotlight-synopsis">{MOCK.newFilmSynopsis}</p>
              <div className="spotlight-video">
                <iframe
                  title="Accidental Truth trailer"
                  src={TRAILER_URL}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              </div>
              <a href="#mailing" className="hero-btn hero-btn-primary spotlight-cta">
                Get updates
              </a>
            </div>
          </div>
        </Container>
      </SectionShell>
    </RevealOnScroll>
  );
}
