import React from 'react';
import { CATEGORIES } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CategoryRow({ onSelectCategory, lang = 'fr' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'تشكيلات حسب الطلب' : 'Collections Distinctes'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide">
              {t.categories.title}
            </h2>
          </div>
          <p className="text-sm text-luxury-gray max-w-md">
            {t.categories.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const title = lang === 'ar' ? cat.titleAr : lang === 'en' ? cat.titleEn : cat.title;
            const subtitle = lang === 'ar' ? cat.subtitleAr : cat.subtitle;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer glass-card border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:-translate-y-1.5 shadow-lg"
              >
                {/* Background Image with Overlay */}
                <img
                  src={cat.image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-black/20" />
                
                {/* Card Content */}
                <div className="relative h-full p-6 flex flex-col justify-between z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-gold border border-gold/30">
                      {cat.count} {lang === 'ar' ? 'عطور' : 'parfums'}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-medium mb-2 group-hover:text-gold transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-luxury-gray line-clamp-2 mb-4">
                      {subtitle}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold group-hover:text-ivory transition-colors">
                      <span>{t.categories.explore}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
