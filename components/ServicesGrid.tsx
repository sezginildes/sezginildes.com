import Link from "next/link";

const services = [
  { no: "01", title: "Psikolojik Danışmanlık", text: "Kendini daha iyi anlamak, kaygı, erteleme ve travmatik yaşantıların etkileri üzerine bireysel destek.", href: "/psikolojik-danismanlik" },
  { no: "02", title: "Kariyer Danışmanlığı", text: "Kariyer yönü, geçiş süreçleri, profesyonel görünürlük ve karar verme için yapılandırılmış bir yol haritası.", href: "/hizmetler" },
  { no: "03", title: "Kurumsal Eğitimler", text: "Öğrenme, psikolojik dayanıklılık, çalışan gelişimi ve insan odaklı sistemler üzerine kurumlara özel çalışmalar.", href: "/hizmetler" },
  { no: "04", title: "Eğitim & Seminerler", text: "Okullar, kurumlar ve topluluklar için anlaşılır, uygulanabilir ve katılımcı deneyimler.", href: "/egitimler" },
];

export default function ServicesGrid() {
  return <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-[#17324f]/10 bg-[#17324f]/10 sm:grid-cols-2">
    {services.map((service) => <Link href={service.href} key={service.no} className="group bg-[#f8f7f4] p-7 transition hover:bg-[#17324f] sm:p-9"><p className="text-xs font-semibold tracking-[.16em] text-[#b99155]">{service.no}</p><h3 className="mt-10 text-2xl font-semibold text-[#17324f] transition group-hover:text-white">{service.title}</h3><p className="mt-4 max-w-md leading-7 text-slate-600 transition group-hover:text-slate-200">{service.text}</p><p className="mt-8 text-sm font-semibold text-[#17324f] transition group-hover:text-[#d9c49f]">Detayları incele →</p></Link>)}
  </div>;
}
