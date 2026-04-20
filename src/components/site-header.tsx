import Link from "next/link";
import { navItems, siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.container} ${styles.siteHeaderInner}`}>
        <Link href="/" className={styles.wordmark}>
          <span className={styles.wordmarkName}>{siteConfig.name}</span>
          <span className={styles.wordmarkRole}>Front-end para e-commerce</span>
        </Link>

        <nav aria-label="Navegação principal" className={styles.siteNav}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.siteNavLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.siteHeaderAction}
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
