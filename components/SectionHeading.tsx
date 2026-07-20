export default function SectionHeading({ eyebrow, title, intro, as: Tag = "h2" }: { eyebrow: string; title: string; intro?: string; as?: "h1" | "h2" }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><Tag className="display mt-4 text-4xl leading-[1.05] sm:text-5xl">{title}</Tag>{intro && <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">{intro}</p>}</div>;
}
