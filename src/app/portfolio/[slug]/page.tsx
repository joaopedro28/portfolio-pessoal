import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import {
  getAgencyBySlug,
  getPlatformByName,
  getProjectAgencyCreditText,
  getHostnameLabel,
  getKindLabel,
  getProjectBySlug,
  getRelatedProjects,
  projects,
  siteConfig,
} from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | João Pedro`,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
    },
    twitter: {
      title: `${project.name} | João Pedro`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const agency = getAgencyBySlug(project.agencySlug);
  const platform = getPlatformByName(project.platform);
  const agencyCreditText = getProjectAgencyCreditText(project, agency);
  const relatedProjects = getRelatedProjects(project, 3);
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: project.website,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <main className={styles.page}>
        <SiteHeader />

        <section className={styles.detailPage}>
          <div className={styles.detailShell}>
            <div className={styles.detailBreadcrumb}>
              <Link href="/portfolio" className={styles.backLink}>
                ← Voltar ao portfólio
              </Link>
            </div>

            <section className={styles.detailHero}>
              {agency ? (
                <div className={styles.detailAgencyHeader}>
                  <Link
                    href={`/parcerias/${agency.slug}`}
                    className={styles.detailAgencyLogoLink}
                    aria-label={`Ver detalhes da agência ${agency.name}`}
                  >
                    <Image
                      src={agency.logo}
                      alt={agency.logoAlt}
                      width={240}
                      height={96}
                      className={styles.detailAgencyLogo}
                    />
                  </Link>

                  <div className={styles.detailAgencyHeaderCopy}>
                    <span className={styles.detailAgencyHeaderLabel}>
                      Projeto da agência
                    </span>
                    <Link
                      href={`/parcerias/${agency.slug}`}
                      className={styles.detailAgencyHeaderName}
                    >
                      {agency.name}
                    </Link>
                  </div>
                </div>
              ) : null}

              <span className={styles.detailEyebrow}>{project.platform}</span>
              <h1 className={styles.detailTitle}>{project.name}</h1>
              <p className={styles.detailLead}>{project.summary}</p>
              <p className={styles.detailSummary}>
                {agency
                  ? `Projeto entregue em parceria com ${agency.name} e publicado em ${getHostnameLabel(project.website)}.`
                  : `Projeto publicado em ${getHostnameLabel(project.website)}.`}
              </p>
              <div className={styles.detailAgencyNotice}>
                <span className={styles.detailAgencyNoticeLabel}>
                  Titularidade e atuação
                </span>
                <p className={styles.detailAgencyNoticeText}>{agencyCreditText}</p>
              </div>

              <div className={styles.detailMedia}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="100vw"
                  className={styles.detailImage}
                />
              </div>
            </section>

            <section className={styles.detailGrid}>
              <article className={styles.detailPanel}>
                <h2 className={styles.detailPanelTitle}>Ficha do projeto</h2>
                <dl className={styles.detailFactList}>
                  <div className={styles.detailFactItem}>
                    <dt className={styles.detailFactTerm}>Tipo</dt>
                    <dd className={styles.detailFactValue}>
                      {getKindLabel(project.kind)}
                    </dd>
                  </div>
                  <div className={styles.detailFactItem}>
                    <dt className={styles.detailFactTerm}>Plataforma</dt>
                    <dd className={styles.detailFactValue}>{project.platform}</dd>
                  </div>
                  <div className={styles.detailFactItem}>
                    <dt className={styles.detailFactTerm}>Site publicado</dt>
                    <dd className={styles.detailFactValue}>
                      {getHostnameLabel(project.website)}
                    </dd>
                  </div>
                  <div className={styles.detailFactItem}>
                    <dt className={styles.detailFactTerm}>Agência</dt>
                    <dd className={styles.detailFactValue}>
                      {agency ? agency.name : "Não informada"}
                    </dd>
                  </div>
                </dl>
              </article>

              <aside className={styles.detailPanel}>
                <h2 className={styles.detailPanelTitle}>Ações</h2>
                <p className={styles.detailSummary}>
                  A ficha leva para o site publicado e também permite continuar
                  a navegação pela mesma plataforma ou pela agência parceira.
                </p>
                <div className={styles.detailActions}>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buttonPrimary}
                  >
                    Abrir projeto ao vivo
                  </a>
                  {platform ? (
                    <Link
                      href={`/portfolio?platform=${platform.slug}`}
                      className={styles.buttonGhost}
                    >
                      Ver mais em {platform.name}
                    </Link>
                  ) : null}
                  {agency ? (
                    <Link
                      href={`/parcerias/${agency.slug}`}
                      className={styles.buttonSecondary}
                    >
                      Ver agência parceira
                    </Link>
                  ) : null}
                </div>
              </aside>
            </section>

            {relatedProjects.length ? (
              <section className={styles.detailRelatedSection}>
                <div className={styles.detailSectionHeading}>
                  <span className={styles.sectionEyebrow}>Relacionados</span>
                  <h2 className={styles.detailSectionTitle}>
                    Mais projetos para continuar a navegação
                  </h2>
                </div>

                <div className={styles.projectsGrid}>
                  {relatedProjects.map((item) => (
                    <ProjectCard key={item.slug} project={item} />
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
    </>
  );
}
