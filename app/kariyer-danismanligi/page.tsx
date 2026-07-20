import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";
import { whatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Kariyer Danışmanlığı",
  description: "Kariyer yönü, geçiş dönemleri, CV, LinkedIn ve mülakat hazırlığı için yapılandırılmış kariyer danışmanlığı.",
  path: "/kariyer-danismanligi",
});

const areas = [
  ["Kariyer yönü", "Seçenekleri, güçlü yanları, değerleri ve hayatın gerçeklerini birlikte değerlendirmek için."],
  ["Geçiş dönemleri", "Yeni bir role, sektöre veya çalışma biçimine geçerken daha net bir yol oluşturmak için."],
  ["CV ve LinkedIn", "Deneyiminizi daha görünür, anlaşılır ve hedeflediğiniz role uygun hale getirmek için."],
  ["Mülakat hazırlığı", "Kendinizi ve deneyiminizi daha sakin, net ve sahici biçimde anlatabilmek için."],
];

const process = [
  ["01", "Kısa ön görüşme", "10–15 dakikalık ücretsiz ön görüşmede beklentiyi, uygunluğu ve sürecin çerçevesini konuşuruz."],
  ["02", "İhtiyacı netleştirme", "Mevcut durumunuzu, hedefinizi ve önceliklerinizi birlikte görünür hale getiririz."],
  ["03", "Yol haritası", "Size ait, uygulanabilir ve takip edilebilir bir sonraki adımı tasarlarız."],
];

export default function CareerCounselingPage() {
  return (
    <PageShell>
      <section className="bg-[#17324f] text-white">
        <div className="shell max-w-4xl py-20 sm:py-28">
          <p className="eyebrow text-[#d9c49f]">KARİYER DANIŞMANLIĞI</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] sm:text-6xl">Kariyerinizde yön bulmak, yalnızca bir iş seçmek değildir.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">Kariyer kararlarını; yetkinlikleriniz, değerleriniz, deneyiminiz ve yaşamınızın gerçekleriyle birlikte ele alırız.</p>
          <a href={whatsAppUrl("Merhaba Sezgin Bey, kariyer danışmanlığı için ücretsiz kısa ön görüşme hakkında bilgi almak istiyorum.")} target="_blank" rel="noreferrer" className="mt-10 inline-block rounded-full bg-[#d9c49f] px-6 py-3.5 text-sm font-semibold text-[#17324f] transition hover:bg-white">Ücretsiz kısa ön görüşme talep et</a>
        </div>
      </section>

      <section className="shell py-20 sm:py-28">
        <SectionHeading eyebrow="HANGİ KONULARDA?" title="Kariyerinize daha bilinçli bir yerden bakmak için." intro="Her süreç farklıdır. Bu başlıklar, birlikte çalışabileceğimiz alanlara örnektir." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">{areas.map(([title, text], index) => <article key={title} className="rounded-3xl border border-[#17324f]/10 p-7 sm:p-8"><p className="text-xs font-bold tracking-[.16em] text-[#b99155]">0{index + 1}</p><h2 className="mt-10 text-2xl font-semibold text-[#17324f]">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div>
      </section>

      <section className="bg-[#efece6]"><div className="shell py-20 sm:py-28">
        <SectionHeading eyebrow="NASIL İLERLİYOR?" title="Önce doğru soruyu, sonra doğru adımı buluruz." intro="Kısa ön görüşme danışmanlık seansı değildir; sürecin size uygun olup olmadığını birlikte anlamak için ayrılmış bir tanışma alanıdır." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">{process.map(([number, title, text]) => <article key={number} className="rounded-3xl bg-[#f8f7f4] p-7"><p className="text-sm font-bold tracking-[.16em] text-[#b99155]">{number}</p><h2 className="mt-12 text-2xl font-semibold text-[#17324f]">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div>
      </div></section>

      <section className="bg-[#b99155]"><div className="shell flex flex-col gap-7 py-16 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-[#17324f]">İLK ADIM</p><h2 className="display mt-4 max-w-2xl text-4xl leading-tight text-[#10283f] sm:text-5xl">Kariyer yolculuğunuz hakkında kısa bir konuşmayla başlayalım.</h2></div><a href={whatsAppUrl("Merhaba Sezgin Bey, kariyer danışmanlığı için ücretsiz kısa ön görüşme talep etmek istiyorum.")} target="_blank" rel="noreferrer" className="w-fit rounded-full bg-[#17324f] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#10283f]">WhatsApp’tan yaz</a></div></section>
    </PageShell>
  );
}
