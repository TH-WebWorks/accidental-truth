import type { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
  dataSection?: string;
  ariaLabel?: string;
};

export function SectionShell({ id, className = "", children, dataSection, ariaLabel }: Props) {
  return (
    <section id={id} data-section={dataSection ?? id} className={className} aria-label={ariaLabel}>
      {children}
    </section>
  );
}
