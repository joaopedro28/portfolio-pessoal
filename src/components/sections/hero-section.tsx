import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { heroData, siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <AnimatedReveal className={styles.heroCopy} delay={40}>
            <div className={styles.heroIntro}>
              <span className={styles.heroEyebrow}>{heroData.eyebrow}</span>
              <h1 className={styles.heroTitle}>João Pedro</h1>
              <p className={styles.heroRole}>Desenvolvedor Front-end</p>
            </div>

            <div className={styles.heroNarrative}>
              <p className={styles.heroLead}>{heroData.lead}</p>
              <p className={styles.heroSupport}>{heroData.support}</p>
            </div>

            <ul className={styles.heroSpecialties} aria-label="Especialidades">
              {heroData.specialties.map((item) => (
                <li key={item} className={styles.heroSpecialtyItem}>
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.heroActions}>
              <Link href="/portfolio" className={styles.buttonPrimary}>
                Ver portfólio
              </Link>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonSecondary}
              >
                Falar no WhatsApp
              </a>
            </div>
          </AnimatedReveal>

          <AnimatedReveal className={styles.heroVisualWrap} delay={180}>
            <div className={styles.heroVisualPlane} aria-hidden="true">
              <div className={styles.visualGlow} />
              <div className={styles.visualAxis} />
              <div className={styles.visualAxisSoft} />
              <div className={styles.visualCore}>
                <span className={styles.visualOverline}>Foco técnico</span>
                <strong>Front-end sólido para operação real</strong>
                <span className={styles.visualCaption}>
                  Implementação clara, performance tratada cedo e uma base que
                  continua fazendo sentido depois do lançamento.
                </span>
              </div>
              <div className={`${styles.visualNote} ${styles.visualNoteTop}`}>
                React e Next.js
              </div>
              <div className={`${styles.visualNote} ${styles.visualNoteRight}`}>
                Shopify e performance
              </div>
              <div className={`${styles.visualNote} ${styles.visualNoteBottom}`}>
                Interfaces claras para conversão
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
