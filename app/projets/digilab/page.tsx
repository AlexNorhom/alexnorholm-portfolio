"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import styles from "./DigilabPage.module.css";
import ProjectNav from "@/components/projects/ProjectNav";
import ScrollXfallery, {
  type ImgItem,
} from "@/app/projets/digilab/ScrollXfallery";

/** -----------------------------
 *  Fade in controls (global)
 *  ----------------------------- */
const FADE = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.45, once: false },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

/** Blue helper */
function Blue({ children }: { children: React.ReactNode }) {
  return <span className={styles.blue}>{children}</span>;
}

/** -----------------------------
 *  SizedImage (maxWidth fiable)
 *  ----------------------------- */
function SizedImage({
  src,
  alt = "",
  maxW = 720,
  className = "",
  priority = false,
}: {
  src: string;
  alt?: string;
  maxW?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`${styles.sizedWrap} ${className}`}
      style={{ maxWidth: maxW }}
    >
      <Image
        src={src}
        alt={alt}
        width={2000}
        height={1400}
        className={styles.sizedImg}
        draggable={false}
        priority={priority}
      />
    </div>
  );
}

export default function DigilabPage() {
  // NAV
  const backHref = "/projets#digilab";
  const prevHref = "/projets/tisseo";
  const nextHref = "/projets/accedu";

  const gallery = useMemo<ImgItem[]>(
    () => [
      { src: "/assets/projects/digilab/DigilabImage2.png" },
      { src: "/assets/projects/digilab/DigilabImage4.png" },
      { src: "/assets/projects/digilab/DigilabImage3.png" },
      { src: "/assets/projects/digilab/CommandesImage.png" },
      { src: "/assets/projects/digilab/FondEcran.png" },
    ],
    [],
  );

  return (
    <main className={styles.page}>
      <ProjectNav
        backHref={backHref}
        prevHref={prevHref}
        nextHref={nextHref}
        nextLabel="Projet suivant"
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} {...FADE}>
            <SizedImage
              src="/assets/projects/digilab/DigilabImageHero.png"
              maxW={760}
              priority
            />
          </motion.div>

          <motion.div className={styles.heroRight} {...FADE}>
            <h1 className={styles.h1}>Digilab</h1>

            {/* 2 paragraphes même taille */}
            <div className={styles.intro}>
              <p className={styles.p}>
                Plateforme qui automatise et{" "}
                <Blue>centralise les commandes dentaires</Blue>, simplifie la
                gestion de laboratoire. Certifiée HDS elle a obtenu le{" "}
                <Blue>prix de l’innovation</Blue> des prothésistes dentaires.
              </p>

              <p className={styles.p}>
                J’ai pu y mener la <Blue>refonte UI/UX</Blue>. Mon{" "}
                <Blue>stage de 2 mois</Blue> m’a permis d’approfondir mes
                compétences d’UI, d’UX, à m’intégrer dans une entreprise ainsi
                qu’occuper le <Blue>rôle de Designer Junior</Blue>, seul acteur
                designer de l’entreprise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className={styles.bigSpacer} />

      {/* UX Research */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <div className={styles.uxLabel}>UX Research</div>
          <div className={styles.Spacer} />
          <SizedImage src="/assets/projects/digilab/Etapes.png" maxW={500} />
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />

      {/* AaBlue + charte graphique */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage src="/assets/projects/digilab/AaBlue.png" maxW={350} />
          <div className={styles.LittleSpacer} />
          <h2 className={styles.h2}>
            Charte <Blue>graphique</Blue>
          </h2>

          <p className={styles.smallP}>
            J’ai ensuite pu <Blue>retravailler la charte graphique</Blue> de
            Digilab. J’ai utilisé une police Roboto.
          </p>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />

      {/* AaGray + TextsColors côte à côte */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.twoColSameH}>
          <div className={styles.sameH}>
            <Image
              src="/assets/projects/digilab/AaGray.png"
              alt=""
              width={1200}
              height={700}
              className={styles.sameHImg}
              draggable={false}
            />
          </div>

          <div className={styles.sameH}>
            <Image
              src="/assets/projects/digilab/TextsColors.png"
              alt=""
              width={1200}
              height={700}
              className={styles.sameHImg}
              draggable={false}
            />
          </div>
        </motion.div>

        <div className={styles.LittleSpacer} />
        <div className={styles.LittleSpacer} />

        <motion.div {...FADE} className={styles.center}>
          <h2 className={styles.h2}>
            <Blue>Typographie :</Blue> Roboto
          </h2>
          <div className={styles.LittleSpacer} />
          <SizedImage src="/assets/projects/digilab/Roboto.svg" maxW={700} />

          <div className={styles.greenInfo}>
            <Image
              src="/assets/icons/iconsax-info-circle-green.svg"
              alt=""
              width={22}
              height={22}
              draggable={false}
            />
            <span className={styles.greenText}>
              Police droite : Environnement sécurisé, cadré, rassurant.
            </span>
          </div>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />

      {/* Couleurs principales */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage src="/assets/projects/digilab/MainColor.png" maxW={500} />

          <h2 className={styles.h2}>
            Couleurs <Blue>principales</Blue>
          </h2>

          <p className={styles.smallP}>
            J’ai eu la liberté de <Blue>modifier</Blue> légèrement les{" "}
            <Blue>couleurs principales</Blue> et <Blue>changer</Blue> les{" "}
            <Blue>couleurs secondaires</Blue>, supprimant le jaune, associé au
            bleu auparavant.
          </p>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />

      {/* Couleurs secondaires */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage
            src="/assets/projects/digilab/DigilabSecondColor1.png"
            maxW={500}
          />
          <div className={styles.LittleSpacer} />

          <h2 className={styles.h2}>
            Couleurs <Blue>secondaires</Blue>
          </h2>

          <p className={styles.smallP}>
            J’ai ajouté des couleurs pastel et claires pour{" "}
            <Blue>moderniser la plateforme</Blue> et garder un{" "}
            <Blue>aspect dentaire épuré</Blue>.
          </p>
        </motion.div>
      </section>

      <div className={styles.bigSpacer} />

      {/* Refonte */}
      <section className={styles.section}>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage src="/assets/projects/digilab/Refonte.png" maxW={600} />
        </motion.div>
      </section>

      {/* Auto scroll horizontal */}
      <section className={styles.sectionWide}>
        <ScrollXfallery
          images={gallery}
          height={240}
          startAt="start 40%"
          speed={3}
        />
      </section>

      {/* Mobile */}
      <section>
        <motion.div {...FADE} className={styles.center}>
          <SizedImage src="/assets/projects/digilab/Mobile.png" maxW={860} />
        </motion.div>
      </section>

      <div className={styles.bottomSpace} />
    </main>
  );
}
