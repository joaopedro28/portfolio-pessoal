import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { contactData, siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function ContactSection() {
  return (
    <section id="contato" className={`${styles.section} ${styles.contactSection}`}>
      <div className={styles.container}>
        <AnimatedReveal className={styles.contactPanel}>
          <div className={styles.contactGlow} />
          <div className={styles.contactCopy}>
            <span className={styles.sectionEyebrow}>Contato</span>
            <h2 className={styles.contactTitle}>{contactData.title}</h2>
            <p className={styles.contactText}>{contactData.description}</p>
            <p className={styles.contactNote}>{contactData.note}</p>
          </div>

          <div className={styles.contactActions}>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttonPrimary}
            >
              Falar no WhatsApp
            </a>
            <Link href="/portfolio" className={styles.buttonGhost}>
              Ver portfólio
            </Link>
            <div className={styles.contactMeta}>
              <span className={styles.contactLabel}>Contato alternativo</span>
              <a href={`mailto:${siteConfig.contactEmail}`} className={styles.contactEmail}>
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
