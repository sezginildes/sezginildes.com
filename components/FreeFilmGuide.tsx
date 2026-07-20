const FILM_GUIDE_URL = "https://sezginildes.notion.site/Adem-Gunes-in-Tavsiye-Ettigi-filmler-sezginildes-38d91e46ad4780cca15be602e2ba9c7b?source=copy_link";

export default function FreeFilmGuide() {
  return (
    <section className="border-y border-[#17324f]/10 bg-[#efece6]">
      <div className="shell grid gap-10 py-24 sm:py-32 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">ÜCRETSİZ KAYNAK</p>
          <h2 className="display mt-5 text-4xl leading-tight text-[#17324f] sm:text-5xl">Aile Film Rehberi</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Adem Güneş&apos;in önerdiği filmlerden; bağlanma, ergenlik, duygular,
            öğrenme farklılıkları ve karakter eğitimi temalarına göre hazırlanmış bir seçki.
          </p>
          <a
            href={FILM_GUIDE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-[#17324f] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#10283f]"
          >
            Rehberi incele →
          </a>
        </div>

        <div className="rounded-[2rem] bg-[#17324f] p-8 text-white sm:p-10">
          <p className="text-xs font-bold tracking-[.16em] text-[#d9c49f]">TEMALAR</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Bağlanma ve güvenli ilişki", "Her çocuk özeldir", "Ergen psikolojisi", "Duygusal dayanıklılık", "Öğretmenlik ve eğitim", "Karakter ve vicdan"].map((topic) => (
              <p key={topic} className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-medium text-slate-100">
                {topic}
              </p>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-slate-300">
            Yaş notları genel bir çerçevedir. Her film için içerik uyarılarını ve çocuğunuzun bireysel ihtiyaçlarını ayrıca değerlendirmeniz önerilir.
          </p>
        </div>
      </div>
    </section>
  );
}
