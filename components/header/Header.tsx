"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";
import { useLang } from "@/components/shared/LanguageProvider";

type NavItemKey = "projets" | "illustrations" | "animations";

type NavItem = {
  key: NavItemKey;
  href: string;
};

const navItems: NavItem[] = [
  { key: "projets", href: "/projets" },
  { key: "illustrations", href: "/illustrations" },
  { key: "animations", href: "/animations" },
];

export default function Header() {
  const pathname = usePathname();

  // ✅ ON GARDE la logique langue mais inutilisée pour l'instant
  const { lang, toggleLang } = useLang();

  const activeKey: NavItemKey | null = pathname.startsWith("/projets")
    ? "projets"
    : pathname.startsWith("/illustrations")
      ? "illustrations"
      : pathname.startsWith("/animations")
        ? "animations"
        : null;

  const labels: Record<NavItemKey, string> =
    lang === "fr"
      ? {
          projets: "Projets",
          illustrations: "Illustrations",
          animations: "Animations",
        }
      : {
          projets: "Projects",
          illustrations: "Illustrations",
          animations: "Motion",
        };

  // ✅ chemins CV
  const cvHref = "/assets/cv/CV_Alex_Norholm.pdf";
  const cvIcon = "/assets/cv/CVicon.svg";

  return (
    <>
      {/* Logo N fixed (clique -> home) */}
      <Link href="/" className={styles.logoWrap} aria-label="Back to home">
        <Image
          className={styles.logo}
          src="/assets/home/NLogo.svg"
          alt=""
          width={40}
          height={40}
          draggable={false}
          priority
        />
      </Link>

      {/* Header centre */}
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activeKey === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                {labels[item.key]}
                {isActive ? <span className={styles.dot} aria-hidden /> : null}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* ============================= */}
      {/* CV BUTTON (ACTIF) */}
      {/* ============================= */}
      <a
        className={styles.langBtn}
        href={cvHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open CV"
      >
        <span className={styles.langText}>CV</span>
        <Image
          src={cvIcon}
          alt=""
          width={22}
          height={22}
          className={styles.flag}
          draggable={false}
        />
      </a>

      {/* ============================= */}
      {/* LANG SWITCH (DÉSACTIVÉ TEMPORAIREMENT) */}
      {/* Pour réactiver : supprimer les commentaires */}
      {/* ============================= */}
      {/*
      <button
        className={styles.langBtn}
        type="button"
        onClick={toggleLang}
        aria-label={lang === "fr" ? "Changer la langue" : "Switch language"}
      >
        <span className={styles.langText}>
          {lang === "fr" ? "FR" : "EN"}
        </span>
        <Image
          src={lang === "fr" ? "/assets/home/FR.png" : "/assets/home/GB.png"}
          alt=""
          width={22}
          height={22}
          className={styles.flag}
          draggable={false}
        />
      </button>
      */}
    </>
  );
}
