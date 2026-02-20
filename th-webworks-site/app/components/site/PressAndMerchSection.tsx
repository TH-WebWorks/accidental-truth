import { Container } from "../Container";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionShell } from "../SectionShell";
import { MOCK, ORIGINAL_FILM } from "../../data/siteContent";

export function PressAndMerchSection() {
  return (
    <RevealOnScroll>
      <SectionShell id="recognition" variant="default" size="lg" divider="top" className="sec-press-merch">
        <Container>
          <div id="press" className="press-merch-block press-block">
            <p className="sec-label">Recognition</p>
            <h2 className="sec-heading">Press &amp; Recognition</h2>
            <p className="sec-lead">What critics and audiences are saying.</p>
          </div>
        </Container>
        <div className="press-marquee-bleed">
          <div className="press-marquee" aria-hidden="true">
            <div className="press-marquee-inner">
              {[...MOCK.press, ...MOCK.press].map((item, index) => (
                <blockquote key={`${item.source}-${index}`} className="press-card">
                  <span className="press-card-quote-mark" aria-hidden>
                    &ldquo;
                  </span>
                  <p className="press-quote">{item.quote}</p>
                  <footer className="press-card-footer">
                    <cite className="press-source">{item.source}</cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
        <Container>
          <div id="merchandise" className="press-merch-block merch-block">
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
          </div>
        </Container>
      </SectionShell>
    </RevealOnScroll>
  );
}
