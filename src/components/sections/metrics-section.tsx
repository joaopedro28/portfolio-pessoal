import { AnimatedReveal } from "@/components/animated-reveal";
import { CountUp } from "@/components/count-up";
import { metricItems } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function MetricsSection() {
  return (
    <section id="perfil" className={`${styles.section} ${styles.metricsSection}`}>
      <div className={styles.container}>
        <AnimatedReveal className={styles.profilePanel}>
          <div className={styles.profileHeading}>
            <span className={styles.darkEyebrow}>02 / Perfil</span>
            <h2>Design técnico.<br />Execução sem ruído.</h2>
          </div>
          <div className={styles.profileCopy}>
            <p>
              Há oito anos transformo layouts, campanhas e necessidades de
              operação em experiências de compra claras e confiáveis.
            </p>
            <p>
              Trabalho perto de agências e marcas, do refinamento visual à
              publicação, com atenção especial a performance, responsividade e
              manutenção.
            </p>
          </div>

          <div className={styles.metricsGrid}>
            {metricItems.map((item, index) => (
              <div key={item.label} className={styles.metricCard}>
                <span className={styles.metricIndex}>{String(index + 1).padStart(2, "0")}</span>
                <p className={styles.metricValue}>
                  <CountUp
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    className={styles.metricNumber}
                  />
                </p>
                <h3 className={styles.metricLabel}>{item.label}</h3>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
