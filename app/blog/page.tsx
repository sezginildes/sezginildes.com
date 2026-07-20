import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import { articles } from "@/lib/articles";
import { getNotionBlogPosts } from "@/lib/notion";

export const metadata: Metadata = {
  title: "Blog",
  description: "Psikolojik danışmanlık, kariyer ve öğrenme üzerine yazılar.",
};

export default async function BlogPage() {
  const notionPosts = await getNotionBlogPosts();
  const posts = notionPosts.length ? notionPosts : articles;
  return <PageShell><section className="shell py-20 sm:py-28"><SectionHeading eyebrow="YAZILAR" title="Düşünmek, yön bulmanın bir parçası." intro="Psikolojik danışmanlık, kariyer gelişimi ve öğrenme üzerine notlar." /><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{posts.map((article) => <Link key={article.slug} href={`/blog/${article.slug}`} className="flex min-h-80 flex-col rounded-3xl border border-[#17324f]/10 p-7 transition hover:border-[#b99155] hover:bg-[#efece6]"><p className="text-xs font-bold tracking-[.15em] text-[#b99155]">{article.category.toUpperCase()} · {article.date}</p><h2 className="mt-auto text-2xl font-semibold leading-tight text-[#17324f]">{article.title}</h2><p className="mt-4 leading-7 text-slate-600">{article.excerpt}</p><p className="mt-6 text-sm font-semibold text-[#17324f]">Yazıyı oku →</p></Link>)}</div></section></PageShell>;
}
