import React from 'react';
import { ShieldCheck, Truck, Banknote, Sparkles, ArrowRight, Award } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Hero({ onShopNow, onExploreNiche, lang = 'fr' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  const trustBadges = [
    {
      icon: ShieldCheck,
      title: t.hero.badgeOriginal,
      desc: t.hero.badgeOriginalSub,
    },
    {
      icon: Banknote,
      title: t.hero.badgeCod,
      desc: t.hero.badgeCodSub,
    },
    {
      icon: Truck,
      title: t.hero.badgeDelivery,
      desc: t.hero.badgeDeliverySub,
    },
    {
      icon: Award,
      title: t.hero.badgeService,
      desc: t.hero.badgeServiceSub,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Ambient Gold Radial Gradients in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-[#C9A66B]/15 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#C9A66B]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-start">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-gold" />
              <span>{t.hero.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-tight text-ivory mb-6">
              {lang === 'ar' ? (
                <>
                  <span className="block text-gold-gradient font-serif">عطور أصلية فاخرة،</span>
                  <span className="block mt-2 font-serif">تصل إلى باب بيتك</span>
                </>
              ) : (
                <>
                  <span className="block">Authentic Fragrances,</span>
                  <span className="block mt-1 text-gold-gradient font-serif italic">Delivered.</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-luxury-gray max-w-xl leading-relaxed mb-8">
              {t.hero.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onShopNow}
                className="btn-gold px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide flex items-center gap-2 group shadow-gold-md"
              >
                <span>{t.hero.shopNow}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreNiche}
                className="btn-gold-outline px-6 py-4 rounded-xl text-sm sm:text-base font-medium tracking-wide transition-all"
              >
                <span>{t.hero.discoverNiche}</span>
              </button>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gold/15 max-w-md">
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-gold font-semibold block">100%</span>
                <span className="text-xs text-luxury-gray tracking-wider uppercase">
                  {lang === 'ar' ? 'أصالة معتمدة' : 'Authenticité'}
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-gold font-semibold block">58</span>
                <span className="text-xs text-luxury-gray tracking-wider uppercase">
                  {lang === 'ar' ? 'ولاية مغطاة' : 'Wilayas'}
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-gold font-semibold block">24/48h</span>
                <span className="text-xs text-luxury-gray tracking-wider uppercase">
                  {lang === 'ar' ? 'توصيل سريع' : 'Livraison'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Halo Backdrop Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-radial from-[#C9A66B]/25 via-[#C9A66B]/5 to-transparent blur-2xl animate-pulse-subtle" />
            </div>

            {/* Central Bottle Container with Luxury Frame */}
            <div className="relative z-10 w-full max-w-md p-4 sm:p-6 glass-card rounded-3xl border border-gold/30 shadow-gold-lg">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1C1C22] to-[#0D0D10] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85"
                  alt="Authentic Luxury Perfume"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Seal of Authenticity */}
                <div className="absolute top-4 end-4 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-gold/40 flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span className="text-[11px] font-semibold text-gold tracking-wide">
                    {lang === 'ar' ? 'سيل المصنع الأصلي' : 'Scellé d\'Origine'}
                  </span>
                </div>

                {/* Floating Batch Code Badge */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-gold/25 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-luxury-gray tracking-widest block">
                      {lang === 'ar' ? 'تحقق عبر الإنترنت' : 'Batch Code Check'}
                    </span>
                    <span className="font-mono text-xs text-ivory font-semibold">
                      BATCH #MFK-82914-FR
                    </span>
                  </div>
                  <span className="px-2 py-1 rounded bg-gold/20 text-gold text-[10px] font-bold uppercase tracking-wider">
                    {lang === 'ar' ? 'مؤكد 100%' : 'Vérifié'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Strip (Home requirement: 100% Original, Cash on Delivery, Fast Delivery) */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-gold/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-5 border border-gold/15 flex items-start gap-4 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0 text-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-ivory font-medium mb-1 tracking-wide">
                      {badge.title}
                    </h3>
                    <p className="text-xs text-luxury-gray leading-relaxed">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
