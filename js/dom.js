import { kelimeyiCevir } from './api.js';

const hikayeAlani = document.getElementById('hikaye-alani');
const popup = document.getElementById('ceviri-popup');
const ceviriIcerik = document.getElementById('ceviri-icerik');
const kapatBtn = document.getElementById('kapat-popup');
const overlay = document.querySelector('.overlay');

// Sesli okuma fonksiyonu (Fince doğal ses)
function sesliOku(metin) {
  if ('speechSynthesis' in window) {
    // Önceki konuşmayı iptal et
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(metin);
    utterance.lang = 'fi-FI'; // Fince ses
    utterance.rate = 0.9; // Doğal hız
    utterance.pitch = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
  } else {
    alert('Tarayıcınız sesli okumayı desteklemiyor.');
  }
}

export function hikayeYaz(metin) {
  const parts = metin.split(/(\s+|[.,!?;:()"'-])/).filter(p => p !== '');

  hikayeAlani.innerHTML = '';

  parts.forEach(part => {
    if (/^\s+$|[.,!?;:()"'-]/.test(part)) {
      hikayeAlani.appendChild(document.createTextNode(part));
    } else {
      const span = document.createElement('span');
      span.className = 'kelime';
      span.textContent = part;

      // Kelimeye çift tıkla → sesli oku (kelimeyi)
      span.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        sesliOku(part.trim());
      });

      hikayeAlani.appendChild(span);
    }
  });

  // Hikayenin tamamını oku butonu ekle (hikaye alanının altına)
  const okuButon = document.createElement('button');
  okuButon.textContent = 'Hikayeyi Sesli Oku';
  okuButon.style.marginTop = '20px';
  okuButon.style.padding = '10px 20px';
  okuButon.style.background = '#006064';
  okuButon.style.color = 'white';
  okuButon.style.border = 'none';
  okuButon.style.borderRadius = '8px';
  okuButon.style.cursor = 'pointer';
  okuButon.onclick = () => sesliOku(metin);

  hikayeAlani.appendChild(document.createElement('br'));
  hikayeAlani.appendChild(okuButon);
}

export function kelimeEventiEkle(hedefDil = 'tr') {
  document.querySelectorAll('.kelime').forEach(kelime => {
    kelime.onclick = async () => {
      const original = kelime.textContent.trim();
      ceviriIcerik.innerHTML = `${hedefDil === 'tr' ? 'Çeviriliyor...' : 'Translating...'}`;
      popup.classList.remove('hidden');
      overlay.classList.remove('hidden');

      try {
        const translation = await kelimeyiCevir(original, hedefDil);

        // Deftere ekle butonu
        const defterBtn = document.createElement('button');
        defterBtn.textContent = hedefDil === 'tr' ? 'Deftere Ekle' : 'Add to Notebook';
        defterBtn.style.marginTop = '10px';
        defterBtn.style.padding = '8px 16px';
        defterBtn.style.background = '#006064';
        defterBtn.style.color = 'white';
        defterBtn.style.border = 'none';
        defterBtn.style.borderRadius = '6px';
        defterBtn.onclick = (e) => {
          e.stopPropagation();
          deftereEkle(original, translation, hedefDil);
          alert(hedefDil === 'tr' ? `${original} deftere eklendi!` : `${original} added to notebook!`);
        };

        ceviriIcerik.innerHTML = `
          <strong>${original}</strong> (Finnish)<br>
          ${translation}<br>
          <small>(${hedefDil === 'tr' ? 'Türkçe' : 'English'})</small>
        `;
        ceviriIcerik.appendChild(document.createElement('br'));
        ceviriIcerik.appendChild(defterBtn);

        // Sesli oku
        sesliOku(original);
      } catch (err) {
        ceviriIcerik.textContent = hedefDil === 'tr' ? 'Hata oluştu' : 'Error occurred';
      }
    };
  });
}

kapatBtn.onclick = () => {
  popup.classList.add('hidden');
  overlay.classList.add('hidden');
  speechSynthesis.cancel(); // Popup kapanınca sesi durdur
};

overlay.onclick = () => {
  popup.classList.add('hidden');
  overlay.classList.add('hidden');
  speechSynthesis.cancel();
};