import React, { useState, useEffect } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  Globe,
  Phone,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { formatPrice } from '../utils/formatters';

export default function Navbar({
  currentView,
  onNavigate,
  cartCount = 0,
  cartTotal = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenWishlist,
  lang = 'fr',
  onLanguageChange,
  searchQuery,
  onSearchChange
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'shop', label: t.nav.shop },
    { id: 'men', label: t.nav.men, category: 'Men' },
    { id: 'women', label: t.nav.women, category: 'Women' },
    { id: 'unisex', label: t.nav.unisex, category: 'Unisex' },
    { id: 'gift-sets', label: t.nav.giftSets, category: 'Gift Sets' },
  ];

  const languages = [
    { code: 'fr', label: 'Français', flag: 'FR' },
    { code: 'ar', label: 'العربية', flag: 'DZ' },
    { code: 'en', label: 'English', flag: 'EN' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Privilege Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0E0E10] via-[#1D1B17] to-[#0E0E10] border-b border-[#C9A66B]/20 py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="hidden md:flex items-center gap-2 text-gold/80">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>{t.hero.badgeOriginal}</span>
          </div>

          <div className="flex-1 flex items-center justify-center gap-2 text-ivory/90 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>
              {lang === 'ar'
                ? '✨ توصيل سريع لـ 58 ولاية | الدفع عند الاستلام بعد المعاينة | عطور أصلية 100%'
                : '✨ Livraison Express 58 Wilayas | 100% Parfums Authentiques | Paiement à la Livraison'}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-luxury-gray">
            <a
              href="https://wa.me/213550889900"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>+213 (0) 550 88 99 00</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with Frosted Glass Backdrop */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-glass border-b border-[#C9A66B]/25 py-3'
            : 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-ivory hover:text-gold hover:bg-white/5 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-xl text-ivory hover:text-gold hover:bg-white/5 transition-colors sm:hidden"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Brand Logo */}
            <div
              onClick={() => onNavigate('home')}
              className="cursor-pointer flex flex-col items-center group text-center"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-medium text-gold-gradient group-hover:brightness-110 transition-all">
                  {t.brandName}
                </span>
              </div>
              <span className="text-[9px] tracking-[0.3em] uppercase text-luxury-gray font-light">
                {t.brandSubtitle}
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
              {navLinks.map((link) => {
                const isActive =
                  currentView === link.id ||
                  (currentView === 'shop' && link.category);
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      if (link.category) {
                        onNavigate('shop', { category: link.category });
                      } else {
                        onNavigate(link.id);
                      }
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 relative ${
                      isActive
                        ? 'text-gold'
                        : 'text-ivory/80 hover:text-gold hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Action Icons: Search, Language, Wishlist, Cart */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop Search Bar or Trigger */}
              <div className="relative hidden sm:block">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      onSearchChange(e.target.value);
                      if (currentView !== 'shop') onNavigate('shop');
                    }}
                    placeholder={t.nav.searchPlaceholder}
                    className="w-48 md:w-60 lg:w-72 pl-9 pr-3 py-1.5 rtl:pr-9 rtl:pl-3 bg-white/5 hover:bg-white/10 focus:bg-surface-elevated text-xs text-ivory placeholder-luxury-gray rounded-full border border-gold/20 focus:border-gold focus:outline-none transition-all duration-300"
                  />
                  <Search className="w-3.5 h-3.5 text-luxury-gray absolute left-3 rtl:right-3 pointer-events-none" />
                  {searchQuery && (
                    <button
                      onClick={() => onSearchChange('')}
                      className="absolute right-3 rtl:left-3 text-luxury-gray hover:text-ivory text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Language Switcher Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-ivory/90 hover:text-gold hover:bg-white/5 border border-white/10 flex items-center gap-1.5 transition-colors"
                  aria-label="Change Language"
                >
                  <Globe className="w-3.5 h-3.5 text-gold" />
                  <span className="uppercase font-semibold">{lang}</span>
                  <ChevronDown className="w-3 h-3 text-luxury-gray" />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-32 glass-panel rounded-xl shadow-glass border border-gold/20 py-1.5 z-50 animate-in fade-in zoom-in-95">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          onLanguageChange(l.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-start px-3 py-2 text-xs flex items-center justify-between hover:bg-gold/10 hover:text-gold transition-colors ${
                          lang === l.code ? 'text-gold font-semibold bg-white/5' : 'text-ivory'
                        }`}
                      >
                        <span>{l.label}</span>
                        <span className="text-[10px] text-luxury-gray font-mono">{l.flag}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2 rounded-xl text-ivory hover:text-gold hover:bg-white/5 transition-colors"
                aria-label={t.nav.wishlist}
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 -right-1 rtl:-left-1 rtl:right-auto w-4 h-4 rounded-full bg-[#C9A66B] text-[#0B0B0C] text-[10px] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger Button */}
              <button
                onClick={onOpenCart}
                className="relative btn-gold px-3 py-2 rounded-xl flex items-center gap-2 transition-all duration-300"
                aria-label={t.nav.cart}
              >
                <ShoppingBag className="w-4 h-4 text-[#0B0B0C]" />
                <span className="text-xs font-semibold text-[#0B0B0C] hidden sm:inline">
                  {cartTotal > 0 ? formatPrice(cartTotal, lang) : t.nav.cart}
                </span>
                <span className="w-5 h-5 rounded-full bg-[#0B0B0C] text-gold text-xs font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar Expansion */}
          {isSearchOpen && (
            <div className="pt-3 pb-1 sm:hidden">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    if (currentView !== 'shop') onNavigate('shop');
                  }}
                  placeholder={t.nav.searchPlaceholder}
                  className="w-full pl-9 pr-3 py-2 rtl:pr-9 rtl:pl-3 bg-surface-elevated text-sm text-ivory placeholder-luxury-gray rounded-xl border border-gold/30 focus:border-gold focus:outline-none"
                  autoFocus
                />
                <Search className="w-4 h-4 text-luxury-gray absolute left-3 rtl:right-3 top-3 pointer-events-none" />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass-panel border-t border-gold/20 mt-2 px-6 py-6 animate-in slide-in-from-top">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (link.category) {
                      onNavigate('shop', { category: link.category });
                    } else {
                      onNavigate(link.id);
                    }
                  }}
                  className="text-start py-2 text-base font-serif tracking-wide text-ivory hover:text-gold border-b border-white/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 flex items-center justify-between border-t border-gold/20">
                <span className="text-xs text-luxury-gray">Langue / اللغة :</span>
                <div className="flex gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onLanguageChange(l.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        lang === l.code
                          ? 'bg-gold text-[#0B0B0C] font-semibold'
                          : 'bg-white/5 text-ivory'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-luxury-gray flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>+213 (0) 550 88 99 00 (WhatsApp)</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
