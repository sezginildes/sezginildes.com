
import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.NOTION_API_TOKEN;
  const dataSourceId = process.env.NOTION_BLOG_DATA_SOURCE_ID;

  if (!token || !dataSourceId) {
    return NextResponse.json({
      ok: false,
      tokenExists: Boolean(token),
      dataSourceIdExists: Boolean(dataSourceId),
    });
  }

  const response = await fetch(
    `https://api.notion.com/v1/data_sources/${dataSourceId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": "2026-03-11",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page_size: 20,
        filter: {
          property: "Yayında",
          checkbox: { equals: true },
        },
      }),
      cache: "no-store",
    }
  );

  const data = await response.json();

  return NextResponse.json({
    ok: response.ok,
    status: response.status,
    resultCount: Array.isArray(data?.results) ? data.results.length : 0,
    errorCode: response.ok ? null : data?.code,
    errorMessage: response.ok ? null : data?.message,
  });
}
// notion debug
