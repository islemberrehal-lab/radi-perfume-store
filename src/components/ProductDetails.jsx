import React, { useState } from 'react';
import {
  X,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  ShoppingBag,
  Heart,
  Check,
  Sparkles,
  Droplets,
  Flame,
  Leaf,
  Layers,
  ArrowLeft,
  Share2
} from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import { TRANSLATIONS } from '../data/translations';
import ProductCard from './ProductCard';

export default function ProductDetails({
  product,
  onClose,
  onAddToCart,
  onQuickCheckout,
  onToggleWishlist,
  isWishlisted,
  relatedProducts = [],
  onSelectProduct,
  lang = 'fr'
}) {
  if (!product) return null;

  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  // Active gallery image
  const [activeImage, setActiveImage] = useState(product.gallery?.[0] || product.image);
  
  // Size selection
  const defaultSizeObj = product.sizes?.[0] || { ml: product.size, price: product.price };
  const [selectedSize, setSelectedSize] = useState(defaultSizeObj);
  
  // Quantity selector
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleSizeChange = (sizeObj) => {
    setSelectedSize(sizeObj);
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    onAddToCart(product, selectedSize, quantity);
    if (onQuickCheckout) onQuickCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 flex items-center justify-center">
        
        {/* Main Details Modal Container */}
        <div className="relative w-full max-w-5xl glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-gold/30 shadow-gold-lg my-8">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 rounded-full bg-white/5 hover:bg-gold hover:text-black text-ivory border border-white/10 transition-colors z-20"
            aria-label={t.productDetails.close}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Back Link */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-medium text-gold hover:text-ivory transition-colors"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              <span>{lang === 'ar' ? 'الرجوع للمتجر' : 'Retour au catalogue'}</span>
            </button>

            <span className="text-xs text-luxury-gray font-mono">
              REF: {product.batchCode || 'ELX-AUT-2024'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Gallery Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Featured Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#18181D] to-[#0E0E11] border border-gold/20 flex items-center justify-center p-4">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center rounded-xl"
                />

                {/* Batch Guaranteed Overlay Tag */}
                <div className="absolute bottom-3 start-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-gold/30 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <span className="text-xs text-gold font-medium">
                    {t.productDetails.batchVerified}
                  </span>
                </div>
              </div>

              {/* Thumbnails row */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 aspect-square rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImage === img ? 'border-gold shadow-gold-sm' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Brand & Category */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-semibold text-gold tracking-[0.2em] uppercase">
                    {product.brand}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs bg-white/5 border border-white/10 text-luxury-gray">
                    {product.gender}
                  </span>
                </div>

                {/* Perfume Name */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ivory mb-3 tracking-wide">
                  {product.name}
                </h1>

                {/* Concentration & Rating */}
                <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gold/15">
                  <span className="text-xs font-medium text-gold/90 px-2.5 py-1 rounded-md bg-gold/10 border border-gold/20">
                    {product.concentration}
                  </span>

                  <div className="flex items-center gap-1.5 text-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold text-ivory">{product.rating}</span>
                    <span className="text-xs text-luxury-gray">
                      ({product.reviewsCount} {t.productCard.reviews})
                    </span>
                  </div>

                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {t.productCard.inStock}
                  </span>
                </div>

                {/* Price Display */}
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-ivory">
                    {formatPrice(selectedSize.price, lang)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm sm:text-base text-luxury-gray line-through">
                      {formatPrice(Math.round(selectedSize.price * 1.2), lang)}
                    </span>
                  )}
                  {product.discount && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded bg-gold text-[#0B0B0C]">
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-luxury-gray leading-relaxed mb-6 font-light">
                  {lang === 'ar' ? product.descriptionAr : lang === 'en' ? product.descriptionEn : product.description}
                </p>

                {/* Size Selector */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mb-6">
                    <label className="text-xs uppercase tracking-widest text-gold font-semibold block mb-3">
                      {t.productDetails.selectSize}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {product.sizes.map((s) => (
                        <button
                          key={s.ml}
                          onClick={() => handleSizeChange(s)}
                          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                            selectedSize.ml === s.ml
                              ? 'bg-gold text-black border-gold shadow-gold-sm font-bold'
                              : 'bg-surface-elevated text-ivory border-white/10 hover:border-gold/40'
                          }`}
                        >
                          <span>{s.ml} ml</span>
                          <span className="mx-2 opacity-40">•</span>
                          <span className="opacity-90">{formatPrice(s.price, lang)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Olfactory Pyramid (Top, Heart, Base Notes) */}
                <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-surface-elevated/70 border border-gold/20">
                  <div className="flex items-center gap-2 mb-4 text-gold text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>{t.productDetails.pyramidTitle}</span>
                  </div>

                  <div className="space-y-3">
                    {/* Top Notes */}
                    <div>
                      <div className="text-[11px] text-gold/80 font-medium mb-1.5 flex items-center gap-1.5">
                        <Droplets className="w-3 h-3 text-gold" />
                        <span>{t.productDetails.topNotes}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {product.notes.top.map((note, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-ivory"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Heart Notes */}
                    <div>
                      <div className="text-[11px] text-gold/80 font-medium mb-1.5 flex items-center gap-1.5">
                        <Flame className="w-3 h-3 text-gold" />
                        <span>{t.productDetails.heartNotes}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {product.notes.heart.map((note, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-xs bg-gold/10 border border-gold/20 text-gold-200"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Base Notes */}
                    <div>
                      <div className="text-[11px] text-gold/80 font-medium mb-1.5 flex items-center gap-1.5">
                        <Leaf className="w-3 h-3 text-gold" />
                        <span>{t.productDetails.baseNotes}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {product.notes.base.map((note, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-ivory/80"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quantity and Action Buttons */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-4">
                    {/* Quantity Stepper */}
                    <div className="flex items-center bg-surface-elevated border border-gold/25 rounded-xl px-2 py-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-ivory hover:text-gold hover:bg-white/5 font-bold"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-semibold text-sm text-ivory">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-ivory hover:text-gold hover:bg-white/5 font-bold"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={handleAddToCart}
                      className={`flex-1 py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-lg'
                          : 'btn-gold shadow-gold-sm'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>{t.productCard.added}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-5 h-5" />
                          <span>{t.productDetails.addToCart}</span>
                        </>
                      )}
                    </button>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => onToggleWishlist(product)}
                      className={`p-3.5 rounded-xl border transition-colors ${
                        isWishlisted
                          ? 'bg-gold text-black border-gold'
                          : 'bg-white/5 text-ivory border-white/15 hover:border-gold/50 hover:text-gold'
                      }`}
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Buy Now (Quick COD Checkout) */}
                  <button
                    onClick={handleBuyNow}
                    className="w-full btn-gold-outline py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all"
                  >
                    ⚡ {t.productDetails.buyNow}
                  </button>
                </div>

                {/* Trust & Guarantee Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-gold/15">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-ivory mb-0.5">
                        {t.productDetails.guaranteeTitle}
                      </h4>
                      <p className="text-[11px] text-luxury-gray leading-tight">
                        {t.productDetails.guaranteeText}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Truck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-ivory mb-0.5">
                        {lang === 'ar' ? 'الدفع بعد المعاينة' : 'Paiement à la livraison'}
                      </h4>
                      <p className="text-[11px] text-luxury-gray leading-tight">
                        {t.productDetails.codNotice}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gold/20">
              <h3 className="font-serif text-2xl text-ivory mb-6 tracking-wide">
                {t.productDetails.relatedTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.slice(0, 3).map((rel) => (
                  <ProductCard
                    key={rel.id}
                    product={rel}
                    onSelectProduct={(p) => {
                      onSelectProduct(p);
                      setActiveImage(p.gallery?.[0] || p.image);
                      setSelectedSize(p.sizes?.[0] || { ml: p.size, price: p.price });
                    }}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={false}
                    lang={lang}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
