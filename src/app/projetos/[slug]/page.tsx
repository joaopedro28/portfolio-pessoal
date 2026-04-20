import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPartnerBySlug,
  getProjectBySlug,
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
      canonical: `/projetos/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | João Pedro`,
      description: project.summary,
      url: `/projetos/${project.slug}`,
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

  const partner = getPartnerBySlug(project.partnerSlug);
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: `${siteConfig.siteUrl}/projetos/${project.slug}`,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <main className={styles.detailPage}>
        <div className={styles.detailShell}>
          <div className={styles.detailBreadcrumb}>
            <Link href="/" className={styles.backLink}>
              ← Voltar ao portfólio
            </Link>
          </div>

          <section className={styles.detailHero}>
            <span className={styles.detailEyebrow}>{project.segment}</span>
            <h1 className={styles.detailTitle}>{project.name}</h1>
            <p className={styles.detailLead}>{project.summary}</p>
            <p className={styles.detailSummary}>{project.overview}</p>

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
              <h2 className={styles.detailPanelTitle}>Impacto e direcionamento</h2>
              <ul className={styles.detailList}>
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <aside className={styles.detailPanel}>
              <h2 className={styles.detailPanelTitle}>Entregáveis</h2>
              <ul className={styles.detailList}>
                {project.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </section>

          <section className={styles.detailGrid}>
            <article className={styles.detailPanel}>
              <h2 className={styles.detailPanelTitle}>Stack utilizada</h2>
              <div className={styles.detailPillGrid}>
                {project.stack.map((item) => (
                  <span key={item} className={styles.detailPill}>
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <aside className={styles.detailPanel}>
              <h2 className={styles.detailPanelTitle}>Parceria relacionada</h2>
              <p className={styles.detailSummary}>
                {partner ? partner.summary : "Detalhes da parceria indisponíveis."}
              </p>
              {partner ? (
                <div className={styles.detailActions}>
                  <Link
                    href={`/parcerias/${partner.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buttonSecondary}
                  >
                    Ver parceria
                  </Link>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buttonPrimary}
                  >
                    Conversar sobre um projeto
                  </a>
                </div>
              ) : null}
            </aside>
          </section>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
    </>
  );
}
