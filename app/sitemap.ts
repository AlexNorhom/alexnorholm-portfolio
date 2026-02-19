import type { MetadataRoute } from "next";

const baseUrl = "https://alexnorholm.com"; // change

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projets", "/illustrations", "/animations"].map((r) => ({
    url: `${baseUrl}${r}`,
    lastModified: new Date(),
  }));

  // (optionnel) ajoute tes pages projets si tu veux
  const projectRoutes = [
    "/projets/digilab",
    "/projets/accedu",
    "/projets/meteoradar",
    "/projets/designsystem",
    "/projets/ekosolvo",
    "/projets/fabris",
    "/projets/tisseo",
  ].map((r) => ({
    url: `${baseUrl}${r}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
