import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function ContactSection() {
  return (
    <section id="contato" className={`${styles.section} ${styles.contactSection}`}>
      <div className={styles.container}>
        <AnimatedReveal className={styles.contactPanel}>
          <div className={styles.contactTopline}>
            <span>05 / Contato</span>
            <span>Projetos, sustentação e novas parcerias</span>
          </div>
          <div className={styles.contactCopy}>
            <h2 className={styles.contactTitle}>Vamos colocar<br />algo bom no ar.</h2>
            <p className={styles.contactText}>
              Se existe um projeto para começar ou uma operação que precisa
              evoluir, me conte o contexto. Eu respondo com clareza e sem roteiro
              de venda.
            </p>
          </div>
          <div className={styles.contactActions}>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactPrimaryLink}
            >
              Conversar no WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href={`mailto:${siteConfig.contactEmail}`} className={styles.contactEmail}>
              {siteConfig.contactEmail}
            </a>
            <Link href="/portfolio" className={styles.contactArchiveLink}>Ver arquivo de projetos</Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
