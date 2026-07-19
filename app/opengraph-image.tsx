import { ImageResponse } from "next/og";

export const alt = "Sezgin İldeş | İnsan Gelişimi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ height: "100%", width: "100%", display: "flex", background: "#17324f", color: "#f8f7f4", padding: "64px", position: "relative" }}>
      <div style={{ position: "absolute", width: "470px", height: "470px", right: "-95px", top: "-118px", borderRadius: "999px", border: "1px solid rgba(217,196,159,.35)" }} />
      <div style={{ position: "absolute", width: "330px", height: "330px", right: "14px", top: "-49px", borderRadius: "999px", border: "1px solid rgba(217,196,159,.18)" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div style={{ height: "78px", width: "78px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "22px", background: "#f8f7f4", color: "#17324f", fontSize: "38px", fontWeight: 700, letterSpacing: "-3px" }}>Sİ</div>
          <div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "24px", letterSpacing: "5px", fontWeight: 700 }}>SEZGİN İLDEŞ</span><span style={{ marginTop: "7px", fontSize: "18px", color: "#d9c49f", letterSpacing: "2px" }}>İNSAN GELİŞİMİ</span></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}>
          <span style={{ fontSize: "70px", lineHeight: 1.05, letterSpacing: "-3px", fontWeight: 700 }}>İnsan gelişimi,<br />doğru sorularla başlar.</span>
          <span style={{ marginTop: "24px", fontSize: "26px", color: "#d9c49f" }}>Psikolojik danışmanlık · Kariyer · Eğitim</span>
        </div>
      </div>
    </div>,
    size,
  );
}
