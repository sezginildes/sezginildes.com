import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = pageMetadata({
  title: "Psikolojik Danışmanlık",
  description: "Kaygı, erteleme, travmatik yaşantıların etkileri, karar verme ve yaşam yönü üzerine bireysel psikolojik danışmanlık.",
  path: "/psikolojik-danismanlik",
});

const topics = [
  ["Kaygı ve stres", "Zihniniz sürekli meşgulse, günlük hayatınızda daha dengeli bir alan açmak için."],
  ["Erteleme ve motivasyon", "Başlamakta zorlandığınız, sürdüremediğiniz veya kendinizi sabote ediyor gibi hissettiğiniz zamanlar için."],
  ["İlişkiler ve sınırlar", "İlişkilerde tekrar eden döngüleri, bağlanma biçimlerini ve sınır koyma ihtiyacını anlamak için."],
  ["Zorlayıcı duygular", "Değersizlik, yetersizlik ya da suçluluk gibi duygularla daha şefkatli ve işlevsel bir ilişki kurmak için."],
  ["Travmatik yaşantıların etkileri", "Geçmişte yaşananların bugün duygularınıza, ilişkilerinize veya yaşamınıza etkisini anlamak için."],
  ["Karar verme ve yaşam yönü", "Kariyer değişikliği, taşınma veya yeni bir yaşam düzeni gibi geçiş dönemlerinde kendi değerlerinize daha yakın seçimler yapmak için."],
];

const process = [
  ["01", "İlk temas", "WhatsApp üzerinden kısaca ihtiyacınızı ve görüşme beklentinizi paylaşırsınız."],
  ["02", "İlk görüşme", "Sizi ve getirdiğiniz konuyu anlamaya odaklanır; birlikte uygun bir çalışma çerçevesi oluştururuz."],
  ["03", "Süreç", "İhtiyacınıza göre ilerler, her adımda sürecin sizin için anlamlı ve faydalı kalmasına önem veririz."],
];

const faqs = [
  ["İlk görüşmede ne olur?", "İlk görüşme; sizi, gündeminizi ve beklentinizi anlamak için ayrılmış bir başlangıç alanıdır. Sürecin nasıl ilerleyebileceğini birlikte değerlendiririz."],
  ["Görüşmeler online mı?", "Görüşme biçimi ve uygunluk bilgisi için WhatsApp üzerinden iletişime geçebilirsiniz."],
  ["Gizlilik nasıl ele alınıyor?", "Görüşmelerde paylaşılan bilgiler gizlilik ilkesiyle ele alınır. Gerekli mesleki ve etik sınırlar, ilk görüşmede açıkça konuşulur."],
  ["Bu hizmet acil durumlar için uygun mu?", "Hayır. Kendinize ya da bir başkasına zarar verme riski gibi acil durumlarda beklemeden 112 Acil Çağrı Merkezi’ne başvurun."],
];

