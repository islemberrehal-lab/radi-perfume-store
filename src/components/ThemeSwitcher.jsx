import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles, ChevronDown } from 'lucide-react';
import { THEMES } from '../data/themes';

export default function ThemeSwitcher({ currentTheme, onThemeChange, lang = 'fr' }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeThemeObj = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeName = (theme) => {
    if (lang === 'ar') return theme.nameAr;
    if (lang === 'en') return theme.nameEn;
    return theme.name;
  };

  const getThemeDesc = (theme) => {
    if (lang === 'ar') return theme.descriptionAr;
    if (lang === 'en') return theme.descriptionEn;
    return theme.description;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button with Active Theme Color Swatch */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-ivory/90 hover:text-gold hover:bg-white/5 border border-white/10 flex items-center gap-1.5 transition-all duration-200"
        aria-label="Sélectionner le thème"
        title={lang === 'ar' ? 'تغيير المظهر / السمة' : 'Changer le thème'}
      >
        <Palette className="w-3.5 h-3.5 text-gold flex-shrink-0" />
        
        {/* Color preview swatch on button */}
        <div className="flex -space-x-1 rtl:space-x-reverse items-center">
          {activeThemeObj.colors.map((c, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full border border-white/20 shadow-xs flex-shrink-0"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        <span className="hidden xl:inline text-xs truncate max-w-[100px]">
          {getThemeName(activeThemeObj)}
        </span>
        <ChevronDown className={`w-3 h-3 text-luxury-gray transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-72 sm:w-80 glass-panel rounded-2xl shadow-glass border border-gold/30 p-2 z-50 animate-in fade-in zoom-in-95">
          <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold text-gold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              {lang === 'ar' ? 'اختر سمة المتجر' : 'Thèmes de la Maison'}
            </span>
            <span className="text-[10px] text-luxury-gray">
              {THEMES.length} {lang === 'ar' ? 'سمات' : 'styles'}
            </span>
          </div>

          <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
            {THEMES.map((theme) => {
              const isSelected = currentTheme === theme.id;
              const name = getThemeName(theme);
              const desc = getThemeDesc(theme);

              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onThemeChange(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-start p-2.5 rounded-xl text-xs transition-all flex items-start gap-3 group ${
                    isSelected
                      ? 'bg-gold/15 border border-gold/40 text-gold shadow-xs'
                      : 'hover:bg-white/5 border border-transparent text-ivory'
                  }`}
                >
                  {/* Color Swatch Tri-Circle */}
                  <div className="flex flex-col items-center justify-center pt-0.5">
                    <div className="flex -space-x-1.5 rtl:space-x-reverse">
                      {theme.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-white/20 shadow-xs"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Theme Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`font-semibold tracking-wide ${isSelected ? 'text-gold' : 'text-ivory group-hover:text-gold'}`}>
                        {name}
                      </span>
                      {theme.badge && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase bg-gold/20 text-gold border border-gold/30">
                          {theme.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-luxury-gray leading-tight line-clamp-1">
                      {desc}
                    </p>
                  </div>

                  {/* Active Indicator Check */}
                  {isSelected && (
                    <Check className="w-4 h-4 text-gold flex-shrink-0 self-center" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
