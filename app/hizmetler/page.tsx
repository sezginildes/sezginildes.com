import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import ContactCta from "@/components/ContactCta";

export const metadata: Metadata = { title: "Hizmetler", description: "Psikolojik danışmanlık, kariyer danışmanlığı, kurumsal eğitimler ve seminerler." };
const services = [
  ["Psikolojik Danışmanlık", "Kendinizi daha iyi anlamak, zorlayıcı döngüleri fark etmek ve hayatınızda daha dengeli bir yön kurmak için güvenli bir düşünme alanı.", ["Öz farkındalık", "Kaygı ve erteleme", "Karar verme", "Yaşam yönü"]],
  ["Kariyer Danışmanlığı", "Kariyerinizde yön ararken yalnızca seçenekleri değil; değerlerinizi, güçlü yanlarınızı ve hayatın gerçeklerini birlikte ele alırız.", ["Kariyer yönü ve geçiş süreçleri", "CV ve LinkedIn danışmanlığı", "Mülakat hazırlığı", "Profesyonel görünürlük"]],
  ["Kurumsal Eğitimler", "Kurumların öğrenme ve gelişim hedeflerine uygun; bağlamı anlayan, katılımcı deneyimler tasarlıyorum.", ["Psikolojik dayanıklılık", "Öğrenme ve gelişim", "Çalışan deneyimi", "Eğitim tasarımı"]],
  ["Eğitim & Seminerler", "Okullar, kurumlar ve topluluklar için insan gelişimini gündelik hayatla buluşturan konuşmalar ve atölyeler.", ["Motivasyon", "Kariyer planlama", "Etkili öğrenme", "İnsan gelişimi"]],
];
export default function ServicesPage() { return <PageShell><section className="shell py-20 sm:py-28"><SectionHeading eyebrow="HİZMETLER" title="Her ihtiyacın kendine özgü bir gelişim yolu vardır." intro="Bireysel ya da kurumsal çalışmalarda, süreci ihtiyacın bağlamına göre birlikte netleştiririz." /><div className="mt-14 space-y-4">{services.map(([title,text,items], index) => <article key={title as string} className="grid gap-6 rounded-3xl border border-[#17324f]/10 p-7 sm:p-10 lg:grid-cols-[.25fr_.75fr]"><p className="text-sm font-bold tracking-[.16em] text-[#b99155]">0{index+1}</p><div><h2 className="display text-3xl sm:text-4xl">{title}</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">{text}</p><ul className="mt-6 flex flex-wrap gap-2">{(items as string[]).map(item => <li key={item} className="rounded-full bg-[#efece6] px-3 py-1.5 text-sm text-[#17324f]">{item}</li>)}</ul></div></article>)}</div></section><ContactCta /></PageShell>; }
