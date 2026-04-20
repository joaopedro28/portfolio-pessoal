import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ProjectsSection } from "@/components/sections/projects-section";
import { siteConfig } from "@/data/portfolio";
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
      "Portfólio de projetos front-end para e-commerce, com direção visual, stack e entregáveis.",
    url: "/portfolio",
  },
  twitter: {
    title: "Portfólio | João Pedro",
    description:
      "Portfólio de projetos front-end para e-commerce, com direção visual, stack e entregáveis.",
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
              <span className={styles.sectionEyebrow}>Portfólio</span>
              <h1 className={styles.portfolioHeroTitle}>
                Projetos organizados em uma página própria, com leitura direta e
                sem excesso.
              </h1>
              <p className={styles.portfolioHeroDescription}>
                Contexto, stack, parceiros e entregáveis reunidos em uma
                navegação simples para quem quer avaliar o trabalho.
              </p>
            </div>
          </div>
        </section>

        <ProjectsSection />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
