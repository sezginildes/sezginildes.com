import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { articles, getArticle } from "@/lib/articles";
import {
  getNotionBlogPost,
  type NotionContentBlock,
} from "@/lib/notion";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article =
    (await getNotionBlogPost(slug)) ??
    getArticle(slug);

  return article
    ? pageMetadata({
        title: article.title,
        description: article.excerpt,
        path: `/blog/${slug}`,
        ogType: "article",
      })
    : {};
}

function NotionBlockView({
  block,
}: {
  block: NotionContentBlock;
}) {
  const indent =
    block.depth && block.depth > 0
      ? {
          marginLeft: `${Math.min(
            block.depth,
            4
          ) * 20}px`,
        }
      : undefined;

  // GÖRSEL
  if (block.type === "image" && block.url) {
    return (
      <figure className="my-10">
        {/* Notion görselleri geçici imzalı URL kullandığı için
            burada Next Image yerine normal img kullanıyoruz. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={block.url}
          alt={
            block.caption ||
            "Blog yazısı görseli"
          }
          loading="lazy"
          className="h-auto w-full rounded-2xl border border-[#17324f]/10 object-cover shadow-sm"
        />

        {block.caption ? (
          <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  // AYRAÇ
  if (block.type === "divider") {
    return (
      <hr className="my-12 border-[#17324f]/10" />
    );
  }

  // ANA BAŞLIK
  if (block.type === "heading_1") {
    return (
      <h2 className="mt-14 text-4xl font-semibold leading-tight text-[#17324f]">
        {block.text}
      </h2>
    );
  }

  // BAŞLIK
  if (block.type === "heading_2") {
    return (
      <h2 className="mt-12 text-3xl font-semibold leading-tight text-[#17324f]">
        {block.text}
      </h2>
    );
  }

  // ALT BAŞLIK
  if (block.type === "heading_3") {
    return (
      <h3 className="mt-9 text-2xl font-semibold leading-tight text-[#17324f]">
        {block.text}
      </h3>
    );
  }

  // MADDE İŞARETLİ LİSTE
  if (
    block.type === "bulleted_list_item"
  ) {
    return (
      <div
        className="flex gap-3 text-lg leading-8 text-slate-600"
        style={indent}
      >
        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b99155]" />
        <p>{block.text}</p>
      </div>
    );
  }

  // NUMARALI LİSTE
  if (
    block.type === "numbered_list_item"
  ) {
    return (
      <div
        className="flex gap-3 text-lg leading-8 text-slate-600"
        style={indent}
      >
        <span className="font-semibold text-[#b99155]">
          →
        </span>
        <p>{block.text}</p>
      </div>
    );
  }

  // ALINTI
  if (block.type === "quote") {
    return (
      <blockquote className="my-8 border-l-2 border-[#b99155] pl-5 text-lg italic leading-8 text-slate-600">
        {block.text}
      </blockquote>
    );
  }

  // KOD BLOĞU
  if (block.type === "code") {
    return (
      <pre className="my-8 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-[#17324f] p-5 text-sm leading-7 text-white">
        <code>{block.text}</code>
      </pre>
    );
  }

  // CALLOUT
  if (block.type === "callout") {
    return (
      <div className="my-8 rounded-2xl bg-[#efece6] p-6 text-lg leading-8 text-slate-700">
        {block.text}
      </div>
    );
  }

  // NORMAL PARAGRAF
  return (
    <p
      className="text-lg leading-8 text-slate-600"
      style={indent}
    >
      {block.text}
    </p>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const notionArticle =
    await getNotionBlogPost(slug);

  const staticArticle = getArticle(slug);

  const article =
    notionArticle ?? staticArticle;

  if (!article) {
    notFound();
  }

  return (
    <PageShell>
      <article className="shell max-w-4xl py-20 sm:py-28">
        <Link
          href="/blog"
          className="text-sm font-semibold text-[#17324f]"
        >
          ← Tüm yazılar
        </Link>

        <p className="eyebrow mt-12">
          {article.category} · {article.date}
        </p>

        <h1 className="display mt-5 text-5xl leading-[1.02] text-[#17324f] sm:text-6xl">
          {article.title}
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
          {article.excerpt}
        </p>

        <div className="mt-16 space-y-5">
          {notionArticle
            ? notionArticle.blocks.map(
                (block) => (
                  <NotionBlockView
                    key={block.id}
                    block={block}
                  />
                )
              )
            : staticArticle!.sections.flatMap(
                (section) => [
                  <h2
                    key={`${section.heading}-heading`}
                    className="mt-12 text-3xl font-semibold text-[#17324f]"
                  >
                    {section.heading}
                  </h2>,

                  ...section.paragraphs.map(
                    (text, index) => (
                      <p
                        key={`${section.heading}-${index}`}
                        className="text-lg leading-8 text-slate-600"
                      >
                        {text}
                      </p>
                    )
                  ),
                ]
              )}
        </div>

        {staticArticle?.video ? (
          <section className="mt-16 rounded-3xl border border-[#17324f]/10 bg-[#efece6] p-8 sm:p-10">
            <p className="eyebrow">
              VİDEO
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#17324f]">
              Bu yazının çıkış noktası olan
              videoyu izleyin.
            </h2>

            <div className="mt-7 aspect-video overflow-hidden rounded-2xl bg-[#17324f] shadow-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/kD9jt3BLNfM"
                title={
                  staticArticle.video.title
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        ) : null}

        <div className="mt-16 rounded-3xl bg-[#efece6] p-8">
          <p className="text-lg font-semibold text-[#17324f]">
            Kendiniz için daha uygun bir yön
            arıyorsanız, görüşme talep
            edebilirsiniz.
          </p>

          <Link
            href="/iletisim"
            className="mt-5 inline-block rounded-full bg-[#17324f] px-6 py-3.5 text-sm font-semibold text-white"
          >
            Görüşme talep et
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
