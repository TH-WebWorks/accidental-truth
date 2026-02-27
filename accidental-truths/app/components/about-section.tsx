import Image from "next/image";
import { Container } from "./Container";
import { sectionIds, siteData } from "../../lib/site-data";
import { assets } from "../../lib/assets";

const { heading, producerName, producerRole, producerBio, mission } = siteData.about;

export function AboutSection() {
  return (
    <section
      id={sectionIds.about}
      data-section={sectionIds.about}
      className="flow-section border-y border-[var(--tone-border)] bg-[var(--tone-base)] scroll-mt-24"
    >
      <Container>
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--tone-muted)]">
            Production
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--tone-text)] sm:text-3xl">
            {heading}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <article className="rounded-xl border border-[var(--tone-border)] bg-white/[0.07] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.28)]">
            <div className="mb-5 flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[var(--tone-border)] bg-white/10">
                <Image
                  src={assets.about.creator}
                  alt={`${producerName} — ${producerRole}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--tone-text)]">{producerName}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                  {producerRole}
                </p>
              </div>
            </div>

            <p className="leading-relaxed text-[var(--tone-muted)] text-[0.9375rem] sm:text-base">{producerBio}</p>
          </article>

          <article className="rounded-xl border border-[var(--tone-border)] bg-white/[0.07] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.28)]">
            <h3 className="text-base font-semibold text-[var(--tone-text)]">Project Mission</h3>
            <p className="mt-3 leading-relaxed text-[var(--tone-muted)] text-[0.9375rem] sm:text-base">{mission}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-[var(--tone-border)] bg-[var(--tone-base)] p-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                  Format
                </p>
                <p className="mt-1 text-sm text-[var(--tone-text)]">Feature Documentary</p>
              </div>
              <div className="rounded-lg border border-[var(--tone-border)] bg-[var(--tone-base)] p-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--tone-muted)]">
                  Series
                </p>
                <p className="mt-1 text-sm text-[var(--tone-text)]">Accidental Truth</p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
