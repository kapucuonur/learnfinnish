// Internationalization (i18n) Utilities

import { LANGUAGES } from '../config/constants.js';

let currentLanguage = LANGUAGES.TR;

// Update all translatable elements on the page
export function updateTranslations(lang = currentLanguage) {
    currentLanguage = lang;

    // Update title
    const titleEl = document.querySelector('title');
    if (titleEl) {
        titleEl.textContent = titleEl.dataset[lang] || titleEl.textContent;
    }

    // Update all elements with data-tr and data-en attributes
    document.querySelectorAll('[data-tr]').forEach(el => {
        const key = lang === LANGUAGES.TR ? 'tr' : 'en';
        if (el.dataset[key]) {
            el.textContent = el.dataset[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-placeholder-tr]').forEach(el => {
        const key = lang === LANGUAGES.TR ? 'placeholderTr' : 'placeholderEn';
        if (el.dataset[key]) {
            el.placeholder = el.dataset[key];
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update blog link with language parameter
    const blogLink = document.querySelector('a[href="/blog/"]');
    if (blogLink) {
        blogLink.href = `/blog/?lang=${lang}`;
    }

    // Save language preference to localStorage for blog page
    localStorage.setItem('selectedLanguage', lang);
}

// Get current language
export function getCurrentLanguage() {
    return currentLanguage;
}

// Set current language
export function setCurrentLanguage(lang) {
    if (lang === LANGUAGES.TR || lang === LANGUAGES.EN) {
        currentLanguage = lang;
        document.documentElement.lang = lang; // Update HTML lang attribute for chatbot
        updateTranslations(lang);
    }
}

// Get translated text
export function t(trText, enText) {
    return currentLanguage === LANGUAGES.TR ? trText : enText;
}
