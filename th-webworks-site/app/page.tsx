import Image from "next/image";
import { RevealOnScroll } from "./components/RevealOnScroll";
import { SectionShell } from "./components/SectionShell";
import { Container } from "./components/Container";
import heroAtNext from "../assets/hero_at_next.webp";
import heroUfoRevelations from "../assets/hero_at_ufo_revelations.webp";
import creatorImage from "../assets/ron_lou.jpg";

const originalFilmImage = heroUfoRevelations;

const WATCH_ORIGINAL = "https://www.mufontelevision.com/video/accidental-truth/";
const META_ORIGINAL = ["PG", "01:29", "Released 2023", "IMDB 6.1", "Documentary"];

/* Where to watch UFO Revelations — update hrefs when final links are confirmed */
const WHERE_TO_WATCH = [
  { label: "Amazon", href: "https://www.amazon.com/s?k=Accidental+Truth+UFO+Revelations", type: "rent" as const },
  { label: "Apple", href: "https://tv.apple.com/us/search?term=Accidental%20Truth%20UFO%20Revelations", type: "rent" as const },
  { label: "Tubi", href: "https://tubitv.com/search/accidental%20truth", type: "free" as const },
  { label: "YouTube", href: "https://www.youtube.com/results?search_query=Accidental+Truth+UFO+Revelations", type: "free" as const },
];

/* Official copy from MUFON Television (accidental-truth page) — parity with original site */
const ORIGINAL_FILM = {
  ctaHeadline: "See Luis Elizondo in “Accidental Truth – UFO Revelations” — Narrated By Matthew Modine — WINNER of 28 Film Festival Awards!",
  synopsis:
    "In April 2023, “Accidental Truth, UFO Revelations”, narrated by acclaimed actor Matthew Modine, shocked the intelligence community, the body politic, and the public. In 2021, filmmaker Ron James met with Congressman Tim Burchett and told him what years of investigations by MUFON and others have proven about the UFO cover-up. Around that time, Burchett led a storm of demands for UFO Disclosure in Washington DC and the world. It is the film that delivered the evidence and set the stage for the story that whistleblower David Grusch revealed to the world and to Congress.",
  pullQuote: "This is the only UFO documentary ever mentioned in a congressional hearing by name.",
  synopsis2:
    "The US Government and private industries are in possession of non-human technology. They are engaged in programs to reverse engineer the technology and more. The story is true. You will be convinced through never before seen interviews, new evidence and government insiders “accidentally” revealing the truth through their sometimes mistaken words.",
  synopsis3:
    "“Accidental Truth, UFO Revelations” has won a stunning 24 film festival awards and been called, “The most important UFO documentary ever made.” An incredible cast of experts and insiders come together as never before to reveal the most important story in the history of mankind.",
  festivalStats: "28 Film Festival Awards · Accepted to 32 festivals",
  imminentQuote:
    "Disclosure is getting closer, and Luis Elizondo’s New Book “Imminent” is a major move ahead in the quest for the truth! Lue has been my friend for a long time and I am happy for him and proud of the work he has done!",
  imminentCta: "ORDER A SIGNED COPY OF “IMMINENT”",
  imminentHref: "https://www.mufontelevision.com/video/accidental-truth/",
  dvdBluRay: {
    title: '"Accidental Truth - UFO Revelations" Now on DVD & Blu Ray',
    intro:
      "Announcing “Accidental Truth – UFO Revelations” A film By Ron James. Narrated by Matthew Modine. Now available to rent and to buy on DVD and Blu-Ray! We are proud to announce that the DVD & Blu Ray versions are now available. This edition is in celebration of our 24th film festival award! We've set a record forwards for an independent UFO Film. We have included some great bonus features!",
    bonusFeatures: [
      "Full length interview with Congressman Tim Burchett",
      "Autographed limited edition hologram card",
      "Limited Edition Award Celebration packaging",
    ],
    bluRayPrice: "$29.95",
    dvdPrice: "$24.95",
  },
  swagIntro:
    "Get the SWAG! Although the film is done, we still need your help. Our animation team is in the Ukraine. Despite the war, the guys kept working as best they could. They endured power outages, defense deployments, missile flying over their homes, and still managed to deliver some of the best custom animation ever in an independent UFO Documentary. Both team members lost equipment due to missile attacks and power fluctuations. They need new computers and additional support. A portion of the proceeds from our SWAG sales will go to getting this done for them. The “Accidental Truth” collection is coming online. We are adding new merch daily. Our movie poster art is really cool and people are loving the T-shirts! The shirts are 100% Soft ringspun Gildan Cotton. You'll love yours! FREE SHIPPING IN THE US! Get your SWAG now and we'll throw in a free month of access to MUFON TV. You'll also get access to the “Accidental Truth Insider” section, where deeper interviews and extra material will be found.",
};

