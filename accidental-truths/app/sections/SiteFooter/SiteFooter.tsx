import { SiteFooter } from "@/app/components/site-footer";
import { sectionIds } from "@/lib/site-data";

export function SiteFooterSection() {
  return (
    <section id={sectionIds.footer} data-section={sectionIds.footer}>
      <SiteFooter />
    </section>
  );
}
