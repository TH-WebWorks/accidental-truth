import type { Metadata } from "next";
import { caviar, panton } from "@/lib/fonts";
import { defaultMetadata } from "@/lib/metadata";
import { FilmStructuredData } from "./components/FilmStructuredData";
import { SmoothScroll } from "./components/SmoothScroll";
import "./globals.css";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wireframeModeEnabled = false;

  return (
    <html lang="en" className={`${panton.variable} ${caviar.variable}`}>
      <body
        className={`min-h-dvh bg-[var(--tone-base)] text-[var(--tone-text)] antialiased font-body ${
          wireframeModeEnabled ? "wireframe-mode" : ""
        }`}
      >
        <FilmStructuredData />
        <div>
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
