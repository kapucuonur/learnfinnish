# LearnFinnish - Learn Finnish Through Stories 🇫🇮

Modern, responsive web application for learning Finnish vocabulary through interactive short stories.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 🌐 Live Demo

- **Custom Domain**: https://www.learn-finnish.fi/
- **Vercel URL**: https://learnfinnish.vercel.app

## 📸 Screenshots

### Main Interface

![Main Application Interface](screenshots/maininterface.png)
_Clean, modern interface with gradient background and story generation controls_

### Interactive Vocabulary Translation

![Interactive Vocabulary Feature](screenshots/vocabulary.png)
_Click any Finnish word to see instant translation with pronunciation and save options_

### Word Notebook

![Word Notebook Management](screenshots/myWordsNoteBook.png)
_Save and manage your learned vocabulary with audio playback_

### Bilingual Support

![English Interface](screenshots/flashCardPractice.png)
_Seamless language Flashcard switching between Finnish to Turkish and English_

### Premium Features

![Premium Subscription](screenshots/chatbot.png)
_Unlock unlimited stories, flashcards, and ad-free , catbot experience_

### Mobile Responsive Design

![Mobile View](screenshots/mobileResponsive.png)
_Fully responsive design optimized for all devices_

## 🌟 Features

### Core Features

- 📚 **AI-Generated Stories** - Create personalized Finnish stories on any topic
- � **Sample Stories** - 10 ready-made B1-level Finnish stories with interactive features
- 📝 **Educational Blog** - 5 comprehensive articles (3000+ words) covering Finnish learning essentials
- � **Context-Aware Translation** - Click any word for intelligent translation based on sentence context
- 📖 **Word Notebook** - Save and manage your learned vocabulary
- 🎴 **Flashcard Practice** - Study saved words with interactive flashcards
- 💬 **Help Chatbot** - Get instant assistance while learning
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🌐 **Bilingual Support** - Turkish and English interface
- 📄 **Legal Pages** - Complete About, Contact, Privacy Policy, and Terms of Service
- 📱 **Progressive Web App** - Install and use offline
- 🎨 **Responsive Design** - Optimized for mobile, tablet, and desktop

### Sample Stories (New!)

10 interactive B1-level Finnish stories covering:
- Finnish culture (Sauna, Traditions)
- Seasons (Winter, Autumn, Summer)
- Daily life (Shopping, Work, Coffee breaks)
- Family celebrations
- Nature and outdoor activities

Each story features:
- Word-by-word translation
- Add to notebook functionality
- Flashcard integration
- ~200 words of authentic Finnish text

### Educational Blog (New!)

5 SEO-optimized articles covering:
1. **Finnish Alphabet & Pronunciation** - Complete guide to Finnish sounds
2. **Essential Vocabulary** - 100+ must-know Finnish words
3. **Grammar Basics** - Understanding Finnish case system (15 cases)
4. **Daily Phrases** - Practical expressions for everyday situations
5. **Culture & Learning Tips** - Finnish culture and effective learning strategies

### Premium Features

- 🔊 **Text-to-Speech** - Listen to stories and words in Finnish
- ♾️ **Unlimited Notebook** - Save unlimited words (free: 50 words)
- 📚 **Extended Stories** - Access longer and more complex stories
- 🚫 **Ad-Free Experience** - Enjoy learning without interruptions

### Authentication & Payment

- 🔐 **Google Sign-In** - Secure authentication with Firebase
- 💳 **Stripe Integration** - Safe and easy premium subscription
- 👤 **User Profiles** - Personalized learning experience

## 🏗️ Architecture

### Professional `/src` Structure

