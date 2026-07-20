import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#10283f] text-[#f8f7f4]">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div><p className="text-sm font-bold tracking-[.16em]">SEZGİN İLDEŞ</p><p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">Psikoloji, kariyer gelişimi ve öğrenme bilimiyle bireylerin ve kurumların gelişimine eşlik ediyorum.</p></div>
        <div><p className="text-xs font-bold tracking-[.16em] text-[#d9c49f]">KEŞFET</p><div className="mt-4 grid gap-2 text-sm text-slate-300"><Link href="/hakkimda">Hakkımda</Link><Link href="/hizmetler">Hizmetler</Link><Link href="/egitimler">Eğitim & Seminerler</Link><Link href="/blog">Blog</Link></div></div>
        <div><p className="text-xs font-bold tracking-[.16em] text-[#d9c49f]">BAĞLANTILAR</p><div className="mt-4 grid gap-2 text-sm text-slate-300"><a href="https://www.instagram.com/sezginildes/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.youtube.com/@Sezginildes" target="_blank" rel="noreferrer">YouTube</a><a href="https://www.linkedin.com/in/sezginildes" target="_blank" rel="noreferrer">LinkedIn</a><Link href="/iletisim">İletişime geç</Link><Link href="/gizlilik">Gizlilik ve KVKK</Link></div></div>
      </div>
      <div className="shell border-t border-white/10 py-5 text-xs text-slate-400">© {new Date().getFullYear()} Sezgin İldeş. Tüm hakları saklıdır.</div>
    </footer>
  );
}
