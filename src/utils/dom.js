import { kelimeyiCevir } from './api.js';
import { deftereEkle } from './defter.js'; 

const hikayeAlani = document.getElementById('hikaye-alani');
const popup = document.getElementById('ceviri-popup');
const ceviriIcerik = document.getElementById('ceviri-icerik');
const kapatBtn = document.getElementById('kapat-popup');
const overlay = document.querySelector('.overlay');

function sesliOku(metin) {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(metin);
    utterance.lang = 'fi-FI';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
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

      // Çift tıkla sadece kelimeyi oku
      span.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        sesliOku(part.trim());
      });

      hikayeAlani.appendChild(span);
    }
  });

  // Hikayeyi tamamen oku butonu
  const okuButon = document.createElement('button');
  okuButon.textContent = 'Hikayeyi Sesli Oku';
  okuButon.style.marginTop = '30px';
  okuButon.style.padding = '12px 24px';
  okuButon.style.background = '#006064';
  okuButon.style.color = 'white';
  okuButon.style.border = 'none';
  okuButon.style.borderRadius = '12px';
  okuButon.style.fontSize = '1.1em';
  okuButon.style.cursor = 'pointer';
  okuButon.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
  okuButon.onclick = () => sesliOku(metin);

  hikayeAlani.appendChild(document.createElement('br'));
  hikayeAlani.appendChild(okuButon);
}

export function kelimeEventiEkle(hedefDil = 'tr') {
  document.querySelectorAll('.kelime').forEach(kelime => {
    kelime.onclick = async () => {
      const original = kelime.textContent.trim();

      // Popup'ı aç ve yükleniyor mesajı
      ceviriIcerik.innerHTML = `<div style="padding: 20px 0; font-size: 1.1em;">${hedefDil === 'tr' ? 'Çeviriliyor...' : 'Translating...'}</div>`;
      popup.classList.remove('hidden');
      overlay.classList.remove('hidden');

      try {
        const translation = await kelimeyiCevir(original, hedefDil);

        // Deftere Ekle butonu (küçük, güzel, çeviriyi kapatmaz)
        const defterBtn = document.createElement('button');
        defterBtn.textContent = hedefDil === 'tr' ? 'Deftere Ekle' : 'Add to Notebook';
        defterBtn.style.display = 'block';
        defterBtn.style.margin = '25px auto 10px';
        defterBtn.style.padding = '12px 30px';
        defterBtn.style.background = '#006064';
        defterBtn.style.color = 'white';
        defterBtn.style.border = 'none';
        defterBtn.style.borderRadius = '30px';
        defterBtn.style.fontSize = '1em';
        defterBtn.style.fontWeight = 'bold';
        defterBtn.style.cursor = 'pointer';
        defterBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';

        defterBtn.onclick = (e) => {
          e.stopPropagation();
          deftereEkle(original, translation, hedefDil);
          alert(hedefDil === 'tr' ? `${original} deftere eklendi!` : `${original} added to notebook!`);
        };

        // Popup içeriği — çeviri net görünür, buton altta
        ceviriIcerik.innerHTML = `
          <div style="margin-bottom: 20px;">
            <strong style="font-size: 1.6em; display: block; margin-bottom: 10px;">${original}</strong>
            <span style="font-size: 1.4em; display: block; margin-bottom: 10px;">${translation}</span>
            <small style="color: #666; display: block;">(${hedefDil === 'tr' ? 'Türkçe' : 'English'})</small>
          </div>
        `;

        ceviriIcerik.appendChild(defterBtn);

        // Kelimeye tıklandığında otomatik sesli oku
        sesliOku(original);
      } catch (err) {
        ceviriIcerik.innerHTML = `<div style="color: #d32f2f; padding: 20px 0;">${hedefDil === 'tr' ? 'Hata oluştu' : 'Error occurred'}</div>`;
      }
    };
  });
}

// Popup kapatma
kapatBtn.onclick = () => {
  popup.classList.add('hidden');
  overlay.classList.add('hidden');
  speechSynthesis.cancel();
};

overlay.onclick = () => {
  popup.classList.add('hidden');
  overlay.classList.add('hidden');
  speechSynthesis.cancel();
};