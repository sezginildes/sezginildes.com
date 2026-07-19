import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import ContactCta from "@/components/ContactCta";

export const metadata: Metadata = { title: "Hakkımda", description: "Sezgin İldeş'in psikoloji, kariyer gelişimi ve eğitim alanındaki yaklaşımı." };

export default function AboutPage() { return <PageShell>
  <section className="shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem]"><Image src="/sezgin6.jpg" alt="Sezgin İldeş" fill priority sizes="(max-width: 1024px) 90vw, 30vw" className="object-cover" /></div><div><SectionHeading eyebrow="HAKKIMDA" title="İnsan gelişimini daha anlaşılır ve uygulanabilir kılmak." /><div className="mt-8 space-y-5 text-lg leading-8 text-slate-600"><p>İnsan davranışlarını anlamaya duyduğum merak beni psikolojik danışmanlığa taşıdı. Zamanla bu merak; kariyer gelişimi, öğrenme tasarımı ve kurumların insan odaklı dönüşümüyle birleşti.</p><p>Bugün bireylerin yönlerini bulmalarına; kurumların ise gelişimi daha görünür, anlamlı ve sürdürülebilir hale getirmelerine eşlik ediyorum.</p><p>Çalışmalarımda bilimsel bilgiyi jargonun arkasına saklamak yerine, günlük hayatın ve iş hayatının içinde karşılığı olan araçlara dönüştürmeye özen gösteriyorum.</p></div></div></section>
  <section className="bg-[#efece6]"><div className="shell py-20 sm:py-28"><SectionHeading eyebrow="ÇALIŞMA BİÇİMİ" title="Üç alanda, tek bir odakla." /><div className="mt-10 grid gap-4 md:grid-cols-3">{[["Psikoloji", "Kendini anlamayı ve daha sağlıklı seçimler yapmayı destekleyen bir bakış."],["Kariyer", "Değerler, yetkinlikler ve gerçek hayat arasında daha uyumlu bir yön bulmak."],["Öğrenme", "Bilgiyi davranışa dönüştüren, katılımcı ve ölçülebilir gelişim deneyimleri."]].map(([title,text]) => <div className="rounded-3xl bg-[#f8f7f4] p-7" key={title}><h2 className="text-xl font-semibold text-[#17324f]">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></div>)}</div></div></section>
  <ContactCta />
</PageShell>; }
