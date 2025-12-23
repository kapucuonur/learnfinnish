// api/translate.js - Free Google Translate with context support (no API key required)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { kelime, hedefDil, context } = req.body;
  const target = hedefDil === 'tr' ? 'tr' : 'en';

  try {
    let translation;

    // If context (sentence) is provided, translate the sentence for better accuracy
    if (context && context.length > kelime.length) {
      // Translate the full sentence
      const sentenceResponse = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fi&tl=${target}&dt=t&q=${encodeURIComponent(context)}`
      );

      if (sentenceResponse.ok) {
        const sentenceData = await sentenceResponse.json();
        const translatedSentence = sentenceData[0][0][0];

        // Try to extract the word's translation from the sentence
        // This gives context-aware translation
        const words = context.split(/\\s+/);
        const wordIndex = words.findIndex(w => w.toLowerCase().includes(kelime.toLowerCase()));

        if (wordIndex !== -1 && translatedSentence) {
          const translatedWords = translatedSentence.split(/\\s+/);
          // Get the corresponding word from translated sentence
          if (translatedWords[wordIndex]) {
            translation = translatedWords[wordIndex].replace(/[.,!?;:]/g, '');
          }
        }
      }
    }

    // Fallback: translate just the word if context translation failed
    if (!translation) {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fi&tl=${target}&dt=t&q=${encodeURIComponent(kelime)}`
      );

      if (!response.ok) {
        return res.status(500).json({ translation: hedefDil === 'tr' ? 'Çeviri hatası' : 'Translation error' });
      }

      const data = await response.json();
      translation = data[0][0][0] || (hedefDil === 'tr' ? 'Çeviri bulunamadı' : 'No translation found');
    }

    res.status(200).json({ translation });
  } catch (err) {
    console.error('Translation error:', err);
    res.status(500).json({ translation: hedefDil === 'tr' ? 'Bağlantı hatası' : 'Connection error' });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};