"use client";

import Image from "next/image";
import styles from "./Journey.module.css";

type InfoCard = {
  icon: string;
  title: string;
  subtitle?: string;
  big?: boolean;
};

type JourneyItem = {
  id: string;
  logoSrc: string;
  titleLine1: string;
  titleLine2: string;

  subtitle: string;
  description: string;

  mapSrc: string;

  cards: InfoCard[];
};

const items: JourneyItem[] = [
  {
    id: "edna",
    logoSrc: "/assets/home/EcoleDesignLogo.png",
    titleLine1: "Ecole de Design",
    titleLine2: "Nantes Atlantiques",
    subtitle: "Bachelor UI/UX",
    description:
      "Recherche d’alternance pour un Master digital de 2 ans à compter de septembre 2026.",
    mapSrc: "/assets/home/NantesImage.png",
    cards: [
      { icon: "📍", title: "Nantes", subtitle: "Loire Atlantique" },
      { icon: "⏰", title: "2023/Ajd" },
      { icon: "🔜", title: "Master Digital" },
    ],
  },
  {
    id: "digilab",
    logoSrc: "/assets/home/DigilabFavicon.png",
    titleLine1: "Digilab",
    titleLine2: "Lyra ETK",
    subtitle: "Stage - Designer UI/UX junior",
    description:
      "Stage de 2 mois chez Digilab, plateforme de centralisation Laboratoire - dentiste. Refonte UI/UX plateforme, vitrine, charte...",
    mapSrc: "/assets/home/ParisImage.png",
    cards: [
      { icon: "📍", title: "Paris", subtitle: "Île-de-France" },
      { icon: "⏰", title: "2 mois, 2024" },
      { icon: "🧑‍💼", title: "Designer Jr." },
    ],
  },
  {
    id: "lycee",
    logoSrc: "/assets/home/RegionLogo.png",
    titleLine1: "Lycée",
    titleLine2: "Jean Jaurès",
    subtitle: "Bac mention Bien",
    description:
      "Spécialités : Maths, Physiques, Histoire, Géographie, Géopolitique, Sciences Politiques.",
    mapSrc: "/assets/home/LyceeImage.png",
    cards: [
      { icon: "📍", title: "St Clément de R.", subtitle: "Occitanie" },
      { icon: "⏰", title: "2019" },
      { icon: "📚", title: "15/20" },
    ],
  },
  {
    id: "rhinov",
    logoSrc: "/assets/home/RhinovFavicon.png",
    titleLine1: "Rhinov",
    titleLine2: "Aménagement intérieur",
    subtitle: "Stage d’introduction",
    description:
      "Website et app spécialisée dans l'aménagement intérieur, la décoration et la modélisation 3D.",
    mapSrc: "/assets/home/BordauxImage.png",
    cards: [
      { icon: "📍", title: "Bordeaux", subtitle: "Gironde" },
      { icon: "⏰", title: "2020" },
      { icon: "🛠️", title: "Aménagement" },
    ],
  },
];

function InfoCardUI({ icon, title, subtitle, big }: InfoCard) {
  return (
    <div className={`${styles.infoCard} ${big ? styles.infoCardBig : ""}`}>
      <span className={styles.infoIcon} aria-hidden>
        {icon}
      </span>
      <div className={styles.infoText}>
        <div className={styles.infoTitle}>{title}</div>
        {subtitle ? <div className={styles.infoSub}>{subtitle}</div> : null}
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section className={styles.section} aria-label="Mon parcours">
      {/* ⚠️ si tu as encore le petit h2 gris, enlève-le pour éviter doublon */}
      {/* <h2 className={styles.h2}>Mon parcours</h2> */}

      <div className={styles.items}>
        {items.map((item) => (
          <article
            key={item.id}
            className={styles.item}
            data-chapter={
              item.id === "edna"
                ? "parcours_edna"
                : item.id === "digilab"
                  ? "parcours_digilab"
                  : item.id === "lycee"
                    ? "parcours_lycee"
                    : "parcours_rhinov"
            }
          >
            <div className={styles.itemHeader}>
              <Image
                src={item.logoSrc}
                alt=""
                width={84}
                height={84}
                className={styles.logo}
                draggable={false}
              />

              <div className={styles.itemTitle}>
                <div className={styles.titleLine}>{item.titleLine1}</div>
                <div className={styles.titleLine}>{item.titleLine2}</div>
              </div>
            </div>

            <div className={styles.textBlock}>
              <div className={styles.subtitle}>{item.subtitle}</div>
              <div className={styles.description}>{item.description}</div>
            </div>

            <div className={styles.bottomBlock}>
              <div className={styles.bottomGrid}>
                <div className={styles.mapWrap}>
                  <Image
                    src={item.mapSrc}
                    alt=""
                    fill
                    className={styles.map}
                    draggable={false}
                    sizes="(max-width: 520px) 280px, 160px"
                  />
                </div>

                <div className={styles.infoStack}>
                  {item.cards.map((c, idx) => (
                    <InfoCardUI key={idx} {...c} />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
