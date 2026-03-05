import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://noods-lab.example";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/menu`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
