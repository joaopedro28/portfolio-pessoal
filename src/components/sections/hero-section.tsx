import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { Typewriter } from "@/components/typewriter";
import { heroData, navItems, siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>JP</span>
            <span className={styles.brandText}>
              João Pedro
              <small>Front-end para e-commerce</small>
            </span>
          </Link>

          <nav aria-label="Navegação principal" className={styles.nav}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.headerButton}
          >
            WhatsApp
          </a>
        </header>

        <div className={styles.heroGrid}>
          <AnimatedReveal className={styles.heroCopy} delay={40}>
            <span className={styles.heroEyebrow}>{heroData.eyebrow}</span>
            <h1 className={styles.heroTitle}>
              João Pedro
              <span className={styles.heroRole}>Desenvolvedor Front-end</span>
            </h1>

            <p className={styles.heroLead}>{heroData.lead}</p>
            <p className={styles.heroSupport}>{heroData.support}</p>

            <div className={styles.heroTypeCluster}>
              <span className={styles.heroTypeLabel}>Especialidades</span>
              <Typewriter
                items={heroData.specialties}
                className={styles.heroTypewriter}
              />
            </div>

            <div className={styles.heroActions}>
              <Link href="#projetos" className={styles.buttonPrimary}>
                Ver projetos
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
            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.visualGlow} />
              <div className={styles.visualRing} />
              <div className={styles.visualRingInner} />
              <div className={styles.visualCore}>
                <span className={styles.visualOverline}>Foco técnico</span>
                <strong>Interfaces sólidas</strong>
                <span className={styles.visualCaption}>
                  Performance, escala e clareza para operações digitais em
                  movimento.
                </span>
              </div>
              <span className={`${styles.visualTag} ${styles.visualTagTop}`}>
                React
              </span>
              <span className={`${styles.visualTag} ${styles.visualTagRight}`}>
                Shopify
              </span>
              <span className={`${styles.visualTag} ${styles.visualTagBottom}`}>
                Core Web Vitals
              </span>
              <span className={`${styles.visualTag} ${styles.visualTagLeft}`}>
                UX que converte
              </span>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
