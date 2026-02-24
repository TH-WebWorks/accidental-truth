import type { Metadata } from "next";
import { caviar, panton } from "@/lib/fonts";
import { SmoothScroll } from "./components/SmoothScroll";
import "./globals.css";

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
  const wireframeModeEnabled = false;

  return (
    <html lang="en" className={`${panton.variable} ${caviar.variable}`}>
      <body
        className={`min-h-dvh bg-[var(--tone-base)] text-[var(--tone-text)] antialiased font-body ${
          wireframeModeEnabled ? "wireframe-mode" : ""
        }`}
      >
        <div>
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
