import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { getStudyNotes } from "@/lib/study-notes";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = (await getStudyNotes()).find((entry) => entry.slug === slug);
  return note ? pageMetadata({ title: note.title, description: note.excerpt, path: `/notlar/${slug}` }) : { title: "Not bulunamadı" };
}

export default async function StudyNotePage({ params }: Props) {
  const { slug } = await params;
  const note = (await getStudyNotes()).find((entry) => entry.slug === slug);
  if (!note) notFound();

  return <PageShell><article className="shell max-w-4xl py-14 sm:py-24">
    <Link href="/notlar" className="text-sm font-semibold text-[#17324f] underline underline-offset-4">← Tüm çalışma notları</Link>
    <p className="eyebrow mt-14">{note.topic}</p>
    <h1 className="display mt-5 text-4xl leading-[1.08] sm:text-6xl">{note.title}</h1>
    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">{note.excerpt}</p>
    <div className="mt-12 rounded-3xl bg-[#efece6] p-8 sm:p-12">
      <h2 className="font-serif text-3xl text-[#17324f]">Çalışma notunu oku</h2>
      <p className="mt-4 max-w-2xl leading-8 text-slate-700">{note.formUrl ? "Notu e-posta adresine almak için kayıt sayfasına geç. Formdaki bilgilendirmeyi okuyup tercihlerini sen belirleyebilirsin." : "Hazırladığım PDF çalışma notunu bağlantıdan açabilirsin."}</p>
      <a href={note.formUrl || note.pdfUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-block rounded-full bg-[#17324f] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#10283f]">{note.formUrl ? "E-postayla al ↗" : "PDF'yi aç ↗"}</a>
    </div>
    {note.sourceUrl && <p className="mt-9 text-sm leading-7 text-slate-600">Kaynak: <a href={note.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#17324f] underline underline-offset-4">{note.sourceName || "Kaynak video"} ↗</a>. Bu çalışma Sezgin İldeş tarafından hazırlanmıştır; kaynak üreticisinin resmî yayını değildir.</p>}
    <div className="mt-14 border-t border-[#17324f]/10 pt-10"><h2 className="text-2xl font-semibold text-[#17324f]">Kendi yaşadıklarını konuşmak ister misin?</h2><p className="mt-3 leading-8 text-slate-600">Bu konu sende tekrar eden bir güçlüğe dokunuyorsa bireysel görüşme için çalışma biçimime bakabilirsin.</p><Link href="/psikolojik-danismanlik" className="mt-5 inline-block text-sm font-semibold text-[#17324f] underline underline-offset-4">Bireysel danışmanlığı incele →</Link></div>
  </article></PageShell>;
}
