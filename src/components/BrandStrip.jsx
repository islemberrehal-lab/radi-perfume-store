import React from 'react';
import { BRANDS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { Sparkles } from 'lucide-react';

export default function BrandStrip({ onSelectBrand, lang = 'fr' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  return (
    <section className="py-12 border-y border-gold/15 bg-surface-card/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'البيوت الرسمية' : 'Maisons Agréées'}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide">
            {t.brands.title}
          </h2>
          <p className="text-xs sm:text-sm text-luxury-gray mt-1">
            {t.brands.subtitle}
          </p>
        </div>

        {/* Brands Grid / Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {BRANDS.map((brand) => (
            <button
              key={brand.name}
              onClick={() => onSelectBrand && onSelectBrand(brand.name)}
              className="glass-card rounded-xl p-4 text-center border border-gold/15 hover:border-gold/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="font-serif text-base sm:text-lg text-ivory/90 group-hover:text-gold block tracking-wider transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-luxury-gray group-hover:text-ivory/70 transition-colors mt-1 block">
                {brand.origin}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
