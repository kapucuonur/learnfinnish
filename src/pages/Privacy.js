export class PrivacyPage {
  constructor() {
    this.translations = {
      en: {
        // BAŞLIK GÜNCELLENDİ: Sadece "Privacy" değil, "Privacy Policy" yapıldı.
        title: 'Privacy Policy',
        lastUpdated: 'Last Updated: December 22, 2024',
        intro: 'At LearnFinnish ("we", "our", or "us"), we are committed to protecting the privacy of our users. This privacy policy explains how we collect, use, and protect your personal data when you visit our website learn-finnish.fi.',
        sections: [
          {
            title: '1. Information We Collect',
            content: `
              <p>When using LearnFinnish, we may collect the following information:</p>
              <ul>
                <li><strong>Account Information:</strong> Your name and email address when you sign in with your Google account.</li>
                <li><strong>Usage Data:</strong> Stories you create, words you save, and your learning progress.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage statistics.</li>
                <li><strong>Cookies:</strong> We use cookies for session management and to improve user experience.</li>
              </ul>
            `
          },
          {
            title: '2. How We Use Your Information',
            content: `
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li>To provide and improve our services.</li>
                <li>To offer personalized learning experiences.</li>
                <li>To manage and secure user accounts.</li>
                <li>To provide technical support.</li>
                <li>To conduct usage analytics and improve service quality.</li>
                <li>To fulfill our legal obligations.</li>
                <li>To display personalized advertisements via Google AdSense.</li>
              </ul>
            `
          },
          {
            title: '3. Information Sharing',
            content: `
              <p>We do not share your personal information with third parties. However, information sharing may be necessary in the following cases:</p>
              <ul>
                <li><strong>Service Providers:</strong> Firebase (authentication and database), Stripe (payment processing).</li>
                <li><strong>Advertising Partners:</strong> We use <strong>Google AdSense</strong> to show ads. Google may use cookies to serve ads based on your prior visits to our website or other websites.</li>
                <li><strong>Legal Requirements:</strong> Legal processes or requests from public authorities.</li>
                <li><strong>Business Transfer:</strong> In case of merger, acquisition, or asset sale.</li>
              </ul>
            `
          },
          {
            title: '4. Data Security',
            content: `
              <p>We use industry-standard security measures to protect your personal data:</p>
              <ul>
                <li>Secure data transmission with SSL/TLS encryption.</li>
                <li>Database protection with Firebase security rules.</li>
                <li>Regular security updates and monitoring.</li>
                <li>Limited access controls.</li>
              </ul>
            `
          },
          {
            title: '5. Cookies and Google AdSense',
            // BU KISIM ADSENSE İÇİN ÇOK ÖNEMLİ, GÜNCELLENDİ:
            content: `
              <p>We use the following types of cookies on our site:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for session management and basic functionality.</li>
                <li><strong>Analytics Cookies:</strong> To understand and improve site usage.</li>
                <li><strong>Advertising Cookies (Google AdSense):</strong> Google uses cookies (including the DoubleClick DART cookie) to serve ads based on user visits to this site.</li>
              </ul>
              <p>Users may opt out of the use of the DART cookie by visiting the <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">Google Ad Settings</a> page.</p>
              <p>You can manage other cookies through your browser settings.</p>
            `
          },
          {
            title: '6. User Rights',
            content: `
              <p>Under GDPR, you have the following rights:</p>
              <ul>
                <li><strong>Right to Access:</strong> You can request access to your personal data.</li>
                <li><strong>Right to Rectification:</strong> You can request correction of incorrect or incomplete information.</li>
                <li><strong>Right to Erasure:</strong> You can request deletion of your account and data.</li>
                <li><strong>Right to Object:</strong> You can object to data processing activities.</li>
                <li><strong>Right to Data Portability:</strong> You can request your data in a structured format.</li>
              </ul>
              <p>To exercise these rights, please contact us at kapucuonur@hotmail.com.</p>
            `
          },
          {
            title: '7. Children\'s Privacy',
            content: `
              <p>Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and become aware that your child has provided us with personal information, please contact us.</p>
            `
          },
          {
            title: '8. Third-Party Links',
            content: `
              <p>Our site may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We recommend reading their privacy policies when visiting other sites.</p>
            `
          },
          {
            title: '9. Policy Changes',
            content: `
              <p>We may update this privacy policy from time to time. We will notify you of significant changes. We recommend reviewing the policy regularly.</p>
            `
          },
          {
            title: '10. Contact',
            content: `
              <p>If you have questions about our privacy policy, you can contact us:</p>
              <ul>
                <li><strong>Email:</strong> kapucuonur@hotmail.com</li>
                <li><strong>Address:</strong> Tampere, Finland</li>
              </ul>
            `
          }
        ]
      }
    };
  }

  render() {
    const t = this.translations['en'];

    return `
      <div class="legal-page">
        <div class="legal-header">
          <h1>${t.title}</h1>
          <p class="legal-date">${t.lastUpdated}</p>
        </div>

        <div class="legal-content">
          <section class="legal-section">
            <p class="legal-intro">${t.intro}</p>
          </section>

          ${t.sections.map(section => `
            <section class="legal-section">
              <h2>${section.title}</h2>
              ${section.content}
            </section>
          `).join('')}
        </div>
      </div>
    `;
  }
}
