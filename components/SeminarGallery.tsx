"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SeminarPhoto = { src: string; label: string };

export default function SeminarGallery({ photos }: { photos: SeminarPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((index) => index === null ? null : (index + 1) % photos.length);
      if (event.key === "ArrowLeft") setActiveIndex((index) => index === null ? null : (index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, photos.length]);

  const activePhoto = activeIndex === null ? null : photos[activeIndex];
  const goPrevious = () => setActiveIndex((index) => index === null ? null : (index - 1 + photos.length) % photos.length);
  const goNext = () => setActiveIndex((index) => index === null ? null : (index + 1) % photos.length);

  return <>
    <div className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-4 sm:auto-rows-[17rem] md:grid-cols-4">
      {photos.map((photo, index) => <button type="button" aria-label={`${photo.label} fotoğrafını büyüt`} onClick={() => setActiveIndex(index)} key={photo.src} className={`group relative overflow-hidden rounded-3xl text-left focus:outline-none focus:ring-2 focus:ring-[#b99155] ${index === 0 ? "col-span-2 row-span-2" : ""} ${index === 4 ? "col-span-2" : ""}`}>
        <Image src={`/${photo.src}`} alt={photo.label} fill sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100 group-focus:opacity-100">Büyüt →</span>
      </button>)}
    </div>

    {activePhoto && activeIndex !== null && <div role="dialog" aria-modal="true" aria-label="Seminer fotoğrafı" className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10283f]/95 p-4 sm:p-8" onClick={() => setActiveIndex(null)}>
      <button type="button" aria-label="Görüntüleyiciyi kapat" className="absolute right-5 top-5 z-10 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10" onClick={() => setActiveIndex(null)}>Kapat ×</button>
      <button type="button" aria-label="Önceki fotoğraf" className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl text-white transition hover:bg-white/20 sm:left-6" onClick={(event) => { event.stopPropagation(); goPrevious(); }}>‹</button>
      <figure className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center" onClick={(event) => event.stopPropagation()}>
        <div className="relative h-[72vh] w-full"><Image src={`/${activePhoto.src}`} alt={activePhoto.label} fill sizes="100vw" className="object-contain" priority /></div>
        <figcaption className="mt-4 text-center text-sm font-medium text-slate-200">{activePhoto.label} · {activeIndex + 1} / {photos.length}</figcaption>
      </figure>
      <button type="button" aria-label="Sonraki fotoğraf" className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl text-white transition hover:bg-white/20 sm:right-6" onClick={(event) => { event.stopPropagation(); goNext(); }}>›</button>
    </div>}
  </>;
}
