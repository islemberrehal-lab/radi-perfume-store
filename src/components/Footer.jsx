import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Truck, Sparkles, Heart } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Footer({ onNavigate, lang = 'fr' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  return (
    <footer className="bg-[#080809] border-t border-gold/20 pt-16 pb-8 relative overflow-hidden">
      
      {/* Subtle gold line accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A66B]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-[0.2em] font-medium text-gold-gradient">
                {t.brandName}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gray">
                {t.brandSubtitle}
              </span>
            </div>

            <p className="text-xs text-luxury-gray leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] bg-white/5 border border-gold/20 text-gold font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Authenticité Certifiée</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] bg-white/5 border border-gold/20 text-gold font-medium">
                <Truck className="w-3.5 h-3.5" />
                <span>58 Wilayas COD</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-lg text-ivory font-medium tracking-wide mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-luxury-gray">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-gold transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-gold transition-colors"
                >
                  {t.nav.shop}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop', { category: 'Men' })}
                  className="hover:text-gold transition-colors"
                >
                  {t.nav.men}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop', { category: 'Women' })}
                  className="hover:text-gold transition-colors"
                >
                  {t.nav.women}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop', { category: 'Unisex' })}
                  className="hover:text-gold transition-colors"
                >
                  {t.nav.unisex}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop', { category: 'Gift Sets' })}
                  className="hover:text-gold transition-colors"
                >
                  {t.nav.giftSets}
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-lg text-ivory font-medium tracking-wide mb-4">
              {t.footer.customerCare}
            </h4>
            <ul className="space-y-2.5 text-xs text-luxury-gray">
              <li className="hover:text-gold transition-colors cursor-pointer">
                {t.footer.authenticity}
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                {t.footer.deliveryInfo}
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                {t.footer.faq}
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                {lang === 'ar' ? 'سياسة المعاينة والاسترجاع' : 'Politique de Retour & Inspection'}
              </li>
            </ul>
          </div>

          {/* Direct Contact & Hours */}
          <div>
            <h4 className="font-serif text-lg text-ivory font-medium tracking-wide mb-4">
              {lang === 'ar' ? 'اتصل بنا' : 'Contact'}
            </h4>
            <ul className="space-y-3 text-xs text-luxury-gray">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <a
                  href="https://wa.me/213550889900"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors font-mono"
                >
                  {t.footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>concierge@lelixir-parfums.dz</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                <span>Hydra, Alger • Oran • Constantine</span>
              </li>
              <li className="text-[11px] text-gold/80 pt-1">
                {t.footer.hours}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Payment Badges & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-luxury-gray">
          
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-ivory/80">{t.footer.paymentBadges}</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-gold font-mono font-bold">
              COD
            </span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-ivory font-mono">
              Edahabia / CIB
            </span>
          </div>

          <p className="text-[11px] text-center sm:text-end">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>

        </div>
      </div>
    </footer>
  );
}
