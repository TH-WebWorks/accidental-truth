import { Container } from "../Container";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionShell } from "../SectionShell";
import { MOCK } from "../../data/siteContent";

export function PressSection() {
  return (
    <RevealOnScroll>
      <SectionShell id="press" variant="default" size="lg" divider="top" className="sec-press">
        <Container>
          <p className="sec-label">Recognition</p>
          <h2 className="sec-heading">Press &amp; Recognition</h2>
          <p className="sec-lead">What critics and audiences are saying.</p>
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
      </SectionShell>
    </RevealOnScroll>
  );
}
