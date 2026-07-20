"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Hakkımda", "/hakkimda"],
  ["Hizmetler", "/hizmetler"],
  ["Kariyer", "/kariyer-danismanligi"],
  ["Eğitimler", "/egitimler"],
  ["Blog", "/blog"],
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#17324f]/10 bg-[#f8f7f4]/92 backdrop-blur">
      <div className="shell flex h-18 items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="shrink-0 text-[.82rem] font-bold tracking-[.16em] text-[#17324f]"
        >
          SEZGİN İLDEŞ
        </Link>

        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-6 text-sm text-slate-600 md:flex"
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              className="transition hover:text-[#17324f]"
              href={href}
            >
              {label}
            </Link>
          ))}
          <Link className="transition hover:text-[#17324f]" href="/iletisim">
            İletişim
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#17324f]/15 text-[#17324f] md:hidden"
          >
            <span className="sr-only">
              Menüyü {menuOpen ? "kapat" : "aç"}
            </span>
            <span aria-hidden="true" className="text-lg leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

          <a
            href="https://wa.me/905388504976?text=Merhaba%20Sezgin%20Bey%2C%20web%20siteniz%20%C3%BCzerinden%20randevu%20bilgisi%20almak%20istiyorum."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#17324f] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#10283f] sm:px-5"
          >
            Randevu Al
          </a>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobil menü"
          className="border-t border-[#17324f]/10 bg-[#f8f7f4] px-6 py-5 md:hidden"
        >
          <div className="mx-auto grid max-w-[76rem] gap-1">
            {[...links, ["İletişim", "/iletisim"] as const].map(
              ([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#17324f] transition hover:bg-[#efece6]"
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
}