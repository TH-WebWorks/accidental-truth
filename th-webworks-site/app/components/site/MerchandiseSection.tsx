import { Container } from "../Container";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionShell } from "../SectionShell";
import { MOCK, ORIGINAL_FILM } from "../../data/siteContent";

export function MerchandiseSection() {
  return (
    <RevealOnScroll>
      <SectionShell id="merchandise" variant="default" size="lg" divider="top" className="sec-merchandise sec-directors">
        <Container>
          <p className="sec-label">Shop</p>
          <h2 className="sec-heading">Merchandise</h2>
          <p className="sec-lead sec-merch-intro">{ORIGINAL_FILM.swagIntro}</p>
          <div className="sec-body">
            <div className="merch-grid">
              {MOCK.merchItems.map((item) => (
                <article key={item.title} className="merch-card">
                  <div className="merch-card-image" />
                  <h3 className="merch-card-title">{item.title}</h3>
                  <p className="merch-card-price">{item.price}</p>
                  <a href={item.href} target="_blank" rel="noreferrer" className="hero-btn hero-btn-outline hero-btn-sm">
                    Shop on MUFON TV
                  </a>
                </article>
              ))}
            </div>
            <p className="merch-note">{MOCK.merchNote}</p>
          </div>
        </Container>
      </SectionShell>
    </RevealOnScroll>
  );
}
