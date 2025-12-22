// Usage Limit Modal Component
import { createCheckoutSession } from '../services/payment.js';
import { getCurrentLang } from './LanguageSwitcher.js';

let modalElement = null;

// Create modal HTML
function createModal() {
    const modal = document.createElement('div');
    modal.id = 'usage-limit-modal';
    modal.className = 'usage-limit-modal hidden';

    modal.innerHTML = `
    <div class="usage-limit-overlay"></div>
    <div class="usage-limit-content">
      <div class="usage-limit-icon">⚠️</div>
      <h2 id="limit-modal-title" data-tr="Günlük Limit Doldu" data-en="Daily Limit Reached">
        Günlük Limit Doldu
      </h2>
      <p id="limit-modal-message" data-tr="Ücretsiz kullanıcılar için günlük limit doldu." 
         data-en="Daily limit reached for free users.">
        Ücretsiz kullanıcılar için günlük limit doldu.
      </p>
      
      <div class="premium-benefits">
        <h3 data-tr="Premium ile sınırsız kullanım!" data-en="Unlimited with Premium!">
          Premium ile sınırsız kullanım!
        </h3>
        <ul>
          <li data-tr="✓ Sınırsız hikaye üretimi" data-en="✓ Unlimited story generation">
            ✓ Sınırsız hikaye üretimi
          </li>
          <li data-tr="✓ Sınırsız flashcard çalışması" data-en="✓ Unlimited flashcard practice">
            ✓ Sınırsız flashcard çalışması
          </li>
          <li data-tr="✓ Sesli okuma özelliği" data-en="✓ Text-to-speech feature">
            ✓ Sesli okuma özelliği
          </li>
          <li data-tr="✓ Reklamsız deneyim" data-en="✓ Ad-free experience">
            ✓ Reklamsız deneyim
          </li>
        </ul>
      </div>
      
      <div class="modal-buttons">
        <button id="upgrade-now-btn" class="btn-upgrade" 
                data-tr="Premium Ol (Aylık 49 TL)" 
                data-en="Go Premium (Monthly $4.99)">
          Premium Ol (Aylık 49 TL)
        </button>
        <button id="maybe-later-btn" class="btn-secondary" 
                data-tr="Belki Sonra" 
                data-en="Maybe Later">
          Belki Sonra
        </button>
      </div>
    </div>
  `;

    document.body.appendChild(modal);
    return modal;
}

// Show the modal with custom message
export function showUsageLimitModal(type = 'story') {
    if (!modalElement) {
        modalElement = createModal();
    }

    const currentLang = getCurrentLang();
    const messageEl = document.getElementById('limit-modal-message');

    // Set appropriate message based on type
    if (type === 'story') {
        messageEl.setAttribute('data-tr', 'Bugün için hikaye üretim limitiniz doldu. Yarın tekrar deneyin veya Premium olun!');
        messageEl.setAttribute('data-en', 'Your daily story generation limit is reached. Try again tomorrow or go Premium!');
        messageEl.textContent = currentLang === 'tr'
            ? 'Bugün için hikaye üretim limitiniz doldu. Yarın tekrar deneyin veya Premium olun!'
            : 'Your daily story generation limit is reached. Try again tomorrow or go Premium!';
    } else if (type === 'flashcard') {
        messageEl.setAttribute('data-tr', 'Bugün için flashcard limitiniz doldu. Yarın tekrar deneyin veya Premium olun!');
        messageEl.setAttribute('data-en', 'Your daily flashcard limit is reached. Try again tomorrow or go Premium!');
        messageEl.textContent = currentLang === 'tr'
            ? 'Bugün için flashcard limitiniz doldu. Yarın tekrar deneyin veya Premium olun!'
            : 'Your daily flashcard limit is reached. Try again tomorrow or go Premium!';
    }

    modalElement.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    // Setup event listeners
    setupModalListeners();
}

// Hide the modal
export function hideUsageLimitModal() {
    if (modalElement) {
        modalElement.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Setup event listeners for modal buttons
function setupModalListeners() {
    const upgradeBtn = document.getElementById('upgrade-now-btn');
    const laterBtn = document.getElementById('maybe-later-btn');
    const overlay = modalElement.querySelector('.usage-limit-overlay');

    // Remove old listeners by cloning
    const newUpgradeBtn = upgradeBtn.cloneNode(true);
    const newLaterBtn = laterBtn.cloneNode(true);
    upgradeBtn.replaceWith(newUpgradeBtn);
    laterBtn.replaceWith(newLaterBtn);

    // Upgrade button
    newUpgradeBtn.addEventListener('click', async () => {
        const currentLang = getCurrentLang();
        hideUsageLimitModal();

        // Trigger payment flow
        const result = await createCheckoutSession(currentLang);
        if (!result.success) {
            alert(result.error);
        }
    });

    // Maybe later button
    newLaterBtn.addEventListener('click', () => {
        hideUsageLimitModal();
    });

    // Click overlay to close
    overlay.addEventListener('click', () => {
        hideUsageLimitModal();
    });
}

// Initialize modal (create it but keep hidden)
export function initUsageLimitModal() {
    if (!modalElement) {
        modalElement = createModal();
    }
}