```
/
├── /blog                # SEO-optimized blog articles
│   ├── index.html
│   ├── blog-styles.css
│   ├── fince-alfabe-telaffuz.html
│   ├── temel-fince-kelimeler.html
│   ├── fince-gramer-durum-ekleri.html
│   ├── gunluk-fince-ifadeler.html
│   └── finlandiya-kulturu-dil.html
├── /src
│   ├── /assets          # Static assets (images, icons, fonts)
│   ├── /components      # Reusable UI components (10 total)
│   │   ├── AuthSection.js
│   │   ├── Chatbot.js
│   │   ├── Flashcard.js
│   │   ├── LanguageSwitcher.js
│   │   ├── PremiumCard.js
│   │   ├── PWAInstall.js
│   │   ├── StoryDisplay.js
│   │   ├── ThemeToggle.js
│   │   ├── UsageLimitModal.js
│   │   └── WordNotebook.js
│   ├── /config          # Configuration files
│   │   ├── constants.js
│   │   └── firebase.js
│   ├── /data            # Story data (New!)
│   │   └── sampleStories.js
│   ├── /pages           # Legal & informational pages
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Privacy.js
│   │   └── Terms.js
│   ├── /services        # Business logic & API calls (6 total)
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── chatbot.js
│   │   ├── payment.js
│   │   ├── storage.js
│   │   └── theme.js
│   ├── /styles          # Modular CSS with design system
│   │   ├── main.css
│   │   ├── variables.css
│   │   ├── reset.css
│   │   ├── responsive.css
│   │   ├── /components
│   │   │   ├── sample-stories.css (New!)
│   │   │   └── ...
│   │   └── /layouts
│   ├── /utils           # Helper functions
│   │   ├── dom.js
│   │   └── i18n.js
│   ├── router.js        # SPA routing for pages
│   ├── sampleStoriesLoader.js  # Sample stories loader (New!)
│   └── main.js          # Application entry point
├── sitemap.xml          # SEO sitemap (New!)
├── robots.txt           # Search engine instructions (New!)
└── index.html           # Main entry point
```

### Design System

- **Mobile-First**: Responsive breakpoints (640px, 768px, 1024px)
- **CSS Variables**: Centralized design tokens
- **Touch-Friendly**: Minimum 44px touch targets
- **Accessible**: Focus-visible states and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Modern web browser with JavaScript enabled
- Python 3 (for local development server)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/learnfinnish.git
   cd learnfinnish
   ```

2. **Start local server**

   ```bash
   ./start-server.sh
   # or
   python3 -m http.server 8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Backend Setup (Optional - for payment features)

Only needed if you want to enable premium subscription features:

```bash
npm install
```

Required environment variables (see [STRIPE_SETUP.md](STRIPE_SETUP.md)):

- `STRIPE_SECRET_KEY`
- `STRIPE_PRICE_ID`
- `STRIPE_WEBHOOK_SECRET`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

## 📦 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - Automatic deployment on push

The app is configured for Vercel with:

- Serverless API functions in `/api`
- Automatic HTTPS
- CDN distribution
- Environment variable support

## 🛠️ Tech Stack

### Frontend

- **Vanilla JavaScript** (ES6 modules)
- **CSS3** (Custom properties, Grid, Flexbox)
- **Firebase SDK** (Authentication, Firestore)
- **Stripe.js** (Payment processing)
- **SPA Router** (Client-side routing for legal pages)
- **LocalStorage** (Theme persistence, word notebook)

### Backend (Serverless)

- **Vercel Functions** (Node.js)
- **Stripe API** (Subscription management)
- **Firebase Admin SDK** (User management)

### APIs

- **Google Gemini API** - Story generation
- **Google Translate API** - Context-aware word translation

### Monetization

- **Google AdSense** - Ad integration for free tier users
- **Educational Content** - Blog articles and sample stories for SEO and user value

## 📱 Progressive Web App

Install LearnFinnish on your device:

- **Mobile**: Tap "Add to Home Screen"
- **Desktop**: Click install icon in address bar
- **Offline**: Access saved stories and notebook

Features:

- Service Worker caching
- Offline functionality
- App-like experience
- Fast loading

## 🎨 Design Highlights

- **Dark Mode Support** - Seamless light/dark theme switching with persistence
- **Gradient Background** - Soothing blue gradient (light) / deep teal (dark)
- **Card-Based Layout** - Clean, modern interface
- **Smooth Animations** - Micro-interactions for better UX
- **Interactive Chatbot** - Floating help button with elegant chat interface
- **Responsive Typography** - Scales with screen size
- **Touch Optimization** - Perfect for mobile devices

## 📄 License

This project is licensed under the MIT License - see the [LICENCE](LICENCE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

## 🙏 Acknowledgments

- Finnish language learning community
- Google Gemini API for story generation
- Firebase for authentication infrastructure
- Stripe for payment processing

---

**Made with ❤️ for Finnish language learners**
