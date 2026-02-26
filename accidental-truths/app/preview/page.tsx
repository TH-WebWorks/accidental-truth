import type { Metadata } from "next";
import { getMetadataBase } from "@/lib/metadata";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  const base = getMetadataBase();
  const canonicalUrl = base.toString().replace(/\/$/, "") || base.toString();
  const ogImageUrl = `${canonicalUrl}/assets/og-poster.webp`;

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif", maxWidth: "720px" }}>
      <h1>Share Preview Verification</h1>
      <p>Internal QA only. This page is noindexed.</p>

      <h2>Canonical URL</h2>
      <p style={{ wordBreak: "break-all" }}>{canonicalUrl}</p>

      <h2>OG Image</h2>
      <img
        src="/assets/og-poster.webp"
        alt="OG poster preview"
        width={600}
        height={315}
        style={{ maxWidth: "100%", height: "auto", border: "1px solid #ccc" }}
      />

      <h2>Copy block</h2>
      <pre
        style={{
          padding: "1rem",
          background: "#f5f5f5",
          borderRadius: "4px",
          overflow: "auto",
          fontSize: "0.875rem",
        }}
      >
        {`Production URL: ${canonicalUrl}
OG Image URL: ${ogImageUrl}`}
      </pre>
    </main>
  );
}
