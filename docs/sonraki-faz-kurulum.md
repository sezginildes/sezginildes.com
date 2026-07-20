# Sonraki Faz Kurulumu

Bu belgede kodu hazır olan ancak kullanıcı hesabı veya dış servis gerektiren son ayarlar bulunur.

## 1. Ücretsiz kısa ön görüşme

Şu an kariyer danışmanlığı sayfasındaki buton doğrudan WhatsApp'a hazır mesajla gider. Bu, ilk aşamada en düşük sürtünmeli akıştır.

Takvimli randevu için Calendly'de tek bir etkinlik oluşturun:

- Ad: `Ücretsiz ön görüşme`
- Süre: `10–15 dakika`
- Açıklama: `Bu görüşme danışmanlık seansı değildir; sürecin uygunluğu, çalışma biçimi ve genel sorular için kısa bir tanışma alanıdır.`
- Yalnızca kariyer ve kurumsal taleplerde kullanın. Psikolojik danışmanlıkta ilk temas WhatsApp üzerinden ilerlesin.

## 2. E-posta listesi

Kod, e-posta onay kutusunu ve abonelik API'sini içeriyor. Çalışması için:

1. Supabase'de bir proje oluşturun.
2. SQL Editor'de `supabase/schema.sql` dosyasını çalıştırın.
3. Vercel Environment Variables alanına şu iki değeri ekleyin:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Yeni bir production deploy başlatın.

`SUPABASE_SERVICE_ROLE_KEY` yalnızca Vercel'de kalmalı; tarayıcıya, GitHub'a veya mesaja yazılmamalıdır.

E-posta gönderimi bu aşamada özellikle kapalıdır. Önce açık izinli liste oluşmalı; ardından Resend, Brevo veya benzeri bir araçla çift onaylı e-posta akışı kurulabilir.

## 3. Ölçümleme

İlk ölçülecek kararlar:

- Hangi kanal daha çok WhatsApp talebi getiriyor?
- Psikolojik danışmanlık, kariyer ve eğitim sayfalarından hangisi daha çok ilgi görüyor?
- Hangi blog yazıları hizmet sayfalarına trafik taşıyor?

Google Analytics'i yalnızca çerez/aydınlatma düzeni kararlaştırıldıktan sonra ekleyin. Ölçüm kimliği için `.env.example` içinde `NEXT_PUBLIC_GA_MEASUREMENT_ID` alanı hazırdır.

İlk 30 gün için yeterli olan yöntem: Instagram, LinkedIn ve WhatsApp paylaşımlarında ayrı UTM bağlantıları kullanmak ve CRM'de her yeni kişiye `Kaynak` alanı atamaktır.

Örnek LinkedIn bağlantısı:

`https://www.sezginildes.com/kariyer-danismanligi?utm_source=linkedin&utm_medium=organic&utm_campaign=kariyer_danismanligi`

## 4. Reklam ve ödeme

Bu ikisi henüz açılmamalı.

- Reklamdan önce: üç hizmet sayfası, mesaj akışı ve sosyal kanıt netleşmeli.
- Ödemeden önce: ücret çerçevesi, iptal/erteleme politikası ve uygun hukuki metinler netleşmeli.

İlk hedef reklam değil; organik içerikten gelen 10–20 gerçek talepte hangi mesajın çalıştığını görmek olmalı.
