import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import SeminarGallery from "@/components/SeminarGallery";

export const metadata: Metadata = {
  title: "Eğitim & Seminerler",
  description: "Kurumlar, okullar ve topluluklar için psikoloji, kariyer ve insan gelişimi eğitimleri.",
};

const topics = [
  ["Psikolojik Dayanıklılık", "Zorlayıcı dönemlerde kaynakları fark etmek, esneklik geliştirmek ve iyi oluşu desteklemek."],
  ["Kariyer Planlama", "Kariyer seçimlerini değerler, yetkinlikler ve gerçek hayatla birlikte değerlendirmek."],
  ["Öğrenme Psikolojisi", "Öğrenmeyi kolaylaştıran çalışma sistemleri, odak ve motivasyon üzerine."],
  ["Motivasyon & Alışkanlıklar", "Sürdürülebilir davranış değişimini destekleyen küçük, uygulanabilir sistemler."],
  ["İnsan Gelişimi", "Bireysel ve kurumsal gelişim yolculuklarında insanı merkeze alan bir yaklaşım."],
  ["Yapay Zekâ & Öğrenme", "Yapay zekâyı öğrenme deneyimini güçlendiren pratik bir araç olarak kullanmak."],
];

const formats = [
  ["Seminer", "Büyük gruplar için ilham veren, anlaşılır ve etkileşimli konuşmalar."],
  ["Atölye", "Katılımcıların deneyimleyerek düşündüğü, uygulama odaklı çalışmalar."],
  ["Kurum Eğitimi", "İhtiyaca, hedefe ve katılımcı profilinize göre tasarlanan eğitim programları."],
];

const seminarPhotos = [
  { src: "seminer1.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer2.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer4.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer5.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer6.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer7.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer8.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer9.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer10.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer11.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer12.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer13.jpg", label: "Eğitim ve seminer çalışması" },
  { src: "seminer14.png", label: "Eğitim ve seminer çalışması" },
];

export default function EducationPage() {
  return <PageShell>
    <section className="overflow-hidden bg-[#17324f] text-white">
      <div className="shell grid gap-12 py-18 sm:py-24 lg:grid-cols-[1fr_.82fr] lg:items-center">
        <div>
          <p className="eyebrow text-[#d9c49f]">EĞİTİM & SEMİNERLER</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[.98] tracking-[-.045em] sm:text-6xl">İyi bir eğitim, katılımcının hayatında yer bulur.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200">Kurumlar, okullar ve topluluklar için; psikoloji, kariyer ve öğrenme bilimini günlük hayata bağlayan eğitimler ve seminerler tasarlıyorum.</p>
          <a href="https://wa.me/905388504976?text=Merhaba%20Sezgin%20Bey%2C%20e%C4%9Fitim%20ve%20seminer%20talebimiz%20i%C3%A7in%20size%20ula%C5%9Fmak%20istiyoruz." target="_blank" rel="noreferrer" className="mt-9 inline-block rounded-full bg-[#d9c49f] px-6 py-3.5 text-sm font-semibold text-[#10283f] transition hover:bg-white">Eğitim talebi oluştur</a>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.25rem] border border-white/15"><Image src="/sezgin6.jpg" alt="Sezgin İldeş seminer verirken" fill priority sizes="(max-width: 1024px) 90vw, 35vw" className="object-cover" /></div>
      </div>
    </section>

    <section className="shell py-20 sm:py-28">
      <SectionHeading eyebrow="KONU BAŞLIKLARI" title="Konuşmaların merkezinde insan var." intro="Her içerik, kurumunuzun veya topluluğunuzun hedeflerine göre sadeleştirilebilir ve uyarlanabilir." />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topics.map(([title, text], index) => <article key={title} className="rounded-3xl border border-[#17324f]/10 p-7 sm:p-8"><p className="text-xs font-bold tracking-[.15em] text-[#b99155]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-10 text-2xl font-semibold text-[#17324f]">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}
      </div>
    </section>

    <section className="bg-[#efece6]"><div className="shell py-20 sm:py-28">
      <SectionHeading eyebrow="NASIL ÇALIŞIRIZ?" title="İhtiyaca uygun, tek seferlik değil etkisi süren deneyimler." />
      <div className="mt-10 grid gap-4 md:grid-cols-3">{formats.map(([title, text]) => <div key={title} className="rounded-3xl bg-[#f8f7f4] p-7"><h2 className="text-2xl font-semibold text-[#17324f]">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></div>)}</div>
    </div></section>

    <section className="shell py-20 sm:py-28">
      <SectionHeading eyebrow="SEMİNERLERDEN" title="Birlikte düşünmek, birlikte gelişmek." intro="Farklı kurum, okul ve topluluklarla gerçekleştirdiğim eğitim ve seminerlerden kareler." />
      <SeminarGallery photos={seminarPhotos} />
    </section>

    <section className="shell grid gap-10 py-20 sm:py-28 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
      <div><p className="eyebrow">BİRLİKTE TASARLAYALIM</p><h2 className="display mt-4 text-4xl leading-tight sm:text-5xl">Kurumunuza uygun bir eğitim mi arıyorsunuz?</h2></div>
      <div className="rounded-3xl bg-[#17324f] p-8 text-white sm:p-10"><p className="text-lg leading-8 text-slate-200">Etkinliğinizin amacı, katılımcı profili ve zamanı hakkında kısa bilgi verin. Size uygun bir eğitim veya seminer akışını birlikte şekillendirelim.</p><a href="https://wa.me/905388504976?text=Merhaba%20Sezgin%20Bey%2C%20kurumumuz%20i%C3%A7in%20e%C4%9Fitim%20veya%20seminer%20talep%20etmek%20istiyoruz." target="_blank" rel="noreferrer" className="mt-7 inline-block rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#17324f]">WhatsApp’tan yaz</a></div>
    </section>
  </PageShell>;
}
