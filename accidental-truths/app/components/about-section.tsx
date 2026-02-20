import Image from "next/image";
import { Container } from "./Container";
import { siteData } from "../../lib/site-data";
import { assets } from "../../lib/assets";

const { heading, producerName, producerRole, producerBio, mission, contactEmail } = siteData.about;

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#1a1a1a] scroll-mt-24">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
          {heading}
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <article className="p-6 sm:p-8 rounded-lg bg-[#050505] border border-white/10">
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white/10 mb-4">
              <Image
                src={assets.about.creator}
                alt={`${producerName} — ${producerRole}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-white">{producerName}</h3>
            <p className="text-sm text-[#e65c01] uppercase tracking-wider mt-1">{producerRole}</p>
            <p className="mt-4 text-[#b2b2b2] leading-relaxed">
              {producerBio}
            </p>
          </article>
          <div>
            <p className="text-[#b2b2b2] leading-relaxed mb-6">
              {mission}
            </p>
            <p className="text-sm text-[#b2b2b2]">
              Contact:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-[#0099ff] hover:underline"
              >
                {contactEmail}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
