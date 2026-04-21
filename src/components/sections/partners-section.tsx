import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { SectionHeading } from "@/components/section-heading";
import { agencies, getHostnameLabel } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function AgenciesSection() {
  return (
    <section
      id="agencias"
      className={`${styles.section} ${styles.partnersSection}`}
    >
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Agências"
          title="Times recorrentes para colocar lojas e campanhas no ar"
          description="Agências com quem trabalhei em operações reais de e-commerce, com entregas publicadas em diferentes plataformas e ritmos de projeto."
        />

        <div className={styles.partnerGrid}>
          {agencies.map((agency, index) => (
            <AnimatedReveal
              key={agency.slug}
              className={styles.partnerCard}
              delay={index * 70}
            >
              <Link
                href={`/parcerias/${agency.slug}`}
                className={styles.partnerLink}
              >
                <div className={styles.partnerLogoBox}>
                  <Image
                    src={agency.logo}
                    alt={agency.logoAlt}
                    width={184}
                    height={72}
                    className={styles.partnerLogo}
                  />
                </div>

                <div className={styles.partnerCopy}>
                  <div className={styles.partnerMetaRow}>
                    {/* <span className={styles.partnerRole}>
                      {agency.projectCount} projetos
                    </span> */}
                    <span className={styles.partnerMetaDot} />
                    <span className={styles.partnerHost}>
                      {getHostnameLabel(agency.website)}
                    </span>
                  </div>
                  <h3 className={styles.partnerName}>{agency.name}</h3>
                  <p className={styles.partnerSummary}>{agency.summary}</p>
                </div>

                <ul className={styles.partnerPlatformList} aria-label="Plataformas atendidas">
                  {agency.platforms.map((platform) => (
                    <li key={platform} className={styles.tag}>
                      {platform}
                    </li>
                  ))}
                </ul>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
