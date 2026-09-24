"use client";

import { useEffect, useMemo, useState } from "react";

type Energy = "low" | "medium" | "high";
type Nutrition = "low" | "medium" | "good";
type ContentType = "short" | "video" | "article" | "post";

type DailyEntry = {
  date: string;
  sleepStart: string;
  wakeTime: string;
  exerciseMinutes: number;
  nutrition: Nutrition;
  learningMinutes: number;
  professionalMinutes: number;
  partnerQualityMinutes: number;
  contentDone: boolean;
  contentType: ContentType;
  contentMinutes: number;
  contentEnergy: Energy;
  contentPublished: boolean;
};

type WeeklySettings = {
  activeClients: number;
  confirmedIncome: number;
  weeklyStone: string;
};

const STORAGE_KEY = "sezgin-hayat-paneli-v1";
const SETTINGS_KEY = "sezgin-hayat-paneli-settings-v1";

const emptyEntry = (date: string): DailyEntry => ({
  date,
  sleepStart: "",
  wakeTime: "",
  exerciseMinutes: 0,
  nutrition: "medium",
  learningMinutes: 0,
  professionalMinutes: 0,
  partnerQualityMinutes: 0,
  contentDone: false,
  contentType: "short",
  contentMinutes: 0,
  contentEnergy: "medium",
  contentPublished: false,
});

const defaultSettings: WeeklySettings = {
  activeClients: 0,
  confirmedIncome: 0,
  weeklyStone: "",
};

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function sleepMinutes(start: string, end: string) {
  if (!start || !end) return 0;
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  let from = sh * 60 + sm;
  let to = eh * 60 + em;
  if (to <= from) to += 24 * 60;
  const diff = to - from;
  return diff > 16 * 60 ? 0 : diff;
}

function formatMinutes(minutes: number) {
  if (!minutes) return "0 dk";
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  if (!hours) return `${mins} dk`;
  if (!mins) return `${hours} sa`;
  return `${hours} sa ${mins} dk`;
}

function formatSleep(minutes: number) {
  if (!minutes) return "—";
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return `${hours}s ${mins}dk`;
}

function trDate(dateKey: string) {
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "short" }).format(new Date(dateKey + "T12:00:00"));
}

function energyValue(value: Energy) {
  return value === "low" ? 1 : value === "medium" ? 2 : 3;
}

function energyLabel(value: number) {
  if (!value) return "—";
  if (value < 1.5) return "Düşük";
  if (value < 2.5) return "Orta";
  return "Yüksek";
}

