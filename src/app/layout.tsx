import type { Metadata, Viewport } from "next";
import { Geist_Mono, Jost, Outfit } from "next/font/google";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "João Pedro | Desenvolvedor Front-end",
    template: "%s | João Pedro",
  },
  description:
    "Portfólio pessoal de João Pedro, desenvolvedor front-end com 8 anos de experiência em e-commerce, React, Shopify e performance.",
  applicationName: "Portfólio João Pedro",
  authors: [{ name: "João Pedro" }],
  creator: "João Pedro",
  keywords: [
    "João Pedro",
    "desenvolvedor front-end",
    "portfolio",
    "e-commerce",
    "React",
    "Next.js",
    "Shopify",
    "performance",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Portfólio João Pedro",
    title: "João Pedro | Desenvolvedor Front-end",
    description:
      "Projetos, agências parceiras e contato de João Pedro, especialista em experiências front-end para e-commerce.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portfólio João Pedro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "João Pedro | Desenvolvedor Front-end",
    description:
      "Mais de 8 anos evoluindo operações de e-commerce com foco em performance, UX e escalabilidade.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${jost.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
