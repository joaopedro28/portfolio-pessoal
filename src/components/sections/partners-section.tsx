import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { SectionHeading } from "@/components/section-heading";
import { partners } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function PartnersSection() {
  return (
    <section
      id="parcerias"
      className={`${styles.section} ${styles.partnersSection}`}
    >
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Parceiros"
          title="Agências e times que confiam no meu ritmo de entrega"
          description="Uma malha de colaboração construída em contexto real de operação, campanha, manutenção e evolução contínua."
        />

        <div className={styles.partnerGrid}>
          {partners.map((partner, index) => (
            <AnimatedReveal
              key={partner.slug}
              className={styles.partnerCard}
              delay={index * 70}
            >
              <Link
                href={`/parcerias/${partner.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerLink}
              >
                <div className={styles.partnerLogoBox}>
                  <Image
                    src={partner.logo}
                    alt={partner.logoAlt}
                    width={184}
                    height={72}
                    className={styles.partnerLogo}
                  />
                </div>
                <div className={styles.partnerCopy}>
                  <span className={styles.partnerRole}>{partner.role}</span>
                  <h3 className={styles.partnerName}>{partner.name}</h3>
                  <p className={styles.partnerSummary}>{partner.summary}</p>
                </div>
                <p className={styles.partnerQuote}>&ldquo;{partner.quote}&rdquo;</p>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
