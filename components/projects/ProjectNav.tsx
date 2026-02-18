"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectNav.module.css";

type ProjectNavProps = {
  backHref: string; // ex: "/projets#digilab" ou "/projets?focus=digilab"
  prevHref: string; // ex: "/projets/tisseo"
  nextHref: string; // ex: "/projets/accedu"
  nextLabel?: string; // ex: "Projet suivant"
};

export default function ProjectNav({
  backHref,
  prevHref,
  nextHref,
  nextLabel = "Projet suivant",
}: ProjectNavProps) {
  return (
    <div className={styles.wrap} aria-label="Navigation projet">
      {/* Back (icon only) */}
      <Link className={`${styles.btn} ${styles.iconOnly}`} href={backHref}>
        <span className={styles.iconSwap} aria-hidden>
          <Image
            src="/assets/icons/Back.svg"
            alt=""
            width={20}
            height={20}
            className={styles.iconNormal}
            draggable={false}
          />
          <Image
            src="/assets/icons/BackWhite.svg"
            alt=""
            width={20}
            height={20}
            className={styles.iconHover}
            draggable={false}
          />
        </span>
      </Link>

      {/* Prev (icon only) */}
      <Link className={`${styles.btn} ${styles.iconOnly}`} href={prevHref}>
        <span className={styles.iconSwap} aria-hidden>
          <Image
            src="/assets/icons/LeftArrow.svg"
            alt=""
            width={18}
            height={18}
            className={styles.iconNormal}
            draggable={false}
          />
          <Image
            src="/assets/icons/LeftArrowWhite.svg"
            alt=""
            width={18}
            height={18}
            className={styles.iconHover}
            draggable={false}
          />
        </span>
      </Link>

      {/* Next (label + icon) */}
      <Link className={`${styles.btn} ${styles.next}`} href={nextHref}>
        <span className={styles.nextText}>{nextLabel}</span>

        <span className={styles.nextIcon} aria-hidden>
          <span className={styles.iconSwap}>
            <Image
              src="/assets/icons/RightArrow.svg"
              alt=""
              width={18}
              height={18}
              className={styles.iconNormal}
              draggable={false}
            />
            <Image
              src="/assets/icons/RightArrowWhite.svg"
              alt=""
              width={18}
              height={18}
              className={styles.iconHover}
              draggable={false}
            />
          </span>
        </span>
      </Link>
    </div>
  );
}
