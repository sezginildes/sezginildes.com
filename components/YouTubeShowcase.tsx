const channelUrl = "https://www.youtube.com/@Sezginildes";

const featuredVideoUrl = "https://www.youtube-nocookie.com/embed/kD9jt3BLNfM";

export default function YouTubeShowcase() {
  return (
    <section className="bg-[#efece6] py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <p className="eyebrow">YOUTUBE</p>
            <h2 className="display mt-5 max-w-xl text-4xl leading-tight text-[#17324f] sm:text-5xl">Düşünmek, izlemekle de başlar.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Psikoloji, kariyer ve öğrenme üzerine video notlarımı YouTube kanalımda paylaşıyorum.</p>
            <a href={channelUrl} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-[#17324f] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#10283f]">Tüm videoları gör ↗</a>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-[#17324f] p-2 shadow-xl shadow-[#17324f]/10">
            <div className="aspect-video overflow-hidden rounded-[1.6rem] bg-black">
              <iframe
                className="h-full w-full"
                src={featuredVideoUrl}
                title="Kamera karşısında konuşma korkusu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
