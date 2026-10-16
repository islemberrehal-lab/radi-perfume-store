import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Truck,
  CheckCircle2,
  AlertCircle,
  Banknote,
  Sparkles,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WILAYAS } from '../data/wilayas';
import { TRANSLATIONS } from '../data/translations';
import { formatPrice } from '../utils/formatters';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems = [],
  onClearCart,
  lang = 'fr'
}) {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    wilayaCode: '16', // Default: Alger
    commune: '',
    address: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);

  // Selected wilaya info
  const selectedWilaya =
    WILAYAS.find((w) => w.code === formData.wilayaCode) || WILAYAS[0];

  // Subtotal calculation
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.selectedSize?.price || item.price) * item.quantity,
    0
  );

  const isFreeShipping = subtotal >= 35000;
  const deliveryFee = isFreeShipping ? 0 : selectedWilaya.fee;
  const grandTotal = subtotal + deliveryFee;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName =
        lang === 'ar' ? 'يرجى إدخال الاسم واللقب' : 'Le nom complet est obligatoire';
    }
    if (!formData.phone.trim()) {
      newErrors.phone =
        lang === 'ar' ? 'يرجى إدخال رقم الهاتف' : 'Le numéro de téléphone est obligatoire';
    } else if (!/^(05|06|07|02)\d{8}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone =
        lang === 'ar'
          ? 'رقم الهاتف غير صالح (05 / 06 / 07 ...)'
          : 'Format invalide (ex: 0550 12 34 56)';
    }
    if (!formData.commune.trim()) {
      newErrors.commune =
        lang === 'ar' ? 'يرجى إدخال البلدية' : 'La commune est obligatoire';
    }
    if (!formData.address.trim()) {
      newErrors.address =
        lang === 'ar' ? 'يرجى إدخال عنوان التوصيل' : 'L\'adresse de livraison est requise';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `ELX-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderConfirmed({
        id: orderId,
        date: new Date().toLocaleDateString(lang === 'ar' ? 'ar-DZ' : 'fr-FR'),
        customer: formData.fullName,
        phone: formData.phone,
        wilaya: lang === 'ar' ? selectedWilaya.nameAr : selectedWilaya.name,
        commune: formData.commune,
        address: formData.address,
        total: grandTotal,
        items: [...cartItems],
      });
      setIsSubmitting(false);
      onClearCart();

      // Launch golden confetti celebration!
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#C9A66B', '#F5EFE6', '#DFBE85', '#D4AF37'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 flex items-center justify-center">
        
        {/* Modal Window */}
        <div className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-gold/30 shadow-gold-lg my-8">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 rounded-full bg-white/5 hover:bg-gold hover:text-black text-ivory border border-white/10 transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {orderConfirmed ? (
            /* Order Success View */
            <div className="text-center py-8 max-w-xl mx-auto animate-in zoom-in-95">
              <div className="w-20 h-20 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto mb-6 text-gold shadow-gold-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-2">
                {t.checkout.successTitle}
              </h2>
              <p className="text-sm sm:text-base text-gold font-mono mb-4">
                {t.checkout.successSub.replace('{orderId}', orderConfirmed.id)}
              </p>

              <div className="glass-card rounded-2xl p-6 border border-gold/20 text-start space-y-3 mb-8 bg-surface-elevated/60">
                <div className="flex justify-between text-xs pb-3 border-b border-white/10">
                  <span className="text-luxury-gray">{lang === 'ar' ? 'العميل' : 'Client'}:</span>
                  <span className="text-ivory font-medium">{orderConfirmed.customer}</span>
                </div>
                <div className="flex justify-between text-xs pb-3 border-b border-white/10">
                  <span className="text-luxury-gray">{lang === 'ar' ? 'الهاتف' : 'Téléphone'}:</span>
                  <span className="text-ivory font-mono">{orderConfirmed.phone}</span>
                </div>
                <div className="flex justify-between text-xs pb-3 border-b border-white/10">
                  <span className="text-luxury-gray">{lang === 'ar' ? 'عنوان التوصيل' : 'Destination'}:</span>
                  <span className="text-ivory">
                    {orderConfirmed.commune}, {orderConfirmed.wilaya}
                  </span>
                </div>
                <div className="flex justify-between text-xs pb-3 border-b border-white/10">
                  <span className="text-luxury-gray">{lang === 'ar' ? 'طريقة الدفع' : 'Paiement'}:</span>
                  <span className="text-gold font-semibold flex items-center gap-1">
                    <Banknote className="w-3.5 h-3.5" />
                    {lang === 'ar' ? 'الدفع نقدًا عند الاستلام' : 'Cash on Delivery (Espèces)'}
                  </span>
                </div>
                <div className="flex justify-between text-sm pt-1">
                  <span className="text-ivory font-semibold">{t.checkout.totalToPay}:</span>
                  <span className="font-serif text-xl font-bold text-gold">
                    {formatPrice(orderConfirmed.total, lang)}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 text-xs text-gold-200 mb-6 flex items-center gap-2 text-start">
                <Sparkles className="w-4 h-4 flex-shrink-0 text-gold" />
                <span>{t.checkout.successNotice}</span>
              </div>

              <button
                onClick={onClose}
                className="btn-gold px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-gold-sm"
              >
                {t.checkout.closeSummary}
              </button>
            </div>
          ) : (
            /* Checkout Form View */
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                  {lang === 'ar' ? 'إتمام الشراء' : 'Commander sans compte'}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide">
                  {t.checkout.title}
                </h2>
                <p className="text-xs sm:text-sm text-luxury-gray mt-1">
                  {t.checkout.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Form Fields (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="text-xs uppercase tracking-wider text-ivory/90 font-medium block mb-1.5">
                        {t.checkout.fullName} <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder={t.checkout.fullNamePlaceholder}
                        className={`w-full px-4 py-3 rounded-xl bg-surface-elevated text-ivory text-sm border focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-rose-500'
                            : 'border-white/10 focus:border-gold'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="text-xs uppercase tracking-wider text-ivory/90 font-medium block mb-1.5">
                        {t.checkout.phone} <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder={t.checkout.phonePlaceholder}
                        className={`w-full px-4 py-3 rounded-xl bg-surface-elevated text-ivory text-sm border focus:outline-none transition-colors font-mono ${
                          errors.phone
                            ? 'border-rose-500'
                            : 'border-white/10 focus:border-gold'
                        }`}
                      />
                      <p className="text-[11px] text-luxury-gray mt-1">
                        {t.checkout.phoneHelp}
                      </p>
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Wilaya Selection (58 Algerian Wilayas) */}
                    <div>
                      <label className="text-xs uppercase tracking-wider text-ivory/90 font-medium block mb-1.5">
                        {t.checkout.wilaya} <span className="text-rose-400">*</span>
                      </label>
                      <select
                        value={formData.wilayaCode}
                        onChange={(e) =>
                          setFormData({ ...formData, wilayaCode: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated text-ivory text-sm border border-white/10 focus:border-gold focus:outline-none transition-colors"
                      >
                        {WILAYAS.map((w) => (
                          <option key={w.code} value={w.code} className="bg-[#18181D] text-ivory">
                            {w.code} - {lang === 'ar' ? w.nameAr : w.name} ({formatPrice(w.fee, lang)} • {w.time})
                          </option>
                        ))}
                      </select>
                      <div className="flex items-center justify-between mt-1 text-[11px] text-gold">
                        <span className="flex items-center gap-1">
                          <Truck className="w-3 h-3" />
                          {t.checkout.deliveryTime}: {selectedWilaya.time}
                        </span>
                        <span>
                          {t.checkout.deliveryFee}: {isFreeShipping ? t.checkout.free : formatPrice(selectedWilaya.fee, lang)}
                        </span>
                      </div>
                    </div>

                    {/* Commune & Street Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs uppercase tracking-wider text-ivory/90 font-medium block mb-1.5">
                          {t.checkout.commune} <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.commune}
                          onChange={(e) =>
                            setFormData({ ...formData, commune: e.target.value })
                          }
                          placeholder={t.checkout.communePlaceholder}
                          className={`w-full px-4 py-3 rounded-xl bg-surface-elevated text-ivory text-sm border focus:outline-none transition-colors ${
                            errors.commune
                              ? 'border-rose-500'
                              : 'border-white/10 focus:border-gold'
                          }`}
                        />
                        {errors.commune && (
                          <p className="text-[11px] text-rose-400 mt-1">
                            {errors.commune}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-xs uppercase tracking-wider text-ivory/90 font-medium block mb-1.5">
                          {t.checkout.address} <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                          placeholder={t.checkout.addressPlaceholder}
                          className={`w-full px-4 py-3 rounded-xl bg-surface-elevated text-ivory text-sm border focus:outline-none transition-colors ${
                            errors.address
                              ? 'border-rose-500'
                              : 'border-white/10 focus:border-gold'
                          }`}
                        />
                        {errors.address && (
                          <p className="text-[11px] text-rose-400 mt-1">
                            {errors.address}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Order Notes (Optional) */}
                    <div>
                      <label className="text-xs uppercase tracking-wider text-ivory/70 font-medium block mb-1.5">
                        {t.checkout.orderNote}
                      </label>
                      <input
                        type="text"
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        placeholder={t.checkout.orderNotePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-elevated text-ivory text-sm border border-white/10 focus:border-gold focus:outline-none"
                      />
                    </div>

                    {/* Payment Option: Cash on Delivery */}
                    <div className="pt-2">
                      <label className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                        {t.checkout.paymentMethod}
                      </label>
                      <div className="p-4 rounded-2xl bg-gold/10 border border-gold/40 flex items-start gap-3">
                        <Banknote className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-ivory flex items-center gap-2">
                            <span>{t.checkout.codTitle}</span>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-bold">
                              {lang === 'ar' ? 'آمن 100%' : '100% Sécurisé'}
                            </span>
                          </div>
                          <p className="text-xs text-luxury-gray mt-1 leading-relaxed">
                            {t.checkout.codDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Order Summary (5 cols) */}
                  <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-gold/25 space-y-5 bg-surface/80">
                    <h3 className="font-serif text-xl text-ivory pb-3 border-b border-gold/15">
                      {t.checkout.orderSummary}
                    </h3>

                    {/* Itemized Mini List */}
                    <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                      {cartItems.map((item) => {
                        const itemSize = item.selectedSize?.ml || item.size;
                        const itemPrice = item.selectedSize?.price || item.price;

                        return (
                          <div
                            key={`${item.id}-${itemSize}`}
                            className="flex items-center gap-3 text-xs"
                          >
                            <img
                              src={item.image}
                              alt=""
                              className="w-10 h-12 rounded object-cover border border-white/10"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="text-ivory font-medium truncate font-serif">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-luxury-gray">
                                {itemSize} ml × {item.quantity}
                              </div>
                            </div>
                            <div className="font-semibold text-gold font-serif">
                              {formatPrice(itemPrice * item.quantity, lang)}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Calculation breakdown */}
                    <div className="space-y-2 pt-3 border-t border-gold/15 text-xs">
                      <div className="flex justify-between text-luxury-gray">
                        <span>{t.cart.subtotal}</span>
                        <span className="text-ivory font-semibold">
                          {formatPrice(subtotal, lang)}
                        </span>
                      </div>
                      <div className="flex justify-between text-luxury-gray">
                        <span>{t.checkout.deliveryFee} ({selectedWilaya.name})</span>
                        <span className={isFreeShipping ? 'text-emerald-400 font-bold' : 'text-ivory'}>
                          {isFreeShipping ? t.checkout.free : formatPrice(selectedWilaya.fee, lang)}
                        </span>
                      </div>
                    </div>

                    {/* Grand Total */}
                    <div className="pt-3 border-t border-gold/25 flex items-baseline justify-between">
                      <span className="font-serif text-base text-ivory font-medium">
                        {t.checkout.totalToPay}
                      </span>
                      <span className="font-serif text-2xl font-bold text-gold">
                        {formatPrice(grandTotal, lang)}
                      </span>
                    </div>

                    {/* Submit Order Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gold py-4 px-6 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-gold-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{t.checkout.processing}</span>
                      ) : (
                        <>
                          <span>{t.checkout.placeOrder}</span>
                          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                        </>
                      )}
                    </button>

                    <div className="text-center text-[11px] text-luxury-gray flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                      <span>{lang === 'ar' ? 'معاينة الطرد مكفولة قبل الدفع' : 'Inspection du colis garantie avant paiement'}</span>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