/* Cast — from MUFON accidental-truth page */
const CAST = [
  "Congressman Tim Burchett", "Ralph Blumenthal", "Lue Elizondo", "Dr. Michio Kaku", "Dr. Garry Nolan",
  "Col. John Alexander", "Christopher Mellon", "Richard Dolan", "Dave MacDonald", "Nick Pope",
  "Paul Hynek", "Don Schmitt", "Mike Bara", "Katie Griboski (Paige)", "Melinda Leslie",
  "Elizabeth April", "Cheryll Jones", "Danny Sheehan", "Jimmy Church", "Richard Lang",
  "James Fox", "Ron James",
];

/* Crew — from MUFON accidental-truth page */
const CREW = {
  writtenDirectedProducedEdited: "Ron James",
  narratedBy: "Matthew Modine",
  executiveProducers: ["Ron James", "Matthew Modine", "Adam Rackoff", "Paul Davids", "Hollace Davids", "Jennifer Stein"],
  productionCompanies: ["Ron James Television", "MUFON Television", "Cinco Dedos Peliculas"],
  producers: ["Christopher O'Brien", "Grant Ibrihim", "Jim Martin"],
};

/* Festival laurels — from MUFON accidental-truth page (links where available) */
const FESTIVAL_LAURELS = [
  { name: "Sedona Film Festival", result: "Official Selection", href: "https://prod5.agileticketing.net/WebSales/pages/info.aspx?evtinfo=271496~e8932fbb-a9ae-4437-a638-ff0cf1793527&epguid=f7b94766-699c-4aa0-9f9b-8245a9cefc05&" },
  { name: "Sonoma Film Festival", result: "Official Selection", href: "https://2023siff.eventive.org/schedule" },
  { name: "Midwest Weird Fest", result: "Official Selection", href: "http://www.midwestweirdfest.com/program#/accidental-truth-sat-mar-4-12pm/" },
  { name: "Docs Without Borders", result: "Official Selection · WINNER – Outstanding Excellence", href: "https://docswithoutbordersfilmfest.com/DWBFFWinter2023WINNERS.html" },
  { name: "Accolade Global Film Competition", result: "Official Selection · WINNER – Award of Excellence", href: "https://accoladecompetition.org/" },
  { name: "ParaPod Film Festival", result: "Official Selection", href: "https://parapodfestival.com/" },
  { name: "IndieFEST Film Awards", result: "Official Selection · WINNER – Award of Excellence", href: "https://theindiefest.com/" },
  { name: "Hollywood Gold Award", result: "Official Selection · WINNER – GOLD Award", href: "https://hollywoodgoldawards.com/january-2023" },
];

