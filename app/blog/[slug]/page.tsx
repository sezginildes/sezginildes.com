import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  return <PageShell><article className="shell max-w-4xl py-20 sm:py-28"><Link href="/blog" className="text-sm font-semibold text-[#17324f]">← Tüm yazılar</Link><p className="eyebrow mt-12">{article.category} · {article.date}</p><h1 className="display mt-5 text-5xl leading-[1.02] text-[#17324f] sm:text-6xl">{article.title}</h1><p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">{article.excerpt}</p><div className="mt-16 space-y-12">{article.sections.map((section) => <section key={section.heading}><h2 className="text-3xl font-semibold text-[#17324f]">{section.heading}</h2><div className="mt-5 space-y-5 text-lg leading-8 text-slate-600">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div><div className="mt-16 rounded-3xl bg-[#efece6] p-8"><p className="text-lg font-semibold text-[#17324f]">Kendiniz için daha uygun bir yön arıyorsanız, görüşme talep edebilirsiniz.</p><Link href="/iletisim" className="mt-5 inline-block rounded-full bg-[#17324f] px-6 py-3.5 text-sm font-semibold text-white">Görüşme talep et</Link></div></article></PageShell>;
}
