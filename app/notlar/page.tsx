import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { getStudyNotes } from "@/lib/study-notes";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Çalışma Notları",
  description: "Ebeveynlik, ilişkiler ve insan gelişimi üzerine Sezgin İldeş'in hazırladığı uygulama odaklı çalışma notları.",
  path: "/notlar",
});

export default async function NotesPage() {
  const notes = await getStudyNotes();
  const newsletterUrl = process.env.NEXT_PUBLIC_KIT_NEWSLETTER_URL;
  const newsletterLink = newsletterUrl?.startsWith("https://") ? newsletterUrl : "";

  return <PageShell>
    <section className="border-b border-[#17324f]/10 bg-[#efece6]">
      <div className="shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
        <div>
          <p className="eyebrow">SEZGİN'İN ÇALIŞMA NOTLARI</p>
          <h1 className="display mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">Bir fikri okumak başka, kendi hayatında görmek başka.</h1>
        </div>
        <p className="max-w-lg text-lg leading-8 text-slate-700">İzlediğim eğitimleri ve okuduğum kaynakları kendi psikolojik danışmanlık bakışımla değerlendirip kısa, uygulanabilir notlara dönüştürüyorum. Her notta kaynak bağlantısını da bulabilirsiniz.</p>
      </div>
    </section>
    <section className="shell py-16 sm:py-24" aria-labelledby="notes-title">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div><p className="eyebrow">ARŞİV</p><h2 id="notes-title" className="display mt-3 text-3xl sm:text-4xl">Yayımlanan notlar</h2></div>
        <p className="max-w-md text-sm leading-6 text-slate-600">Her çalışma notu genel bilgilendirme içindir. Kendi durumunuzu konuşmak isterseniz bireysel görüşme için yazabilirsiniz.</p>
      </div>
      {notes.length ? <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => <article key={note.slug} className="flex min-h-72 flex-col rounded-3xl border border-[#17324f]/10 bg-white p-7">
          <p className="text-sm font-semibold text-[#9d763f]">{note.topic}</p>
          <h3 className="mt-7 text-2xl font-semibold leading-tight text-[#17324f]">{note.title}</h3>
          <p className="mt-4 leading-7 text-slate-600">{note.excerpt}</p>
          <Link href={`/notlar/${note.slug}`} className="mt-auto pt-8 text-sm font-semibold text-[#17324f] underline underline-offset-4">Notu incele →</Link>
        </article>)}
      </div> : <div className="mt-10 rounded-3xl border border-[#17324f]/10 bg-white p-8 sm:p-12">
        <h3 className="text-2xl font-semibold text-[#17324f]">İlk çalışma notları hazırlanıyor.</h3>
        <p className="mt-4 max-w-2xl leading-8 text-slate-600">Kaynağı, kendi değerlendirmemi ve uygulama sorularını bir araya getirdiğim ilk notlar tamamlandığında burada yer alacak.</p>
      </div>}
    </section>
    {newsletterLink && <section className="border-t border-[#17324f]/10 bg-[#efece6]"><div className="shell grid gap-6 py-14 sm:grid-cols-[1fr_auto] sm:items-center"><div><h2 className="font-serif text-3xl text-[#17324f]">Yeni çalışma notlarından haberdar ol</h2><p className="mt-3 max-w-2xl leading-7 text-slate-700">Yeni notları e-postayla almak istersen kayıt sayfasına geçebilirsin.</p></div><a href={newsletterLink} target="_blank" rel="noopener noreferrer" className="w-fit rounded-full bg-[#17324f] px-6 py-3.5 text-sm font-semibold text-white">E-posta listesine katıl ↗</a></div></section>}
    <section className="border-t border-[#17324f]/10 bg-[#17324f] text-white"><div className="shell grid gap-6 py-14 sm:grid-cols-[1fr_auto] sm:items-center"><div><h2 className="font-serif text-3xl">Bu konu sende de karşılık buluyorsa</h2><p className="mt-3 max-w-2xl leading-7 text-slate-200">Bilgiyi kendi yaşadıklarınla birlikte ele almak için bireysel görüşme hakkında bilgi alabilirsin.</p></div><Link href="/psikolojik-danismanlik" className="w-fit rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#17324f]">Görüşme hakkında bilgi al</Link></div></section>
  </PageShell>;
}
