import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { projects } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

const showcaseSlugs = [
  "let-me-be-sem-pausa",
  "buccanes",
  "cafe-com-deus-pai",
  "coisas-da-lu-sigaud",
  "nous-joalheria",
];

export function PortfolioCtaSection() {
  const showcaseProjects = showcaseSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <section id="projetos" className={`${styles.section} ${styles.portfolioCtaSection}`}>
      <div className={styles.container}>
        <AnimatedReveal className={styles.portfolioCtaHeader}>
          <div>
            <span className={styles.sectionEyebrow}>03 / Projetos selecionados</span>
            <h2 className={styles.portfolioCtaTitle}>Trabalho real.<br />Em produção.</h2>
          </div>
          <div className={styles.portfolioCtaAside}>
            <p className={styles.portfolioCtaDescription}>
              Uma seleção de lojas e campanhas construídas para diferentes
              mercados, plataformas e momentos de negócio.
            </p>
            <Link href="/portfolio" className={styles.portfolioTextLink}>
              Ver arquivo completo <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </AnimatedReveal>

        <div className={styles.showcaseGrid}>
          {showcaseProjects.map((project, index) => (
            <AnimatedReveal
              key={project.slug}
              className={styles.showcaseReveal}
              delay={index * 80}
            >
              <Link href={`/portfolio/${project.slug}`} className={styles.showcaseItem}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.showcaseImage}
                />
                <span className={styles.showcaseOverlay} />
                <span className={styles.showcaseMeta}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{project.name}</strong>
                  <span>{project.platform}</span>
                </span>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
