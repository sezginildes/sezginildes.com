import Link from "next/link";

const paths = [
  {
    eyebrow: "BİREYSEL DESTEK",
    title: "Psikolojik danışmanlık",
    text: "Kaygı, erteleme, travmatik yaşantıların etkileri ve yaşam yönü üzerine güvenli bir düşünme alanı.",
    href: "/psikolojik-danismanlik",
  },
  {
    eyebrow: "KARİYER YOLCULUĞU",
    title: "Kariyer danışmanlığı",
    text: "Yön arayışı, geçiş dönemleri, CV, LinkedIn ve mülakat hazırlığı için yapılandırılmış destek.",
    href: "/kariyer-danismanligi",
  },
  {
    eyebrow: "KURUMLAR İÇİN",
    title: "Eğitim & seminerler",
    text: "Kurumlar, okullar ve topluluklar için insan gelişimine dokunan eğitim ve seminerler.",
    href: "/egitimler",
  },
];

export default function ServicePaths() {
  return (
    <section className="border-y border-[#17324f]/10 bg-[#efece6]">
      <div className="shell py-20 sm:py-24">
        <p className="eyebrow">NEREDEN BAŞLAYALIM?</p>
        <h2 className="display mt-4 max-w-3xl text-4xl leading-tight text-[#17324f] sm:text-5xl">
          İhtiyacınıza uygun çalışma alanını seçin.
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className="group rounded-3xl border border-[#17324f]/10 bg-[#f8f7f4] p-7 transition hover:-translate-y-1 hover:border-[#b99155] hover:shadow-lg sm:p-8">
              <p className="text-xs font-bold tracking-[.15em] text-[#b99155]">{path.eyebrow}</p>
              <h3 className="mt-10 text-2xl font-semibold text-[#17324f]">{path.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{path.text}</p>
              <p className="mt-8 text-sm font-semibold text-[#17324f]">Detayları incele →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
