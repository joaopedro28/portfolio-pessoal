import Link from "next/link";
import { navItems, siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false">
      <path
        fill="currentColor"
        d="M19.05 4.94A9.84 9.84 0 0 0 12.03 2C6.54 2 2.07 6.46 2.07 11.95c0 1.75.46 3.47 1.33 4.99L2 22l5.2-1.36a9.93 9.93 0 0 0 4.82 1.23h.01c5.49 0 9.96-4.47 9.96-9.96a9.87 9.87 0 0 0-2.94-6.97Zm-7.02 15.24h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.27 8.27 0 0 1-1.28-4.39c0-4.57 3.72-8.29 8.3-8.29a8.23 8.23 0 0 1 5.87 2.43 8.23 8.23 0 0 1 2.42 5.87c0 4.58-3.72 8.3-8.29 8.3Zm4.55-6.21c-.25-.12-1.46-.72-1.69-.8-.22-.08-.38-.12-.55.12-.16.25-.63.8-.77.97-.14.17-.28.18-.53.06-.25-.12-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.38-1.73-.14-.25-.01-.38.1-.5.1-.1.25-.28.37-.42.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.42-.55-.42h-.46c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.72 2.63 4.16 3.69.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.05-.09-.22-.15-.46-.27Z"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <>
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
            <span className={styles.siteHeaderActionIcon} aria-hidden="true">
              <WhatsAppIcon />
            </span>
            WhatsApp
          </a>
        </div>
      </header>

      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className={styles.mobileWhatsAppButton}
      >
        <span className={styles.siteHeaderActionIcon} aria-hidden="true">
          <WhatsAppIcon />
        </span>
      </a>
    </>
  );
}
