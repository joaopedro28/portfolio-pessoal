"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./animated-reveal.module.css";

type AnimatedRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
};

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.2,
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    let frame = 0;
    const updateRevealState = (nextCanAnimate: boolean, nextVisible: boolean) => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(() => {
        setCanAnimate(nextCanAnimate);
        setVisible(nextVisible);
      });
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof window.IntersectionObserver !== "function"
    ) {
      updateRevealState(false, true);
      return () => window.cancelAnimationFrame(frame);
    }

    const rect = node.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const visibleHeight = Math.max(
      0,
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0),
    );
    const visibleWidth = Math.max(
      0,
      Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0),
    );
    const visibleArea = visibleHeight * visibleWidth;
    const totalArea = rect.height * rect.width;
    const isVisibleOnMount =
      totalArea > 0 && visibleArea / totalArea >= threshold;

    updateRevealState(true, isVisibleOnMount);

    let observer: IntersectionObserver;
    let fallback = 0;

    try {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          window.clearTimeout(fallback);

          if (entry.isIntersecting) {
            setVisible(true);

            if (once) {
              observer.disconnect();
            }

            return;
          }

          if (!once) {
            setVisible(false);
          }
        },
        { threshold },
      );
    } catch {
      updateRevealState(false, true);
      return () => window.cancelAnimationFrame(frame);
    }

    fallback = window.setTimeout(() => {
      observer.disconnect();
      updateRevealState(false, true);
    }, 1200);

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={[
        styles.reveal,
        canAnimate ? styles.animated : "",
        visible ? styles.visible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
