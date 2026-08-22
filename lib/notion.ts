const token = process.env.NOTION_API_TOKEN;
const blogDataSourceId = process.env.NOTION_BLOG_DATA_SOURCE_ID;

type NotionBlock = {
  id: string;
  type: string;
  has_children?: boolean;
  [key: string]: unknown;
};

export type NotionContentBlock = {
  id: string;
  type: string;
  text: string;
  url?: string;
  caption?: string;
  language?: string;
  depth?: number;
};

export type NotionBlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  blocks: NotionContentBlock[];
};

function plainText(value: unknown) {
  if (!Array.isArray(value)) return "";

  return value
    .map((item) =>
      typeof item === "object" &&
      item &&
      "plain_text" in item
        ? String(item.plain_text)
        : ""
    )
    .join("");
}

async function notionRequest(path: string, init?: RequestInit) {
  if (!token) return null;

  const response = await fetch(
    `https://api.notion.com/v1${path}`,
    {
      ...init,
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": "2026-03-11",
        "Content-Type": "application/json",
        ...init?.headers,
      },
      next: { revalidate: 300 },
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error(
      "Notion API error:",
      response.status,
      path,
      error
    );
    return null;
  }

  return response.json();
}

function formatDate(value: unknown) {
  if (
    !value ||
    typeof value !== "object" ||
    !("start" in value) ||
    !value.start
  ) {
    return "";
  }

  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(String(value.start)));
}

function mapBlock(
  block: NotionBlock,
  depth = 0
): NotionContentBlock | null {
  // Görseller
  if (block.type === "image") {
    const image = block.image as
      | {
          type?: string;
          file?: { url?: string };
          external?: { url?: string };
          caption?: unknown;
        }
      | undefined;

    const url =
      image?.type === "external"
        ? image.external?.url
        : image?.file?.url ?? image?.external?.url;

    if (!url) return null;

    return {
      id: block.id,
      type: "image",
      text: "",
      url,
      caption: plainText(image?.caption),
      depth,
    };
  }

  // Ayraç
  if (block.type === "divider") {
    return {
      id: block.id,
      type: "divider",
      text: "",
      depth,
    };
  }

  const content = block[block.type] as
    | {
        rich_text?: unknown;
        language?: string;
      }
    | undefined;

  const text = plainText(content?.rich_text);

  if (!text) return null;

  return {
    id: block.id,
    type: block.type,
    text,
    language: content?.language,
    depth,
  };
}

// 100 blok sınırını kaldırır
async function getRawChildren(parentId: string) {
  const results: NotionBlock[] = [];
  let cursor: string | null = null;

  do {
    const cursorPart = cursor
      ? `&start_cursor=${encodeURIComponent(cursor)}`
      : "";

    const data = await notionRequest(
      `/blocks/${parentId}/children?page_size=100${cursorPart}`
    );

    if (!data?.results) break;

    results.push(...(data.results as NotionBlock[]));

    cursor = data.has_more
      ? String(data.next_cursor ?? "")
      : null;
  } while (cursor);

  return results;
}

// Alt blokları da çeker
async function getBlocks(
  parentId: string,
  depth = 0
): Promise<NotionContentBlock[]> {
  const rawBlocks = await getRawChildren(parentId);

  const output: NotionContentBlock[] = [];

  for (const block of rawBlocks) {
    const mapped = mapBlock(block, depth);

    if (mapped) {
      output.push(mapped);
    }

    if (block.has_children) {
      const children = await getBlocks(
        block.id,
        depth + 1
      );

      output.push(...children);
    }
  }

  return output;
}

function mapPost(page: {
  id: string;
  properties?: Record<string, unknown>;
}): Omit<NotionBlogPost, "blocks"> | null {
  const properties = page.properties ?? {};

  const titleProperty = properties.Başlık as
    | { title?: unknown }
    | undefined;

  const slugProperty = properties.Slug as
    | { rich_text?: unknown }
    | undefined;

  const categoryProperty = properties.Kategori as
    | { select?: { name?: string } | null }
    | undefined;

  const excerptProperty = properties.Özet as
    | { rich_text?: unknown }
    | undefined;

  const dateProperty = properties["Yayın Tarihi"] as
    | { date?: unknown }
    | undefined;

  const title = plainText(titleProperty?.title);
  const slug = plainText(slugProperty?.rich_text);

  if (!title || !slug) return null;

  return {
    id: page.id,
    title,
    slug,
    category:
      categoryProperty?.select?.name ?? "Yazılar",
    excerpt: plainText(excerptProperty?.rich_text),
    date: formatDate(dateProperty?.date),
  };
}

export async function getNotionBlogPosts(): Promise<
  NotionBlogPost[]
> {
  if (!token || !blogDataSourceId) return [];

  const data = await notionRequest(
    `/data_sources/${blogDataSourceId}/query`,
    {
      method: "POST",
      body: JSON.stringify({
        page_size: 50,

        filter: {
          property: "Yayında",
          checkbox: {
            equals: true,
          },
        },

        sorts: [
          {
            property: "Yayın Tarihi",
            direction: "descending",
          },
        ],
      }),
    }
  );

  if (!data?.results) return [];

  const posts = (
    data.results as Array<{
      id: string;
      properties?: Record<string, unknown>;
    }>
  )
    .map(mapPost)
    .filter(Boolean) as Array<
    Omit<NotionBlogPost, "blocks">
  >;

  return Promise.all(
    posts.map(async (post) => ({
      ...post,
      blocks: await getBlocks(post.id),
    }))
  );
}

export async function getNotionBlogPost(
  slug: string
) {
  const posts = await getNotionBlogPosts();

  return posts.find(
    (post) => post.slug === slug
  );
}
