export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export const articles: Article[] = [
  {
    slug: "erteleme-her-zaman-tembellik-degildir",
    category: "Psikolojik danışmanlık",
    title: "Erteleme Her Zaman Tembellik Değildir",
    excerpt: "Erteleme, çoğu zaman bir işi istememekten çok; o işin uyandırdığı baskı, belirsizlik ya da yetersizlik hissiyle ilişkilidir.",
    date: "20 Temmuz 2026",
    sections: [
      { heading: "Ertelediğimiz şey çoğu zaman yalnızca iş değildir", paragraphs: ["Bir rapora başlamak, sınava hazırlanmak ya da önemli bir telefon görüşmesi yapmak bazen gereğinden büyük görünür. Zihin o anda işin kendisinden çok, olası sonucu düşünür: Ya iyi olmazsa? Ya yetiştiremezsem? Ya beklediğim kadar başarılı olamazsam?", "Bu yüzden erteleme, her zaman isteksizlik ya da disiplinsizlik anlamına gelmez. Bazen kişinin kendini korumak için geliştirdiği kısa vadeli bir kaçınma yoludur."] },
      { heading: "Başlangıcı küçültmek işe yarar", paragraphs: ["Büyük hedefler yerine ilk adımı tarif etmek daha gerçekçidir. “Bugün projeyi bitireceğim” yerine “Dosyayı açıp ilk iki cümleyi yazacağım” demek, zihnin işe yaklaşmasını kolaylaştırır.", "Küçük adım, sorunu tamamen çözmez; fakat eyleme geçmek için gerekli eşiği düşürür. Devamı çoğu zaman ilk birkaç dakikadan sonra gelir."] },
      { heading: "Kendinize doğru soruyu sorun", paragraphs: ["Ertelediğiniz anlarda “Neden böyleyim?” yerine “Bu işin hangi kısmı beni zorluyor?” diye sormayı deneyin. Cevap; belirsizlik, mükemmeliyetçilik, yorgunluk ya da destek ihtiyacı olabilir.", "Doğru soru, suçlamadan daha çok yol açar."] },
    ],
  },
  {
    slug: "kaygiyla-iliskimizi-yeniden-dusunmek",
    category: "Psikolojik danışmanlık",
    title: "Kaygıyla İlişkimizi Yeniden Düşünmek",
    excerpt: "Kaygı ortadan kaldırılması gereken bir düşman olmak zorunda değildir; bazen önem verdiğimiz bir şeyin işaretidir.",
    date: "20 Temmuz 2026",
    sections: [
      { heading: "Kaygı neyi korumaya çalışır?", paragraphs: ["Kaygı çoğu zaman geleceğe dair bir hazırlık çabasıdır. Zihin olası riskleri fark etmeye çalışırken aynı zamanda bizi hareket etmeye çağırır. Ancak bu alarm çok sık ya da çok yüksek çalıştığında günlük hayatı zorlaştırabilir.", "Bu nedenle ilk hedef kaygıyı yargılamak değil, onun hangi durumda yükseldiğini anlamaktır."] },
      { heading: "Kontrol alanını ayırmak", paragraphs: ["Bir görüşmenin sonucunu, herkesin düşüncesini ya da geleceğin tüm ayrıntılarını kontrol edemeyiz. Hazırlığımızı, dinlenmemizi, destek istememizi ve bir sonraki küçük adımı ise etkileyebiliriz.", "Kaygı yükseldiğinde bu ayrımı tekrar hatırlamak, zihni belirsizlikten eyleme doğru taşımaya yardımcı olur."] },
      { heading: "Destek istemek bir seçenek", paragraphs: ["Kaygı uzun süre devam ediyor, işlevselliği belirgin biçimde etkiliyor ya da tek başına taşımak zor geliyorsa profesyonel destek aramak anlamlı olabilir. Bu yazı bilgilendirme amaçlıdır; kişisel bir değerlendirme yerine geçmez."] },
    ],
  },
  {
    slug: "kariyer-seciminde-dogru-sorular",
    category: "Kariyer",
    title: "Kariyer Seçiminde Doğru Sorular",
    excerpt: "Kariyer kararı yalnızca hangi işi yapacağımızı değil; nasıl bir hayat kurmak istediğimizi de düşünmeyi gerektirir.",
    date: "20 Temmuz 2026",
    sections: [
      { heading: "Tek bir doğru yol yok", paragraphs: ["Kariyer seçimi çoğu zaman tek seferde verilmesi gereken kesin bir karar gibi algılanır. Oysa yönler, deneyimler ve öncelikler zamanla değişebilir. Sağlam bir kariyer planı, değişime kapalı bir cevap değil; kendini güncelleyebilen bir pusuladır."] },
      { heading: "Üç soruyla başlayın", paragraphs: ["Hangi problemleri çözmek beni canlı tutuyor? Nasıl bir çalışma ortamında daha iyi iş çıkarıyorum? Bu yolun bana kazandıracağı yaşam biçimi benim için anlamlı mı?", "Bu soruların cevapları ilk gün net olmayabilir. Ancak deneyim, gözlem ve küçük denemelerle daha görünür hale gelir."] },
      { heading: "Küçük denemeler yön gösterir", paragraphs: ["Bir alanı anlamak için yalnızca araştırmak yetmez. Bir uzmanla konuşmak, kısa bir proje denemek, gönüllü katkı vermek ya da o alanda üreten insanları izlemek karar kalitesini artırır.", "Kariyer gelişimi, tek bir büyük karardan çok; doğru sırayla yapılan küçük denemelerden oluşur."] },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
