export function homeAsset(lang: "fr" | "en", filename: string) {
  return lang === "fr"
    ? `/assets/home/${filename}`
    : `/assets/home/en/${filename}`;
}
