"use client";

import { useState } from "react";

const PDF_URL = "";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [kvkk, setKvkk] = useState(false);
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, kvkk, company }) });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (data.ok) setStatus("success");
      else { setStatus("error"); setError(data.error ?? "Bir sorun oluştu. Lütfen tekrar deneyin."); }
    } catch {
      setStatus("error");
      setError("Bağlantı kurulamadı. Lütfen tekrar deneyin.");
    }
  }

  return (
    <section className="border-y border-[#17324f]/10 bg-[#efece6]">
      <div className="shell grid gap-10 py-20 sm:py-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">BÜLTEN</p>
          <h2 className="display mt-4 text-4xl leading-[1.05] sm:text-5xl">Ayda birkaç e-posta, düşünmeye değer notlar.</h2>
          <p className="mt-5 max-w-md leading-7 text-slate-600">Psikoloji, kariyer ve öğrenme üzerine yeni yazılar ile eğitim duyuruları. Dilediğiniz an listeden ayrılabilirsiniz.</p>
        </div>
        {status === "success" ? (
          <div className="rounded-3xl bg-[#17324f] p-8 text-white sm:p-10">
            <p className="text-2xl font-semibold">Listeye katıldınız.</p>
            <p className="mt-3 leading-7 text-slate-200">Yeni yazılar ve duyurular e-posta adresinize gelecek.</p>
            {PDF_URL ? <a href={PDF_URL} download className="mt-6 inline-block rounded-full bg-[#b99155] px-6 py-3.5 text-sm font-semibold text-[#10283f]">Ücretsiz rehberi indir</a> : null}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-3xl border border-[#17324f]/10 bg-[#f8f7f4] p-8 sm:p-10">
            <input type="text" name="company" value={company} onChange={(event) => setCompany(event.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <div className="flex flex-col gap-3 sm:flex-row">
              <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="E-posta adresiniz" aria-label="E-posta adresiniz" className="w-full flex-1 rounded-full border border-[#17324f]/15 bg-white px-5 py-3.5 text-sm outline-none transition focus:border-[#17324f]" />
              <button type="submit" disabled={status === "loading"} className="rounded-full bg-[#17324f] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#10283f] disabled:opacity-60">{status === "loading" ? "Kaydediliyor…" : "Katıl"}</button>
            </div>
            <label className="mt-5 flex items-start gap-2.5 text-xs leading-5 text-slate-600">
              <input type="checkbox" checked={kvkk} onChange={(event) => setKvkk(event.target.checked)} required className="mt-0.5 accent-[#17324f]" />
              <span>Kişisel verilerimin <a href="/gizlilik" className="font-semibold text-[#17324f] underline">Aydınlatma Metni</a> kapsamında işlenmesini ve tarafıma e-posta gönderilmesini kabul ediyorum.</span>
            </label>
            {status === "error" ? <p className="mt-4 text-sm font-medium text-red-700">{error}</p> : null}
          </form>
        )}
      </div>
    </section>
  );
}
