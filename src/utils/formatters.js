import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price, lang = 'fr') {
  if (typeof price !== 'number') return '0 DZD';
  
  const formattedNumber = new Intl.NumberFormat(lang === 'ar' ? 'ar-DZ' : 'fr-DZ', {
    maximumFractionDigits: 0
  }).format(price);

  if (lang === 'ar') {
    return `${formattedNumber} د.ج`;
  }
  return `${formattedNumber} DZD`;
}
