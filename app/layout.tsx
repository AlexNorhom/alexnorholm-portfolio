import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import Header from "@/components/header/Header";
import { LanguageProvider } from "@/components/shared/LanguageProvider";
import Polyfills from "@/components/shared/Polyfills";

// ✅ Mets ton URL Vercel ici pour l’instant (puis ton domaine plus tard)
const SITE_URL = "https://alexnorholm-portfolio-wkbz.vercel.app"; // <-- change si besoin

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Alex Nørholm — Designer UI/UX",
    template: "%s — Alex Nørholm",
  },
  description:
    "Portfolio UI/UX : interfaces web intuitives, accessibles et modernes. Projets, illustrations et animations.",

  applicationName: "Alex Nørholm Portfolio",
  keywords: [
    "UI/UX",
    "UX Design",
    "UI Design",
    "Product Designer",
    "Web design",
    "Accessibility",
    "Figma",
    "Portfolio",
    "Alex Nørholm",
  ],
  authors: [{ name: "Alex Nørholm" }],
  creator: "Alex Nørholm",

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Alex Nørholm — Designer UI/UX",
    description:
      "Portfolio UI/UX : interfaces web intuitives, accessibles et modernes. Projets, illustrations et animations.",
    siteName: "Alex Nørholm",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alex Nørholm — Designer UI/UX",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alex Nørholm — Designer UI/UX",
    description:
      "Portfolio UI/UX : interfaces web intuitives, accessibles et modernes. Projets, illustrations et animations.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={sora.variable}>
        <Polyfills />

        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
