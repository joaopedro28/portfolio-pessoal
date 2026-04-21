import type { Metadata } from "next";
import { PlatformFilter } from "@/components/platform-filter";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/site-header";
import {
  getPlatformBySlug,
  getProjectsByPlatform,
  platforms,
  projects,
  siteConfig,
} from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type PortfolioPageProps = {
  searchParams?: Promise<{
    platform?: string | string[];
  }>;
};

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
      "Lojas e landing pages desenvolvidas para operações reais em Olist, Wake, Shopify, NuvemShop e Uappi.",
    url: "/portfolio",
  },
  twitter: {
    title: "Portfólio | João Pedro",
    description:
      "Lojas e landing pages desenvolvidas para operações reais em Olist, Wake, Shopify, NuvemShop e Uappi.",
  },
};

function getQueryValue(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function PortfolioPage({
  searchParams,
}: PortfolioPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const selectedPlatformSlug = getQueryValue(resolvedSearchParams.platform);
  const activePlatform = selectedPlatformSlug
    ? getPlatformBySlug(selectedPlatformSlug)
    : undefined;
  const filteredProjects = activePlatform
    ? getProjectsByPlatform(activePlatform.name)
    : projects;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: activePlatform
      ? `Portfólio em ${activePlatform.name} de João Pedro`
      : "Portfólio de João Pedro",
    url: activePlatform
      ? `${siteConfig.siteUrl}/portfolio?platform=${activePlatform.slug}`
      : `${siteConfig.siteUrl}/portfolio`,
    description: activePlatform
      ? `Página dedicada aos projetos desenvolvidos por João Pedro em ${activePlatform.name}.`
      : "Página dedicada aos projetos desenvolvidos por João Pedro para operações de e-commerce.",
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
                Projetos desenvolvidos para marcas e agências que precisaram tirar o front-end do papel com qualidade e ritmo.
              </h1>
              <p className={styles.portfolioHeroDescription}>
                A listagem abaixo reúne lojas e landing pages publicadas em diferentes plataformas de e-commerce.
              </p>
            </div>
          </div>
        </section>

        <ProjectsSection
          mode="portfolio"
          items={filteredProjects}
          title="Projetos publicados em operação real"
          description="Selecione uma plataforma para visualizar os projetos desta vitrine."
          toolbar={
            <PlatformFilter
              options={platforms}
              selectedPlatformSlug={activePlatform?.slug}
            />
          }
        />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
