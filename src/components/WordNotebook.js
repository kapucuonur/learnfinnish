// Word Notebook Component
import { defteriListele, defteriTemizle } from '../services/storage.js';
import { getCurrentLang } from './LanguageSwitcher.js';

export function initTabs() {
    const hikayeTab = document.getElementById('tab-hikaye');
    const defterTab = document.getElementById('tab-defter');
    const hikayeArea = document.getElementById('hikaye-alani');
    const defterArea = document.getElementById('defter-alani');

    if (!hikayeTab || !defterTab) return;

    hikayeTab.addEventListener('click', () => {
        hikayeTab.classList.add('active');
        defterTab.classList.remove('active');
        hikayeArea.style.display = 'block';
        defterArea.classList.add('hidden');
    });

    defterTab.addEventListener('click', () => {
        defterTab.classList.add('active');
        hikayeTab.classList.remove('active');
        hikayeArea.style.display = 'none';
        defterArea.classList.remove('hidden');
        defteriListele();
    });
}

export function initNotebookClear() {
    const clearButton = document.getElementById('defter-temizle');

    if (!clearButton) return;

    clearButton.addEventListener('click', () => {
        const currentLang = getCurrentLang();
        const confirmMsg = currentLang === 'tr'
            ? 'Defterdeki tüm kelimeleri silmek istediğine emin misin?'
            : 'Are you sure you want to clear all words from your notebook?';

        if (confirm(confirmMsg)) {
            defteriTemizle();
            defteriListele();
        }
    });
}
