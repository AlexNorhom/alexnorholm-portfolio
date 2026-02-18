"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./ProjectsPage.module.css";

type Tag = { label: string; emoji?: string };
type Person =
  | { mode: "solo"; avatar: string; label: string }
  | { mode: "team"; avatars: string[]; count: number };

type Project = {
  id: string;

  leftImages: {
    src: string;
    alt?: string;
    className?: string;
    maxW?: number;
    maxH?: number;
  }[];

  titlePrefix: string;
  titleBlue: string;
  subtitle: string;

  mapSrc: string;
  tools: string[];
  people: Person;
  timeLabel: string;
  tags: Tag[];
  ctaHref: string;
};

const projects: Project[] = [
  {
    id: "digilab",
    leftImages: [
      {
        src: "/assets/projects/digilab/DigilabImageHero.png",
        className: "hero",
      },
    ],
    titlePrefix: "Stage de 2 mois chez",
    titleBlue: "Digilab",
    subtitle: "Designer UI/UX junior",
    mapSrc: "/assets/home/ParisImage.png",
    tools: [
      "/assets/projects/Projects/FigmaImage.png",
      "/assets/projects/Projects/PsImage.png",
      "/assets/projects/Projects/AiImage.png",
      "/assets/projects/Projects/TeamsImage.png",
      "/assets/projects/Projects/TrelloImage.png",
    ],
    people: {
      mode: "solo",
      avatar: "/assets/projects/Projects/PDP1.png",
      label: "Projet seul",
    },
    timeLabel: "2 mois, 2024",
    tags: [
      { label: "Stage", emoji: "🏢" },
      { label: "Projet UI/UX", emoji: "💻" },
      { label: "Illustrations", emoji: "🎨" },
    ],
    ctaHref: "/projets/digilab",
  },

  {
    id: "accedu",
    leftImages: [
      {
        src: "/assets/projects/Accedu/AcceduImage.png",
        className: "hero",
        maxW: 950,
        maxH: 750,
      },
    ],
    titlePrefix: "Projet Bachelor -",
    titleBlue: "Accedu",
    subtitle: "Plateforme de cours en ligne",
    mapSrc: "/assets/home/NantesImage.png",
    tools: [
      "/assets/projects/Projects/FigmaImage.png",
      "/assets/projects/Projects/AiImage.png",
      "/assets/projects/Projects/GptImage.png",
      "/assets/projects/Projects/NotionImage.png",
      "/assets/projects/Projects/ContrastImage.png",
    ],
    people: {
      mode: "solo",
      avatar: "/assets/projects/Projects/PDP1.png",
      label: "Projet seul",
    },
    timeLabel: "1 an, 2024/25",
    tags: [
      { label: "Projet UI/UX", emoji: "💻" },
      { label: "Projet école", emoji: "🏫" },
      { label: "Accessibilité", emoji: "🔧" },
    ],
    ctaHref: "/projets/accedu",
  },

  {
    id: "meteoradar",
    leftImages: [
      {
        src: "/assets/projects/meteoradar/HeroImage.png",
        className: "hero",
        maxW: 850,
        maxH: 500,
      },
    ],
    titlePrefix: "Cours Audit -",
    titleBlue: "Météo Radar",
    subtitle: "Simulation d'agence UX",
    mapSrc: "/assets/home/NantesImage.png",
    tools: [
      "/assets/projects/Projects/NotionImage.png",
      "/assets/projects/Projects/FigmaImage.png",
    ],
    people: {
      mode: "team",
      avatars: [
        "/assets/projects/Projects/PDP1.png",
        "/assets/projects/Projects/PDP2.png",
        "/assets/projects/Projects/PDP3.png",
      ],
      count: 3,
    },
    timeLabel: "2025",
    tags: [
      { label: "Audit", emoji: "🔎" },
      { label: "Projet UI/UX", emoji: "💻" },
      { label: "Projet école", emoji: "🏫" },
    ],
    ctaHref: "/projets/meteoradar",
  },

  {
    id: "designsystem",
    leftImages: [
      {
        src: "/assets/projects/designsystem/DesignSystemImage.png",
        className: "hero",
      },
    ],
    titlePrefix: "Cours",
    titleBlue: "Design system",
    subtitle: "Application, vente de gaines",
    mapSrc: "/assets/home/NantesImage.png",
    tools: [
      "/assets/projects/Projects/NotionImage.png",
      "/assets/projects/Projects/PsImage.png",
      "/assets/projects/Projects/FigmaImage.png",
    ],
    people: {
      mode: "team",
      avatars: [
        "/assets/projects/Projects/PDP1.png",
        "/assets/projects/Projects/PDP2.png",
        "/assets/projects/Projects/PDP3.png",
      ],
      count: 3,
    },
    timeLabel: "2025",
    tags: [
      { label: "Projet UI/UX", emoji: "💻" },
      { label: "Projet école", emoji: "🏫" },
      { label: "Design system", emoji: "⚙️" },
    ],
    ctaHref: "/projets/designsystem",
  },

  {
    id: "ekosolvo",
    leftImages: [
      {
        src: "/assets/projects/ekosolvo/EkosolvoImage.png",
        className: "hero",
        maxW: 850,
        maxH: 500,
      },
    ],
    titlePrefix: "Projet long -",
    titleBlue: "Ekosolvo",
    subtitle: "Biomimétisme et innovation frugale",
    mapSrc: "/assets/home/NantesImage.png",
    tools: [
      "/assets/projects/Projects/GuithubImage.png",
      "/assets/projects/Projects/VisualSCImage.png",
      "/assets/projects/Projects/FigmaImage.png",
      "/assets/projects/Projects/NotionImage.png",
      "/assets/projects/Projects/GPTImage.png",
      "/assets/projects/Projects/AiImage.png",
      "/assets/projects/Projects/PsImage.png",
    ],
    people: {
      mode: "team",
      avatars: [
        "/assets/projects/Projects/PDP1.png",
        "/assets/projects/Projects/PDP2.png",
        "/assets/projects/Projects/PDP3.png",
      ],
      count: 3,
    },
    timeLabel: "4 mois, 2024",
    tags: [
      { label: "Projet UI/UX", emoji: "💻" },
      { label: "Projet école", emoji: "🏫" },
      { label: "Écologie", emoji: "🌱" },
      { label: "Code", emoji: "icon" },
    ],
    ctaHref: "/projets/ekosolvo",
  },

  {
    id: "fabris",
    leftImages: [
      {
        src: "/assets/projects/fabris/FabrisImage.png",
        className: "hero",
        maxW: 900,
        maxH: 500,
      },
    ],
    titlePrefix: "Hackaton -",
    titleBlue: "Fabris",
    subtitle: "Concours sur le thème des véhicules intermédiaires",
    mapSrc: "/assets/home/NantesImage.png",
    tools: [
      "/assets/projects/Projects/BlenderImage.png",
      "/assets/projects/Projects/PsImage.png",
      "/assets/projects/Projects/FigmaImage.png",
    ],
    people: {
      mode: "team",
      avatars: [
        "/assets/projects/Projects/PDP1.png",
        "/assets/projects/Projects/PDP2.png",
        "/assets/projects/Projects/PDP3.png",
        "/assets/projects/Projects/PDP4.png",
      ],
      count: 4,
    },
    timeLabel: "2 jours, 2025",
    tags: [
      { label: "Concours", emoji: "🏅" },
      { label: "Projet UI/UX", emoji: "💻" },
      { label: "Modélisation", emoji: "🧱" },
      { label: "Véli", emoji: "🛺" },
    ],
    ctaHref: "/projets/fabris",
  },

  {
    id: "tisseo",
    leftImages: [
      { src: "/assets/projects/tisseo/TisseoImage.png", className: "hero" },
    ],
    titlePrefix: "Transport Toulouse -",
    titleBlue: "Tisséo",
    subtitle: "Cours d’accessibilité web",
    mapSrc: "/assets/home/NantesImage.png",
    tools: [
      "/assets/projects/Projects/PsImage.png",
      "/assets/projects/Projects/AiImage.png",
      "/assets/projects/Projects/FigmaImage.png",
      "/assets/projects/Projects/ContrastImage.png",
    ],
    people: {
      mode: "team",
      avatars: [
        "/assets/projects/Projects/PDP1.png",
        "/assets/projects/Projects/PDP2.png",
        "/assets/projects/Projects/PDP3.png",
      ],
      count: 3,
    },
    timeLabel: "2024",
    tags: [
      { label: "Projet UI/UX", emoji: "💻" },
      { label: "Projet école", emoji: "🏫" },
      { label: "Accessibilité", emoji: "🔧" },
    ],
    ctaHref: "/projets/tisseo",
  },
];

