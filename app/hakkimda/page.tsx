import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import ContactCta from "@/components/ContactCta";

export const metadata: Metadata = pageMetadata({ title: "Hakkımda", description: "Sezgin İldeş'in psikoloji, kariyer gelişimi ve eğitim alanındaki yaklaşımı.", path: "/hakkimda" });

const experienceHighlights = [
  ["Yıldız Teknik Üniversitesi", "Rehberlik ve Psikolojik Danışmanlık"],
  ["36 Haftalık Gelişim Programı", "Lise öğrencileri için kaygı, odaklanma ve performans yönetimi odağında yapılandırılmış program deneyimi."],
  ["İnsan Kaynakları ve Kariyer Gelişimi", "Yetenek kazanımı, davranışsal görüşme, kariyer planlama ve gelişim süreçlerinde deneyim."],
  ["Veriye Dayalı Takip", "Excel ve Power BI destekli gelişim takip sistemleriyle süreçleri görünür ve uygulanabilir hale getirme yaklaşımı."],
];

export default function AboutPage() { return <PageShell>
  <section className="shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem]"><Image src="/sezgin6.jpg" alt="Sezgin İldeş" fill priority sizes="(max-width: 1024px) 90vw, 30vw" className="object-cover" /></div><div><SectionHeading as="h1" eyebrow="HAKKIMDA" title="İnsan gelişimini daha anlaşılır ve uygulanabilir kılmak." /><div className="mt-8 space-y-5 text-lg leading-8 text-slate-600"><p>İnsan davranışlarını anlamaya duyduğum merak beni psikolojik danışmanlığa taşıdı. Zamanla bu merak; kariyer gelişimi, öğrenme tasarımı ve kurumların insan odaklı dönüşümüyle birleşti.</p><p>Bugün bireylerin yönlerini bulmalarına; kurumların ise gelişimi daha görünür, anlamlı ve sürdürülebilir hale getirmelerine eşlik ediyorum.</p><p>Çalışmalarımda bilimsel bilgiyi jargonun arkasına saklamak yerine, günlük hayatın ve iş hayatının içinde karşılığı olan araçlara dönüştürmeye özen gösteriyorum.</p></div></div></section>
  <section className="border-y border-[#17324f]/10 bg-[#17324f] text-white"><div className="shell py-20 sm:py-28"><p className="eyebrow text-[#d9c49f]">AKADEMİK TEMEL VE DENEYİM</p><div className="mt-5 max-w-3xl"><h2 className="display text-4xl leading-tight sm:text-5xl">Akademik temel, sahadaki deneyimle güçlenir.</h2><p className="mt-6 text-lg leading-8 text-slate-200">Yıldız Teknik Üniversitesi Rehberlik ve Psikolojik Danışmanlık mezunu olarak; bireylerin kendilerini daha iyi anlamalarına, kariyerlerinde yön bulmalarına ve gelişim süreçlerini sürdürülebilir hale getirmelerine eşlik ediyorum.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/15 md:grid-cols-2">{experienceHighlights.map(([title, text]) => <article key={title} className="bg-[#17324f] p-7 sm:p-9"><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-4 max-w-xl leading-7 text-slate-200">{text}</p></article>)}</div><p className="mt-10 max-w-3xl text-lg leading-8 text-slate-200">Psikolojik danışmanlığı; kariyer gelişimi, öğrenme bilimi ve insan odaklı sistem tasarımıyla birlikte ele alıyorum.</p></div></section>
  <section className="bg-[#efece6]"><div className="shell py-20 sm:py-28"><SectionHeading eyebrow="ÇALIŞMA BİÇİMİ" title="Üç alanda, tek bir odakla." /><div className="mt-10 grid gap-4 md:grid-cols-3">{[["Psikoloji", "Kendini anlamayı ve daha sağlıklı seçimler yapmayı destekleyen bir bakış."],["Kariyer", "Değerler, yetkinlikler ve gerçek hayat arasında daha uyumlu bir yön bulmak."],["Öğrenme", "Bilgiyi davranışa dönüştüren, katılımcı ve ölçülebilir gelişim deneyimleri."]].map(([title,text]) => <div className="rounded-3xl bg-[#f8f7f4] p-7" key={title}><h3 className="text-xl font-semibold text-[#17324f]">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></div>)}</div></div></section>
  <ContactCta />
</PageShell>; }
