"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./FabrisPage.module.css";
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

function Chip({ children }: { children: React.ReactNode }) {
  return <div className={styles.chip}>{children}</div>;
}

function IconTextBlock({
  img,
  title,
  children,
}: {
  img: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.iconTextBlock}>
      <div className={styles.iconBlockImg}>
        <Image src={img} alt="" width={300} height={300} draggable={false} />
      </div>
      <div>
        <div className={styles.blockTitle}>{title}</div>
        <div className={styles.blockText}>{children}</div>
      </div>
    </div>
  );
}

function PastilleRow({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.pastilleRow}>
      <div className={styles.pastilleCell}>
        <Image src={icon} alt="" width={22} height={22} draggable={false} />
      </div>
      <div className={styles.pastilleContent}>
        <div className={styles.rowTitle}>{title}</div>
        <div className={styles.rowText}>{children}</div>
      </div>
    </div>
  );
}

export default function FabrisPage() {
  return (
    <main className={styles.page}>
      <ProjectNav
        backHref="/projets?focus=fabris"
        prevHref="/projets/ekosolvo"
        nextHref="/projets/tisseo"
        nextLabel="Projet suivant"
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} {...FADE}>
            <SizedImage
              src="/assets/projects/fabris/Hero.png"
              maxW={500}
              priority
              alt="Aperçu du projet Fabris"
            />
          </motion.div>

          <motion.div className={styles.heroRight} {...FADE}>
            {/* ⚠️ Remplace ce texte par celui EXACT de ta maquette (celui sur l'image) */}
            <h1 className={styles.h1}>Fabris</h1>

            <div className={styles.heroText}>
              <p className={styles.p}>
                {/* mets le texte exact ici */}
                {/* Exemple (à remplacer) : */}
                Intervention de plusieurs entreprises sur le thème des{" "}
                <Blue>véhicules intermédiaires</Blue>
              </p>

              <div className={styles.paragraphGap} />

              <p className={styles.p}>
                {/* texte exact */}
                {/* Exemple (à remplacer) : */}
                Projet de groupe accompagné d’un intervenant Inddigo.
              </p>
              <div className={styles.paragraphGap} />
              <p className={styles.p}>
                {/* texte exact */}
                {/* Exemple (à remplacer) : */}
                Problématique : Comment permettre à un propriétaire de véli
                d’avoir accès au{" "}
                <Blue>stationnement en milieu urbain dense </Blue>en tenant
                compte des contraintes d’espace et des dimensions variables des
                vélis ?
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PERSONA */}
      <section className={styles.section}>
        <div className={styles.centerWrap}>
          <motion.div {...FADE} className={styles.personaCenter}>
            <SizedImage
              src="/assets/projects/fabris/PDP.png"
              maxW={200}
              alt="Photo de profil persona"
            />
            <div className={styles.personaName}>{"Guillaume"}</div>

            <div className={styles.personaChips}>
              <Chip>{"23 ans"}</Chip>
              <Chip>{"Thouaré-sur-Loire"}</Chip>
            </div>
          </motion.div>

          <div className={styles.midSpacer} />

          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/fabris/Skills.png"
              maxW={520}
              alt="Skills"
            />
          </motion.div>

          <div className={styles.midSpacer} />

          <motion.div {...FADE} className={styles.twoColsCentered}>
            <IconTextBlock
              img="/assets/projects/fabris/Besoin.png"
              title="Besoins"
            >
              {/* Remplace par le texte exact */}
              <Blue>Stationner</Blue> son véhicule intermédiaire dans{" "}
              <Blue>
                Nantes au plus proche de son entreprise pendant toute la jurnée.
              </Blue>{" "}
              Être à l’abri de la pluie lors d’intempéries pour son trajet.
              Economiser de l’argent
            </IconTextBlock>

            <IconTextBlock
              img="/assets/projects/fabris/Objectif.png"
              title="Objectif"
            >
              {/* Remplace par le texte exact */}
              Stationner de manière sécurisée. Pouvoir se garer au même endroit
              de manière <Blue>récurrente</Blue>, proche de son{" "}
              <Blue>lieu de travail</Blue>. Stationner en journée.
            </IconTextBlock>
          </motion.div>
        </div>
      </section>

      {/* CHARTE */}
      <section className={styles.section}>
        <div className={styles.centerWrap}>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/fabris/Charte.png"
              maxW={430}
              alt="Charte graphique"
            />
          </motion.div>

          <div className={styles.midSpacer} />

          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/fabris/Charte2.png"
              maxW={1100}
              alt="Charte - logos et mockup"
            />
          </motion.div>
        </div>
      </section>

      {/* NOTRE CONCEPT */}
      <section className={styles.section}>
        <div className={styles.centerWrap}>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/fabris/Concept.png"
              maxW={690}
              alt="Notre concept"
            />
          </motion.div>

          <div className={styles.midSpacer} />

          <motion.div {...FADE} className={styles.textCol}>
            <div className={styles.subTitle24}>Abri</div>

            <div className={styles.text20}>
              <p className={styles.p20}>
                Notre volonté est de créer un abri qui{" "}
                <Blue>s’adapte à son environnment</Blue> avec des matérieaux
                récupérés et des préfabriqués afin de limiter l’impact
                environnemental.
              </p>

              <div className={styles.smallSpacer} />

              <p className={styles.p20}>
                Un système de rails coulissables au sol permettent une{" "}
                <Blue>adaptation de la taille</Blue> des boxes intérieurs à des{" "}
                <Blue>véhicules intermédiaires de toutes tailles</Blue>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* APP */}
      <section className={styles.section}>
        <div className={styles.centerWrap}>
          <motion.div {...FADE} className={styles.center}>
            <SizedImage
              src="/assets/projects/fabris/App.png"
              maxW={600}
              alt="App mockup + titre"
            />
          </motion.div>

          <div className={styles.midSpacer} />
          <div className={styles.midSpacer} />

          <motion.div {...FADE} className={styles.appRows}>
            {/* ⚠️ Remplace Pastille1/2/3 par tes vrais fichiers si tu en as */}
            <PastilleRow icon="/assets/projects/fabris/RondB.svg" title="Carte">
              Une <Blue>carte interactive </Blue>affiche les garages
              disponibles, permettant de sélectionner facilement un garage
              proche.
            </PastilleRow>

            <PastilleRow
              icon="/assets/projects/fabris/RondB.svg"
              title="Réservation"
            >
              Les utilisateurs peuvent <Blue>réserver</Blue> et vérifier la
              disponibilité des places dans un garage pour véhicules
              intermédiaires <Blue>via l’application.</Blue>
            </PastilleRow>

            <PastilleRow
              icon="/assets/projects/fabris/RondB.svg"
              title="Sécurité"
            >
              Chaque utilisateur dispose d’un <Blue>QR code unique</Blue>{" "}
              représentant son abonnement annuel. Une fois au garage,
              l’utilisateur scanne son{" "}
              <Blue>QR code pour accéder à sa place</Blue> réservée.
            </PastilleRow>
          </motion.div>
        </div>
      </section>

      <div className={styles.bottomSpace} />
    </main>
  );
}