/* Mock content for Ron presentation — replace with final copy when supplied */
const MOCK = {
  newFilmSynopsis:
    "The next chapter in the Accidental Truth series continues where the first film left off: insider testimony, congressional pressure, and the ongoing push for disclosure. Same team, same commitment to putting the story on the record.",
  merchItems: [
    { title: "Limited Edition Accidental Truth T-Shirt", price: "$24.99 – $26.99", href: WATCH_ORIGINAL },
    { title: "Accidental Truth 15 oz Coffee Mug", price: "$18.75", href: WATCH_ORIGINAL },
    { title: "Accidental Truth Mouse Pad", price: "$12.50", href: WATCH_ORIGINAL },
    { title: "DVD & Blu-Ray (with bonus features)", price: "$24.95 – $29.95", href: WATCH_ORIGINAL },
  ],
  merchNote:
    "A portion of SWAG proceeds supports our animation team. FREE SHIPPING in the US. Store embed (e.g. Shopify) will replace this when ready.",
  press: [
    { quote: "A necessary film at a crucial moment.", source: "Documentary Magazine" },
    { quote: "Brings the conversation into the open.", source: "IndieWire" },
    { quote: "Finally, a documentary that lets the witnesses speak.", source: "The Hollywood Reporter" },
    { quote: "Riveting and long overdue.", source: "Variety" },
    { quote: "The kind of film that can change the conversation.", source: "Film Threat" },
    { quote: "Essential viewing for anyone paying attention.", source: "Paste Magazine" },
  ],
  aboutMission:
    "Ron James has spent years documenting the UAP story and the people behind it. The Accidental Truth series exists to put firsthand accounts and evidence in front of the public—no spin, no sensationalism, just the story as it unfolded.",
  footerCredits: "A film by Ron James. Narrated by Matthew Modine. © 2026 Accidental Truth. All rights reserved.",
};

