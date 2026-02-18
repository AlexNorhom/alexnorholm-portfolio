export type Lang = "fr" | "en";

export const DEFAULT_LANG: Lang = "fr";

export function isLang(value: unknown): value is Lang {
  return value === "fr" || value === "en";
}
