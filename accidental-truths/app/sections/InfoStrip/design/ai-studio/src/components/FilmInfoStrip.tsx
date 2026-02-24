import React from 'react';

/**
 * FilmInfoStrip Component
 * A production-ready horizontal strip for film metadata.
 * 
 * Requirements:
 * - Full-width, glassy dark background
 * - Data-driven items (Label + Value)
 * - Responsive horizontal scroll on mobile
 * - Accessible semantic markup
 */

interface InfoItem {
  label: string;
  value: string;
  href?: string;
}

const DEFAULT_INFO: InfoItem[] = [
  { label: 'Runtime', value: 'TBD' },
  { label: 'Release', value: '2026' },
  { label: 'Where to Watch', value: 'MUFON TV', href: 'https://mufon.tv' },
  { label: 'Producer', value: 'RON JAMES TELEVISION', href: '#' },
];

interface FilmInfoStripProps {
  items?: InfoItem[];
}

export default function FilmInfoStrip({ items = DEFAULT_INFO }: FilmInfoStripProps) {
  return (
    <section 
      aria-label="Film Information"
      className="relative w-full h-[48px] sm:h-[52px] bg-[#111111] border-t border-white/5 flex items-center overflow-x-auto scrollbar-hide"
    >
      <ul className="container mx-auto px-4 flex justify-start sm:justify-center items-center whitespace-nowrap min-w-max sm:min-w-0 list-none">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center">
            <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.18em] uppercase font-medium">
              <span className="text-[#888888] select-none">{item.label}</span>
              
              {item.href ? (
                <a 
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors duration-200 ease-out"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-white font-semibold">{item.value}</span>
              )}
            </div>
            
            {/* Subtle vertical divider */}
            {index < items.length - 1 && (
              <div 
                className="mx-8 sm:mx-10 md:mx-12 h-4 w-[1px] bg-white/10 hidden sm:block" 
                aria-hidden="true"
              />
            )}
            
            {/* Mobile spacing */}
            {index < items.length - 1 && (
              <div className="w-8 sm:hidden" aria-hidden="true" />
            )}
          </li>
        ))}
      </ul>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
