"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./IllustrationsPage.module.css";

type Tag = { label: string; emoji?: string };

type Illustration = {
  id: string;

  // colonne gauche
  leftImages: { src: string; alt?: string; className?: string }[]; // 1 à 3 visuels

  // colonne droite
  titlePrefix: string; // ex: "Illustration"
  titleBlue: string; // ex: "vectorielle"
  subtitle: string; // ex: "Réalisé pour ..."
  subline?: string; // ligne grise optionnelle (comme ta maquette)

  mapSrc: string;
  tools: string[];
  people: { avatar: string; label: string };
  timeLabel: string;

  tags: Tag[];
};

const illustrations: Illustration[] = [
  {
    id: "aquavitae",
    leftImages: [
      {
        src: "/assets/illustrations/AquavitaeImage.png",
        className: "imgCollage",
      },
    ],

    titlePrefix: "Illustration",
    titleBlue: "Aquavitae Circuli",
    subtitle: "Processus de fabrication",
    mapSrc: "/assets/illustrations/MontpellierImage.png",
    tools: [
      "/assets/projects/Projects/PsImage.png",
      "/assets/projects/Projects/AiImage.png",
    ],
    people: {
      avatar: "/assets/projects/Projects/PDP1.png",
      label: "Projet seul",
    },
    timeLabel: "2025",
    tags: [
      { label: "Illustration", emoji: "🎨" },
      { label: "Freelance", emoji: "🚀" },
    ],
  },

  {
    id: "arthur",
    leftImages: [
      {
        src: "/assets/illustrations/ArthurImage.png",
        className: "imgLarge",
      },
    ],
    titlePrefix: "Illustration",
    titleBlue: "vectorielle",
    subtitle: "Réalisé pour Arthur cazaux",
    subline: "Joueur de tennis professionnel - Performance Australian Open )",
    mapSrc: "/assets/illustrations/MontpellierImage.png",
    tools: ["/assets/projects/Projects/AiImage.png"],
    people: {
      avatar: "/assets/projects/Projects/PDP1.png",
      label: "Projet seul",
    },
    timeLabel: "2024",
    tags: [
      { label: "Illustration", emoji: "🎨" },
      { label: "Freelance", emoji: "🚀" },
    ],
  },

  {
    id: "rap",
    leftImages: [
      { src: "/assets/illustrations/RapImagePs.png", className: "imgXL" },
    ],

    titlePrefix: "Poster",
    titleBlue: "Rap",
    subtitle: "Cours d'infographie",
    mapSrc: "/assets/illustrations/NantesImage.png",
    tools: ["/assets/projects/Projects/PsImage.png"],
    people: {
      avatar: "/assets/projects/Projects/PDP1.png",
      label: "Projet seul",
    },
    timeLabel: "2023",
    tags: [
      { label: "Illustration", emoji: "🎨" },
      { label: "Projet école", emoji: "🏫" },
    ],
  },
];

function SoloPill({ avatar, label }: { avatar: string; label: string }) {
  return (
    <div className={styles.pill}>
      <div className={styles.avatars}>
        <Image
          className={styles.avatar}
          src={avatar}
          alt=""
          width={32}
          height={32}
          draggable={false}
        />
      </div>
      <div className={styles.pillText}>{label}</div>
    </div>
  );
}

export default function IllustrationsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.snap}>
        {illustrations.map((p) => (
          <section key={p.id} className={styles.section} aria-label={p.id}>
            <motion.div
              className={styles.sectionInner}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.55, once: false }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Colonne gauche */}
              <div className={styles.left}>
                <div className={styles.leftMedia}>
                  {p.leftImages.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img.src}
                      alt={img.alt ?? ""}
                      width={1200}
                      height={900}
                      className={`${styles.media} ${img.className ? styles[img.className] : ""}`}
                      draggable={false}
                    />
                  ))}
                </div>
              </div>

              {/* Colonne droite */}
              <div className={styles.right}>
                <div className={styles.titles}>
                  <h1 className={styles.h1}>
                    {p.titlePrefix}{" "}
                    <span className={styles.blue}>{p.titleBlue}</span>
                  </h1>

                  <h2 className={styles.h2}>{p.subtitle}</h2>

                  {p.subline ? (
                    <p className={styles.subline}>{p.subline}</p>
                  ) : null}
                </div>

                <div className={styles.gridFrame}>
                  {/* Col gauche : map + tools */}
                  <div className={styles.colA}>
                    <div className={styles.mapWrap}>
                      <Image
                        src={p.mapSrc}
                        alt=""
                        width={160}
                        height={160}
                        className={styles.map}
                        draggable={false}
                      />
                    </div>

                    <div className={styles.toolsWrap}>
                      {p.tools.map((t, i) => (
                        <div key={i} className={styles.tool}>
                          <Image
                            src={t}
                            alt=""
                            width={42}
                            height={42}
                            className={styles.toolImg}
                            draggable={false}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Col droite : people + time + tags */}
                  <div className={styles.colB}>
                    <SoloPill avatar={p.people.avatar} label={p.people.label} />

                    <div className={styles.pill}>
                      <span className={styles.emoji} aria-hidden>
                        ⏰
                      </span>
                      <div className={styles.pillText}>{p.timeLabel}</div>
                    </div>

                    <div className={styles.detailBox}>
                      <div className={styles.detailTitle}>
                        Détail{" "}
                        <span className={styles.detailPin} aria-hidden>
                          🎯
                        </span>
                      </div>

                      <div className={styles.tags}>
                        {p.tags.map((t, i) => (
                          <div key={i} className={styles.tag}>
                            <span className={styles.tagText}>{t.label}</span>
                            {t.emoji ? (
                              <span className={styles.tagEmoji} aria-hidden>
                                {t.emoji}
                              </span>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* (pas de CTA pour l’instant) */}
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </main>
  );
}
