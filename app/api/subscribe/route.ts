import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  try {
    const { email, kvkk, company } = (await request.json()) as { email?: unknown; kvkk?: unknown; company?: unknown };

    // Gizli alan doluysa isteği bot kabul edip bilgi vermeden başarılı döneriz.
    if (company) return NextResponse.json({ ok: true });

    const normalizedEmail = String(email ?? "").trim().toLowerCase();
    if (!EMAIL_RE.test(normalizedEmail)) {
      return NextResponse.json({ ok: false, error: "Geçerli bir e-posta adresi girin." }, { status: 400 });
    }

    if (kvkk !== true) {
      return NextResponse.json({ ok: false, error: "Devam etmek için onay kutusunu işaretleyin." }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json({ ok: false, error: "Bülten altyapısı henüz tamamlanmadı. Lütfen daha sonra tekrar deneyin." }, { status: 503 });
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/subscribers?on_conflict=email`, {
      method: "POST",
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json",
        Prefer: "resolution=ignore-duplicates,return=minimal",
      },
      body: JSON.stringify({ email: normalizedEmail, kvkk_consent: true, source: "website" }),
    });

    if (!response.ok && response.status !== 409) {
      return NextResponse.json({ ok: false, error: "Kayıt sırasında bir sorun oluştu. Lütfen tekrar deneyin." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Beklenmeyen bir hata oluştu." }, { status: 500 });
  }
}
