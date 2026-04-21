import { AnimatedReveal } from "@/components/animated-reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import {
  featuredProjects,
  projects,
  type Project,
} from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type ProjectsSectionProps = {
  mode?: "home" | "portfolio";
  items?: Project[];
  title?: string;
  description?: string;
};

export function ProjectsSection({
  mode = "portfolio",
  items,
  title,
  description,
}: ProjectsSectionProps) {
  const projectItems =
    items ?? (mode === "home" ? featuredProjects : projects);
  const showHeading = mode === "home" || Boolean(title || description);

  return (
    <section
      id={mode === "home" ? "projetos" : undefined}
      className={`${styles.section} ${styles.projectsSection}`}
    >
      <div className={styles.container}>
        {showHeading ? (
          <SectionHeading
            eyebrow="Projetos"
            title={title ?? "Projetos publicados em operação real"}
            description={
              description ??
              "Recorte de lojas e landing pages entregues para marcas atendidas em parceria com agências de e-commerce."
            }
          />
        ) : null}

        <div className={styles.projectsGrid}>
          {projectItems.map((project, index) => (
            <AnimatedReveal key={project.slug} delay={index * 90}>
              <ProjectCard project={project} />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
