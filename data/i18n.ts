import type { Lang } from "@/data/lang";

export type I18nKey =
  | "home.title"
  | "projects.title"
  | "illustrations.title"
  | "animations.title"
  | "animations.soon"
  | "header.projects"
  | "header.illustrations"
  | "header.animations";

const dict: Record<I18nKey, { fr: string; en: string }> = {
  "home.title": { fr: "Accueil", en: "Home" },

  "projects.title": { fr: "Projets", en: "Projects" },
  "illustrations.title": { fr: "Illustrations", en: "Illustrations" },

  "animations.title": { fr: "Animations", en: "Animations" },
  "animations.soon": { fr: "Bientôt", en: "Coming soon" },

  "header.projects": { fr: "Projets", en: "Projects" },
  "header.illustrations": { fr: "Illustrations", en: "Illustrations" },
  "header.animations": { fr: "Animations", en: "Animations" },
};

export function t(lang: Lang, key: I18nKey) {
  return dict[key][lang];
}
