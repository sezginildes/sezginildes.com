# Çalışma notları yayın sistemi

Özel üretim panosu: [Notion veritabanı](https://app.notion.com/p/62b6767209e249f8ab85ae76df5c9513).

## Yayına alma

1. Videonun gerçek adını ve bağlantısını panoya yazın. NotebookLM taslağını kendi değerlendirme ve uygulama sorularınızla düzenleyin; başka birinin slaytlarını, görsellerini veya uzun alıntılarını taşımayın.
2. PDF'yi oluşturun. Kit hesabında her PDF için ayrı bir **Form** hazırlayın; doğrulama e-postasında `Download` seçerek ilgili PDF'yi yükleyin. Çift onayı açık bırakın. Test adresiyle gerçekten indirin.
3. Formda aydınlatma metni ile pazarlama iznini ayrı ve anlaşılır sunun. PDF teslimini sonraki pazarlama iletilerine izin verme şartına bağlamayın. İhtiyaç veya aile durumunu soran alanlar eklemeden önce gizlilik düzenini ayrıca değerlendirin.
4. Notion satırındaki `Başlık`, `Kısa açıklama`, `Slug`, `Kaynak adı`, `Kaynak video`, `Kit form bağlantısı` alanlarını doldurun. `Slug` örneği: `cocuga-sinir-koymak`. Tekil olmalı, sadece küçük İngilizce harf, rakam ve kısa çizgi içermeli.
5. Site içeriğini kontrol edip son olarak `Aşama` değerini `Yayında` yapın. Başlık ve açıklama dolu, kaynak ve form bağlantıları HTTPS olan satırlar `/notlar` sayfasında görünür. 5 dakikalık önbellek süresini hesaba katın.

## Bir kez yapılacak site ayarları

- Sitenin mevcut Notion entegrasyonuna yeni veritabanı erişimi verin.
- Vercel ortamına `NOTION_STUDY_NOTES_DATA_SOURCE_ID=2459e8f0-3fe2-4428-b1c9-cf99ec02de3d` ekleyin. Mevcut `NOTION_API_TOKEN` sunucuda kalır. Yeni değerin devreye girmesi için yeniden dağıtım yapın.
- Kit formunun herkese açık bağlantısını Notion'daki ilgili satıra yazın. Sitede ayrı Kit anahtarı gerekmiyor; site kişisel veri toplamıyor, ziyaretçiyi Kit formuna yönlendiriyor.
- Her notun sonuna kendi bireysel danışmanlık bağlantınızı koyun. Kaynağı açıkça belirtin; Adem Güneş'in resmî yayını izlenimi oluşturmayın.

Kit'in ücretsiz planında form, etiket ve toplu gönderim vardır; otomatik çok e-postalı seri ücretlidir. İlk pilot için doğrulama ve PDF teslim e-postası ile gerektiğinde manuel bülten yeterlidir.

## Ölçüm

İlk 10 gerçek notun her biri için Notion'da indirme, görüşme talebi ve danışan sayısını aylık kaydedin. Görüşme sayısını bir kişinin belirli konudaki sıkıntısının kanıtı gibi yorumlamayın.

Mevcut ana sayfadaki eski bülten bileşeni `/api/subscribe` adresine bağlıydı; depoda bu uç nokta yoktu. Yeni PDF teslimi hazır olana kadar kırık bülten formu ana sayfadan kaldırıldı.
