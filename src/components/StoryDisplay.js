// Story Display Component
import { hikayeUret } from '../services/api.js';
import { hikayeYaz, kelimeEventiEkle } from '../utils/dom.js';
import { getCurrentLang } from './LanguageSwitcher.js';

export function initStoryControls() {
    const button = document.getElementById('uret-hikaye');
    const topicInput = document.getElementById('konu');

    if (!button || !topicInput) return;

    button.addEventListener('click', async () => {
        const currentLang = getCurrentLang();
        button.disabled = true;
        button.textContent = currentLang === 'tr' ? 'Hikâye üretiliyor...' : 'Generating story...';

        try {
            const topic = topicInput.value.trim();
            const story = await hikayeUret(topic);
            hikayeYaz(story);
            kelimeEventiEkle(currentLang);
        } catch (err) {
            alert(currentLang === 'tr' ? 'Hata: ' + err.message : 'Error: ' + err.message);
        }

        button.disabled = false;
        button.textContent = button.dataset[currentLang === 'tr' ? 'tr' : 'en'];
    });
}
