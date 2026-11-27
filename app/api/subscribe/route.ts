// Bülten kaydı: formdan gelen e-postayı açık onayla Supabase'deki
// `subscribers` tablosuna yazar (bkz. supabase/schema.sql).
// Sunucu anahtarı yalnızca Vercel ortam değişkenlerinde durur.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function reply(ok: boolean, status: number, error?: string) {
  return Response.json(error ? { ok, error } : { ok }, { status });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return reply(false, 400, "Geçersiz istek.");
  }

  const { email, kvkk, company } = (body ?? {}) as {
    email?: unknown;
    kvkk?: unknown;
    company?: unknown;
  };

  // Gizli "company" alanını yalnızca botlar doldurur: sessizce başarılı say.
  if (typeof company === "string" && company.trim() !== "") {
    return reply(true, 200);
  }

  const normalizedEmail =
    typeof email === "string" ? email.trim().toLowerCase() : "";
  if (normalizedEmail.length > 254 || !EMAIL_PATTERN.test(normalizedEmail)) {
    return reply(false, 400, "Lütfen geçerli bir e-posta adresi yazın.");
  }
  if (kvkk !== true) {
    return reply(false, 400, "Devam etmek için onay kutusunu işaretleyin.");
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.error("subscribe: SUPABASE_URL veya SUPABASE_SERVICE_ROLE_KEY tanımlı değil");
    return reply(false, 503, "Bülten kaydı şu an kapalı. Lütfen daha sonra tekrar deneyin.");
  }

  try {
    const response = await fetch(
      `${supabaseUrl.replace(/\/$/, "")}/rest/v1/subscribers?on_conflict=email`,
      {
        method: "POST",
        headers: {
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
          "Content-Type": "application/json",
          // Aynı adres ikinci kez gelirse hata verme; kayıt zaten var.
          Prefer: "resolution=ignore-duplicates,return=minimal",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          kvkk_consent: true,
          source: "website",
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error("subscribe: Supabase hata döndü", response.status, await response.text());
      return reply(false, 502, "Kayıt sırasında bir sorun oluştu. Lütfen tekrar deneyin.");
    }
  } catch (error) {
    console.error("subscribe: Supabase'e ulaşılamadı", error);
    return reply(false, 502, "Kayıt sırasında bir sorun oluştu. Lütfen tekrar deneyin.");
  }

  return reply(true, 200);
}
