"use client";

import type { ReactNode } from "react";

type Variant = "default" | "grid" | "gridGlow";
type Size = "sm" | "md" | "lg";
type Divider = "none" | "top" | "bottom" | "both";

type Props = {
  id?: string;
  variant?: Variant;
  size?: Size;
  divider?: Divider;
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  variant = "default",
  size = "lg",
  divider = "none",
  className = "",
  children,
}: Props) {
  return (
    <section
      id={id}
      className={`section-shell section-shell--${variant} section-shell--${size} section-shell--divider-${divider} ${className}`.trim()}
    >
      {variant === "grid" && <div className="section-shell__grid" aria-hidden />}
      {variant === "gridGlow" && (
        <>
          <div className="section-shell__grid" aria-hidden />
          <div className="section-shell__glow section-shell__glow--orange" aria-hidden />
          <div className="section-shell__glow section-shell__glow--blue" aria-hidden />
        </>
      )}
      <div className="section-shell__inner">{children}</div>
    </section>
  );
}
