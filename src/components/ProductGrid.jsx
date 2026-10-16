import React from 'react';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';
import { TRANSLATIONS } from '../data/translations';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function ProductGrid({
  products = [],
  isLoading = false,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlist = [],
  lang = 'fr',
  onResetFilters,
  columns = 4
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  const colClasses = {
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

  if (isLoading) {
    return (
      <div className={`grid ${colClasses} gap-5 sm:gap-6`}>
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-12 text-center max-w-lg mx-auto my-12 border border-gold/20">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4 text-gold">
          <Sparkles className="w-8 h-8" />
        </div>
        <h4 className="font-serif text-2xl text-ivory mb-2">
          {t.shop.noResults}
        </h4>
        <p className="text-sm text-luxury-gray mb-6">
          {lang === 'ar' 
            ? 'جرب البحث بكلمات أخرى أو قم بإلغاء الفلاتر المحددة.'
            : 'Essayez d\'ajuster vos critères ou réinitialisez les filtres pour explorer notre sélection.'}
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="btn-gold-outline px-6 py-2.5 rounded-xl text-sm font-medium inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>{t.shop.clearFilters}</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`grid ${colClasses} gap-5 sm:gap-6`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelectProduct={onSelectProduct}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          isWishlisted={wishlist.includes(product.id)}
          lang={lang}
        />
      ))}
    </div>
  );
}