export default function PsychologicalCounselingPage() {
  return <PageShell>
    <section className="bg-[#17324f] text-white"><div className="shell max-w-4xl py-20 sm:py-28">
      <p className="eyebrow text-[#d9c49f]">BİREYSEL PSİKOLOJİK DANIŞMANLIK</p>
      <h1 className="mt-6 font-serif text-5xl leading-[1.02] sm:text-6xl">Kendinizi anlamak için güvenli bir düşünme alanı.</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">Zorlandığınız noktaları birlikte anlamak; daha işlevsel, dengeli ve size ait bir yön oluşturmak için bireysel danışmanlık desteği.</p>
      <a href="https://wa.me/905388504976?text=Merhaba%20Sezgin%20Bey%2C%20psikolojik%20dan%C4%B1%C5%9Fmanl%C4%B1k%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer" className="mt-10 inline-block rounded-full bg-[#d9c49f] px-6 py-3.5 text-sm font-semibold text-[#17324f] transition hover:bg-white">Görüşme hakkında bilgi al</a>
    </div></section>

    <section className="shell py-20 sm:py-28">
      <SectionHeading eyebrow="HANGİ KONULARDA?" title="Hayatın içinde zorlayan ama konuşulabilir konular." intro="Her deneyim kendine özgüdür. Aşağıdaki başlıklar, danışmanlık sürecinde birlikte ele alınabilecek alanlara örnektir." />
      <div className="mt-12 grid gap-4 md:grid-cols-2">{topics.map(([title, text], index) => <article key={title} className="rounded-3xl border border-[#17324f]/10 p-7 sm:p-8"><p className="text-xs font-bold tracking-[.16em] text-[#b99155]">0{index + 1}</p><h2 className="mt-10 text-2xl font-semibold text-[#17324f]">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div>
    </section>

    <section className="bg-[#efece6]"><div className="shell py-20 sm:py-28">
      <SectionHeading eyebrow="NASIL İLERLİYOR?" title="Süreç, doğru bir ilk konuşmayla başlar." intro="Ne aradığınızı tam olarak anlatmak zorunda değilsiniz. İlk adımda birlikte netleştiririz." />
      <div className="mt-12 grid gap-4 md:grid-cols-3">{process.map(([number, title, text]) => <article key={number} className="rounded-3xl bg-[#f8f7f4] p-7"><p className="text-sm font-bold tracking-[.16em] text-[#b99155]">{number}</p><h2 className="mt-12 text-2xl font-semibold text-[#17324f]">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div>
    </div></section>

    <section className="shell py-20 sm:py-28">
      <SectionHeading eyebrow="YAKLAŞIM HAKKINDA" title="Dinlemek, yalnızca duymak değildir." />
      <figure className="mt-10 max-w-3xl rounded-3xl border border-[#17324f]/10 bg-[#f8f7f4] p-8 sm:p-10">
        <blockquote className="font-serif text-2xl leading-relaxed text-[#17324f] sm:text-3xl">“Sezgin; insanlarla yakından ilgilenen, süreçlerini dikkatle dinleyen ve ihtiyaçları gerçekçi bir yerden değerlendiren biri. Samimi, enerjik ve gerektiğinde kişiyi nazikçe harekete geçiren yaklaşımıyla güven veriyor.”</blockquote>
        <figcaption className="mt-7 text-sm font-semibold text-slate-600">D. · İnsan Kaynakları ve Eğitim Direktörü</figcaption>
      </figure>
      <figure className="mt-4 max-w-3xl rounded-3xl border border-[#17324f]/10 bg-[#efece6] p-8 sm:p-10">
        <blockquote className="font-serif text-2xl leading-relaxed text-[#17324f] sm:text-3xl">“Zorlandığım bir dönemde, dikkatle dinlendiğimi ve kendimi anlamaya alan açıldığını hissettim. Süreçteki sorular, duygularımı daha fark ederek ele almama yardımcı oldu.”</blockquote>
        <figcaption className="mt-7 text-sm font-semibold text-slate-600">H.E. · Anonim geri bildirim</figcaption>
      </figure>
    </section>

    <section className="shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">MERAK EDİLENLER</p><h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">Sürece dair açık yanıtlar.</h2><p className="mt-6 max-w-md leading-7 text-slate-600">Danışmanlıkla ilgili aklınıza takılanları ilk temasta da rahatlıkla sorabilirsiniz.</p></div><div className="divide-y divide-[#17324f]/10 rounded-3xl border border-[#17324f]/10 px-6 sm:px-8">{faqs.map(([question, answer]) => <article key={question} className="py-6"><h3 className="text-lg font-semibold text-[#17324f]">{question}</h3><p className="mt-3 leading-7 text-slate-600">{answer}</p></article>)}</div></section>

    <section className="bg-[#b99155]"><div className="shell flex flex-col gap-7 py-16 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-[#17324f]">İLK ADIM</p><h2 className="display mt-4 max-w-2xl text-4xl leading-tight text-[#10283f] sm:text-5xl">Size iyi gelecek bir konuşmayla başlayalım.</h2></div><a href="https://wa.me/905388504976?text=Merhaba%20Sezgin%20Bey%2C%20psikolojik%20dan%C4%B1%C5%9Fmanl%C4%B1k%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer" className="w-fit rounded-full bg-[#17324f] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#10283f]">WhatsApp’tan yaz</a></div></section>

    <section className="shell py-8 text-center text-sm text-slate-500"><Link href="/hizmetler" className="transition hover:text-[#17324f]">Tüm hizmetleri incele →</Link></section>
  </PageShell>;
}
