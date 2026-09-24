import type { Metadata } from "next";
import LifeDashboard from "./LifeDashboard";

export const metadata: Metadata = {
  title: "Hayat Paneli",
  description: "Uyku, hareket, üretim, içerik ve yaşam ritmini sade biçimde takip etmek için kişisel panel.",
  robots: { index: false, follow: false },
};

export default function OdakPage() {
  return <LifeDashboard />;
}