export default function LifeDashboard() {
  const today = localDateKey();
  const [entries, setEntries] = useState<Record<string, DailyEntry>>({});
  const [settings, setSettings] = useState<WeeklySettings>(defaultSettings);
  const [selectedDate, setSelectedDate] = useState(today);
  const [saved, setSaved] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const rawEntries = localStorage.getItem(STORAGE_KEY);
      const rawSettings = localStorage.getItem(SETTINGS_KEY);
      if (rawEntries) setEntries(JSON.parse(rawEntries));
      if (rawSettings) setSettings({ ...defaultSettings, ...JSON.parse(rawSettings) });
    } catch {}
    setHydrated(true);
  }, []);

  const current = entries[selectedDate] ?? emptyEntry(selectedDate);

  const updateCurrent = (patch: Partial<DailyEntry>) => {
    setEntries((previous) => ({
      ...previous,
      [selectedDate]: { ...(previous[selectedDate] ?? emptyEntry(selectedDate)), ...patch },
    }));
    setSaved(false);
  };

  const saveDay = () => {
    const next = {
      ...entries,
      [selectedDate]: entries[selectedDate] ?? emptyEntry(selectedDate),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    setEntries(next);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  const saveSettings = (patch: Partial<WeeklySettings>) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
  };

  const last7Keys = useMemo(() => {
    return Array.from({ length: 7 }, (_, index) => {
      const d = new Date();
      d.setHours(12, 0, 0, 0);
      d.setDate(d.getDate() - (6 - index));
      return localDateKey(d);
    });
  }, []);

  const week = last7Keys.map((key) => entries[key]).filter(Boolean);
  const sleepValues = week.map((item) => sleepMinutes(item.sleepStart, item.wakeTime)).filter((n) => n > 0);
  const averageSleep = sleepValues.length ? Math.round(sleepValues.reduce((a, b) => a + b, 0) / sleepValues.length) : 0;
  const exerciseDays = week.filter((item) => item.exerciseMinutes >= 15).length;
  const goodNutritionDays = week.filter((item) => item.nutrition === "good").length;
  const learningTotal = week.reduce((sum, item) => sum + item.learningMinutes, 0);
  const professionalTotal = week.reduce((sum, item) => sum + item.professionalMinutes, 0);
  const partnerDays = week.filter((item) => item.partnerQualityMinutes >= 30).length;
  const contentEntries = week.filter((item) => item.contentDone);
  const contentTotal = contentEntries.reduce((sum, item) => sum + item.contentMinutes, 0);
  const contentEnergyAverage = contentEntries.length
    ? contentEntries.reduce((sum, item) => sum + energyValue(item.contentEnergy), 0) / contentEntries.length
    : 0;

  const todaySleep = sleepMinutes(current.sleepStart, current.wakeTime);

  if (!hydrated) {
    return <main className="min-h-screen bg-[#f5f3ee]" />;
  }

  return (
    <main className="min-h-screen bg-[#f5f3ee] pb-24 text-slate-800">
      <header className="border-b border-[#17324f]/10 bg-[#17324f] text-white">
        <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8">
          <p className="text-xs font-bold tracking-[.22em] text-[#d6bd91]">TEK TAŞ SİSTEMİ</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl">Hayat Paneli</h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">Çok şeyi gör. Bir şeyi düzelt. Günlük giriş hedefi: 2 dakikadan kısa.</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3 text-right">
              <p className="text-[11px] uppercase tracking-[.16em] text-white/55">Bu haftanın Tek Taşı</p>
              <input
                value={settings.weeklyStone}
                onChange={(e) => saveSettings({ weeklyStone: e.target.value })}
                placeholder="Örn. Uyku saatini sabitle"
                className="mt-1 w-64 max-w-[70vw] bg-transparent text-right text-sm font-semibold outline-none placeholder:text-white/35"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-6 px-5 py-7 sm:px-8">
        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Metric title="Uyku" value={formatSleep(averageSleep)} detail={sleepValues.length ? `${sleepValues.length}/7 gün kayıt` : "Henüz veri yok"} />
          <Metric title="Hareket" value={`${exerciseDays}/7 gün`} detail="15+ dakika" />
          <Metric title="Ana meslek" value={formatMinutes(professionalTotal)} detail="Son 7 gün" />
          <Metric title="İçerik" value={`${contentEntries.length} adet`} detail={`${formatMinutes(contentTotal)} · ${energyLabel(contentEnergyAverage)} enerji`} />
          <Metric title="Beslenme" value={`${goodNutritionDays}/7 iyi gün`} detail="Yargı yok, sadece trend" />
          <Metric title="Öğrenme" value={formatMinutes(learningTotal)} detail="Kitap · makale · ders" />
          <Metric title="Eşle kaliteli zaman" value={`${partnerDays}/7 gün`} detail="30+ dakika" />
          <Metric title="Aktif danışan" value={String(settings.activeClients)} detail={settings.confirmedIncome ? `${settings.confirmedIncome.toLocaleString("tr-TR")} TL kesin gelir` : "Gelir henüz girilmedi"} />
        </section>

        <section className="rounded-[28px] border border-[#17324f]/10 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold tracking-[.18em] text-[#b99155]">GÜNLÜK CHECK-IN</p>
              <h2 className="mt-1 font-serif text-2xl text-[#17324f]">Bugünün resmi</h2>
            </div>
            <input
              type="date"
              value={selectedDate}
              max={today}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="rounded-xl border border-slate-200 bg-[#faf9f6] px-3 py-2 text-sm outline-none focus:border-[#b99155]"
            />
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Card title="😴 Uyku" subtitle={todaySleep ? `Otomatik: ${formatSleep(todaySleep)}` : "Saatleri gir, süreyi ben hesaplayayım."}>
              <div className="grid grid-cols-2 gap-3">
                <TimeField label="Yattım" value={current.sleepStart} onChange={(value) => updateCurrent({ sleepStart: value })} />
                <TimeField label="Kalktım" value={current.wakeTime} onChange={(value) => updateCurrent({ wakeTime: value })} />
              </div>
            </Card>

            <Card title="🏃 Hareket" subtitle="Mükemmel spor değil; bedeni hareket ettirmek.">
              <ChoiceRow
                value={current.exerciseMinutes}
                options={[0, 15, 30, 45]}
                labels={["Yok", "15 dk", "30 dk", "45+"]}
                onChange={(value) => updateCurrent({ exerciseMinutes: value })}
              />
            </Card>

            <Card title="🥗 Beslenme" subtitle="Kalori sayma yok. Günün genel kalitesi.">
              <ChoiceRow
                value={current.nutrition}
                options={["low", "medium", "good"]}
                labels={["Zayıf", "Normal", "İyi"]}
                onChange={(value) => updateCurrent({ nutrition: value as Nutrition })}
              />
            </Card>

            <Card title="📚 Öğrenme" subtitle="Kitap, makale, ders, araştırma.">
              <ChoiceRow
                value={current.learningMinutes}
                options={[0, 10, 20, 30]}
                labels={["0", "10 dk", "20 dk", "30+"]}
                onChange={(value) => updateCurrent({ learningMinutes: value })}
              />
            </Card>

            <Card title="🧠 Ana meslek" subtitle="Danışmanlık, hazırlık, makale, sistem kurma.">
              <ChoiceRow
                value={current.professionalMinutes}
                options={[0, 30, 60, 120]}
                labels={["0", "30 dk", "60 dk", "120+"]}
                onChange={(value) => updateCurrent({ professionalMinutes: value })}
              />
            </Card>

            <Card title="❤️ Kaliteli temas" subtitle="Telefonsuz, gerçekten birlikte olunan süre.">
              <ChoiceRow
                value={current.partnerQualityMinutes}
                options={[0, 15, 30, 60]}
                labels={["Yok", "15 dk", "30 dk", "60+"]}
                onChange={(value) => updateCurrent({ partnerQualityMinutes: value })}
              />
            </Card>
          </div>

          <div className="mt-5 rounded-3xl border border-[#b99155]/25 bg-[#fbf7ef] p-5">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={current.contentDone}
                onChange={(e) => updateCurrent({ contentDone: e.target.checked })}
                className="h-5 w-5 accent-[#17324f]"
              />
              <span>
                <span className="block font-semibold text-[#17324f]">🎬 Bugün içerik ürettim</span>
                <span className="text-sm text-slate-500">Sadece yaptıysan detaylar açılır.</span>
              </span>
            </label>

            {current.contentDone && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <SelectField
                  label="Tür"
                  value={current.contentType}
                  onChange={(value) => updateCurrent({ contentType: value as ContentType })}
                  options={[
                    ["short", "Short / Reels"],
                    ["video", "Uzun video"],
                    ["article", "Makale"],
                    ["post", "Post"],
                  ]}
                />
                <NumberField label="Harcanan süre (dk)" value={current.contentMinutes} onChange={(value) => updateCurrent({ contentMinutes: value })} />
                <SelectField
                  label="Enerji maliyeti"
                  value={current.contentEnergy}
                  onChange={(value) => updateCurrent({ contentEnergy: value as Energy })}
                  options={[["low", "Düşük"], ["medium", "Orta"], ["high", "Yüksek"]]}
                />
                <label className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-white p-3">
                  <input type="checkbox" checked={current.contentPublished} onChange={(e) => updateCurrent({ contentPublished: e.target.checked })} className="mb-1 h-5 w-5 accent-[#17324f]" />
                  <span className="text-sm font-medium">Yayınlandı</span>
                </label>
              </div>
            )}
          </div>

          <button
            onClick={saveDay}
            className="mt-6 w-full rounded-2xl bg-[#17324f] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#10283f]"
          >
            {saved ? "✓ Kaydedildi" : "Bugünü kaydet"}
          </button>
          <p className="mt-3 text-center text-xs text-slate-400">Veriler şu anda yalnızca bu cihazın tarayıcısında saklanır.</p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
          <div className="rounded-[28px] border border-[#17324f]/10 bg-white p-5 shadow-sm sm:p-7">
            <div>
              <p className="text-xs font-bold tracking-[.18em] text-[#b99155]">SON 7 GÜN</p>
              <h2 className="mt-1 font-serif text-2xl text-[#17324f]">Hızlı özet</h2>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-2">
              {last7Keys.map((key) => {
                const item = entries[key];
                const sleep = item ? sleepMinutes(item.sleepStart, item.wakeTime) : 0;
                const score = item
                  ? Number(sleep >= 420) + Number(item.exerciseMinutes >= 15) + Number(item.professionalMinutes > 0) + Number(item.partnerQualityMinutes >= 30)
                  : 0;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedDate(key)}
                    className={`rounded-2xl border px-1 py-3 text-center transition ${key === selectedDate ? "border-[#17324f] bg-[#17324f] text-white" : "border-slate-200 bg-[#faf9f6] hover:border-[#b99155]"}`}
                  >
                    <div className="text-[10px] opacity-60">{trDate(key)}</div>
                    <div className="mt-3 flex h-14 items-end justify-center">
                      <div className={`w-3 rounded-full ${key === selectedDate ? "bg-white/80" : "bg-[#b99155]"}`} style={{ height: `${item ? Math.max(12, score * 13) : 6}px` }} />
                    </div>
                    <div className="mt-2 text-[10px]">{item ? "kayıtlı" : "—"}</div>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-400">Çubuk bir “başarı puanı” değil; o gün kaç temel alanın görünür olduğuna dair hızlı bir işaret.</p>
          </div>

          <div className="rounded-[28px] border border-[#17324f]/10 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-xs font-bold tracking-[.18em] text-[#b99155]">HAFTALIK SABİTLER</p>
            <h2 className="mt-1 font-serif text-2xl text-[#17324f]">Sadece değişince güncelle</h2>
            <div className="mt-6 space-y-4">
              <NumberField label="Aktif danışan" value={settings.activeClients} onChange={(value) => saveSettings({ activeClients: value })} />
              <NumberField label="Kesin aylık gelir (TL)" value={settings.confirmedIncome} onChange={(value) => saveSettings({ confirmedIncome: value })} />
            </div>
            <div className="mt-6 rounded-2xl bg-[#f5f3ee] p-4 text-sm leading-6 text-slate-600">
              <strong className="text-[#17324f]">Kural:</strong> Bu panel seni yönetmez. Pazar günü trende bak, bir Tek Taş seç ve gerisini arka plana bırak.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ title, value, detail }: { title: string; value: string; detail: string }) {
  return (
    <article className="rounded-3xl border border-[#17324f]/10 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold text-slate-500">{title}</p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-[#17324f]">{value}</p>
      <p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p>
    </article>
  );
}

function Card({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-[#faf9f6] p-4 sm:p-5">
      <div className="mb-4">
        <h3 className="font-semibold text-[#17324f]">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-slate-500">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

function TimeField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-500">{label}</span>
      <input type="time" value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-base outline-none focus:border-[#b99155]" />
    </label>
  );
}

function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-500">{label}</span>
      <input
        type="number"
        min="0"
        inputMode="numeric"
        value={value || ""}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-base outline-none focus:border-[#b99155]"
      />
    </label>
  );
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[][] }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-500">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#b99155]">
        {options.map(([optionValue, labelText]) => <option key={optionValue} value={optionValue}>{labelText}</option>)}
      </select>
    </label>
  );
}

function ChoiceRow<T extends string | number>({ value, options, labels, onChange }: { value: T; options: T[]; labels: string[]; onChange: (value: T) => void }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {options.map((option, index) => (
        <button
          type="button"
          key={String(option)}
          onClick={() => onChange(option)}
          className={`rounded-xl border px-2 py-3 text-xs font-semibold transition ${value === option ? "border-[#17324f] bg-[#17324f] text-white" : "border-slate-200 bg-white text-slate-600 hover:border-[#b99155]"}`}
        >
          {labels[index]}
        </button>
      ))}
    </div>
  );
}
