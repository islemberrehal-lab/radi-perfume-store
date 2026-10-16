# L'ÉLIXIR | Luxury E-Commerce Perfume Store Front-End

A complete, high-end front-end for an authentic perfume e-commerce store built with **React**, **Tailwind CSS**, and **Lucide Icons**. Designed with a dark mode aesthetic (`#0B0B0C` deep black, `#C9A66B` warm gold accent, `#F5EFE6` ivory typography) with complete Arabic RTL and English/French LTR multilingual support.

---

## ✨ Features

- **Luxury Aesthetic**:
  - Deep black (`#0B0B0C`) background with warm gold (`#C9A66B`) accents and ivory (`#F5EFE6`) text.
  - Serif typography (*Playfair Display* & *Cormorant Garamond*) for headlines and *Inter* for clean body text.
  - Arabic typography (*Cairo* & *Amiri*) with native `dir="rtl"` layout switching.
  - Frosted glass cards, 16px rounded corners, thin gold borders, and soft glow transitions on hover.

- **Multilingual & RTL Support**:
  - One-click language switcher in the Navbar: **العربية (AR)**, **Français (FR)**, and **English (EN)**.
  - Dynamic `dir="rtl"` and `dir="ltr"` document-level switching with mirrored layouts and animations.
  - All prices presented in **DZD (Algerian Dinar / د.ج / DA)**.

- **Modular Reusable Components**:
  - `Navbar`: Sticky blurred glass navigation with logo emblem, search bar, language switcher, animated wishlist counter, and cart drawer trigger.
  - `Hero`: Large perfume bottle presentation, headline *"Authentic Fragrances, Delivered"*, primary *"Shop Now"* CTA, and trust badges:
    - *100% Original Guarantee* (verified batch codes & factory seals)
    - *Cash on Delivery* (inspect package before payment)
    - *Fast 58 Wilayas Delivery* (24h to 48h door delivery)
  - `BrandStrip`: Prestigious perfume houses (*Chanel, Dior, Tom Ford, Creed, MFK, Parfums de Marly, Kilian Paris, Giorgio Armani, Lancôme, YSL*) with direct 1-click filtering.
  - `CategoryRow`: *Pour Homme (Men)*, *Pour Femme (Women)*, *Collection Mixte (Unisex)*, and *Coffrets Prestige (Gift Sets)* with photographic backgrounds and item counts.
  - `ProductCard`: Glass card with zoom on hover, wishlist heart toggle, discount badges (`-20%`), authentic origin badge, star rating, and quick "Add to Cart" feedback.
  - `ProductGrid`: Responsive layout (1 to 4 columns) with skeleton loading placeholders and empty states.
  - `ProductDetails`: Multi-image gallery with thumbnail switcher, dynamic size selector (30ml / 50ml / 100ml) with reactive price recalculation, fragrance notes pyramid (Top, Heart, Base notes), quantity stepper, and quick COD checkout.
  - `CartDrawer`: Slide-in cart with quantity controls, free shipping threshold progress bar, subtotal in DZD, and proceed to checkout CTA.
  - `CheckoutModal`: Specialized Algerian **Cash on Delivery (الدفع عند الاستلام)** form with:
    - Customer full name
    - Algerian phone number validation (`05 / 06 / 07...`)
    - 58 Algerian Wilayas dropdown with automated delivery fee and transit times calculation
    - Commune and street address inputs
    - Golden confetti celebration and order confirmation screen with order ID.
  - `WishlistDrawer`: Slide-in drawer to manage saved perfumes.
  - `PromoBanner`: VIP privileges offer banner with discovery sample vials.
  - `Reviews`: Verified customer testimonials with star ratings from Algerian cities.
  - `Newsletter`: VIP Club subscription with instant 10% voucher confirmation.
  - `Footer`: Luxury footer with brand story, WhatsApp concierge hotline, 58 wilayas coverage, and payment badges.

- **Mock Data (`src/data/products.js`)**:
  - 14 authentic luxury niche & designer fragrances with complete olfactory pyramids, batch codes, sizes, pricing in DZD, ratings, and high-res imagery.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v18+ (tested on Node.js v24)
- **npm** or **pnpm** or **yarn**

### 2. Installation & Running

Navigate to the project folder:
```bash
cd luxe-parfums
```

Install dependencies:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```

The app will run locally at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
luxe-parfums/
├── index.html                 # HTML template with Google Fonts (Playfair, Cormorant, Inter, Cairo)
├── package.json               # Dependencies (React 19, Tailwind CSS, lucide-react, canvas-confetti)
├── tailwind.config.js         # Custom luxury dark palette, gold shades, serif fonts, animations
├── postcss.config.js          # PostCSS configuration
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Main application controller with view routing & state
│   ├── index.css              # Global styles, glass effects, gold gradients, RTL rules
│   ├── data/
│   │   ├── products.js        # 14 authentic luxury perfumes, brands, categories & reviews
│   │   ├── wilayas.js         # 58 Algerian Wilayas with delivery fees & times
│   │   └── translations.js    # Complete FR, EN, AR dictionaries
│   ├── utils/
│   │   └── formatters.js      # DZD price formatting & Tailwind clsx/merge utility
│   └── components/
│       ├── Navbar.jsx         # Header with language switcher, counters, search & drawer
│       ├── Hero.jsx           # Hero banner with bottle showcase & trust badges
│       ├── BrandStrip.jsx     # Luxury brand list with click-to-filter
│       ├── CategoryRow.jsx    # Men, Women, Unisex, Gift Sets cards
│       ├── ProductCard.jsx    # Glass perfume card with wishlist heart & discount tags
│       ├── ProductGrid.jsx    # Responsive grid with skeleton loaders
│       ├── SkeletonCard.jsx   # Shimmering luxury dark placeholder
│       ├── ProductDetails.jsx # Detailed modal: gallery, notes pyramid, size switcher
│       ├── CartDrawer.jsx     # Slide-in cart with free delivery progress
│       ├── CheckoutModal.jsx  # Cash on Delivery checkout with 58 wilayas & confetti
│       ├── WishlistDrawer.jsx # Slide-in drawer for favorited perfumes
│       ├── ShopView.jsx       # Shop catalog with brand/gender/price/size filters
│       ├── Reviews.jsx        # Verified customer testimonials
│       ├── PromoBanner.jsx    # Privilege offer banner
│       ├── Newsletter.jsx     # Connoisseur circle email signup
│       └── Footer.jsx         # Luxury footer with WhatsApp contact & guarantees
```

---

## 🎨 Theme & Colors

| Element | Color Code | Tailwind Class / Style |
|---|---|---|
| Background | `#0B0B0C` | `bg-[#0B0B0C]` / `bg-background` |
| Primary Gold Accent | `#C9A66B` | `text-gold` / `border-gold` / `btn-gold` |
| Light Gold Glow | `#DFBE85` | `shadow-gold-md` |
| Primary Text (Ivory) | `#F5EFE6` | `text-ivory` |
| Secondary Text | `#9CA3AF` | `text-luxury-gray` |
| Glass Border | `rgba(201,166,107,0.18)` | `.glass-card` / `.glass-panel` |
| Card Radius | `16px` | `rounded-2xl` |

---

## 📦 Algerian Wilayas & COD

The checkout form includes all **58 Algerian Wilayas** with custom delivery charges and transit estimates (e.g., Alger 400 DZD in 24h, Oran/Constantine/Sétif 600 DZD in 24-48h, South wilayas 800-1100 DZD in 48-72h). Orders exceeding **35,000 DZD** automatically unlock **Free Shipping**.
