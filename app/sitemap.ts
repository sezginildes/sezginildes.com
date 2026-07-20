import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sezginildes.com";
  const pages = ["", "/hakkimda", "/hizmetler", "/psikolojik-danismanlik", "/kariyer-danismanligi", "/egitimler", "/blog", "/iletisim", "/gizlilik"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : path === "/psikolojik-danismanlik" || path === "/kariyer-danismanligi" ? 0.9 : path === "/gizlilik" ? 0.3 : 0.7 })),
    ...articles.map((article) => ({ url: `${base}/blog/${article.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
