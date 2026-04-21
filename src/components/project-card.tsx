import Image from "next/image";
import Link from "next/link";
import {
  getAgencyBySlug,
  getHostnameLabel,
  getKindLabel,
  type Project,
} from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type ProjectCardProps = {
  project: Project;
  showAgency?: boolean;
};

export function ProjectCard({
  project,
  showAgency = true,
}: ProjectCardProps) {
  const agency = getAgencyBySlug(project.agencySlug);

  return (
    <article className={styles.projectCard}>
      <Link href={`/portfolio/${project.slug}`} className={styles.projectMedia}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className={styles.projectImage}
        />
        <div className={styles.projectOverlay} />
        <span className={styles.projectBadge}>{project.platform}</span>
      </Link>

      <div className={styles.projectBody}>
        <div className={styles.projectTop}>
          <div className={styles.projectHeadingBlock}>
            <h3 className={styles.projectTitle}>{project.name}</h3>
            {showAgency && agency ? (
              <span className={styles.projectPartner}>{agency.name}</span>
            ) : null}
          </div>

          <span className={styles.projectKind}>{getKindLabel(project.kind)}</span>
        </div>

        <p className={styles.projectDescription}>{project.summary}</p>

        <div className={styles.projectMetaRow}>
          <span className={styles.projectMetaLabel}>
            {getHostnameLabel(project.website)}
          </span>
          <span className={styles.projectMetaDivider} />
          <span className={styles.projectMetaLabel}>
            {project.kind === "landing-page" ? "Campanha publicada" : "Operação publicada"}
          </span>
        </div>

        <div className={styles.projectActions}>
          <Link href={`/portfolio/${project.slug}`} className={styles.textButton}>
            Abrir ficha
          </Link>
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.textButtonMuted}
          >
            Visitar site
          </a>
        </div>
      </div>
    </article>
  );
}
