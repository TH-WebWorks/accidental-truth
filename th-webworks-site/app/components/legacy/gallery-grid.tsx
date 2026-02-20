import Image from "next/image";
import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";
import { assets } from "../../../lib/assets";

const { galleryImages } = mufonUfoRevelations;

export function GalleryGrid() {
  return (
    <section id="gallery" className="py-12 sm:py-16 bg-[#1a1a1a] scroll-mt-24">
      <Container>
        <h2 className="text-xl font-semibold text-white mb-4">Gallery</h2>
        <p className="text-[#b2b2b2] mb-8 max-w-xl">
          Here are some pics from the film! Stay tuned and come back often, this page will be updated frequently with insider info and great content and offers.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((name) => (
            <div
              key={name}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#050505] border border-white/10"
            >
              <Image
                src={assets.getGalleryImage(name)}
                alt={name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
