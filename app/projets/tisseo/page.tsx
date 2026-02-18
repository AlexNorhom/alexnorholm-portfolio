"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./TisseoPage.module.css";
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
        width={2400}
        height={1600}
        className={styles.sizedImg}
        draggable={false}
        priority={priority}
      />
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>
        <Image src={icon} alt="" width={78} height={78} draggable={false} />
      </div>
      <div>
        <div className={styles.featureTitle}>{title}</div>
        <div className={styles.featureText}>{text}</div>
      </div>
    </div>
  );
}

export default function TisseoPage() {
  return (
    <main className={styles.page}>
      <ProjectNav
        backHref="/projets#tisseo"
        prevHref="/projets/fabris"
        nextHref="/projets/digilab"
        nextLabel="Projet suivant"
      />

      {/* HERO */}
      <div className={styles.midSpacer} />
      <div className={styles.midSpacer} />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} {...FADE}>
            <SizedImage
              src="/assets/projects/tisseo/Hero.png"
              maxW={760}
              priority
              alt="Aperçu projet Tisséo"
            />
          </motion.div>

          <motion.div className={styles.heroRight} {...FADE}>
            <h1 className={styles.h1}>Tisseo</h1>

            <div className={styles.heroText}>
              <p className={styles.p}>
                Faire une <Blue>refonte du site internet Tisséo</Blue>{" "}
                (transports en commun de Toulouse)
              </p>

              <div className={styles.paragraphGap} />

              <p className={styles.p}>
                Cette nouvelle version doit être accessible, c’est à dire
                qu’elle doit respecter les{" "}
                <Blue>règles officielles d’accessibilité</Blue>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOBILE */}
      <section className={styles.section}>
        <div className={styles.centerWrap}>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/tisseo/mobile.png"
              maxW={390}
              alt="Mobile / Desktop"
            />
          </motion.div>

          <motion.div {...FADE} className={styles.textBlockCenter}>
            <div className={styles.midSpacer} />
            <div className={styles.subTitle}>Refonte</div>
            <div className={styles.ASpacer} />

            <p className={styles.p20}>
              Réalisation d’un{" "}
              <span className={styles.bold}>parcours utilisateur</span> complet
              en appliquant une refonte UX, UI, en respectant les contrastes,
              intitulés, champs… pour atteindre une version{" "}
              <Blue>100% conforme</Blue>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES (2 colonnes) */}
      <section className={styles.section}>
        <div className={styles.centerWrap}>
          <motion.div {...FADE} className={styles.featuresGrid}>
            <Feature
              icon="/assets/projects/tisseo/time.png"
              title="Prochains passages"
              text={
                <>
                  Ne manquez pas votre prochain bus ! Consultez en temps réels
                  les heures de passage
                </>
              }
            />

            <Feature
              icon="/assets/projects/tisseo/calendar.png"
              title="Fiches horaires"
              text={<>Consultez les horaires de votre ligne en un clic !</>}
            />
          </motion.div>
        </div>
      </section>

      <div className={styles.bottomSpace} />
    </main>
  );
}
