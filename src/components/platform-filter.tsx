"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PlatformSummary } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type PlatformFilterProps = {
  options: PlatformSummary[];
  selectedPlatformSlug?: string;
};

export function PlatformFilter({
  options,
  selectedPlatformSlug,
}: PlatformFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function handleChange(nextValue: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (nextValue) {
      params.set("platform", nextValue);
    } else {
      params.delete("platform");
    }

    const query = params.toString();
    const nextUrl = query ? `${pathname}?${query}` : pathname;

    startTransition(() => {
      router.replace(nextUrl, { scroll: false });
    });
  }

  return (
    <div className={styles.projectsFilterField}>
      <label
        htmlFor="portfolio-platform-filter"
        className={styles.projectsFilterLabel}
      >
        Filtre por Plataforma
      </label>

      <div className={styles.projectsFilterControl}>
        <select
          id="portfolio-platform-filter"
          value={selectedPlatformSlug ?? ""}
          onChange={(event) => handleChange(event.target.value)}
          disabled={isPending}
          className={styles.projectsFilterSelect}
        >
          <option value="">Todas as plataformas</option>
          {options.map((platform) => (
            <option key={platform.slug} value={platform.slug}>
              {platform.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
