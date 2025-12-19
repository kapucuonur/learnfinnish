const LIBRETRANSLATE_URL = 'https://libretranslate.de/translate';

export async function hikayeUret(konu = '') {
  const prompt = konu
    ? `Konu: "${konu}". Bu konu hakkında 80-120 kelime uzunluğunda, basit ve eğlenceli bir Fince (Suomi) çocuk hikâyesi yaz. Sadece hikâyeyi yaz, başka hiçbir şey ekleme.`
    : `80-120 kelime uzunluğunda, basit ve eğlenceli bir Fince (Suomi) çocuk hikâyesi yaz. Sadece hikâyeyi yaz, başka hiçbir şey ekleme.`;

  const response = await fetch('/api/hikaye', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error('Hikaye üretilemedi: ' + err);
  }

  const data = await response.json();
  return data.hikaye.trim();
}

export async function kelimeyiCevir(kelime, hedefDil = 'tr') {
  const langPair = hedefDil === 'tr' ? 'fi|tr' : 'fi|en';

  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(kelime)}&langpair=${langPair}`
  );

  if (!response.ok) {
    throw new Error('Çeviri hatası');
  }

  const data = await response.json();
  return data.responseData.translatedText || 'Çeviri bulunamadı';
}