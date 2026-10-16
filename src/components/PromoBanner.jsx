import React from 'react';
import { Sparkles, Gift, ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function PromoBanner({ onClaimOffer, lang = 'fr' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-gold/40 p-8 sm:p-12 lg:p-16 shadow-gold-md">
        
        {/* Background glow and decorative circles */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-gradient-radial from-[#C9A66B]/25 via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-gradient-radial from-[#C9A66B]/15 via-transparent to-transparent blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Gift className="w-3.5 h-3.5 text-gold" />
            <span>{t.promoBanner.tag}</span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal tracking-wide mb-4">
            {t.promoBanner.title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-luxury-gray leading-relaxed mb-8 max-w-xl">
            {t.promoBanner.description}
          </p>

          {/* CTA */}
          <button
            onClick={onClaimOffer}
            className="btn-gold px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide flex items-center gap-2 group shadow-gold-sm"
          >
            <span>{t.promoBanner.cta}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
