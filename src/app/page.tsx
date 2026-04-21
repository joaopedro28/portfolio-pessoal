import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { AgenciesSection } from "@/components/sections/partners-section";
import { PortfolioCtaSection } from "@/components/sections/portfolio-cta-section";
import { SiteHeader } from "@/components/site-header";
import { projects, siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description:
      "Desenvolvedor front-end com foco em e-commerce, performance, Shopify e interfaces escaláveis.",
    url: siteConfig.siteUrl,
    email: siteConfig.contactEmail,
    knowsAbout: [
      "React",
      "Next.js",
      "Shopify",
      "TypeScript",
      "Core Web Vitals",
      "UX para e-commerce",
    ],
    sameAs: [siteConfig.whatsappLink],
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.siteUrl}/portfolio/${project.slug}`,
      name: project.name,
      description: project.summary,
    })),
  };

  return (
    <>
      <a href="#conteudo" className="skipLink">
        Pular para o conteúdo
      </a>

      <main id="conteudo" className={styles.page}>
        <SiteHeader />
        <HeroSection />
        <MetricsSection />
        <PortfolioCtaSection />
        <AgenciesSection />
        <ContactSection />

        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerInner}>
              <p className={styles.footerBrand}>João Pedro</p>
              <p>Portfólio em Next.js, CSS Modules e foco em performance.</p>
            </div>
          </div>
        </footer>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personSchema, projectsSchema]),
        }}
      />
    </>
  );
}
