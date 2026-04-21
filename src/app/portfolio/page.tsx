import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/site-header";
import { projects, siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Cases e projetos desenvolvidos por João Pedro para operações de e-commerce com foco em performance, clareza e escala.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfólio | João Pedro",
    description:
      "Lojas e landing pages desenvolvidas para operações reais em Olist, WAKE, Shopify, NuvemShop e Uappi.",
    url: "/portfolio",
  },
  twitter: {
    title: "Portfólio | João Pedro",
    description:
      "Lojas e landing pages desenvolvidas para operações reais em Olist, WAKE, Shopify, NuvemShop e Uappi.",
  },
};

export default function PortfolioPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfólio de João Pedro",
    url: `${siteConfig.siteUrl}/portfolio`,
    description:
      "Página dedicada aos projetos desenvolvidos por João Pedro para operações de e-commerce.",
  };

  return (
    <>
      <main className={styles.page}>
        <SiteHeader />

        <section className={styles.portfolioHero}>
          <div className={styles.container}>
            <div className={styles.portfolioHeroInner}>
              <span className={styles.portfolioEyebrow}>Portfólio</span>
              <h1 className={styles.portfolioHeroTitle}>
                Projetos desenvolvidos para marcas e agências que precisaram tirar o front‑end do papel com qualidade e ritmo.
              </h1>
              <p className={styles.portfolioHeroDescription}>
                A listagem abaixo organiza lojas e landing pages com base no
                site publicado, na plataforma usada e na agência com quem a
                entrega foi construída.
              </p>
            </div>
          </div>
        </section>

        <ProjectsSection
          mode="portfolio"
          title={`Todos os ${projects.length} projetos desta seleção`}
          description="Cada card leva para uma ficha factual com preview do site, plataforma, agência relacionada e acesso ao projeto publicado."
        />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
