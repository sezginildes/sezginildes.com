const channelUrl = "https://www.youtube.com/@Sezginildes";

const topics = [
  { number: "01", title: "Psikoloji", copy: "İnsan davranışını anlamaya dair kısa ve uygulanabilir içerikler." },
  { number: "02", title: "Kariyer", copy: "Kariyer yolculuğunda yön bulmaya yardımcı düşünceler." },
  { number: "03", title: "Öğrenme", copy: "Daha etkili öğrenmek ve gelişmek için pratik notlar." },
];

export default function YouTubeShowcase() {
  return (
    <section className="bg-[#efece6] py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">YOUTUBE</p>
            <h2 className="display mt-5 max-w-2xl text-4xl leading-tight text-[#17324f] sm:text-5xl">Düşünmek, izlemekle de başlar.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Psikoloji, kariyer ve öğrenme üzerine yeni içerikler YouTube kanalımda.</p>
          </div>
          <a href={channelUrl} target="_blank" rel="noreferrer" className="w-fit rounded-full bg-[#17324f] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#10283f]">Kanala git ↗</a>
        </div>

        <div className="mt-11 grid gap-4 md:grid-cols-3">
          {topics.map((topic) => (
            <a key={topic.number} href={channelUrl} target="_blank" rel="noreferrer" className="group relative min-h-72 overflow-hidden rounded-3xl bg-[#17324f] p-7 text-white transition hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#d9c49f]/25" />
              <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#b99155] text-lg text-[#17324f]">▶</div>
              <p className="relative text-xs font-bold tracking-[.16em] text-[#d9c49f]">{topic.number} · YOUTUBE</p>
              <div className="relative mt-20"><h3 className="text-3xl font-semibold">{topic.title}</h3><p className="mt-4 max-w-xs leading-7 text-slate-200">{topic.copy}</p></div>
              <p className="relative mt-7 text-sm font-semibold text-[#d9c49f]">İzlemeye başla →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
