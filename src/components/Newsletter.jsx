import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Newsletter({ lang = 'fr' }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-gold/30 relative">
          
          <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6 text-gold shadow-gold-sm">
            <Mail className="w-7 h-7" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide mb-3">
            {t.newsletter.title}
          </h2>

          <p className="text-xs sm:text-sm text-luxury-gray max-w-lg mx-auto mb-8 leading-relaxed">
            {t.newsletter.subtitle}
          </p>

          {isSubscribed ? (
            <div className="p-4 rounded-xl bg-gold/15 border border-gold/40 text-gold flex items-center justify-center gap-2 max-w-md mx-auto animate-in zoom-in-95">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-xs font-semibold">{t.newsletter.successMsg}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-surface-elevated text-ivory text-xs sm:text-sm border border-white/10 focus:border-gold focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="btn-gold px-6 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5"
                >
                  <span>{t.newsletter.subscribe}</span>
                  <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
              <p className="text-[11px] text-luxury-gray/70 mt-2">
                {lang === 'ar' ? 'بدون رسائل مزعجة، يمكنك إلغاء الاشتراك في أي وقت.' : 'Confidentialité respectée. Aucun spam.'}
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
