import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { formatPrice } from '../utils/formatters';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistProducts = [],
  onRemoveFromWishlist,
  onAddToCart,
  onSelectProduct,
  lang = 'fr'
}) {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex">
        <div className="w-screen max-w-md glass-panel shadow-2xl flex flex-col border-l rtl:border-l-0 rtl:border-r border-gold/30">
          
          {/* Header */}
          <div className="p-5 border-b border-gold/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-gold fill-current" />
              <h2 className="font-serif text-xl text-ivory tracking-wide">
                {t.wishlist.title}
              </h2>
              <span className="text-xs text-gold/80 px-2 py-0.5 rounded-full bg-gold/10 border border-gold/20">
                {wishlistProducts.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-luxury-gray hover:text-ivory hover:bg-white/5 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center text-gold/60 mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl text-ivory mb-2">
                  {t.wishlist.emptyTitle}
                </h3>
                <p className="text-xs text-luxury-gray max-w-xs">
                  {t.wishlist.emptySub}
                </p>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="glass-card rounded-xl p-3 border border-gold/15 flex gap-3 items-center group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => {
                      onClose();
                      onSelectProduct(product);
                    }}
                    className="w-16 h-20 rounded-lg object-cover cursor-pointer flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-gold uppercase tracking-wider font-semibold block truncate">
                      {product.brand}
                    </span>
                    <h4
                      onClick={() => {
                        onClose();
                        onSelectProduct(product);
                      }}
                      className="font-serif text-base text-ivory truncate cursor-pointer hover:text-gold"
                    >
                      {product.name}
                    </h4>
                    <div className="text-sm font-serif font-bold text-ivory mt-0.5">
                      {formatPrice(product.price, lang)}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        onAddToCart(product, product.sizes?.[0] || { ml: product.size, price: product.price });
                        onRemoveFromWishlist(product.id);
                      }}
                      className="p-2 rounded-lg bg-gold text-black hover:bg-gold-300 transition-colors"
                      title={t.wishlist.addToCart}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="p-2 rounded-lg text-luxury-gray hover:text-rose-400 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
