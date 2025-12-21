# LearnFinnish - Stripe Payment Integration Setup

Bu dosya, Stripe ödeme sistemini kurmak için gerekli adımları içerir.

## 1. Stripe Hesabı ve API Keys

1. [Stripe Dashboard](https://dashboard.stripe.com/register)'a gidin ve hesap oluşturun
2. Test mode'da olduğunuzdan emin olun (sol üst köşede "Test mode" yazmalı)
3. **Developers > API keys** bölümüne gidin
4. Aşağıdaki key'leri kopyalayın:
   - **Publishable key** (pk*test*...)
   - **Secret key** (sk*test*...)

## 2. Product ve Price Oluşturma

1. **Products** bölümüne gidin
2. **+ Add product** butonuna tıklayın
3. Ürün bilgilerini girin:
   - **Name**: LearnFinnish Premium
   - **Description**: Premium subscription for LearnFinnish
4. **Pricing** bölümünde:
   - **Pricing model**: Recurring
   - **Price**: 49 TRY veya 4.99 USD (tercih ettiğiniz para birimi)
   - **Billing period**: Monthly
5. **Save product** butonuna tıklayın
6. Oluşturulan **Price ID**'yi kopyalayın (price\_...)

## 3. Webhook Kurulumu

1. **Developers > Webhooks** bölümüne gidin
2. **+ Add endpoint** butonuna tıklayın
3. **Endpoint URL**: `https://learnfinnish.vercel.app/api/webhook`
4. **Events to send** bölümünde şu event'leri seçin:
   - `checkout.session.completed`
   - `customer.subscription.deleted`
   - `customer.subscription.updated`
5. **Add endpoint** butonuna tıklayın
6. **Signing secret**'i kopyalayın (whsec\_...)

## 4. Firebase Admin SDK Setup

1. [Firebase Console](https://console.firebase.google.com/)'a gidin
2. Projenizi seçin
3. **Project Settings** (⚙️) > **Service Accounts** sekmesine gidin
4. **Generate new private key** butonuna tıklayın
5. İndirilen JSON dosyasından şu bilgileri alın:
   - `project_id`
   - `client_email`
   - `private_key`

## 5. Vercel Environment Variables

1. [Vercel Dashboard](https://vercel.com/dashboard)'a gidin
2. Projenizi seçin
3. **Settings > Environment Variables** bölümüne gidin
4. Aşağıdaki değişkenleri ekleyin:

```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
NEXT_PUBLIC_URL=https://learnfinnish.vercel.app
```

5. **Save** butonuna tıklayın
6. Projeyi yeniden deploy edin

## 6. Test Etme

1. Uygulamayı açın: https://learnfinnish.vercel.app/
2. Google ile giriş yapın
3. "Premium Ol" butonuna tıklayın
4. Stripe checkout sayfasına yönlendirileceksiniz
5. Test kartı kullanın:
   - **Card number**: 4242 4242 4242 4242
   - **Expiry**: Gelecekte herhangi bir tarih
   - **CVC**: Herhangi 3 rakam
   - **ZIP**: Herhangi 5 rakam
6. Ödeme tamamlandıktan sonra success mesajı göreceksiniz

## Notlar

- Şu anda **test mode**'dasınız, gerçek para çekilmeyecek
- Production'a geçmek için Stripe'da live mode'a geçip yeni API key'ler almanız gerekecek
- Webhook'ların çalıştığını test etmek için Stripe CLI kullanabilirsiniz
