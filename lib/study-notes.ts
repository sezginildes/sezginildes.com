import "server-only";

export type StudyNote = {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  sourceName: string;
  sourceUrl: string;
  formUrl: string;
  pdfUrl: string;
};

type RichText = { plain_text?: string };
type Property = {
  title?: RichText[];
  rich_text?: RichText[];
  select?: { name?: string } | null;
  url?: string | null;
};
type NotionPage = { properties?: Record<string, Property> };

const text = (value?: RichText[]) => value?.map((item) => item.plain_text ?? "").join("").trim() ?? "";

function httpsUrl(value?: string | null) {
  if (!value) return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function mapNote(page: NotionPage): StudyNote | null {
  const fields = page.properties ?? {};
  const title = text(fields["Başlık"]?.title);
  const slug = text(fields["Slug"]?.rich_text);
  const excerpt = text(fields["Kısa açıklama"]?.rich_text);
  const formUrl = httpsUrl(fields["Kit form bağlantısı"]?.url);
  const pdfUrl = httpsUrl(fields["PDF bağlantısı"]?.url);
  const sourceUrl = httpsUrl(fields["Kaynak video"]?.url);
  const sourceName = text(fields["Kaynak adı"]?.rich_text);

  // Published notes need a working link to a PDF or their delivery form.
  if (!title || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || !excerpt || (!formUrl && !pdfUrl) || !sourceUrl || !sourceName) return null;

  return {
    slug,
    title,
    excerpt,
    topic: fields["Tema"]?.select?.name ?? "Ebeveynlik",
    sourceName,
    sourceUrl,
    formUrl,
    pdfUrl,
  };
}

export async function getStudyNotes(): Promise<StudyNote[]> {
  const token = process.env.NOTION_API_TOKEN;
  const dataSourceId = process.env.NOTION_STUDY_NOTES_DATA_SOURCE_ID;
  if (!token || !dataSourceId) return [];

  const pages: NotionPage[] = [];
  let cursor: string | undefined;

  try {
    do {
      const response = await fetch(`https://api.notion.com/v1/data_sources/${dataSourceId}/query`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Notion-Version": "2026-03-11",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page_size: 100,
          filter: { property: "Aşama", select: { equals: "Yayında" } },
          sorts: [{ property: "Yayın tarihi", direction: "descending" }],
          ...(cursor ? { start_cursor: cursor } : {}),
        }),
        next: { revalidate: 300 },
      });

      if (!response.ok) {
        console.error("Study notes request failed:", response.status);
        return [];
      }

      const data = (await response.json()) as {
        results?: NotionPage[];
        has_more?: boolean;
        next_cursor?: string | null;
      };
      pages.push(...(data.results ?? []));
      cursor = data.has_more ? (data.next_cursor ?? undefined) : undefined;
    } while (cursor);
  } catch (error) {
    console.error("Study notes request failed:", error);
    return [];
  }

  const notes = pages.map(mapNote).filter((note): note is StudyNote => note !== null);
  return notes.filter((note, index) => notes.findIndex((candidate) => candidate.slug === note.slug) === index);
}
