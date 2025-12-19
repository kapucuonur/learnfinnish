import { hikayeUret } from './api.js';
import { hikayeYaz, kelimeEventiEkle } from './dom.js';

let currentLang = 'tr';

const texts = {
  tr: {
    title: 'FincaLearn',
    desc: 'Kısa bir hikaye üretip kelimelerin anlamını öğren!',
    button: 'Yeni Hikaye Üret',
    generating: 'Hikaye üretiliyor...',
    placeholder: 'Hikaye konusu (isteğe bağlı)',
    error: 'Hata: '
  },
  en: {
    title: 'FincaLearn',
    desc: 'Generate a short story and learn word meanings with a tap!',
    button: 'Generate New Story',
    generating: 'Generating story...',
    placeholder: 'Story topic (optional)',
    error: 'Error: '
  }
};

function updateUI() {
  document.querySelector('h1').textContent = texts[currentLang].title;
  document.querySelector('.description').textContent = texts[currentLang].desc;
  document.getElementById('uret-hikaye').textContent = texts[currentLang].button;
  document.getElementById('konu').placeholder = texts[currentLang].placeholder;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    updateUI();
  });
});

const buton = document.getElementById('uret-hikaye');
const konuInput = document.getElementById('konu');

buton.addEventListener('click', async () => {
  buton.disabled = true;
  buton.textContent = texts[currentLang].generating;

  try {
    const konu = konuInput.value.trim();
    const hikaye = await hikayeUret(konu, currentLang);
    hikayeYaz(hikaye);
    kelimeEventiEkle(currentLang);
  } catch (err) {
    alert(texts[currentLang].error + err.message);
  }

  buton.disabled = false;
  buton.textContent = texts[currentLang].button;
});

updateUI();