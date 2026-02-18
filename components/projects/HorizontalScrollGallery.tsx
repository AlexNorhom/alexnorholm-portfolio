"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./HorizontalScrollGallery.module.css";

export default function HorizontalScrollGallery({
  images,
  topOffsetPx = 120,
}: {
  images: string[];
  topOffsetPx?: number;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Sens naturel: scroll down => track va vers la gauche
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <div ref={sectionRef} className={styles.section}>
      <div className={styles.sticky} style={{ top: topOffsetPx }}>
        <motion.div className={styles.track} style={{ x }}>
          {images.map((src) => (
            <div key={src} className={styles.card}>
              <Image
                src={src}
                alt=""
                width={1200}
                height={800}
                className={styles.img}
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
