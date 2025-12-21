// Premium Card Component
import { createCheckoutSession } from '../services/payment.js';
import { getCurrentLang } from './LanguageSwitcher.js';

export function initPremiumCard() {
    const premiumBtn = document.getElementById('premium-btn');

    if (!premiumBtn) return;

    premiumBtn.onclick = async () => {
        const currentLang = getCurrentLang();
        const originalText = premiumBtn.textContent;
        premiumBtn.disabled = true;
        premiumBtn.textContent = currentLang === 'tr' ? 'Yükleniyor...' : 'Loading...';

        const result = await createCheckoutSession(currentLang);

        if (!result.success) {
            alert(result.error);
            premiumBtn.disabled = false;
            premiumBtn.textContent = originalText;
        }
        // If successful, user will be redirected to Stripe checkout
    };
}
