"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });
    let rafId = 0;
    const headerOffset = -88;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const scrollToHash = (hash: string) => {
      const id = hash.replace(/^#/, "");
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      lenis.scrollTo(target, { offset: headerOffset });
    };

    const onDocumentClick = (event: MouseEvent) => {
      const clicked = event.target as Element | null;
      const anchor = clicked?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      event.preventDefault();
      scrollToHash(href);
      window.history.replaceState(null, "", href);
    };

    document.addEventListener("click", onDocumentClick);

    if (window.location.hash) {
      requestAnimationFrame(() => {
        scrollToHash(window.location.hash);
      });
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onDocumentClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
