// Story Display Component
import { hikayeUret } from '../services/api.js';
import { hikayeYaz, kelimeEventiEkle } from '../utils/dom.js';
import { getCurrentLang } from './LanguageSwitcher.js';
import { canGenerateStory, incrementStoryCount } from '../services/usageLimits.js';
import { showUsageLimitModal } from './UsageLimitModal.js';

export function initStoryControls() {
    const button = document.getElementById('uret-hikaye');
    const topicInput = document.getElementById('konu');

    if (!button || !topicInput) return;

    button.addEventListener('click', async () => {
        // Check usage limit before generating
        const canGenerate = await canGenerateStory();
        if (!canGenerate.allowed) {
            showUsageLimitModal('story');
            return;
        }

        const currentLang = getCurrentLang();
        button.disabled = true;
        button.textContent = currentLang === 'tr' ? 'Hikâye üretiliyor...' : 'Generating story...';

        try {
            const topic = topicInput.value.trim();
            const story = await hikayeUret(topic);
            hikayeYaz(story);
            kelimeEventiEkle(currentLang);

            // Increment usage count on successful generation
            incrementStoryCount();
            updateUsageIndicators();
        } catch (err) {
            alert(currentLang === 'tr' ? 'Hata: ' + err.message : 'Error: ' + err.message);
        }

        button.disabled = false;
        button.textContent = button.dataset[currentLang === 'tr' ? 'tr' : 'en'];
    });
}

// Update usage indicators in the UI
async function updateUsageIndicators() {
    const { getUsageStats } = await import('../services/usageLimits.js');
    const stats = await getUsageStats();

    const indicatorsEl = document.getElementById('usage-indicators');
    const storyUsageEl = document.getElementById('story-usage');
    const flashcardUsageEl = document.getElementById('flashcard-usage');

    if (!indicatorsEl || !storyUsageEl || !flashcardUsageEl) return;

    // Hide indicators for premium users
    if (stats.isPremium) {
        indicatorsEl.classList.add('hidden');
        return;
    }

    // Show indicators for free users
    indicatorsEl.classList.remove('hidden');

    // Update story usage
    const storyStrong = storyUsageEl.querySelector('strong');
    if (storyStrong) {
        storyStrong.textContent = `${stats.stories.used}/${stats.stories.limit}`;
    }

    // Update flashcard usage
    const flashcardStrong = flashcardUsageEl.querySelector('strong');
    if (flashcardStrong) {
        flashcardStrong.textContent = `${stats.flashcards.used}/${stats.flashcards.limit}`;
    }
}

// Export for use in main.js
export { updateUsageIndicators };