export default function Home() {
  return (
    <main className="site">
      {/* 1) Hero / Header */}
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
            <a href="#top" className="hero-nav-home">Accidental Truth</a>
            <div className="hero-nav-links">
              <a href="#new-film">N E X T</a>
              <a href="#original-film">UFO REVELATIONS</a>
              <a href="#dvd-bluray">DVD &amp; Blu Ray</a>
              <a href="#cast">Cast</a>
              <a href="#crew">Crew</a>
              <a href="#laurels">Awards</a>
              <a href="#merchandise">Merchandise</a>
              <a href="#about">About</a>
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

      {/* 2) New Film Spotlight — poster left, copy + trailer + CTA right */}
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
                <p className="spotlight-label">New Film Spotlight</p>
                <h2 className="spotlight-title">Accidental Truth: N E X T</h2>
                <p className="spotlight-synopsis">{MOCK.newFilmSynopsis}</p>
                <div className="spotlight-video">
                  <iframe
                    title="Accidental Truth trailer"
                    src="https://player.vimeo.com/video/896080484?dnt=1&app_id=122963"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                  />
                </div>
                <a href="#mailing" className="hero-btn hero-btn-primary">
                  Get updates
                </a>
              </div>
            </div>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      {/* 3) UFO Revelations — clearly separated */}
      <SectionShell variant="gridGlow" size="md" divider="both" className="sec-divider-wrap">
        <Container>
          <div className="divider-content">
            <h2 className="divider-title">UFO REVELATIONS</h2>
            <p className="divider-desc">Accidental Truth (2023) — watch below</p>
          </div>
        </Container>
      </SectionShell>

      <section className="hero-block hero-original" id="original-film">
        <div className="hero-block-bg">
          <div className="hero-block-bg-inner">
            <Image
              src={originalFilmImage}
              alt="Accidental Truth: UFO Revelations"
              fill
              sizes="100vw"
              className="hero-block-img hero-original-img"
            />
          </div>
          <div className="hero-block-overlay" />
        </div>
        <div className="hero-block-content hero-original-content">
          <div className="hero-original-inner">
            <p className="hero-block-badge">Accidental Truth (2023)</p>
            <h2 className="hero-original-title">Accidental Truth</h2>
            <p className="hero-original-subtitle">UFO Revelations · It&apos;s Not A Story</p>
            <div className="hero-block-meta">
              {META_ORIGINAL.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <p className="sec-lead" style={{ marginTop: "var(--space)", marginBottom: "var(--space)" }}>
              {ORIGINAL_FILM.festivalStats}
            </p>
            <div className="hero-block-btns">
              <a href={WATCH_ORIGINAL} target="_blank" rel="noreferrer" className="hero-btn hero-btn-primary">
                Watch the Film
              </a>
              <a href="#original-synopsis" className="hero-btn hero-btn-outline">
                Read Synopsis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Watch — compact strip below UFO Revelations hero */}
      <RevealOnScroll>
        <SectionShell variant="default" size="sm" divider="top" className="sec-directors sec-where-to-watch">
          <Container>
            <p className="where-to-watch-label">Where to Watch</p>
            <p className="where-to-watch-lead">{ORIGINAL_FILM.ctaHeadline}</p>
            <div className="where-to-watch-grid">
              {WHERE_TO_WATCH.map((w) => (
                <a
                  key={w.label}
                  href={w.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`where-to-watch-card ${w.type === "rent" ? "where-to-watch-card--primary" : ""}`}
                >
                  <span className="where-to-watch-meta">{w.type === "rent" ? "Rent" : "Free"}</span>
                  <span className="where-to-watch-platform">{w.label}</span>
                </a>
              ))}
            </div>
            <a href={WATCH_ORIGINAL} target="_blank" rel="noreferrer" className="where-to-watch-official">
              Official Film Page on MUFON TV →
            </a>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      {/* Official synopsis + pull quote (from MUFON site) */}
      <RevealOnScroll>
        <SectionShell id="original-synopsis" variant="default" size="lg" divider="top" className="sec-about sec-directors sec-synopsis">
          <Container>
            <p className="sec-label">The Film</p>
            <h2 className="sec-heading">Accidental Truth: UFO Revelations</h2>
            <div className="synopsis-block">
              <blockquote className="synopsis-pull-quote" cite={WATCH_ORIGINAL}>
                {ORIGINAL_FILM.pullQuote}
              </blockquote>
              <div className="synopsis-body">
                <p>{ORIGINAL_FILM.synopsis}</p>
                <p>{ORIGINAL_FILM.synopsis2}</p>
                <p>{ORIGINAL_FILM.synopsis3}</p>
              </div>
            </div>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      {/* Ron James / Elizondo “Imminent” block — from original MUFON site */}
      <RevealOnScroll>
        <SectionShell variant="default" size="md" divider="top" className="sec-directors sec-imminent">
          <Container>
            <div className="imminent-block">
              <p className="imminent-quote">{ORIGINAL_FILM.imminentQuote}</p>
              <p className="imminent-credit">— Ron James</p>
              <p className="imminent-congrats">Congratulations to Luis Elizondo for his book “Imminent”!</p>
              <p className="imminent-cta-line">Here is where you can order a signed copy today!</p>
              <a href={ORIGINAL_FILM.imminentHref} target="_blank" rel="noreferrer" className="hero-btn hero-btn-primary">
                {ORIGINAL_FILM.imminentCta}
              </a>
            </div>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      {/* DVD & Blu Ray — from original MUFON site */}
      <RevealOnScroll>
        <SectionShell id="dvd-bluray" variant="default" size="lg" divider="top" className="sec-directors sec-dvd">
          <Container>
            <p className="sec-label">UFO Revelations</p>
            <h2 className="sec-heading">{ORIGINAL_FILM.dvdBluRay.title}</h2>
            <p className="sec-lead sec-dvd-intro">{ORIGINAL_FILM.dvdBluRay.intro}</p>
            <div className="dvd-bonus-block">
              <p className="dvd-bonus-title">Bonus features</p>
              <ul className="dvd-bonus-list" aria-label="Bonus features">
                {ORIGINAL_FILM.dvdBluRay.bonusFeatures.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="dvd-pricing">
              <span>Blu-ray — {ORIGINAL_FILM.dvdBluRay.bluRayPrice}</span>
              <span>DVD — {ORIGINAL_FILM.dvdBluRay.dvdPrice}</span>
            </div>
            <a href={WATCH_ORIGINAL} target="_blank" rel="noreferrer" className="hero-btn hero-btn-primary">
              Add to Cart (MUFON TV)
            </a>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      {/* Cast — from original MUFON site */}
      <RevealOnScroll>
        <SectionShell id="cast" variant="default" size="lg" divider="top" className="sec-directors sec-cast">
          <Container>
            <p className="sec-label">UFO Revelations</p>
            <h2 className="sec-heading">Cast</h2>
            <ul className="cast-list">
              {CAST.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      {/* Crew — from original MUFON site */}
      <RevealOnScroll>
        <SectionShell id="crew" variant="default" size="lg" divider="top" className="sec-directors sec-crew">
          <Container>
            <p className="sec-label">UFO Revelations</p>
            <h2 className="sec-heading">Crew</h2>
            <div className="crew-block">
              <p><strong>Written, Directed, Produced and Edited by:</strong><br />{CREW.writtenDirectedProducedEdited}</p>
              <p><strong>Narrated By:</strong><br />{CREW.narratedBy}</p>
              <p><strong>Executive Producers:</strong><br />{CREW.executiveProducers.join(", ")}</p>
              <p><strong>Production Companies:</strong><br />{CREW.productionCompanies.join(", ")}</p>
              <p><strong>Producers:</strong><br />{CREW.producers.join(", ")}</p>
            </div>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      {/* Festival laurels — from original MUFON site */}
      <RevealOnScroll>
        <SectionShell id="laurels" variant="default" size="lg" divider="top" className="sec-directors sec-laurels">
          <Container>
            <p className="sec-label">UFO Revelations</p>
            <h2 className="sec-heading">Festival &amp; Contest Awards</h2>
            <p className="sec-lead">Our Laurels — festival and contest awards and selections.</p>
            <ul className="laurels-list">
              {FESTIVAL_LAURELS.map((l, i) => (
                <li key={i}>
                  {l.href ? (
                    <a href={l.href} target="_blank" rel="noreferrer">{l.name} – {l.result}</a>
                  ) : (
                    <span>{l.name} – {l.result}</span>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      {/* 4) Trailer / Media Block */}
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
                  src="https://player.vimeo.com/video/896080484?dnt=1&app_id=122963"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  className="media-embed"
                />
              </div>
            </div>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      {/* 5) Merchandise — products aligned with MUFON site; store embed when ready */}
      <RevealOnScroll>
        <SectionShell id="merchandise" variant="default" size="lg" divider="top" className="sec-merchandise sec-directors">
          <Container>
            <p className="sec-label">Shop</p>
            <h2 className="sec-heading">Merchandise</h2>
            <p className="sec-lead sec-merch-intro">
              {ORIGINAL_FILM.swagIntro}
            </p>
            <div className="sec-body">
              <div className="merch-grid">
                {MOCK.merchItems.map((item, i) => (
                  <article key={i} className="merch-card">
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

      {/* 6) Press — full-width scrolling marquee */}
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
                {[...MOCK.press, ...MOCK.press].map((item, i) => (
                  <blockquote key={i} className="press-card">
                    <span className="press-card-quote-mark" aria-hidden>&ldquo;</span>
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

      {/* 7) About / Creator — mock: full bio/mission */}
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
                    The Accidental Truth series is produced independently to keep the narrative in the hands of the people who lived it—and to give the audience a single, clear place to watch, support, and follow what happens next.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      {/* 8) Footer */}
      <footer className="site-footer" id="mailing">
        <Container>
          <div className="footer-inner">
            <p className="footer-brand">Accidental Truth</p>
            <nav className="footer-nav" aria-label="Footer">
              <a href={WATCH_ORIGINAL} target="_blank" rel="noreferrer">Watch UFO Revelations</a>
              <span className="footer-dot" aria-hidden>·</span>
              <a href="#dvd-bluray">DVD &amp; Blu Ray</a>
              <span className="footer-dot" aria-hidden>·</span>
              <a href="#cast">Cast</a>
              <span className="footer-dot" aria-hidden>·</span>
              <a href="#crew">Crew</a>
              <span className="footer-dot" aria-hidden>·</span>
              <a href="#laurels">Awards</a>
              <span className="footer-dot" aria-hidden>·</span>
              <a href="#merchandise">Merchandise</a>
              <span className="footer-dot" aria-hidden>·</span>
              <a href="#mailing">Mailing List</a>
              <span className="footer-dot" aria-hidden>·</span>
              <a href="#">Privacy</a>
              <span className="footer-dot" aria-hidden>·</span>
              <a href="#">Terms</a>
            </nav>
            <p className="footer-crafted">
              Crafted by <a href="https://thwebworks.com" target="_blank" rel="noreferrer">T&H WebWorks</a>
            </p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
