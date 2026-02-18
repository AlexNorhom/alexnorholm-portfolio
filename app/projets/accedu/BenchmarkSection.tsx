"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./AcceduPage.module.css";

export default function BenchmarkSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end start"],
  });

  // 0->0.5 : Google visible ; 0.5->1 : Moodle visible
  const googleOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5],
    [0, 1, 0],
  );
  const moodleOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.65, 1],
    [0, 1, 1],
  );

  // Background pan horizontal
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section className={styles.benchSection} ref={sectionRef}>
      <div className={styles.benchSticky}>
        <div className={styles.benchTitle}>
          <Image
            src="/assets/projects/accedu/Benchmark.png"
            alt=""
            width={900}
            height={240}
            className={styles.benchTitleImg}
            draggable={false}
          />
        </div>

        <div className={styles.benchStage}>
          {/* Background */}
          <motion.div
            className={styles.benchBg}
            style={{ x: bgX }}
          ></motion.div>

          {/* Google */}
          <motion.div
            className={styles.benchPanelLeft}
            style={{ opacity: googleOpacity }}
          >
            <Image
              src="/assets/projects/accedu/GoogleClassroom.png"
              alt=""
              width={1200}
              height={500}
              className={styles.benchPanelImg}
              draggable={false}
            />
          </motion.div>

          {/* Moodle */}
          <motion.div
            className={styles.benchPanelRight}
            style={{ opacity: moodleOpacity }}
          >
            <Image
              src="/assets/projects/accedu/Moodle.png"
              alt=""
              width={1200}
              height={500}
              className={styles.benchPanelImg}
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
