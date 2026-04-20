import type { CSSProperties } from "react";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { heroData, heroOrbitItems, siteConfig } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

const HERO_ORBIT_COUNT = 3;
const HERO_ORBIT_START_ANGLES = [72, -8, -132];

function normalizeOrbitIndex(value: number) {
  return ((value % HERO_ORBIT_COUNT) + HERO_ORBIT_COUNT) % HERO_ORBIT_COUNT;
}

function buildOrbitItems() {
  const autoCounts = Array.from({ length: HERO_ORBIT_COUNT }, () => 0);

  heroOrbitItems.forEach((item, index) => {
    if (item.angle !== undefined) {
      return;
    }

    autoCounts[normalizeOrbitIndex(item.orbit ?? index)] += 1;
  });

  const autoIndexes = Array.from({ length: HERO_ORBIT_COUNT }, () => 0);

  return heroOrbitItems.map((item, index) => {
    const orbit = normalizeOrbitIndex(item.orbit ?? index);
    const autoIndex = autoIndexes[orbit];
    const autoCount = autoCounts[orbit];
    const angle =
      item.angle ??
      HERO_ORBIT_START_ANGLES[orbit] +
        (autoCount > 1 ? (360 / autoCount) * autoIndex : 0);

    if (item.angle === undefined) {
      autoIndexes[orbit] += 1;
    }

    return {
      ...item,
      orbit,
      style: {
        "--orbit-angle": `${angle}deg`,
        "--orbit-angle-negative": `${-angle}deg`,
      } as CSSProperties,
    };
  });
}

const orbitItems = buildOrbitItems();

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <AnimatedReveal className={styles.heroCopy} delay={40}>
            <div className={styles.heroIntro}>
              <span className={styles.heroEyebrow}>{heroData.eyebrow}</span>
              <h1 className={styles.heroTitle}>João Pedro</h1>
              <p className={styles.heroRole}>Desenvolvedor Front-end</p>
            </div>

            <div className={styles.heroNarrative}>
              <p className={styles.heroLead}>{heroData.lead}</p>
              <p className={styles.heroSupport}>{heroData.support}</p>
            </div>

            <ul className={styles.heroSpecialties} aria-label="Especialidades">
              {heroData.specialties.map((item) => (
                <li key={item} className={styles.heroSpecialtyItem}>
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.heroActions}>
              <Link href="/portfolio" className={styles.buttonPrimary}>
                Ver portfólio
              </Link>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonSecondary}
              >
                Falar no WhatsApp
              </a>
            </div>
          </AnimatedReveal>

          <AnimatedReveal className={styles.heroVisualWrap} delay={180}>
            <div className={styles.heroVisualPlane} aria-hidden="true">
              <div className={styles.visualGlow} />
              <div className={styles.visualAxis} />
              <div className={styles.visualAxisSoft} />

              <ul className={styles.visualOrbitList}>
                {orbitItems.map((item) => (
                  <li
                    key={item.label}
                    className={styles.visualOrbitItem}
                    data-orbit={item.orbit}
                    style={item.style}
                  >
                    <span className={styles.visualOrbitAnchor}>
                      <span className={styles.visualNote}>{item.label}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className={styles.visualCore}>
                <span className={styles.visualOverline}>Foco técnico</span>
                <strong>Front-end sólido para operação real</strong>
                <span className={styles.visualCaption}>
                  Implementação clara, performance tratada cedo e uma base que
                  continua fazendo sentido depois do lançamento.
                </span>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
