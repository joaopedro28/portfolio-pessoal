import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { getPartnerBySlug, partners, siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type PartnerPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return partners.map((partner) => ({ slug: partner.slug }));
}

export async function generateMetadata({
  params,
}: PartnerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);

  if (!partner) {
    return {};
  }

  return {
    title: partner.name,
    description: partner.summary,
    alternates: {
      canonical: `/parcerias/${partner.slug}`,
    },
    openGraph: {
      title: `${partner.name} | João Pedro`,
      description: partner.summary,
      url: `/parcerias/${partner.slug}`,
    },
    twitter: {
      title: `${partner.name} | João Pedro`,
      description: partner.summary,
    },
  };
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);

  if (!partner) {
    notFound();
  }

  const partnerSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: partner.name,
    description: partner.summary,
    url: `${siteConfig.siteUrl}/parcerias/${partner.slug}`,
  };

  return (
    <>
      <main className={styles.page}>
        <SiteHeader />

        <section className={styles.detailPage}>
          <div className={styles.detailShell}>
            <div className={styles.detailBreadcrumb}>
              <Link href="/" className={styles.backLink}>
                ← Voltar ao início
              </Link>
            </div>

            <section className={styles.detailHero}>
              <span className={styles.detailEyebrow}>{partner.role}</span>
              <h1 className={styles.detailTitle}>{partner.name}</h1>
              <p className={styles.detailLead}>{partner.summary}</p>
              <p className={styles.detailSummary}>
                &ldquo;{partner.quote}&rdquo;
              </p>

              <div className={styles.detailPanel}>
                <Image
                  src={partner.logo}
                  alt={partner.logoAlt}
                  width={320}
                  height={120}
                />
              </div>
            </section>

            <section className={styles.detailGrid}>
              <article className={styles.detailPanel}>
                <h2 className={styles.detailPanelTitle}>Frentes de colaboração</h2>
                <ul className={styles.detailList}>
                  {partner.capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <aside className={styles.detailPanel}>
                <h2 className={styles.detailPanelTitle}>Próximo passo</h2>
                <p className={styles.detailSummary}>
                  Se o seu time precisa de alguém para somar em ciclos de
                  e-commerce com autonomia, cuidado visual e leitura de negócio,
                  o contato já está pronto.
                </p>
                <div className={styles.detailActions}>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buttonPrimary}
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </aside>
            </section>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
      />
    </>
  );
}
