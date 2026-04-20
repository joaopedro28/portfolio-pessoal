"use client";

import { useEffect, useState } from "react";
import styles from "./typewriter.module.css";

type TypewriterProps = {
  items: string[];
  className?: string;
};

export function Typewriter({ items, className }: TypewriterProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayValue, setDisplayValue] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() =>
        setDisplayValue(items[0] ?? ""),
      );
      return () => window.cancelAnimationFrame(frame);
    }

    const current = items[activeIndex];
    const completed = displayValue === current;
    const emptied = displayValue.length === 0;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (completed) {
          setIsDeleting(true);
          return;
        }

        setDisplayValue(current.slice(0, displayValue.length + 1));
        return;
      }

      if (emptied) {
        setActiveIndex((previousIndex) => (previousIndex + 1) % items.length);
        setIsDeleting(false);
        return;
      }

      setDisplayValue(current.slice(0, displayValue.length - 1));
    }, !isDeleting ? (completed ? 1500 : 70) : emptied ? 300 : 40);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, displayValue, isDeleting, items]);

  return (
    <span className={[styles.root, className].filter(Boolean).join(" ")}>
      <span aria-hidden="true">{displayValue}</span>
      <span aria-hidden="true" className={styles.cursor}>
        |
      </span>
      <span className="srOnly">{items.join(", ")}</span>
    </span>
  );
}
