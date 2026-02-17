import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "./components/SmoothScroll";
import "./globals.css";

/* Caviar Dreams — large / important text (display) */
const caviarDreams = localFont({
  src: [
    { path: "../fonts/caviar_dreams/CaviarDreams.ttf", weight: "400" },
    { path: "../fonts/caviar_dreams/CaviarDreams_Bold.ttf", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
});

/* Panton — body and everything else */
const panton = localFont({
  src: [
    { path: "../fonts/panton/Commercial/PantonDemo-Light.otf", weight: "300" },
    { path: "../fonts/panton/Commercial/PantonDemo-Black.otf", weight: "700" },
  ],
  variable: "--font-panton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accidental Truth: UFO Revelations",
  description:
    "Official one-page presentation for the documentary film Accidental Truth: UFO Revelations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caviarDreams.variable} ${panton.variable}`}>
      <body className="min-h-dvh bg-[#171717] text-white antialiased font-[var(--font-panton)]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
