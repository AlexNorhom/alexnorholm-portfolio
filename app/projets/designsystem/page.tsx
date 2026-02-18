"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./DesignSystemPage.module.css";
import ProjectNav from "@/components/projects/ProjectNav";

/* Fade in global (identique aux autres pages) */
const FADE = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.45, once: false },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

/* Texte bleu helper */
function Blue({ children }: { children: React.ReactNode }) {
  return <span className={styles.blue}>{children}</span>;
}

/* Image avec taille maîtrisée */
function SizedImage({
  src,
  maxW = 700,
  priority = false,
}: {
  src: string;
  maxW?: number;
  priority?: boolean;
}) {
  return (
    <div className={styles.sizedWrap} style={{ maxWidth: maxW }}>
      <Image
        src={src}
        alt=""
        width={2000}
        height={1400}
        className={styles.sizedImg}
        draggable={false}
        priority={priority}
      />
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className={styles.page}>
      {/* NAV */}
      <ProjectNav
        backHref="/projets?focus=designsystem" // adapte si tes routes sont /projets/... ou /projects/...
        prevHref="/projets/meteoradar"
        nextHref="/projets/ekosolvo"
        nextLabel="Projet suivant"
      />
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} {...FADE}>
            <SizedImage
              src="/assets/projects/designsystem/Hero.png"
              maxW={1000}
              priority
            />
          </motion.div>

          <motion.div className={styles.heroRight} {...FADE}>
            <h1 className={styles.h1}>Design system</h1>

            <div className={styles.intro}>
              <p className={styles.p}>
                Nous avons réalisé une application qui permet{" "}
                <Blue>d’acheter des graines</Blue>. On y trouve ensuite un{" "}
                <Blue>suivi personnalisé</Blue>, un guide pour prendre soin de
                ses plantes.
              </p>

              <p className={styles.p}>
                Cette mise en contexte nous a permis de réaliser un{" "}
                <Blue>design system complet</Blue>.
              </p>

              <p className={styles.p}>Récoltez vos premiers légumes !</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          SECTION 1 – MON JARDIN
      ========================== */}
      <section className={styles.section}>
        <div className={styles.centerWrap}>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/designsystem/Jardin.png"
              maxW={460}
              priority
            />
          </motion.div>

          <div className={styles.smallSpacer} />

          <motion.div {...FADE} className={styles.textBlock}>
            <h3 className={styles.subtitle}>Retours utilisateurs</h3>

            <p className={styles.text}>
              Une page “Mon jardin” permet de consulter{" "}
              <Blue>l’état et les conseils d’entretient de ses plantes</Blue>{" "}
              <Blue>achetées depuis l’application</Blue>.
            </p>

            <p className={styles.text}>
              Les cards permettent de résumer l’information pour un{" "}
              <Blue>aperçu global du jardin</Blue>.
            </p>
          </motion.div>
        </div>
      </section>
      {/* =========================
          SECTION 2 – SUIVI
      ========================== */}
      <section className={styles.section}>
        <div className={styles.centerWrapWide}>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/designsystem/Suivi.png"
              maxW={420}
            />
          </motion.div>

          <div className={styles.smallSpacer} />

          <motion.div {...FADE} className={styles.textBlock}>
            <h3 className={styles.subtitle}>Retours utilisateurs</h3>

            <p className={styles.text}>
              Chaque plante a une page plus détaillée qui accompagne les
              utilisateurs dans l’entretient de leur plantes. On y trouve des
              information sur la quantité de lumière exigée,{" "}
              <Blue>
                la quantité d’eau grâce à un calendrier adapté à votre plante
              </Blue>
              .
            </p>

            <p className={styles.textMuted}>
              (date à laquelle la graine est plantée, type de plante, période de
              l’année.)
            </p>
          </motion.div>
        </div>
      </section>
      {/* =========================
          SECTION 3 – UI KIT
      ========================== */}

      {/* UI KIT */}
      <section className={styles.section}>
        <div className={styles.centerWrap}>
          <motion.div {...FADE} className={styles.center}>
            {/* Titre UIKit (taille réglable via maxW) */}
            <SizedImage src="/assets/projects/designsystem/UI.png" maxW={200} />
          </motion.div>
        </div>
        <div className={styles.smallSpacer} />
        <div className={styles.uiKitHint}>
          Vous pouvez{" "}
          <span className={styles.hintBold}>scroller horizontalement</span>.
        </div>

        <div className={styles.midSpacer} />

        {/* Image large scrollable (bord à bord) */}
        <motion.div {...FADE} className={styles.uiKitBleed}>
          <div className={styles.uiKitScroller}>
            <div
              className={styles.uiKitInner}
              style={{ height: 400 }} // ✅ tu modifies ici la hauteur visible
            >
              <Image
                src="/assets/projects/designsystem/UI-Kit.svg"
                alt="UI Kit content"
                width={2000}
                height={1200}
                className={styles.uiKitImg}
                draggable={false}
              />
            </div>
          </div>
        </motion.div>
      </section>

      <div className={styles.bottomSpace} />
    </main>
  );
}
