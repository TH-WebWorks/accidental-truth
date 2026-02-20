import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

export function HashtagsLine() {
  return (
    <section className="py-8 bg-[#050505] border-y border-white/10">
      <Container>
        <p className="text-sm text-[#b2b2b2] break-words">
          {mufonUfoRevelations.hashtags}
        </p>
      </Container>
    </section>
  );
}
