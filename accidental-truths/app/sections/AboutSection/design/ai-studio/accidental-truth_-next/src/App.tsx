/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cases } from './data/cases';
import { CaseCard } from './components/CaseCard';
import { EvidenceViewer } from './components/EvidenceViewer';
import { Search, Menu, Globe, ShieldAlert } from 'lucide-react';

export default function App() {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  
  const selectedCase = cases.find(c => c.id === selectedCaseId);
  
  const handleNext = () => {
    if (!selectedCaseId) return;
    const currentIndex = cases.findIndex(c => c.id === selectedCaseId);
    const nextIndex = (currentIndex + 1) % cases.length;
    setSelectedCaseId(cases[nextIndex].id);
  };

  const handlePrev = () => {
    if (!selectedCaseId) return;
    const currentIndex = cases.findIndex(c => c.id === selectedCaseId);
    const prevIndex = (currentIndex - 1 + cases.length) % cases.length;
    setSelectedCaseId(cases[prevIndex].id);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-green-900 selection:text-white overflow-hidden flex flex-col">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1),rgba(0,0,0,1))]"></div>
        <div className="scanline absolute inset-0 opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 h-20 border-b border-white/10 flex items-center justify-between px-8 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-sm bg-white/5">
            <ShieldAlert size={20} className="text-white/80" />
          </div>
          <div>
            <h1 className="font-display text-xl tracking-widest uppercase">Accidental Truth: Next</h1>
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 tracking-widest">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              SECURE CONNECTION ESTABLISHED
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Globe size={14} />
            <span>GLOBAL ARCHIVE ACCESS</span>
          </div>
          <div>LEVEL 5 CLEARANCE</div>
          <div>USER: GUEST_PROXY_01</div>
        </div>

        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Menu size={24} />
        </button>
      </header>

      {/* Main Content - Archive Browser */}
      <main className="relative z-10 flex-1 flex flex-col justify-center overflow-hidden">
        <div className="px-8 mb-6 flex justify-between items-end">
          <div>
            <h2 className="font-display text-4xl md:text-6xl uppercase opacity-90 mb-2">Evidence Archive</h2>
            <p className="font-mono text-zinc-500 max-w-md text-sm">
              Accessing declassified government records. Some files remain redacted under National Security Act 1947.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-2 border-b border-white/20 pb-2 w-64">
            <Search size={16} className="text-zinc-500" />
            <input 
              type="text" 
              placeholder="SEARCH DATABASE..." 
              className="bg-transparent border-none outline-none font-mono text-sm w-full placeholder:text-zinc-700"
            />
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="w-full overflow-x-auto pb-12 pt-4 px-8 scrollbar-hide">
          <div className="flex gap-6 w-max">
            {cases.map((c) => (
              <CaseCard 
                key={c.id} 
                data={c} 
                onClick={setSelectedCaseId} 
              />
            ))}
            {/* Spacer for end of list */}
            <div className="w-12"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 h-12 border-t border-white/10 flex items-center justify-between px-8 bg-black text-[10px] font-mono text-zinc-600 uppercase">
        <div>System Version 2.4.1 // Build 9942</div>
        <div className="flex gap-4">
          <span>Privacy Protocol</span>
          <span>Terms of Access</span>
          <span>Report Breach</span>
        </div>
      </footer>

      {/* Viewer Overlay */}
      <AnimatePresence>
        {selectedCase && (
          <EvidenceViewer 
            evidence={selectedCase} 
            onClose={() => setSelectedCaseId(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

