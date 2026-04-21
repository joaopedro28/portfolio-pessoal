import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import {
  agencies,
  getAgencyBySlug,
  getHostnameLabel,
  getProjectsByAgencySlug,
  siteConfig,
} from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type PartnerPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return agencies.map((agency) => ({ slug: agency.slug }));
}

export async function generateMetadata({
  params,
}: PartnerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const agency = getAgencyBySlug(slug);

  if (!agency) {
    return {};
  }

  return {
    title: agency.name,
    description: agency.summary,
    alternates: {
      canonical: `/parcerias/${agency.slug}`,
    },
    openGraph: {
      title: `${agency.name} | João Pedro`,
      description: agency.summary,
      url: `/parcerias/${agency.slug}`,
    },
    twitter: {
      title: `${agency.name} | João Pedro`,
      description: agency.summary,
    },
  };
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const { slug } = await params;
  const agency = getAgencyBySlug(slug);

  if (!agency) {
    notFound();
  }

  const agencyProjects = getProjectsByAgencySlug(agency.slug);
  const agencySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: agency.name,
    description: agency.summary,
    url: agency.website,
  };

  return (
    <>
      <main className={styles.page}>
        <SiteHeader />

        <section className={styles.detailPage}>
          <div className={styles.detailShell}>
            <div className={styles.detailBreadcrumb}>
              <Link href="/#agencias" className={styles.backLink}>
                ← Voltar para agências
              </Link>
            </div>

            <section className={styles.detailHero}>
              <span className={styles.detailEyebrow}>Agência parceira</span>
              <h1 className={styles.detailTitle}>{agency.name}</h1>
              <p className={styles.detailLead}>{agency.summary}</p>
              <p className={styles.detailSummary}>
                {agency.projectCount} projetos desta seleção foram publicados com
                esta parceria, distribuídos entre {agency.platforms.join(", ")}.
              </p>

              <div className={styles.agencyHeroPanel}>
                <div className={styles.detailPanel}>
                  <Image
                    src={agency.logo}
                    alt={agency.logoAlt}
                    width={320}
                    height={120}
                    className={styles.agencyDetailLogo}
                  />
                </div>

                <aside className={styles.detailPanel}>
                  <h2 className={styles.detailPanelTitle}>Dados rápidos</h2>
                  <dl className={styles.detailFactList}>
                    <div className={styles.detailFactItem}>
                      <dt className={styles.detailFactTerm}>Site oficial</dt>
                      <dd className={styles.detailFactValue}>
                        {getHostnameLabel(agency.website)}
                      </dd>
                    </div>
                    <div className={styles.detailFactItem}>
                      <dt className={styles.detailFactTerm}>Projetos</dt>
                      <dd className={styles.detailFactValue}>
                        {agency.projectCount} nesta vitrine
                      </dd>
                    </div>
                    <div className={styles.detailFactItem}>
                      <dt className={styles.detailFactTerm}>Plataformas</dt>
                      <dd className={styles.detailFactValue}>
                        {agency.platforms.join(", ")}
                      </dd>
                    </div>
                  </dl>

                  <div className={styles.detailActions}>
                    <a
                      href={agency.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.buttonSecondary}
                    >
                      Abrir site da agência
                    </a>
                    <a
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.buttonPrimary}
                    >
                      Conversar sobre um projeto
                    </a>
                  </div>
                </aside>
              </div>
            </section>

            <section className={styles.detailRelatedSection}>
              <div className={styles.detailSectionHeading}>
                <span className={styles.sectionEyebrow}>Projetos</span>
                <h2 className={styles.detailSectionTitle}>
                  Projetos publicados com {agency.name}
                </h2>
              </div>

              <div className={styles.projectsGrid}>
                {agencyProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    showAgency={false}
                  />
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />
    </>
  );
}
