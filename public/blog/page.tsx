import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Duyguyu Bırakmak mı, Kendinden Kopmak mı? | Sezgin İldeş",
  description:
    "Bir duyguyu gerçekten bırakmakla onu bastırmak arasındaki fark nedir? Kaygı, utanç, yetersizlik ve bağlanma korkularına şefkatli bir bakış.",
  alternates: {
    canonical:
      "https://sezginildes.com/blog/duyguyu-birakmak-mi-kendinden-kopmak-mi",
  },
  openGraph: {
    title: "Duyguyu Bırakmak mı, Kendinden Kopmak mı?",
    description:
      "İyileşmek hiçbir şey hissetmemek değil; hissederken kendinden kopmamayı öğrenmektir.",
    url: "https://sezginildes.com/blog/duyguyu-birakmak-mi-kendinden-kopmak-mi",
    siteName: "Sezgin İldeş",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: "/blog/duyguyu-birakmak-mi-kendinden-kopmak-mi.png",
        width: 1672,
        height: 941,
        alt: "Duyguyu bırakmak ile duygudan kopmak arasındaki fark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duyguyu Bırakmak mı, Kendinden Kopmak mı?",
    description:
      "Susturmaya çalıştığın duygu, aslında seni neden korumaya çalışıyor?",
    images: ["/blog/duyguyu-birakmak-mi-kendinden-kopmak-mi.png"],
  },
};

