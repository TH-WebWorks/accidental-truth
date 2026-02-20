/**
 * Local font loader for Accidental Truth site.
 * Panton = main body text (--font-body).
 * Caviar Dreams = headings, hero titles, section headers, nav (--font-heading).
 * Font files from th-webworks-site/fonts/ (or assets/fonts/ if you add woff2 there).
 * Uses next/font/local for optimization; display: swap.
 */

import localFont from "next/font/local";

/** Panton — main body text. Variable: --font-body */
export const panton = localFont({
  src: [
    { path: "../fonts/panton/Commercial/PantonDemo-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/panton/Commercial/PantonDemo-Black.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

/** Caviar Dreams — headings, hero titles, section headers, nav. Variable: --font-heading */
export const caviar = localFont({
  src: [
    { path: "../fonts/caviar_dreams/CaviarDreams.ttf", weight: "400", style: "normal" },
    { path: "../fonts/caviar_dreams/CaviarDreams_Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});
