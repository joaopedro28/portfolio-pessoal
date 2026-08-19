import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { agencies } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function AgenciesSection() {
  return (
    <section id="agencias" className={`${styles.section} ${styles.partnersSection}`}>
      <div className={styles.container}>
        <AnimatedReveal className={styles.agenciesHeader}>
          <span className={styles.sectionEyebrow}>04 / Parcerias</span>
          <h2>Times com quem<br />eu construo.</h2>
          <p>
            Relações recorrentes com agências que precisam de consistência entre
            o layout aprovado e a loja publicada.
          </p>
        </AnimatedReveal>

        <div className={styles.partnerGrid}>
          {agencies.map((agency, index) => (
            <AnimatedReveal key={agency.slug} className={styles.partnerCard} delay={index * 55}>
              <Link href={`/parcerias/${agency.slug}`} className={styles.partnerLink}>
                <span className={styles.partnerNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.partnerLogoBox}>
                  <Image
                    src={agency.logo}
                    alt={agency.logoAlt}
                    width={160}
                    height={60}
                    className={styles.partnerLogo}
                  />
                </div>
                <div className={styles.partnerCopy}>
                  <h3 className={styles.partnerName}>{agency.name}</h3>
                  <p className={styles.partnerSummary}>{agency.summary}</p>
                </div>
                <span className={styles.partnerPlatforms}>{agency.platforms.join(" · ")}</span>
                <span className={styles.partnerArrow} aria-hidden="true">↗</span>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
