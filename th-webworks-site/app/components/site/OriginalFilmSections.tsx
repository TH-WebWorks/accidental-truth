import Image from "next/image";
import { Container } from "../Container";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionShell } from "../SectionShell";
import {
  CAST,
  CREW,
  FESTIVAL_LAURELS,
  META_ORIGINAL,
  ORIGINAL_FILM,
  WATCH_ORIGINAL,
  WHERE_TO_WATCH,
} from "../../data/siteContent";
import heroUfoRevelations from "../../../assets/hero_at_ufo_revelations.webp";

export function OriginalFilmSections() {
  return (
    <>
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
              src={heroUfoRevelations}
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
              {META_ORIGINAL.map((meta) => (
                <span key={meta}>{meta}</span>
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

      <RevealOnScroll>
        <SectionShell id="original-synopsis" variant="default" size="lg" divider="top" className="sec-about sec-directors sec-synopsis">
          <Container>
            <div className="ufo-frame ufo-frame--wide">
              <div className="ufo-pairs-grid">
                <article className="ufo-card ufo-pair ufo-pair--film">
                  <p className="sec-label">The Film</p>
                  <h2 className="sec-heading">Accidental Truth: UFO Revelations</h2>
                  <div className="synopsis-body">
                    <p>{ORIGINAL_FILM.synopsis}</p>
                    <p>{ORIGINAL_FILM.synopsis2}</p>
                    <p>{ORIGINAL_FILM.synopsis3}</p>
                  </div>
                </article>

                <article className="ufo-card ufo-pair ufo-pair--watch">
                  <h3 className="ufo-subheading">Where to Watch</h3>
                  <p className="where-to-watch-lead">{ORIGINAL_FILM.ctaHeadline}</p>
                  <div className="where-to-watch-grid">
                    {WHERE_TO_WATCH.map((watchOption) => (
                      <a
                        key={watchOption.label}
                        href={watchOption.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`where-to-watch-card ${watchOption.type === "rent" ? "where-to-watch-card--primary" : ""}`}
                      >
                        <span className="where-to-watch-meta">{watchOption.type === "rent" ? "Rent" : "Free"}</span>
                        <span className="where-to-watch-platform">{watchOption.label}</span>
                      </a>
                    ))}
                  </div>
                  <a href={WATCH_ORIGINAL} target="_blank" rel="noreferrer" className="where-to-watch-official">
                    Official Film Page on MUFON TV →
                  </a>
                </article>

                <article className="ufo-card ufo-pair ufo-pair--snapshot">
                  <h3 className="ufo-subheading">Film Snapshot</h3>
                  <div className="hero-block-meta ufo-meta-inline">
                    {META_ORIGINAL.map((meta) => (
                      <span key={meta}>{meta}</span>
                    ))}
                  </div>
                  <p className="sec-lead ufo-snapshot-stat">{ORIGINAL_FILM.festivalStats}</p>
                  <div className="hero-block-btns ufo-compact-btns">
                    <a href={WATCH_ORIGINAL} target="_blank" rel="noreferrer" className="hero-btn hero-btn-primary">
                      Watch the Film
                    </a>
                    <a href="#dvd-bluray" className="hero-btn hero-btn-outline">
                      DVD & Blu-ray
                    </a>
                  </div>
                </article>

                <article className="ufo-card ufo-pair ufo-pair--imminent">
                  <h3 className="ufo-subheading">Imminent</h3>
                  <p className="imminent-quote">{ORIGINAL_FILM.imminentQuote}</p>
                  <p className="imminent-credit">— Ron James</p>
                  <p className="imminent-congrats">Congratulations to Luis Elizondo for his book “Imminent”!</p>
                  <p className="imminent-cta-line">Here is where you can order a signed copy today!</p>
                  <a href={ORIGINAL_FILM.imminentHref} target="_blank" rel="noreferrer" className="hero-btn hero-btn-primary">
                    {ORIGINAL_FILM.imminentCta}
                  </a>
                </article>

                <article className="ufo-card ufo-pair ufo-pair--why">
                  <h3 className="ufo-subheading">Why This Film Matters</h3>
                  <blockquote className="ufo-why-quote" cite={WATCH_ORIGINAL}>
                    {ORIGINAL_FILM.pullQuote}
                  </blockquote>
                </article>
              </div>
            </div>
          </Container>
        </SectionShell>
      </RevealOnScroll>

      <RevealOnScroll>
        <SectionShell id="dvd-bluray" variant="default" size="lg" divider="top" className="sec-directors sec-dvd">
          <Container>
            <div className="ufo-frame">
              <p className="sec-label">UFO Revelations</p>
              <h2 className="sec-heading">Physical Media, Credits &amp; Awards</h2>
              <div className="ufo-bento ufo-bento--details">
                <article className="ufo-card ufo-card--dvd">
                  <h3 className="ufo-subheading">{ORIGINAL_FILM.dvdBluRay.title}</h3>
                  <p className="sec-lead sec-dvd-intro">{ORIGINAL_FILM.dvdBluRay.intro}</p>
                </article>

                <article className="ufo-card ufo-card--dvd-extras">
                  <h3 className="ufo-subheading">Bonus Features</h3>
                  <div className="dvd-extras-grid">
                    <div className="dvd-bonus-block">
                      <p className="dvd-bonus-title">Bonus features</p>
                      <ul className="dvd-bonus-list" aria-label="Bonus features">
                        {ORIGINAL_FILM.dvdBluRay.bonusFeatures.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="dvd-order-block">
                      <p className="dvd-bonus-title">Order</p>
                      <div className="dvd-pricing">
                        <span>Blu-ray — {ORIGINAL_FILM.dvdBluRay.bluRayPrice}</span>
                        <span>DVD — {ORIGINAL_FILM.dvdBluRay.dvdPrice}</span>
                      </div>
                    </div>
                  </div>
                  <a href={WATCH_ORIGINAL} target="_blank" rel="noreferrer" className="hero-btn hero-btn-primary">
                    Add to Cart (MUFON TV)
                  </a>
                </article>

                <article className="ufo-card" id="cast">
                  <h3 className="ufo-subheading">Cast</h3>
                  <ul className="cast-list">
                    {CAST.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </article>
                <article className="ufo-card" id="crew">
                  <h3 className="ufo-subheading">Crew</h3>
                  <div className="crew-block">
                    <p>
                      <strong>Written, Directed, Produced and Edited by:</strong>
                      <br />
                      {CREW.writtenDirectedProducedEdited}
                    </p>
                    <p>
                      <strong>Narrated By:</strong>
                      <br />
                      {CREW.narratedBy}
                    </p>
                    <p>
                      <strong>Executive Producers:</strong>
                      <br />
                      {CREW.executiveProducers.join(", ")}
                    </p>
                    <p>
                      <strong>Production Companies:</strong>
                      <br />
                      {CREW.productionCompanies.join(", ")}
                    </p>
                    <p>
                      <strong>Producers:</strong>
                      <br />
                      {CREW.producers.join(", ")}
                    </p>
                  </div>
                </article>
                <article className="ufo-card" id="laurels">
                  <h3 className="ufo-subheading">Awards</h3>
                  <p className="sec-lead ufo-awards-lead">Our laurels, festival selections, and contest wins.</p>
                  <ul className="laurels-list">
                    {FESTIVAL_LAURELS.map((laurel) => (
                      <li key={`${laurel.name}-${laurel.result}`}>
                        {laurel.href ? (
                          <a href={laurel.href} target="_blank" rel="noreferrer">
                            {laurel.name} – {laurel.result}
                          </a>
                        ) : (
                          <span>
                            {laurel.name} – {laurel.result}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </Container>
        </SectionShell>
      </RevealOnScroll>
    </>
  );
}
