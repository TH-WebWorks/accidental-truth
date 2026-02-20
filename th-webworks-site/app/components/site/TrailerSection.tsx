import { Container } from "../Container";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionShell } from "../SectionShell";
import { TRAILER_URL } from "../../data/siteContent";

export function TrailerSection() {
  return (
    <RevealOnScroll>
      <SectionShell id="trailer" variant="default" size="lg" divider="top" className="sec-trailer">
        <Container>
          <p className="sec-label">Watch</p>
          <h2 className="sec-heading">Trailer &amp; Media</h2>
          <p className="sec-lead">Watch the Accidental Truth trailer.</p>
          <div className="sec-body">
            <div className="media-block">
              <iframe
                title="Accidental Truth trailer"
                src={TRAILER_URL}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
                className="media-embed"
              />
            </div>
          </div>
        </Container>
      </SectionShell>
    </RevealOnScroll>
  );
}
