import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sezginildes.com";
  const pages = ["", "/hakkimda", "/hizmetler", "/psikolojik-danismanlik", "/egitimler", "/blog", "/iletisim"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : path === "/psikolojik-danismanlik" ? 0.9 : 0.7 })),
    ...articles.map((article) => ({ url: `${base}/blog/${article.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
