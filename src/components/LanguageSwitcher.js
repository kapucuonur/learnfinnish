// Language Switcher Component
import { setCurrentLanguage, getCurrentLanguage } from '../utils/i18n.js';
import { defterSayisiniGuncelle } from '../services/storage.js';

export function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setCurrentLanguage(lang);
            defterSayisiniGuncelle();
        });
    });
}

export function getCurrentLang() {
    return getCurrentLanguage();
}
