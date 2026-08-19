import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function HeroSection() {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={`${styles.container} ${styles.heroFrame}`}>
        <div className={styles.heroFrameTop}>
          <span>01 / Início</span>
          <span>Portfólio selecionado — 2026</span>
        </div>

        <div className={styles.heroGrid}>
          <AnimatedReveal className={styles.heroCopy} delay={80}>
            <p className={styles.heroEyebrow}>Desenvolvimento front-end independente</p>
            <h1 className={styles.heroTitle}>
              <span>Front—end</span>
              <span>para e—commerce</span>
            </h1>
            <div className={styles.heroNarrative}>
              <p className={styles.heroRole}>João Pedro / Brasil</p>
              <p className={styles.heroLead}>
                Lojas e experiências digitais construídas para vender, carregar
                rápido e continuar funcionando na rotina real da operação.
              </p>
            </div>
            <div className={styles.heroActions}>
              <Link href="/portfolio" className={styles.buttonPrimary}>
                Explorar projetos <span aria-hidden="true">↗</span>
              </Link>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonSecondary}
              >
                Iniciar conversa
              </a>
            </div>
          </AnimatedReveal>

          <AnimatedReveal className={styles.heroVisualWrap} delay={210}>
            <Link href="/portfolio/nous-joalheria" className={styles.heroMainProject}>
              <Image
                src="/projects/sites/nous-joalheria.png"
                alt="Projeto Nous Joalheria"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
                className={styles.heroProjectImage}
              />
              <span className={styles.heroProjectShade} />
              <span className={styles.heroProjectMeta}>
                <span>Nous Joalheria</span>
                <span>Olist / 2026</span>
              </span>
            </Link>

            <Link href="/portfolio/buccanes" className={styles.heroSideProject}>
              <Image
                src="/projects/sites/buccanes.png"
                alt="Projeto Buccanes"
                fill
                priority
                sizes="(max-width: 900px) 42vw, 18vw"
                className={styles.heroProjectImage}
              />
              <span className={styles.heroProjectShade} />
              <span className={styles.heroSideProjectLabel}>Buccanes / Olist</span>
            </Link>
            <span className={styles.heroViewfinder} aria-hidden="true" />
          </AnimatedReveal>
        </div>

        <AnimatedReveal className={styles.heroSpecialties} delay={360}>
          <span>Olist</span>
          <span>Shopify</span>
          <span>Nuvemshop</span>
          <span>Wake</span>
          <span>Uappi</span>
          <span>React / Next.js</span>
        </AnimatedReveal>
      </div>
    </section>
  );
}
