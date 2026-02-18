"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./DigilabPage.module.css";

export type ImgItem = { src: string; alt?: string };

/**
 * Framer Motion est très strict sur "offset".
 * Comme ton framer-motion ne fournit pas le type ScrollOffset à importer,
 * on définit un type compatible (string literals).
 */
type Edge = "start" | "center" | "end";
type Unit = `${number}%` | `${number}px`;
export type OffsetValue = `${Edge} ${Edge}` | `${Edge} ${Unit}`; // ex: "start 90%"

/**
 * Gallery qui transforme le scroll vertical en scroll horizontal (auto),
 * sans scrollbar horizontale.
 *
 * - startAt: quand commencer (ex: "start 90%" = très tôt)
 * - speed: accélère la progression horizontale (1 = normal, 1.35 = + rapide)
 */
export default function ScrollXfallery({
  images,
  height = 240,
  startAt = "start 60%",
  speed = 2.6,
}: {
  images: ImgItem[];
  height?: number;
  startAt?: OffsetValue;
  speed?: number;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [maxShift, setMaxShift] = useState(0);

  // Mesure du shift horizontal total à parcourir
  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      const section = sectionRef.current;
      if (!row || !section) return;

      const total = row.scrollWidth;
      const viewport = section.clientWidth;
      setMaxShift(Math.max(0, total - viewport));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [images]);

  // ✅ IMPORTANT : offset "as const" pour satisfaire TS
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [startAt, "end start"] as const,
  });

  // speed > 1 => on termine plus vite (on voit mieux la dernière image)
  const x = useTransform(scrollYProgress, (v) => {
    const vv = Math.min(1, Math.max(0, v * speed));
    return -maxShift * vv;
  });

  return (
    <div className={styles.xSection} ref={sectionRef}>
      <div className={styles.xSticky}>
        <motion.div className={styles.xRow} ref={rowRef} style={{ x }}>
          {images.map((img, i) => (
            <div key={img.src + i} className={styles.xItem} style={{ height }}>
              <Image
                src={img.src}
                alt={img.alt ?? ""}
                width={1800}
                height={1200}
                className={styles.xImg}
                draggable={false}
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
