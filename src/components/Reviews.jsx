import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

export default function Reviews({ lang = 'fr' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-surface-card/40 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.reviewsSection.tag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide mb-3">
            {t.reviewsSection.title}
          </h2>

          <p className="text-xs sm:text-sm text-luxury-gray mb-4">
            {t.reviewsSection.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated border border-gold/20 text-xs text-ivory">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-medium">{t.reviewsSection.starsScore}</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-card rounded-2xl p-6 border border-gold/15 hover:border-gold/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C9A66B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold/30" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-ivory/90 leading-relaxed mb-6 font-light">
                  "{lang === 'ar' ? review.commentAr : review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm text-ivory">
                    {review.name}
                  </span>
                  <span className="text-[10px] text-luxury-gray">
                    {review.date}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gold text-[11px] font-mono">
                    {review.city}
                  </span>
                  <span className="text-emerald-400 text-[10px] flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    {t.reviewsSection.verifiedBuyer}
                  </span>
                </div>

                <div className="mt-2 text-[10px] text-luxury-gray/70 truncate">
                  {lang === 'ar' ? 'العطر المشترى:' : 'Parfum acheté :'} {review.perfume}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
