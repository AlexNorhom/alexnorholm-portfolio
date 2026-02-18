"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./EkosolvoPage.module.css";
import ProjectNav from "@/components/projects/ProjectNav";

const FADE = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.45, once: false },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

function Blue({ children }: { children: React.ReactNode }) {
  return <span className={styles.blue}>{children}</span>;
}

function SizedImage({
  src,
  maxW = 900,
  priority = false,
  alt = "",
}: {
  src: string;
  maxW?: number;
  priority?: boolean;
  alt?: string;
}) {
  return (
    <div className={styles.sizedWrap} style={{ maxWidth: maxW }}>
      <Image
        src={src}
        alt={alt}
        width={2200}
        height={1400}
        className={styles.sizedImg}
        draggable={false}
        priority={priority}
      />
    </div>
  );
}

export default function EkosolvoPage() {
  return (
    <main className={styles.page}>
      <ProjectNav
        backHref="/projets?focus=ekosolvo"
        prevHref="/projets/designsystem"
        nextHref="/projets/fabris"
        nextLabel="Projet suivant"
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} {...FADE}>
            <SizedImage
              src="/assets/projects/ekosolvo/Hero.png"
              maxW={700}
              priority
              alt="Aperçu du projet Ekosolvo"
            />
          </motion.div>

          <motion.div className={styles.heroRight} {...FADE}>
            <h1 className={styles.h1}>Ekosolvo</h1>

            <div className={styles.heroText}>
              <p className={styles.p}>
                Ekosolvo est une application développée dans le cadre d’un
                projet long qui propose différents{" "}
                <Blue>défis sur l’écologie</Blue>.
              </p>

              <div className={styles.paragraphGap} />

              <p className={styles.p}>
                Ekosolvo se base sur l’aspect <Blue>communautaire</Blue> où les
                chefs de communauté proposent des défis que les membres peuvent
                réaliser pour gagner des points. La participation est encouragée
                par la <Blue>gamification</Blue> et la{" "}
                <Blue>compétition entre les communautés</Blue>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION : détail (image export) */}
      <section className={styles.section}>
        <div className={styles.center}>
          <motion.div {...FADE}>
            <SizedImage
              src="/assets/projects/ekosolvo/detail.png"
              maxW={1100}
              alt="Détails des écrans Ekosolvo"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION : 3 colonnes */}
      <section className={styles.section}>
        <div className={styles.center}>
          <motion.div {...FADE} className={styles.cols3}>
            <div className={styles.colCard}>
              <div className={styles.screenWrap}>
                <Image
                  src="/assets/projects/ekosolvo/Analyse.png"
                  alt="Écran Analyse"
                  width={900}
                  height={1200}
                  className={styles.screenImg}
                  draggable={false}
                />
              </div>

              <div className={styles.titleImgWrap}>
                <SizedImage
                  src="/assets/projects/ekosolvo/Analyse2.png"
                  maxW={160}
                />
              </div>

              <p className={styles.cardText}>
                Donnez vous des objectifs de consommation grâce aux statistiques
              </p>
            </div>

            <div className={styles.colCard}>
              <div className={styles.screenWrap}>
                <Image
                  src="/assets/projects/ekosolvo/Community.png"
                  alt="Écran Communauté"
                  width={900}
                  height={1200}
                  className={styles.screenImg}
                  draggable={false}
                />
              </div>

              <div className={styles.titleImgWrap}>
                <Image
                  src="/assets/projects/ekosolvo/CommunityTitle.png"
                  alt="Communauté"
                  width={520}
                  height={160}
                  className={styles.titleImg}
                  draggable={false}
                />
              </div>

              <p className={styles.cardText}>
                Formez une communauté pour vous encourager à réaliser plus de
                défis !
              </p>
            </div>

            <div className={styles.colCard}>
              <div className={styles.screenWrap}>
                <Image
                  src="/assets/projects/ekosolvo/Classement.png"
                  alt="Écran Classement"
                  width={900}
                  height={1200}
                  className={styles.screenImg}
                  draggable={false}
                />
              </div>

              <div className={styles.titleImgWrap}>
                <SizedImage
                  src="/assets/projects/ekosolvo/ClassementTitre.png"
                  maxW={200}
                />
              </div>

              <p className={styles.cardText}>
                Jouez contre d’autres communautés ou comparez vous aux autres
                utilisateurs
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className={styles.bottomSpace} />
    </main>
  );
}
