import Link from "next/link";
import styles from "@/styles/portfolio.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className={styles.notFoundCard}>
        <span className={styles.sectionEyebrow}>404</span>
        <h1>Página não encontrada</h1>
        <p className={styles.sectionDescription}>
          O conteúdo solicitado não está disponível. Volte para a página inicial
          para continuar navegando pelo portfólio.
        </p>
        <Link href="/" className={styles.buttonPrimary}>
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
