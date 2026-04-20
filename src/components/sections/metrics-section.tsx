import { AnimatedReveal } from "@/components/animated-reveal";
import { CountUp } from "@/components/count-up";
import { SectionHeading } from "@/components/section-heading";
import { metricItems } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function MetricsSection() {
  return (
    <section id="metricas" className={`${styles.section} ${styles.metricsSection}`}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Números"
          title="Experiência, volume e repertório técnico"
          description="Uma leitura rápida do tipo de operação, ritmo de entrega e base técnica que acompanham o meu trabalho."
        />

        <div className={styles.metricsGrid}>
          {metricItems.map((item, index) => (
            <AnimatedReveal
              key={item.label}
              className={styles.metricCard}
              delay={index * 90}
            >
              <span className={styles.metricAccent} />
              <p className={styles.metricValue}>
                <CountUp
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  className={styles.metricNumber}
                />
              </p>
              <h3 className={styles.metricLabel}>{item.label}</h3>
              <p className={styles.metricCaption}>{item.caption}</p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
