// api/translate.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { kelime, hedefDil } = req.body;

  const target = hedefDil === 'tr' ? 'tr' : 'en';

  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fi&tl=${target}&dt=t&q=${encodeURIComponent(kelime)}`
    );

    if (!response.ok) {
      return res.status(500).json({ translation: 'Çeviri hatası' });
    }

    const data = await response.json();
    const translation = data[0][0][0] || 'Çeviri bulunamadı';

    res.status(200).json({ translation });
  } catch (err) {
    res.status(500).json({ translation: 'Bağlantı hatası' });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};