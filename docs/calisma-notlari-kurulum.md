# Çalışma notları yayın sistemi

Özel üretim panosu: [Notion veritabanı](https://app.notion.com/p/62b6767209e249f8ab85ae76df5c9513).

## Yayına alma

1. Videonun gerçek adını ve bağlantısını panoya yazın. NotebookLM taslağını kendi değerlendirme ve uygulama sorularınızla düzenleyin; başka birinin slaytlarını, görsellerini veya uzun alıntılarını taşımayın.
2. Her notun PDF'sini veya sunumunu hazırlayın ve herkese açık HTTPS görüntüleme/indirme bağlantısını `PDF bağlantısı` alanına yazın. Seçilmiş birkaç kapsamlı rehber için ayrıca Kit'te ayrı bir kayıt sayfası hazırlayabilirsiniz; çift onaydan sonra PDF teslimini gerçek bir adresle sınayın.
3. Kit kayıt sayfasında PDF isteğini ve sonraki e-postalara katılma tercihini anlaşılır sunun. İhtiyaç veya aile durumu gibi hassas alanları varsayılan olarak istemeyin.
4. Notion satırındaki `Başlık`, `Kısa açıklama`, `Slug`, `Kaynak adı`, `Kaynak video` ve **`PDF bağlantısı` veya `Kit form bağlantısı`** alanlarını doldurun. `Slug` örneği: `cocuga-sinir-koymak`. Tekil olmalı, sadece küçük İngilizce harf, rakam ve kısa çizgi içermeli.
5. Site içeriğini kontrol edip son olarak `Aşama` değerini `Yayında` yapın. Başlık, açıklama ve kaynakları eksiksiz; PDF veya Kit bağlantısı HTTPS olan satırlar `/notlar` sayfasında görünür. İki bağlantı da varsa Kit kayıt sayfası gösterilir. 5 dakikalık önbellek süresini hesaba katın.

## Bir kez yapılacak site ayarları

- Sitenin mevcut Notion entegrasyonuna yeni veritabanı erişimi verin.
- Vercel ortamına `NOTION_STUDY_NOTES_DATA_SOURCE_ID=2459e8f0-3fe2-4428-b1c9-cf99ec02de3d` ekleyin. Mevcut `NOTION_API_TOKEN` sunucuda kalır. Yeni değerin devreye girmesi için yeniden dağıtım yapın.
- Ortak e-posta kayıt sayfası hazır olunca herkese açık bağlantısını Vercel'de `NEXT_PUBLIC_KIT_NEWSLETTER_URL` olarak ekleyin. Seçilmiş rehberlerin Kit bağlantısını ayrıca ilgili Notion satırına yazın. Sitede Kit anahtarı gerekmiyor; site kişisel veri toplamıyor, kayıt isteyenleri Kit'e yönlendiriyor.
- Her notun sonuna kendi bireysel danışmanlık bağlantınızı koyun. Kaynağı açıkça belirtin; Adem Güneş'in resmî yayını izlenimi oluşturmayın.

Yaklaşık 200 not için 200 ayrı Kit sayfası açmayın. Arşiv Notion'dan beslenir; çoğu not doğrudan kendi PDF bağlantısıyla açılır. Ortak Kit sayfası yeni notları e-postayla isteyenlere hizmet eder. İlk kapsamlı PDF ayrıca kayıt karşılığında sunulacaksa bunun için tek bir Kit sayfası yeterlidir.

## Ölçüm

İlk 10 gerçek notun her biri için Notion'da indirme, görüşme talebi ve danışan sayısını aylık kaydedin. Görüşme sayısını bir kişinin belirli konudaki sıkıntısının kanıtı gibi yorumlamayın.

Mevcut ana sayfadaki eski bülten bileşeni `/api/subscribe` adresine bağlıydı; depoda bu uç nokta yoktu. Yeni PDF teslimi hazır olana kadar kırık bülten formu ana sayfadan kaldırıldı.
