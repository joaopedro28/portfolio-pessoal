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
            <span className={styles.sectionEyebrow}>Portfólio completo</span>
            <h2 className={styles.portfolioCtaTitle}>
              A home mostra uma curadoria. A listagem completa organiza todas as
              entregas por agência, plataforma e site publicado.
            </h2>
            <p className={styles.portfolioCtaDescription}>
              Se você quer revisar o repertório inteiro, abrir cada ficha e
              navegar entre lojas e landing pages em detalhe, a página de
              portfólio concentra tudo em uma leitura mais direta.
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
              Ver todos os projetos
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
