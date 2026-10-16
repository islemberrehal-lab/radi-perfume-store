import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, ShieldCheck, Check } from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import { TRANSLATIONS } from '../data/translations';

export default function ProductCard({
  product,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
  lang = 'fr'
}) {
  const [isAddedAnim, setIsAddedAnim] = useState(false);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product, product.sizes?.[0] || { ml: product.size, price: product.price });
    setIsAddedAnim(true);
    setTimeout(() => setIsAddedAnim(false), 1800);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    onToggleWishlist(product);
  };

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col transition-all duration-500 hover:-translate-y-1.5"
    >
      {/* Top Floating Badges */}
      <div className="absolute top-3 inset-x-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col gap-1.5">
          {product.discount && (
            <span className="px-2.5 py-1 text-xs font-semibold tracking-wider rounded-full bg-[#C9A66B] text-[#0B0B0C] shadow-lg">
              {product.discount}
            </span>
          )}
          {product.badge && (
            <span className="px-2 py-0.5 text-[10px] uppercase tracking-widest rounded-full bg-black/60 text-gold-300 backdrop-blur-md border border-gold/30">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          aria-label="Wishlist"
          className={`pointer-events-auto p-2 rounded-full transition-all duration-300 backdrop-blur-md ${
            isWishlisted
              ? 'bg-[#C9A66B] text-[#0B0B0C] shadow-[0_0_15px_rgba(201,166,107,0.4)]'
              : 'bg-black/40 text-ivory/80 hover:text-gold hover:bg-black/70 border border-white/10'
          }`}
        >
          <Heart
            className={`w-4 h-4 transition-transform duration-300 ${isWishlisted ? 'fill-current scale-110' : 'group-hover/btn:scale-110'}`}
          />
        </button>
      </div>

      {/* Image Container with Ambient Background Glow */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#18181D] to-[#0E0E11] p-4 flex items-center justify-center">
        <div className="absolute inset-0 bg-radial-gold opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
        
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* 100% Original Overlay Pill */}
        <div className="absolute bottom-3 start-3 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-gold/20 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-gold" />
          <span className="text-[10px] text-ivory/90 tracking-wide font-medium">
            {t.productCard.authentic}
          </span>
        </div>

        {/* Quick View Hover Button */}
        <div className="absolute inset-x-4 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hidden sm:flex justify-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-gold hover:text-black text-ivory text-xs backdrop-blur-md border border-gold/30 transition-colors flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t.productCard.quickView}</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-surface/50">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-xs text-gold/90 font-medium tracking-widest uppercase mb-1">
            <span>{product.brand}</span>
            <span className="text-[11px] text-luxury-gray lowercase capitalize">
              {product.gender === 'Men' ? (lang === 'ar' ? 'رجالي' : 'Homme') :
               product.gender === 'Women' ? (lang === 'ar' ? 'نسائي' : 'Femme') :
               product.gender === 'Gift Sets' ? (lang === 'ar' ? 'علبة هدايا' : 'Coffret') :
               (lang === 'ar' ? 'للجنسين' : 'Mixte')}
            </span>
          </div>

          {/* Fragrance Name */}
          <h3 className="font-serif text-lg sm:text-xl font-normal text-ivory tracking-wide group-hover:text-gold transition-colors duration-300 line-clamp-1 mb-1.5">
            {product.name}
          </h3>

          {/* Specs / Concentration & Size */}
          <div className="flex items-center gap-2 text-xs text-luxury-gray mb-3">
            <span>{product.concentration}</span>
            <span>•</span>
            <span>{product.size} ml</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-4">
            <div className="flex items-center text-[#C9A66B]">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-semibold text-ivory">{product.rating}</span>
            <span className="text-[11px] text-luxury-gray">
              ({product.reviewsCount} {t.productCard.reviews})
            </span>
          </div>
        </div>

        {/* Pricing and Action Button */}
        <div className="pt-3 border-t border-[#C9A66B]/15 flex items-center justify-between gap-2">
          <div>
            <div className="font-serif text-lg sm:text-xl font-semibold text-ivory">
              {formatPrice(product.price, lang)}
            </div>
            {product.oldPrice && (
              <div className="text-xs text-luxury-gray line-through">
                {formatPrice(product.oldPrice, lang)}
              </div>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            aria-label={t.productCard.addToCart}
            className={`relative p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl transition-all duration-300 flex items-center gap-1.5 ${
              isAddedAnim
                ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'btn-gold'
            }`}
          >
            {isAddedAnim ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:inline">{t.productCard.added}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:inline">{t.productCard.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
