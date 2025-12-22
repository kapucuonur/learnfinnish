export class TermsPage {
    constructor() {
        this.translations = {
            tr: {
                title: 'Kullanım Koşulları',
                lastUpdated: 'Son Güncelleme: 22 Aralık 2024',
                intro: 'LearnFinnish hizmetini kullanarak aşağıdaki kullanım koşullarını kabul etmiş olursunuz. Lütfen bu koşulları dikkatlice okuyun.',
                sections: [
                    {
                        title: '1. Hizmet Tanımı',
                        content: `
              <p>LearnFinnish, Fince öğrenmek isteyen kullanıcılara yapay zeka destekli hikayeler, flashcard sistemi ve kelime defteri gibi araçlar sunan bir eğitim platformudur.</p>
            `
                    },
                    {
                        title: '2. Kullanıcı Hesapları',
                        content: `
              <ul>
                <li>Hizmeti kullanmak için Google hesabınızla giriş yapmanız gerekmektedir</li>
                <li>Hesap bilgilerinizin güvenliğinden siz sorumlusunuz</li>
                <li>Hesabınızı başkalarıyla paylaşmamalısınız</li>
                <li>Şüpheli aktivite fark ederseniz derhal bize bildirmelisiniz</li>
              </ul>
            `
                    },
                    {
                        title: '3. Kabul Edilebilir Kullanım',
                        content: `
              <p>Hizmetimizi kullanırken aşağıdaki kurallara uymalısınız:</p>
              <ul>
                <li>Yasalara ve düzenlemelere uygun hareket etmek</li>
                <li>Diğer kullanıcıların haklarına saygı göstermek</li>
                <li>Spam, kötü amaçlı yazılım veya zararlı içerik oluşturmamak</li>
                <li>Hizmeti kötüye kullanmamak veya manipüle etmemek</li>
                <li>Telif hakkı ve fikri mülkiyet haklarına saygı göstermek</li>
              </ul>
            `
                    },
                    {
                        title: '4. Fikri Mülkiyet',
                        content: `
              <ul>
                <li>LearnFinnish platformu ve içeriği telif hakkı ile korunmaktadır</li>
                <li>Oluşturduğunuz hikayeler ve kaydettiğiniz kelimeler size aittir</li>
                <li>Platform tarafından üretilen içerik LearnFinnish\'e aittir</li>
                <li>İzinsiz kopyalama, dağıtma veya ticari kullanım yasaktır</li>
              </ul>
            `
                    },
                    {
                        title: '5. Premium Üyelik',
                        content: `
              <ul>
                <li>Premium üyelik aylık abonelik şeklinde sunulmaktadır</li>
                <li>Ödeme Stripe üzerinden güvenli şekilde işlenir</li>
                <li>Aboneliğinizi istediğiniz zaman iptal edebilirsiniz</li>
                <li>İptal sonrası mevcut dönem sonuna kadar premium özellikler aktif kalır</li>
                <li>Fiyatlar önceden bildirimle değiştirilebilir</li>
              </ul>
            `
                    },
                    {
                        title: '6. Hizmet Değişiklikleri',
                        content: `
              <p>LearnFinnish, hizmeti geliştirmek veya değiştirmek hakkını saklı tutar:</p>
              <ul>
                <li>Yeni özellikler ekleyebilir veya mevcut özellikleri değiştirebiliriz</li>
                <li>Hizmeti geçici veya kalıcı olarak durdurabilir veya sınırlayabiliriz</li>
                <li>Önemli değişiklikler hakkında kullanıcıları bilgilendiririz</li>
              </ul>
            `
                    },
                    {
                        title: '7. Sorumluluk Reddi',
                        content: `
              <ul>
                <li>Hizmet "olduğu gibi" sunulmaktadır</li>
                <li>Kesintisiz veya hatasız çalışma garantisi vermiyoruz</li>
                <li>Öğrenme sonuçları konusunda garanti veremeyiz</li>
                <li>Üçüncü taraf hizmetlerden (Firebase, Stripe, AdSense) sorumlu değiliz</li>
                <li>Kullanıcı içeriğinden sorumlu değiliz</li>
              </ul>
            `
                    },
                    {
                        title: '8. Sorumluluk Sınırlaması',
                        content: `
              <p>Yasal olarak izin verilen azami ölçüde, LearnFinnish aşağıdakilerden sorumlu tutulamaz:</p>
              <ul>
                <li>Dolaylı, arızi veya sonuç olarak ortaya çıkan zararlar</li>
                <li>Veri kaybı veya kar kaybı</li>
                <li>Hizmet kesintilerinden kaynaklanan zararlar</li>
                <li>Üçüncü taraf hizmetlerinden kaynaklanan sorunlar</li>
              </ul>
            `
                    },
                    {
                        title: '9. Hesap Askıya Alma ve Sonlandırma',
                        content: `
              <p>Aşağıdaki durumlarda hesabınızı askıya alabilir veya sonlandırabiliriz:</p>
              <ul>
                <li>Kullanım koşullarının ihlali</li>
                <li>Yasadışı faaliyetler</li>
                <li>Diğer kullanıcılara zarar verme</li>
                <li>Ödeme sorunları (premium üyelik için)</li>
              </ul>
              <p>Hesabınızı istediğiniz zaman kendiniz de silebilirsiniz.</p>
            `
                    },
                    {
                        title: '10. Uygulanacak Hukuk',
                        content: `
              <p>Bu kullanım koşulları Finlandiya yasalarına tabidir. Uyuşmazlıklar Tampere mahkemelerinde çözümlenir.</p>
            `
                    },
                    {
                        title: '11. İletişim',
                        content: `
              <p>Kullanım koşulları hakkında sorularınız için:</p>
              <ul>
                <li><strong>E-posta:</strong> kapucuonur@hotmail.com</li>
                <li><strong>Telefon:</strong> +358 44 235 9429</li>
                <li><strong>Adres:</strong> Tampere, Finland</li>
              </ul>
            `
                    }
                ]
            },
            en: {
                title: 'Terms of Service',
                lastUpdated: 'Last Updated: December 22, 2024',
                intro: 'By using the LearnFinnish service, you agree to the following terms of service. Please read these terms carefully.',
                sections: [
                    {
                        title: '1. Service Description',
                        content: `
              <p>LearnFinnish is an educational platform that provides AI-powered stories, flashcard systems, and word notebooks for users who want to learn Finnish.</p>
            `
                    },
                    {
                        title: '2. User Accounts',
                        content: `
              <ul>
                <li>You must sign in with your Google account to use the service</li>
                <li>You are responsible for the security of your account information</li>
                <li>You should not share your account with others</li>
                <li>You must notify us immediately if you notice suspicious activity</li>
              </ul>
            `
                    },
                    {
                        title: '3. Acceptable Use',
                        content: `
              <p>When using our service, you must comply with the following rules:</p>
              <ul>
                <li>Act in accordance with laws and regulations</li>
                <li>Respect the rights of other users</li>
                <li>Do not create spam, malware, or harmful content</li>
                <li>Do not abuse or manipulate the service</li>
                <li>Respect copyright and intellectual property rights</li>
              </ul>
            `
                    },
                    {
                        title: '4. Intellectual Property',
                        content: `
              <ul>
                <li>The LearnFinnish platform and content are protected by copyright</li>
                <li>Stories you create and words you save belong to you</li>
                <li>Content generated by the platform belongs to LearnFinnish</li>
                <li>Unauthorized copying, distribution, or commercial use is prohibited</li>
              </ul>
            `
                    },
                    {
                        title: '5. Premium Membership',
                        content: `
              <ul>
                <li>Premium membership is offered as a monthly subscription</li>
                <li>Payment is processed securely through Stripe</li>
                <li>You can cancel your subscription at any time</li>
                <li>After cancellation, premium features remain active until the end of the current period</li>
                <li>Prices may change with prior notice</li>
              </ul>
            `
                    },
                    {
                        title: '6. Service Changes',
                        content: `
              <p>LearnFinnish reserves the right to improve or modify the service:</p>
              <ul>
                <li>We may add new features or modify existing ones</li>
                <li>We may temporarily or permanently suspend or limit the service</li>
                <li>We will inform users about significant changes</li>
              </ul>
            `
                    },
                    {
                        title: '7. Disclaimer',
                        content: `
              <ul>
                <li>The service is provided "as is"</li>
                <li>We do not guarantee uninterrupted or error-free operation</li>
                <li>We cannot guarantee learning outcomes</li>
                <li>We are not responsible for third-party services (Firebase, Stripe, AdSense)</li>
                <li>We are not responsible for user-generated content</li>
              </ul>
            `
                    },
                    {
                        title: '8. Limitation of Liability',
                        content: `
              <p>To the maximum extent permitted by law, LearnFinnish shall not be liable for:</p>
              <ul>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Data loss or loss of profits</li>
                <li>Damages resulting from service interruptions</li>
                <li>Issues arising from third-party services</li>
              </ul>
            `
                    },
                    {
                        title: '9. Account Suspension and Termination',
                        content: `
              <p>We may suspend or terminate your account in the following cases:</p>
              <ul>
                <li>Violation of terms of service</li>
                <li>Illegal activities</li>
                <li>Harming other users</li>
                <li>Payment issues (for premium membership)</li>
              </ul>
              <p>You can also delete your account yourself at any time.</p>
            `
                    },
                    {
                        title: '10. Governing Law',
                        content: `
              <p>These terms of service are subject to Finnish law. Disputes will be resolved in Tampere courts.</p>
            `
                    },
                    {
                        title: '11. Contact',
                        content: `
              <p>For questions about the terms of service:</p>
              <ul>
                <li><strong>Email:</strong> kapucuonur@hotmail.com</li>
                <li><strong>Phone:</strong> +358 44 235 9429</li>
                <li><strong>Address:</strong> Tampere, Finland</li>
              </ul>
            `
                    }
                ]
            }
        };
    }

    render(lang = 'tr') {
        const t = this.translations[lang];

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
