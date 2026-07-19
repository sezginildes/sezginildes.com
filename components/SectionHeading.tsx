export default function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="display mt-4 text-4xl leading-[1.05] sm:text-5xl">{title}</h2>{intro && <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">{intro}</p>}</div>;
}
