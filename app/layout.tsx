import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sezginildes.com"),
  title: { default: "Sezgin İldeş | İnsan Gelişimi", template: "%s | Sezgin İldeş" },
  description: "Psikolojik danışmanlık, kariyer danışmanlığı, kurumsal eğitimler ve seminerler.",
  keywords: ["Sezgin İldeş", "kariyer danışmanlığı", "psikolojik danışmanlık", "kurumsal eğitim", "seminer"],
  openGraph: { type: "website", locale: "tr_TR", siteName: "Sezgin İldeş", title: "Sezgin İldeş | İnsan Gelişimi", description: "İnsan gelişimi, doğru sorularla başlar." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
