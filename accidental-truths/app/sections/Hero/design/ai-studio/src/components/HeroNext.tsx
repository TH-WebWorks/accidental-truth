import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * HeroNext Component
 * 
 * A cinematic hero section for "Accidental Truth: Next".
 * Designed for Next.js 14+ App Router.
 * 
 * Note: In a real Next.js environment, replace the local Image component 
 * with 'import Image from "next/image"'.
 */

// Mock Next.js Image component for compatibility with non-Next environments
const Image = ({ src, alt, fill, className, priority }: { 
  src: string; 
  alt: string; 
  fill?: boolean; 
  className?: string; 
  priority?: boolean;
}) => (
  <img
    src={src}
    alt={alt}
    className={`${className} ${fill ? 'absolute inset-0 w-full h-full object-cover' : ''}`}
    loading={priority ? 'eager' : 'lazy'}
  />
);

const NAV_ITEMS = [
  'WATCH NEXT',
  'TRAILER',
  'ABOUT',
  'ORIGINAL FILM',
  'MERCH',
  'PRESS',
];

const FOOTER_LINKS = [
  'TBD',
  'COMING 2026',
  'MUFON TV',
  'RON JAMES TELEVISION',
];

export default function HeroNext() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 md:p-12 font-sans selection:bg-cyan-500/30 text-white relative">
      {/* External Home Link */}
      <div className="absolute top-6 left-10 text-white/40 text-xs font-medium tracking-widest uppercase pointer-events-none">
        Home
      </div>

      {/* Subtle Grid Background */}
      <div 
        className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      ></div>

      {/* Browser Frame */}
      <div className="relative z-10 w-full max-w-[1400px] aspect-[16/10] md:aspect-[16/9] bg-black rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] border-[3px] border-white/90 flex flex-col">
        
        {/* Browser Chrome */}
        <div className="h-10 bg-[#E5E5E5] border-b border-black/10 flex items-center px-5 shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#D1D1D1]"></div>
            <div className="w-3 h-3 rounded-full bg-[#D1D1D1]"></div>
            <div className="w-3 h-3 rounded-full bg-[#D1D1D1]"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative flex-1 overflow-hidden group">
          
          {/* Hero Image Container */}
          <div className="absolute inset-0">
            <Image
              src="/assets/hero/accidental-truth-next-hero.jpg"
              alt="Accidental Truth: Next Hero"
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Gradient Overlays - Enhanced for readability as requested */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
          </div>

          {/* Navigation Overlay */}
          <nav className="absolute top-0 left-0 right-0 z-30 px-10 py-6 flex items-center justify-between">
            {/* Logo */}
            <div className="font-bold tracking-[0.1em] text-lg md:text-xl drop-shadow-lg select-none text-white/90">
              ACCIDENTAL TRUTH
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-cyan-400 text-[11px] font-bold tracking-[0.1em] transition-all"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Action */}
            <div className="flex items-center gap-6">
              <button className="hidden sm:block bg-[#00C2FF] hover:bg-[#00A3D9] text-white px-6 py-2 rounded-lg text-[11px] font-bold tracking-[0.05em] transition-all shadow-[0_0_15px_rgba(0,194,255,0.3)] active:scale-95">
                WATCH / BUY
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="absolute inset-0 z-40 bg-black/95 lg:hidden flex flex-col items-center justify-center gap-8 p-8 animate-in fade-in zoom-in duration-300">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-full"
              >
                <X size={32} />
              </button>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-2xl font-black tracking-[0.2em] hover:text-cyan-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 bg-cyan-500 text-black px-12 py-4 rounded-full text-sm font-black tracking-[0.2em]">
                WATCH / BUY
              </button>
            </div>
          )}

          {/* Bottom Left Content */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl z-20">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
                  ACCIDENTAL TRUTH: NEXT
                </h1>
                <p className="text-white/80 text-base md:text-lg font-normal max-w-2xl">
                  Disclosure is only the beginning. The next chapter.
                </p>
              </div>

              {/* Secondary Title Overlay (from screenshot) */}
              <div className="absolute bottom-40 left-0 w-full text-center pointer-events-none opacity-20 hidden lg:block">
                <h2 className="text-5xl font-bold tracking-[0.5em] text-white uppercase">
                  BEYOND UFO DISCLOSURE
                </h2>
                <p className="text-[10px] tracking-[0.4em] mt-4 text-white/60">
                  A FILM BY RON JAMES * NARRATED BY MATTHEW MODINE
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#00C2FF] hover:bg-[#00A3D9] text-white px-8 py-3 rounded-lg text-xs font-bold tracking-[0.05em] transition-all active:scale-95">
                  WATCH / BUY
                </button>
                <button className="border border-white/60 hover:border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg text-xs font-bold tracking-[0.05em] transition-all active:scale-95">
                  WATCH TRAILER
                </button>
              </div>

              {/* Link Row */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/50 hover:text-white text-[10px] font-medium tracking-wider transition-colors uppercase"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 -right-12 w-24 h-24 border border-cyan-500/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-1/4 -left-12 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
