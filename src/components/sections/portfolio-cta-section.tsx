import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import styles from "@/styles/portfolio.module.css";

const highlights = [
  "Cases organizados por contexto, stack e entrega.",
  "Leitura mais limpa, sem comprimir a home.",
  "Navegação direta para quem quer ver trabalho real.",
];

export function PortfolioCtaSection() {
  return (
    <section className={`${styles.section} ${styles.portfolioCtaSection}`}>
      <div className={styles.container}>
        <AnimatedReveal className={styles.portfolioCtaPanel}>
          <div className={styles.portfolioCtaCopy}>
            <span className={styles.sectionEyebrow}>Portfólio</span>
            <h2 className={styles.portfolioCtaTitle}>
              Projetos desenvolvidos para marcas e agências que precisaram tirar o front‑end do papel com qualidade e ritmo..
            </h2>
            <p className={styles.portfolioCtaDescription}>
              Aqui você encontra cases com contexto, stack, parceiros e entregas, organizados de forma simples para quem quer avaliar como cada solução foi pensada e executada.
            </p>
          </div>

          <div className={styles.portfolioCtaAside}>
            {/* <ul className={styles.portfolioHighlightList}>
              {highlights.map((item) => (
                <li key={item} className={styles.portfolioHighlightItem}>
                  {item}
                </li>
              ))}
            </ul> */}

            <Link href="/portfolio" className={styles.buttonPrimary}>
              Abrir portfólio
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