export default function BlogPostPage() {
  return (
    <main className="bg-[#f8f6f1] text-slate-800">
      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href="/blog"
          className="mb-8 inline-flex text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          ← Tüm yazılar
        </Link>

        <header className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            Duygular · Kendilik · İyileşme
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Duyguyu Bırakmak mı, Kendinden Kopmak mı?
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            Bazen “Artık umurumda değil.” deriz. Peki gerçekten bıraktık
            mı, yoksa hissetmemek için içimizdeki bir kapıyı mı kapattık?
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>Sezgin İldeş</span>
            <span aria-hidden="true">•</span>
            <time dateTime="2026-07-28">28 Temmuz 2026</time>
            <span aria-hidden="true">•</span>
            <span>8 dakika okuma</span>
          </div>
        </header>

        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-3xl shadow-sm">
          <Image
            src="/blog/duyguyu-birakmak-mi-kendinden-kopmak-mi.png"
            alt="Karanlıktan aydınlığa geçerken duygularıyla temas eden bir insan"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <div className="space-y-12 text-lg leading-8 text-slate-700">
          <section className="space-y-5">
            <p>Bazen başımıza gelen bir olaydan sonra kendimize şöyle deriz:</p>

            <blockquote className="border-l-4 border-teal-700 pl-6 text-xl font-medium italic text-slate-900">
              “Artık umurumda değil.”
              <br />
              “Boş verdim.”
              <br />
              “Beni eskisi kadar etkilemiyor.”
            </blockquote>

            <p>
              Bu cümleleri söylediğimizde o duyguyu geride bıraktığımızı
              düşünürüz. Belki gerçekten bırakmışızdır. Fakat bazen de
              hissetmemek için içimizdeki bir kapıyı kapatmışızdır.
            </p>

            <p className="text-xl font-semibold text-slate-950">
              Bir duyguyu gerçekten bıraktığımızı mı, yoksa o duyguya karşı
              duyarsızlaştığımızı mı nasıl anlayabiliriz?
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Duyguyu bırakmak, onu yok saymak değildir
            </h2>

            <p>
              Bir duyguyu bırakmak, “Bunu hissetmemeliyim.” demek değildir.
              Tam tersine, içimizde olanı fark edebilmektir.
            </p>

            <p>
              Göğsümüzdeki sıkışmayı, yüzümüzdeki sıcaklığı, boğazımızdaki
              düğümü ve karnımızdaki huzursuzluğu hissedebilmek…
            </p>

            <p>
              Duyguyu hemen ortadan kaldırmaya çalışmadan bir süre onunla
              kalabilmek ve “Şu anda bende bir şey oluyor.” diyebilmek…
            </p>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-950">
                Bastırmanın kullandığı bazı cümleler:
              </p>

              <ul className="mt-4 space-y-2">
                <li>“Saçmalama.”</li>
                <li>“Büyütülecek bir şey yok.”</li>
                <li>“Başkaları neler yaşıyor, sen buna mı üzülüyorsun?”</li>
                <li>“Güçlü olmak zorundasın.”</li>
                <li>“Kafana takma, geçer.”</li>
              </ul>
            </div>

            <p>
              Bu sözler kısa süreliğine rahatlatıcı olabilir. Fakat duyguyu
              anlamamızı sağlamaz; bazen yalnızca üzerini örter.
            </p>

            <p className="rounded-2xl bg-slate-900 p-7 text-xl font-semibold leading-8 text-white">
              Bırakmak, hissederken özgürleşmektir. Duyarsızlaşmak ise
              özgürleşebilmek için hissetmeyi kapatmaktır.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Görünen duygu, her zaman asıl duygu olmayabilir
            </h2>

            <p>
              İçimizde ilk fark ettiğimiz duygu bazen yalnızca yüzeydeki
              duygudur. Bir şeyin ters gitmesinden yoğun biçimde
              kaygılanabiliriz. Fakat biraz daha yakından baktığımızda
              kaygının altında utanç, değersizlik veya aşırı sorumluluk
              hissi bulunabilir.
            </p>

            <p className="text-xl font-semibold text-teal-800">
              “Korktuğum şey gerçekleşirse, kendimle ilgili ne
              hissedeceğim?”
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Utanmak ile utanç içinde yaşamak aynı değildir
            </h2>

            <p>
              Sağlıklı mahcubiyet, “Yanlış bir davranışta bulundum.” der.
              Kronik utanç ise “Ben yanlış bir insanım.” der.
            </p>

            <p>
              Sağlıklı mahcubiyet davranışı düzeltmeye götürür. Kronik
              utanç ise insanı sürekli özür dilemeye, kendisini küçültmeye
              ve başkalarının bütün duygularından sorumlu hissetmeye
              götürebilir.
            </p>

            <p>
              Asıl mesele utanmamak değil, utancın içinde kaybolmadan
              utanabilmektir.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Bazen görünen düşüncenin altında başka bir acı bulunabilir
            </h2>

            <p>
              Ölüm, kaybetme veya hayatın anlamsızlığı üzerine gelen
              düşünceler bazen gerçek bir varoluşsal sorgulamadır. Bazen
              ise insanın o sırada yaşadığı yetersizlik, çaresizlik veya
              yalnızlık hissiyle iç içe geçebilir.
            </p>

            <p className="text-xl font-semibold text-teal-800">
              “Bu düşünce gelmeden hemen önce hayatımda neyin altında
              eziliyordum?”
            </p>

            <p>
              İnsan ruhu tek bir formülle açıklanamaz. Bu nedenle kesin
              hükümler vermek yerine, görünen düşüncenin daha derindeki
              hangi deneyimle ilişkili olabileceğine merakla bakabiliriz.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              İçimizdeki koruyucu tarafla savaşmak zorunda değiliz
            </h2>

            <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm">
              <p>
                <strong>“Umurumda değil.”</strong> diyen tarafımız yeniden
                incinmekten korkuyor olabilir.
              </p>

              <p>
                <strong>“Kimseye ihtiyacım yok.”</strong> diyen tarafımız
                terk edilmekten korunmaya çalışıyor olabilir.
              </p>

              <p>
                <strong>“Her şeyi kontrol etmeliyim.”</strong> diyen
                tarafımız yeniden çaresiz kalmak istemiyor olabilir.
              </p>

              <p>
                <strong>“En iyisi değilsem konuşmamalıyım.”</strong> diyen
                tarafımız eleştirilmekten veya küçük düşürülmekten korkuyor
                olabilir.
              </p>
            </div>

            <p>
              Bu tarafları susturmaya çalışmak yerine, neyi korumaya
              çalıştıklarını anlamaya ihtiyaç duyabiliriz.
            </p>
          </section>

          <section className="rounded-3xl bg-teal-950 p-7 text-white sm:p-9">
            <h2 className="text-3xl font-bold">
              Kendine sorabileceğin beş soru
            </h2>

            <ol className="mt-6 space-y-4 pl-5">
              <li>1. Şu anda bedenimde ne hissediyorum?</li>
              <li>2. Zihnimden hangi cümleler geçiyor?</li>
              <li>
                3. Korktuğum şey gerçekleşirse kendimle ilgili ne
                hissedeceğim?
              </li>
              <li>
                4. Bu tepki geçmişte beni hangi acıdan korumuş olabilir?
              </li>
              <li>
                5. Bugün bu duygudan kaçmadan kendimle kalabilmek için neye
                ihtiyacım var?
              </li>
            </ol>
          </section>

          <section className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              İyileşmek hiçbir şey hissetmemek değildir
            </h2>

            <p>İyileşmek sürekli iyi hissetmek değildir.</p>

            <p>
              Bazen korktuğunu fark etmek, utandığını kabul etmek,
              yetersiz hissettiğin hâlde hayatın içinde kalmak ve kaybetme
              ihtimalini bilirken sevmeye devam etmektir.
            </p>

            <p className="text-2xl font-bold leading-9 text-slate-950">
              İyileşmek, bütün bu duyguları hissederken kendinden
              kopmamayı öğrenmektir.
            </p>
          </section>

          <footer className="border-t border-slate-300 pt-10">
            <p className="text-2xl font-semibold leading-9 text-slate-950">
              “Susturmaya çalıştığım bu duygu, aslında beni neden korumaya
              çalışıyor?”
            </p>

            <div className="mt-8 rounded-2xl bg-white p-6">
              <p className="font-semibold text-slate-950">
                Duygularını anlamlandırmakta zorlandığın bir dönemden
                geçiyorsan
              </p>

              <p className="mt-2 text-base text-slate-600">
                Bireysel görüşmeler ve danışmanlık süreci hakkında bilgi
                almak için benimle iletişime geçebilirsin.
              </p>

              <Link
                href="/iletisim"
                className="mt-5 inline-flex rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-teal-800"
              >
                İletişime geç
              </Link>
            </div>

            <p className="mt-8 text-sm leading-6 text-slate-500">
              Bu yazı psikoeğitim amacıyla hazırlanmıştır; tanı veya
              psikoterapi hizmetinin yerine geçmez.
            </p>
          </footer>
        </div>
      </article>
    </main>
  );
}