import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import { TRANSLATIONS } from '../data/translations';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onStartShopping,
  lang = 'fr'
}) {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.selectedSize?.price || item.price) * item.quantity,
    0
  );

  const FREE_SHIPPING_THRESHOLD = 35000;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex">
        <div className="w-screen max-w-md glass-panel shadow-2xl flex flex-col border-l rtl:border-l-0 rtl:border-r border-gold/30">
          
          {/* Header */}
          <div className="p-5 border-b border-gold/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <h2 className="font-serif text-xl text-ivory tracking-wide">
                {t.cart.title}
              </h2>
              <span className="text-xs text-gold/80 px-2 py-0.5 rounded-full bg-gold/10 border border-gold/20">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)} {t.cart.items}
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

          {/* Free Shipping Progress Indicator */}
          {cartItems.length > 0 && (
            <div className="px-5 py-3 bg-[#16161B] border-b border-white/5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-luxury-gray flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  {isFreeShipping ? (
                    <span className="text-emerald-400 font-semibold">{t.cart.freeShippingEligible}</span>
                  ) : (
                    <span>
                      {t.cart.freeShippingAdd.replace('{amount}', formatPrice(remainingForFreeShipping, lang))}
                    </span>
                  )}
                </span>
                <span className="text-gold font-mono font-bold">{freeShippingProgress}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold/60 to-gold transition-all duration-500 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center text-gold/60 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl text-ivory mb-2">
                  {t.cart.emptyTitle}
                </h3>
                <p className="text-xs text-luxury-gray max-w-xs mb-6">
                  {t.cart.emptySub}
                </p>
                <button
                  onClick={() => {
                    onClose();
                    if (onStartShopping) onStartShopping();
                  }}
                  className="btn-gold px-6 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase"
                >
                  {t.cart.startShopping}
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const itemSize = item.selectedSize?.ml || item.size;
                const itemPrice = item.selectedSize?.price || item.price;

                return (
                  <div
                    key={`${item.id}-${itemSize}`}
                    className="glass-card rounded-xl p-3 border border-gold/15 flex gap-3 items-center"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-20 h-24 rounded-lg overflow-hidden bg-black/40 flex-shrink-0 border border-white/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-gold uppercase tracking-wider font-semibold truncate">
                        {item.brand}
                      </div>
                      <h4 className="font-serif text-base text-ivory truncate">
                        {item.name}
                      </h4>
                      <div className="text-xs text-luxury-gray mb-2">
                        {itemSize} ml • {item.concentration}
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Stepper */}
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, itemSize, Math.max(1, item.quantity - 1))
                            }
                            className="w-6 h-6 flex items-center justify-center text-ivory hover:text-gold text-xs"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-semibold text-ivory">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, itemSize, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center text-ivory hover:text-gold text-xs"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-sm font-serif font-bold text-ivory">
                          {formatPrice(itemPrice * item.quantity, lang)}
                        </div>
                      </div>
                    </div>

                    {/* Delete Item */}
                    <button
                      onClick={() => onRemoveItem(item.id, itemSize)}
                      className="p-1.5 text-luxury-gray hover:text-rose-400 transition-colors self-start"
                      aria-label={t.cart.remove}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer with Subtotal & Checkout CTA */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-gold/20 bg-surface/90 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-luxury-gray">{t.cart.subtotal}</span>
                  <span className="font-serif text-xl font-bold text-ivory">
                    {formatPrice(subtotal, lang)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-luxury-gray">
                  <span>{lang === 'ar' ? 'التوصيل' : 'Frais de livraison'}</span>
                  <span className="text-gold">
                    {isFreeShipping
                      ? (lang === 'ar' ? 'مجاني' : 'Offert')
                      : (lang === 'ar' ? 'يُحسب عند الدفع' : 'Calculé à l\'étape suivante')}
                  </span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full btn-gold py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 group shadow-gold-sm"
              >
                <span>{t.cart.checkout}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-luxury-gray">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>{t.cart.secureCheckout}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
