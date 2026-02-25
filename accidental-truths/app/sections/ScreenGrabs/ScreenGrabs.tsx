import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { sectionIds } from "@/lib/site-data";
import { assets } from "@/lib/assets";

export function ScreenGrabsSection() {
  return (
    <SectionShell
      id={sectionIds.gallery}
      className="flow-section bg-[var(--tone-base)] border-b border-[var(--tone-border)] scroll-mt-24"
      ariaLabel="Gallery from Accidental Truth: NEXT"
    >
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--tone-text)] mb-2 text-center">
          Gallery
        </h2>
        <p className="text-[var(--tone-muted)] text-center max-w-2xl mx-auto mb-10">
          Moments from Accidental Truth: NEXT
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 list-none p-0 m-0">
          {assets.screenGrabsAtNext.map((img, i) => (
            <li key={i} className="relative aspect-video rounded-lg overflow-hidden bg-[var(--tone-surface)] border border-[var(--tone-border)]">
              <Image
                src={img}
                alt={`Screen grab ${i + 1} from Accidental Truth: NEXT`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </Container>
    </SectionShell>
  );
}
