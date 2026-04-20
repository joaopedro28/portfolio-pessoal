import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { SectionHeading } from "@/components/section-heading";
import { getPartnerBySlug, projects } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export function ProjectsSection() {
  return (
    <section className={`${styles.section} ${styles.projectsSection}`}>
      <div className={styles.container}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => {
            const partner = getPartnerBySlug(project.partnerSlug);

            return (
              <AnimatedReveal
                key={project.slug}
                className={styles.projectCard}
                delay={index * 100}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className={styles.projectMedia}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className={styles.projectImage}
                  />
                  <div className={styles.projectOverlay} />
                  <span className={styles.projectBadge}>{project.segment}</span>
                </Link>

                <div className={styles.projectBody}>
                  <div className={styles.projectTop}>
                    <h3 className={styles.projectTitle}>{project.name}</h3>
                    {partner ? (
                      <span className={styles.projectPartner}>{partner.name}</span>
                    ) : null}
                  </div>

                  <p className={styles.projectDescription}>{project.summary}</p>

                  <ul className={styles.tagList} aria-label="Tecnologias do projeto">
                    {project.stack.map((item) => (
                      <li key={item} className={styles.tag}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.projectActions}>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className={styles.textButton}
                    >
                      Ver projeto
                    </Link>
                    {partner ? (
                      <Link
                        href={`/parcerias/${partner.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.textButtonMuted}
                      >
                        Ver parceria
                      </Link>
                    ) : null}
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
