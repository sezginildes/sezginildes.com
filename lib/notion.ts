const token = process.env.NOTION_API_TOKEN;
const blogDataSourceId = process.env.NOTION_BLOG_DATA_SOURCE_ID;

type NotionBlock = {
  id: string;
  type: string;
  [key: string]: unknown;
};

export type NotionBlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  blocks: Array<{ id: string; type: string; text: string }>;
};

function plainText(value: unknown) {
  if (!Array.isArray(value)) return "";
  return value.map((item) => (typeof item === "object" && item && "plain_text" in item ? String(item.plain_text) : "")).join("");
}

async function notionRequest(path: string, init?: RequestInit) {
  if (!token) return null;
  const response = await fetch(`https://api.notion.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2026-03-11",
      "Content-Type": "application/json",
      ...init?.headers,
    },
    next: { revalidate: 300 },
  });
  if (!response.ok) return null;
  return response.json();
}

function formatDate(value: unknown) {
  if (!value || typeof value !== "object" || !("start" in value) || !value.start) return "";
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(String(value.start)));
}

async function getBlocks(pageId: string) {
  const data = await notionRequest(`/blocks/${pageId}/children?page_size=100`);
  if (!data?.results) return [];
  return (data.results as NotionBlock[])
    .map((block) => {
      const content = block[block.type] as { rich_text?: unknown } | undefined;
      return { id: block.id, type: block.type, text: plainText(content?.rich_text) };
    })
    .filter((block) => block.text);
}

function mapPost(page: { id: string; properties?: Record<string, unknown> }): Omit<NotionBlogPost, "blocks"> | null {
  const properties = page.properties ?? {};
  const titleProperty = properties.Başlık as { title?: unknown } | undefined;
  const slugProperty = properties.Slug as { rich_text?: unknown } | undefined;
  const categoryProperty = properties.Kategori as { select?: { name?: string } | null } | undefined;
  const excerptProperty = properties.Özet as { rich_text?: unknown } | undefined;
  const dateProperty = properties["Yayın Tarihi"] as { date?: unknown } | undefined;
  const title = plainText(titleProperty?.title);
  const slug = plainText(slugProperty?.rich_text);
  if (!title || !slug) return null;
  return { id: page.id, title, slug, category: categoryProperty?.select?.name ?? "Yazılar", excerpt: plainText(excerptProperty?.rich_text), date: formatDate(dateProperty?.date) };
}

export async function getNotionBlogPosts(): Promise<NotionBlogPost[]> {
  if (!token || !blogDataSourceId) return [];
  const data = await notionRequest(`/data_sources/${blogDataSourceId}/query`, {
    method: "POST",
    body: JSON.stringify({
      page_size: 50,
      filter: { property: "Yayında", checkbox: { equals: true } },
      sorts: [{ property: "Yayın Tarihi", direction: "descending" }],
    }),
  });
  if (!data?.results) return [];
  const posts = (data.results as Array<{ id: string; properties?: Record<string, unknown> }>).map(mapPost).filter(Boolean) as Array<Omit<NotionBlogPost, "blocks">>;
  return Promise.all(posts.map(async (post) => ({ ...post, blocks: await getBlocks(post.id) })));
}

export async function getNotionBlogPost(slug: string) {
  const posts = await getNotionBlogPosts();
  return posts.find((post) => post.slug === slug);
}
