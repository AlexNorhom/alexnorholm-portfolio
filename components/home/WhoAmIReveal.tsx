"use client";

import { useMemo } from "react";
import styles from "./WhoAmIReveal.module.css";

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

type Props = {
  /** 0..1 : progression reveal mot-par-mot */
  progress: number;
  words: readonly string[];
  className?: string;
  ariaLabel?: string;
};

export default function WhoAmIReveal({
  progress,
  words: wordsProp,
  className,
  ariaLabel = "Titre",
}: Props) {
  const words = useMemo(() => wordsProp, [wordsProp]);
  const p = clamp(progress, 0, 1);

  const revealIndex = p * words.length;

  return (
    <div className={`${styles.wrap} ${className ?? ""}`} aria-label={ariaLabel}>
      <div className={styles.line}>
        {words.map((w, i) => {
          const local = clamp(revealIndex - i, 0, 1); // 0..1 par mot
          return (
            <span
              key={`${w}-${i}`}
              className={styles.word}
              style={{ opacity: local }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
}
