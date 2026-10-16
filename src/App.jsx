import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStrip from './components/BrandStrip';
import CategoryRow from './components/CategoryRow';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import WishlistDrawer from './components/WishlistDrawer';
import ShopView from './components/ShopView';
import Reviews from './components/Reviews';
import PromoBanner from './components/PromoBanner';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import { PRODUCTS } from './data/products';
import { TRANSLATIONS } from './data/translations';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  // Theme State with localStorage persistence (Default: 'noir-gold', supports 'radi-fragrance', etc.)
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      return localStorage.getItem('luxe_theme') || 'noir-gold';
    } catch {
      return 'noir-gold';
    }
  });

  // Multilingual State: 'fr' | 'ar' | 'en'
  const [lang, setLang] = useState('fr');

  // Navigation State
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'shop'
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState(null);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Drawers State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Cart State (loaded from localStorage if present)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State (product IDs)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_wishlist');
      return saved ? JSON.parse(saved) : ['baccarat-rouge-540', 'delina-exclusif'];
    } catch {
      return ['baccarat-rouge-540', 'delina-exclusif'];
    }
  });

  // Keep HTML lang and dir synchronized for RTL layout
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Synchronize data-theme on <html> for CSS variable themes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    try {
      localStorage.setItem('luxe_theme', currentTheme);
    } catch (e) {
      // Ignore
    }
  }, [currentTheme]);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('luxe_cart', JSON.stringify(cart));
    } catch (e) {
      // Ignore
    }
  }, [cart]);

  // Persist wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('luxe_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      // Ignore
    }
  }, [wishlist]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  // Cart calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + (item.selectedSize?.price || item.price) * item.quantity,
    0
  );

  // Cart Handlers
  const handleAddToCart = (product, sizeObj, qty = 1) => {
    const selectedSize = sizeObj || { ml: product.size, price: product.price };
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.id === product.id && (item.selectedSize?.ml || item.size) === selectedSize.ml
      );

      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += qty;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            brand: product.brand,
            image: product.image,
            price: selectedSize.price,
            size: product.size,
            selectedSize: selectedSize,
            concentration: product.concentration,
            quantity: qty,
          },
        ];
      }
    });
  };

  const handleUpdateCartQuantity = (productId, ml, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        const itemMl = item.selectedSize?.ml || item.size;
        if (item.id === productId && itemMl === ml) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleRemoveFromCart = (productId, ml) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === productId && (item.selectedSize?.ml || item.size) === ml)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  // Navigation Handler
  const handleNavigate = (view, options = {}) => {
    setCurrentView(view);
    if (options.category) {
      setSelectedCategoryFilter(options.category);
    } else {
      setSelectedCategoryFilter(null);
    }
    if (options.brand) {
      setSelectedBrandFilter(options.brand);
    } else {
      setSelectedBrandFilter(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Best Sellers Filtered Products for Home
  const bestSellerProducts = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 8);

  // Wishlist Products Object Array
  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-background text-ivory flex flex-col font-sans transition-colors duration-300">
      
      {/* Sticky Luxury Navbar with Theme Switcher */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        lang={lang}
        onLanguageChange={setLang}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />

      {/* Main Content Router */}
      <main className="flex-1 pb-16 lg:pb-0">
        {currentView === 'home' ? (
          <>
            {/* Hero Section */}
            <Hero
              onShopNow={() => handleNavigate('shop')}
              onExploreNiche={() => handleNavigate('shop', { category: 'Unisex' })}
              lang={lang}
            />

            {/* Brand Strip */}
            <BrandStrip
              onSelectBrand={(brandName) => handleNavigate('shop', { brand: brandName })}
              lang={lang}
            />

            {/* Category Row (Men, Women, Unisex, Gift Sets) */}
            <CategoryRow
              onSelectCategory={(catId) => handleNavigate('shop', { category: catId })}
              lang={lang}
            />

            {/* Best Sellers Grid */}
            <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.bestSellers.tag}</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide">
                    {t.bestSellers.title}
                  </h2>
                </div>

                <button
                  onClick={() => handleNavigate('shop')}
                  className="btn-gold-outline px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center gap-2 self-start sm:self-auto"
                >
                  <span>{t.bestSellers.viewAll}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>

              <ProductGrid
                products={bestSellerProducts}
                onSelectProduct={setSelectedProduct}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlist={wishlist}
                lang={lang}
                columns={4}
              />
            </section>

            {/* Privilege Promotional Banner */}
            <PromoBanner
              onClaimOffer={() => handleNavigate('shop')}
              lang={lang}
            />

            {/* Customer Testimonials & Reviews */}
            <Reviews lang={lang} />

            {/* VIP Club Newsletter */}
            <Newsletter lang={lang} />
          </>
        ) : (
          /* Shop Catalog View */
          <ShopView
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            initialCategory={selectedCategoryFilter}
            initialBrand={selectedBrandFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            lang={lang}
          />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />

      {/* Modals & Drawers */}
      
      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onQuickCheckout={() => {
            setSelectedProduct(null);
            setIsCheckoutOpen(true);
          }}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={wishlist.includes(selectedProduct.id)}
          relatedProducts={PRODUCTS.filter(
            (p) =>
              p.id !== selectedProduct.id &&
              (p.brand === selectedProduct.brand || p.gender === selectedProduct.gender)
          )}
          onSelectProduct={setSelectedProduct}
          lang={lang}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onStartShopping={() => handleNavigate('shop')}
        lang={lang}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
        onSelectProduct={setSelectedProduct}
        lang={lang}
      />

      {/* Checkout Modal (Cash on Delivery + 58 Wilayas) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onClearCart={handleClearCart}
        lang={lang}
      />

    </div>
  );
}
