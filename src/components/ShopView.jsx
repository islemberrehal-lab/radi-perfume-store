import React, { useState, useMemo } from 'react';
import {
  SlidersHorizontal,
  X,
  Search,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Check
} from 'lucide-react';
import ProductGrid from './ProductGrid';
import { PRODUCTS, BRANDS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { formatPrice } from '../utils/formatters';

export default function ShopView({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlist = [],
  initialCategory = null,
  initialBrand = null,
  searchQuery = '',
  onSearchChange,
  lang = 'fr'
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  // Filter States
  const [selectedBrands, setSelectedBrands] = useState(
    initialBrand ? [initialBrand] : []
  );
  const [selectedGender, setSelectedGender] = useState(initialCategory || 'all');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(90000);
  const [sortBy, setSortBy] = useState('recommended');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Available unique sizes in catalog
  const availableSizes = [30, 35, 50, 60, 70, 75, 90, 100, 125, 150, 200];

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleResetFilters = () => {
    setSelectedBrands([]);
    setSelectedGender('all');
    setSelectedSizes([]);
    setMaxPrice(90000);
    setSortBy('recommended');
    if (onSearchChange) onSearchChange('');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesNotes = [
          ...product.notes.top,
          ...product.notes.heart,
          ...product.notes.base,
        ].some((note) => note.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesNotes) return false;
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Gender / Category filter
      if (selectedGender !== 'all') {
        if (selectedGender === 'Gift Sets' && product.category !== 'Gift Sets') {
          return false;
        } else if (selectedGender !== 'Gift Sets' && product.gender !== selectedGender) {
          return false;
        }
      }

      // Size filter
      if (selectedSizes.length > 0) {
        const hasSize = product.sizes
          ? product.sizes.some((s) => selectedSizes.includes(s.ml))
          : selectedSizes.includes(product.size);
        if (!hasSize) return false;
      }

      // Price filter
      if (product.price > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [searchQuery, selectedBrands, selectedGender, selectedSizes, maxPrice, sortBy]);

  const activeFiltersCount =
    selectedBrands.length +
    (selectedGender !== 'all' ? 1 : 0) +
    selectedSizes.length +
    (maxPrice < 90000 ? 1 : 0);

  // Filter Sidebar Content (used in both desktop and mobile drawer)
  const FilterContent = () => (
    <div className="space-y-6">
      
      {/* Header with Reset */}
      <div className="flex items-center justify-between pb-4 border-b border-gold/15">
        <h3 className="font-serif text-lg text-ivory font-medium flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-gold" />
          <span>{t.shop.filterBy}</span>
          {activeFiltersCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-gold text-[#0B0B0C] text-[10px] font-bold flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </h3>

        {activeFiltersCount > 0 && (
          <button
            onClick={handleResetFilters}
            className="text-xs text-gold hover:text-ivory flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{t.shop.clearFilters}</span>
          </button>
        )}
      </div>

      {/* Gender / Category Filter */}
      <div>
        <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-3">
          {t.shop.gender}
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'all', label: t.shop.all },
            { id: 'Men', label: lang === 'ar' ? 'رجالي' : 'Homme' },
            { id: 'Women', label: lang === 'ar' ? 'نسائي' : 'Femme' },
            { id: 'Unisex', label: lang === 'ar' ? 'نيش / ميكست' : 'Mixte & Niche' },
            { id: 'Gift Sets', label: lang === 'ar' ? 'علب هدايا' : 'Coffrets' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedGender(cat.id)}
              className={`px-3 py-2 rounded-xl text-xs font-medium text-center transition-all ${
                selectedGender === cat.id
                  ? 'bg-gold text-black font-bold shadow-gold-sm'
                  : 'bg-white/5 text-ivory/80 hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs uppercase tracking-wider text-gold font-semibold">
            {t.shop.priceRange}
          </label>
          <span className="text-xs font-mono text-ivory">
            ≤ {formatPrice(maxPrice, lang)}
          </span>
        </div>
        <input
          type="range"
          min="15000"
          max="90000"
          step="2500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-gold bg-surface-elevated h-2 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-luxury-gray mt-1 font-mono">
          <span>15 000 DA</span>
          <span>90 000 DA</span>
        </div>
      </div>

      {/* Brand Checkboxes */}
      <div>
        <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-3">
          {t.shop.brand}
        </label>
        <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
          {BRANDS.map((brand) => {
            const isChecked = selectedBrands.includes(brand.name);
            return (
              <label
                key={brand.name}
                onClick={() => toggleBrand(brand.name)}
                className="flex items-center justify-between text-xs cursor-pointer group py-1 px-1.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      isChecked
                        ? 'bg-gold border-gold text-black'
                        : 'border-white/20 group-hover:border-gold/50'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span
                    className={`transition-colors ${
                      isChecked ? 'text-ivory font-medium' : 'text-luxury-gray group-hover:text-ivory'
                    }`}
                  >
                    {brand.name}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Bottle Size Chips */}
      <div>
        <label className="text-xs uppercase tracking-wider text-gold font-semibold block mb-3">
          {t.shop.size}
        </label>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map((size) => {
            const isSelected = selectedSizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  isSelected
                    ? 'bg-gold text-black font-bold'
                    : 'bg-white/5 text-ivory/80 border border-white/10 hover:border-gold/40'
                }`}
              >
                {size} ml
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Title & Intro */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          <Sparkles className="w-3 h-3" />
          <span>{lang === 'ar' ? 'عطور معتمدة' : 'Origine Certifiée'}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-ivory font-normal tracking-tight mb-2">
          {t.shop.title}
        </h1>
        <p className="text-xs sm:text-sm text-luxury-gray">
          {t.shop.subtitle}
        </p>
      </div>

      {/* Top Controls Bar: Search, Mobile Filter Toggle, Sort Dropdown */}
      <div className="glass-card rounded-2xl p-4 border border-gold/20 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.shop.search}
            className="w-full pl-9 pr-4 py-2.5 rtl:pr-9 rtl:pl-4 bg-surface-elevated text-xs sm:text-sm text-ivory placeholder-luxury-gray rounded-xl border border-white/10 focus:border-gold focus:outline-none transition-colors"
          />
          <Search className="w-4 h-4 text-luxury-gray absolute left-3 rtl:right-3 top-3 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 rtl:left-3 top-2.5 text-luxury-gray hover:text-ivory"
            >
              ×
            </button>
          )}
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-3">
          {/* Mobile Filter Drawer Button */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-elevated border border-gold/30 text-xs font-medium text-ivory hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 text-gold" />
            <span>{t.shop.filterBy}</span>
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-gold text-black text-[10px] font-bold flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Results Counter */}
          <span className="text-xs text-luxury-gray hidden sm:inline">
            <strong className="text-ivory">{filteredProducts.length}</strong> {t.shop.showingCount}
          </span>

          {/* Sort Dropdown */}
          <div className="relative flex items-center gap-2">
            <span className="text-xs text-luxury-gray hidden sm:inline">
              {t.shop.sortBy}:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-surface-elevated text-xs text-ivory border border-white/10 focus:border-gold focus:outline-none transition-colors"
            >
              <option value="recommended">{t.shop.sortDefault}</option>
              <option value="priceAsc">{t.shop.sortPriceAsc}</option>
              <option value="priceDesc">{t.shop.sortPriceDesc}</option>
              <option value="rating">{t.shop.sortRating}</option>
              <option value="newest">{t.shop.sortNewest}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Layout: Sidebar + Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Desktop Sidebar (3 cols) */}
        <aside className="hidden lg:block lg:col-span-3 glass-panel rounded-2xl p-6 border border-gold/20 sticky top-28">
          <FilterContent />
        </aside>

        {/* Product Grid Area (9 cols) */}
        <div className="lg:col-span-9">
          
          {/* Active Filter Pills Bar */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-6 p-3 rounded-xl bg-surface/50 border border-white/5">
              <span className="text-xs text-luxury-gray">
                {lang === 'ar' ? 'فلاتر مفعلة:' : 'Filtres actifs :'}
              </span>

              {selectedGender !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-gold/15 text-gold border border-gold/30">
                  {selectedGender}
                  <button onClick={() => setSelectedGender('all')}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedBrands.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-gold/15 text-gold border border-gold/30"
                >
                  {b}
                  <button onClick={() => toggleBrand(b)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              {selectedSizes.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-gold/15 text-gold border border-gold/30"
                >
                  {s} ml
                  <button onClick={() => toggleSize(s)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              {maxPrice < 90000 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-gold/15 text-gold border border-gold/30">
                  ≤ {formatPrice(maxPrice, lang)}
                  <button onClick={() => setMaxPrice(90000)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              <button
                onClick={handleResetFilters}
                className="text-xs text-luxury-gray hover:text-ivory ml-auto underline"
              >
                {t.shop.clearFilters}
              </button>
            </div>
          )}

          {/* Product Grid */}
          <ProductGrid
            products={filteredProducts}
            onSelectProduct={onSelectProduct}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            wishlist={wishlist}
            lang={lang}
            onResetFilters={handleResetFilters}
            columns={3}
          />
        </div>

      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm lg:hidden animate-in fade-in">
          <div className="absolute inset-0" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex">
            <div className="w-screen max-w-sm glass-panel p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gold/20 mb-6">
                  <h3 className="font-serif text-xl text-ivory">
                    {t.shop.filterBy}
                  </h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1 rounded-lg text-luxury-gray hover:text-ivory"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <FilterContent />
              </div>

              <div className="pt-6 border-t border-gold/20 mt-6">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full btn-gold py-3 rounded-xl font-semibold text-xs tracking-wider uppercase"
                >
                  {lang === 'ar' ? 'عرض النتائج' : 'Afficher les résultats'} ({filteredProducts.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