function PeoplePill({ people }: { people: Person }) {
  if (people.mode === "solo") {
    return (
      <div className={styles.pill}>
        <div className={styles.avatars}>
          <Image
            className={styles.avatar}
            src={people.avatar}
            alt=""
            width={32}
            height={32}
            draggable={false}
          />
        </div>
        <div className={styles.pillText}>{people.label}</div>
      </div>
    );
  }

  return (
    <div className={styles.pill}>
      <div className={styles.avatars}>
        {people.avatars.slice(0, people.count).map((a, i) => (
          <Image
            key={a + i}
            className={styles.avatarOverlap}
            src={a}
            alt=""
            width={32}
            height={32}
            draggable={false}
          />
        ))}
      </div>

      <div className={styles.pillTeamRight}>
        <span className={styles.pillTextStrong}>{people.count}</span>
        <Image
          src="/assets/projects/Projects/GroupePersonnes.svg"
          alt=""
          width={18}
          height={18}
          draggable={false}
        />
      </div>
    </div>
  );
}

export default function ProjetsPage() {
  const searchParams = useSearchParams();

  // ✅ Quand on revient d’un projet : /projets?focus=tisseo -> scroll sur #tisseo
  useEffect(() => {
    const focus = searchParams.get("focus");
    if (!focus) return;

    // laisse le temps aux sections d’être rendues + images
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(focus);
      if (!el) return;

      // "auto" = pas de scroll visible (souvent)
      el.scrollIntoView({ behavior: "auto", block: "start" });

      // optionnel : nettoyer l’URL pour éviter que ça ressaute au refresh
      const url = new URL(window.location.href);
      url.searchParams.delete("focus");
      window.history.replaceState({}, "", url.toString());
    });

    return () => cancelAnimationFrame(raf);
  }, [searchParams]);

  return (
    <main className={styles.page}>
      <div className={styles.snap}>
        {projects.map((p) => (
          <section
            key={p.id}
            id={p.id} // ✅ important pour le focus
            className={styles.section}
            aria-label={p.id}
          >
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
                    <div
                      key={idx}
                      className={styles.mediaWrap}
                      style={{
                        maxWidth: img.maxW ? `${img.maxW}px` : undefined,
                        maxHeight: img.maxH ? `${img.maxH}px` : undefined,
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt ?? ""}
                        width={1100}
                        height={800}
                        className={`${styles.media} ${
                          img.className ? styles[img.className] : ""
                        }`}
                        draggable={false}
                        priority={idx === 0}
                      />
                    </div>
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
                    <PeoplePill people={p.people} />

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
                              t.emoji === "icon" ? (
                                <Image
                                  src="/assets/projects/Projects/CodeIcon.svg"
                                  alt=""
                                  width={16}
                                  height={16}
                                  className={styles.tagIcon}
                                  draggable={false}
                                />
                              ) : (
                                <span className={styles.tagEmoji} aria-hidden>
                                  {t.emoji}
                                </span>
                              )
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ✅ CTA vers la page projet (sans reload) */}
                    <Link className={styles.cta} href={p.ctaHref}>
                      Découvrir
                      <span className={styles.ctaIcon} aria-hidden>
                        <Image
                          src="/assets/icons/RightArrow.svg"
                          alt=""
                          width={18}
                          height={18}
                          className={styles.arrowBlue}
                          draggable={false}
                        />
                        <Image
                          src="/assets/icons/RightArrowWhite.svg"
                          alt=""
                          width={18}
                          height={18}
                          className={styles.arrowWhite}
                          draggable={false}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </main>
  );
}
