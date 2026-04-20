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
              O portfólio fica em uma página própria, com foco total nos cases.
            </h2>
            <p className={styles.portfolioCtaDescription}>
              Na home, o foco fica na apresentação. Na página de portfólio, a
              leitura vai direto para o trabalho.
            </p>
          </div>

          <div className={styles.portfolioCtaAside}>
            <ul className={styles.portfolioHighlightList}>
              {highlights.map((item) => (
                <li key={item} className={styles.portfolioHighlightItem}>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/portfolio" className={styles.buttonPrimary}>
              Abrir portfólio
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
