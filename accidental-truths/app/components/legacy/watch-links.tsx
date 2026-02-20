import { Container } from "../Container";
import { mufonUfoRevelations } from "../../../lib/mufon-ufo-revelations";

const { watchLinks } = mufonUfoRevelations;

export function WatchLinks() {
  return (
    <section className="py-8 bg-[#1a1a1a] border-y border-white/10">
      <Container>
        <div className="flex flex-wrap gap-4">
          {watchLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center min-h-[48px] px-6 py-3 text-sm font-medium uppercase tracking-wide rounded transition-colors ${
                link.type === "rent"
                  ? "bg-[#e65c01] text-white hover:bg-[#e65c01]/90"
                  : "border border-white/40 text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
