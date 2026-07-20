import type { Metadata } from "next";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
};

export function pageMetadata({ title, description, path, ogType = "website" }: PageSeo): Metadata {
  const fullTitle = `${title} | Sezgin İldeş`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      locale: "tr_TR",
      siteName: "Sezgin İldeş",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
