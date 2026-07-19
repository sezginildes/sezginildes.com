import Link from "next/link";

const links = [
  ["Hakkımda", "/hakkimda"], ["Hizmetler", "/hizmetler"], ["Eğitimler", "/egitimler"], ["Blog", "/blog"],
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#17324f]/10 bg-[#f8f7f4]/92 backdrop-blur">
      <div className="shell flex h-18 items-center justify-between gap-4 py-4">
        <Link href="/" className="shrink-0 text-[.82rem] font-bold tracking-[.16em] text-[#17324f]">SEZGİN İLDEŞ</Link>
        <nav aria-label="Ana menü" className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {links.map(([label, href]) => <Link key={href} className="transition hover:text-[#17324f]" href={href}>{label}</Link>)}
          <Link className="transition hover:text-[#17324f]" href="/iletisim">İletişim</Link>
        </nav>
        <Link href="/iletisim" className="rounded-full bg-[#17324f] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#10283f] sm:px-5">Randevu Al</Link>
      </div>
    </header>
  );
}
