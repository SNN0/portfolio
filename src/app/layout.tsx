import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "../styles/workstation.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sinaneyuboglu.dev"),
  alternates: { canonical: "/" },
  title: { default: "Sinan Eyüboğlu - BioAI Workstation", template: "%s | SinanOS" },
  description: "Portfolio of Sinan Eyüboğlu, a molecular biotechnology graduate and AI master's student working on bioinformatics, omics, protein dynamics, computational biology, and AI-assisted drug discovery.",
  keywords: ["BioAI", "computational biology", "bioinformatics", "omics", "protein dynamics", "drug discovery", "Sinan Eyüboğlu"],
  authors: [{ name: "Sinan Eyüboğlu" }],
  openGraph: { title: "SinanOS - BioAI Workstation", description: "AI-driven research pipelines for omics, protein dynamics, and drug discovery.", type: "website", images: [{ url: "/og/sinanos-og-resized.png", width: 1200, height: 630, alt: "Retro BioAI workstation with protein and omics visualizations" }] },
  twitter: { card: "summary_large_image", title: "SinanOS - BioAI Workstation", description: "AI-driven research pipelines for omics, protein dynamics, and drug discovery.", images: ["/og/sinanos-og-resized.png"] },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07111f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
