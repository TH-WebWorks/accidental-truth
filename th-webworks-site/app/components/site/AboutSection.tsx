import Image from "next/image";
import { Container } from "../Container";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionShell } from "../SectionShell";
import { MOCK } from "../../data/siteContent";
import creatorImage from "../../../assets/ron_lou.jpg";

export function AboutSection() {
  return (
    <RevealOnScroll>
      <SectionShell id="about" variant="default" size="lg" divider="top" className="sec-about sec-directors">
        <Container>
          <p className="sec-label">About</p>
          <h2 className="sec-heading">About the Creator</h2>
          <p className="sec-lead">The voice behind the series.</p>
          <div className="sec-body">
            <div className="sec-two-col sec-about-grid">
              <div className="sec-media sec-about-media">
                <Image
                  src={creatorImage}
                  alt="Ron James with Lou — behind the scenes"
                  width={960}
                  height={540}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="sec-copy sec-about-copy">
                <p className="sec-about-lead">{MOCK.aboutMission}</p>
                <p>
                  The Accidental Truth series is produced independently to keep the narrative in the hands of the people who lived
                  it—and to give the audience a single, clear place to watch, support, and follow what happens next.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionShell>
    </RevealOnScroll>
  );
}
