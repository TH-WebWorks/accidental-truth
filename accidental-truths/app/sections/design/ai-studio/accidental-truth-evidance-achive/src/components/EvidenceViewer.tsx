import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, Play, Pause, Activity, FileText, Image as ImageIcon, Radio, ChevronLeft, ChevronRight } from 'lucide-react';
import { EvidenceCase } from '../data/cases';

// --- Sub-Viewers ---

const DocumentViewer = ({ data }: { data: EvidenceCase['content'] }) => {
  return (
    <div className="bg-white text-black p-8 font-mono text-sm md:text-base max-w-3xl mx-auto shadow-2xl min-h-[60vh] relative overflow-hidden">
      {/* Paper texture effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
      
      <div className="border-b-2 border-black mb-6 pb-2 flex justify-between items-end">
        <h3 className="text-xl font-bold uppercase tracking-widest">Department of Defense</h3>
        <span className="text-xs border border-black px-2 py-1 font-bold">TOP SECRET // NOFORN</span>
      </div>
      
      <div className="space-y-4 leading-relaxed relative z-10">
        {data.text?.split('\n').map((paragraph, i) => {
          // Simple parser to handle [REDACTED]
          const parts = paragraph.split(/(\[REDACTED.*?\])/g);
          return (
            <p key={i} className="mb-4">
              {parts.map((part, j) => {
                if (part.startsWith('[REDACTED')) {
                  return (
                    <span key={j} className="bg-black text-black select-none mx-1 px-1">
                      {part}
                    </span>
                  );
                }
                return <span key={j}>{part}</span>;
              })}
            </p>
          );
        })}
      </div>
      
      <div className="mt-12 pt-8 border-t border-black flex justify-between text-xs uppercase">
        <span>Form 104-A</span>
        <span>Copy 1 of 5</span>
      </div>
    </div>
  );
};

const PhotoViewer = ({ data }: { data: EvidenceCase['content'] }) => {
  const [scale, setScale] = useState(1);
  
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button 
          onClick={() => setScale(s => Math.min(s + 0.5, 4))}
          className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-full border border-white/20 backdrop-blur-sm transition-colors"
        >
          <ZoomIn size={20} />
        </button>
        <button 
          onClick={() => setScale(s => Math.max(s - 0.5, 1))}
          className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-full border border-white/20 backdrop-blur-sm transition-colors"
        >
          <ZoomOut size={20} />
        </button>
      </div>
      
      <div className="overflow-hidden border border-white/10 rounded-lg shadow-2xl bg-black relative max-w-full max-h-[70vh]">
        {/* Grid overlay for "analysis" feel */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-30" 
             style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
        </div>
        
        <motion.img 
          src={data.imageUrl} 
          alt="Evidence" 
          className="max-w-full max-h-[70vh] object-contain"
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
        />
        
        {/* Crosshairs */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 border border-red-500/50 rounded-full pointer-events-none z-10 flex items-center justify-center">
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="mt-4 font-mono text-xs text-green-500 flex gap-4">
        <span>IMG_RES: 4096x2160</span>
        <span>EXP: +2.4EV</span>
        <span>ISO: 3200</span>
      </div>
    </div>
  );
};

const RadarViewer = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-2 border-green-900 bg-black overflow-hidden shadow-[0_0_50px_rgba(0,255,0,0.1)]">
        {/* Grid Rings */}
        <div className="absolute inset-0 rounded-full border border-green-900/50 scale-75"></div>
        <div className="absolute inset-0 rounded-full border border-green-900/50 scale-50"></div>
        <div className="absolute inset-0 rounded-full border border-green-900/50 scale-25"></div>
        
        {/* Crosslines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-[1px] bg-green-900/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-[1px] bg-green-900/50"></div>
        </div>
        
        {/* Sweep Animation */}
        <motion.div 
          className="absolute inset-0 origin-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-1/2 h-1/2 bg-gradient-to-l from-green-500/50 to-transparent absolute top-0 right-0 origin-bottom-left" 
               style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
        </motion.div>
        
        {/* Blips */}
        <motion.div 
          className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"
          style={{ top: '30%', left: '60%' }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0.2, 0.25, 1], delay: 0.5 }}
        />
        <motion.div 
          className="absolute w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_#f00]"
          style={{ top: '45%', left: '75%' }}
          animate={{ opacity: [0, 1, 0], x: [0, -20], y: [0, 10] }}
          transition={{ duration: 4, repeat: Infinity, times: [0.3, 0.35, 1], delay: 0.8 }}
        />
        
        {/* Data Overlay */}
        <div className="absolute top-4 left-4 font-mono text-xs text-green-500">
          <div>RNG: 50NM</div>
          <div>AZ: 124.5</div>
          <div>EL: 04.2</div>
        </div>
      </div>
    </div>
  );
};

const AudioViewer = ({ data }: { data: EvidenceCase['content'] }) => {
  const [playing, setPlaying] = useState(false);
  
  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-zinc-900 rounded-xl border border-zinc-800">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-green-500">
            <Radio size={24} />
          </div>
          <div>
            <h3 className="font-mono text-green-500 text-sm">AUDIO_LOG_78.WAV</h3>
            <p className="text-zinc-500 text-xs">FREQ: 121.5 MHz (Emergency)</p>
          </div>
        </div>
        <div className="font-mono text-red-500 animate-pulse flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          SIGNAL DEGRADED
        </div>
      </div>
      
      {/* Waveform Visualization (Simulated) */}
      <div className="h-32 bg-black rounded-lg mb-6 flex items-center justify-center gap-[2px] overflow-hidden px-4">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-green-500/50 rounded-full"
            animate={{ 
              height: playing ? [10, Math.random() * 100, 10] : 4,
              backgroundColor: playing ? '#22c55e' : '#15803d'
            }}
            transition={{ 
              duration: 0.5, 
              repeat: Infinity, 
              delay: i * 0.05,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      <div className="flex justify-center gap-6">
        <button 
          onClick={() => setPlaying(!playing)}
          className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center text-black transition-colors shadow-[0_0_20px_rgba(22,163,74,0.3)]"
        >
          {playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
        </button>
      </div>
    </div>
  );
};

// --- Main Container ---

interface EvidenceViewerProps {
  evidence: EvidenceCase;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const EvidenceViewer = ({ evidence, onClose, onNext, onPrev }: EvidenceViewerProps) => {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md"
    >
      {/* Header */}
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-zinc-900/50">
        <div className="flex items-center gap-4">
          <div className={`px-2 py-1 text-xs font-bold border ${
            evidence.classification === 'DECLASSIFIED' ? 'border-green-500 text-green-500' :
            evidence.classification === 'REDACTED' ? 'border-amber-500 text-amber-500' :
            'border-red-500 text-red-500'
          }`}>
            {evidence.classification}
          </div>
          <h2 className="font-mono text-lg truncate max-w-md">{evidence.title}</h2>
          <span className="text-zinc-500 font-mono text-sm hidden md:inline">ID: {evidence.archiveId}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex gap-1 mr-4">
             <button onClick={onPrev} className="p-2 hover:bg-white/10 rounded-full transition-colors">
               <ChevronLeft size={20} />
             </button>
             <button onClick={onNext} className="p-2 hover:bg-white/10 rounded-full transition-colors">
               <ChevronRight size={20} />
             </button>
          </div>
          
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm font-medium"
          >
            <X size={16} />
            CLOSE ARCHIVE
          </button>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          {/* Metadata Bar */}
          <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-zinc-400 border-b border-white/5 pb-4">
            <div>
              <span className="block text-zinc-600">DATE</span>
              {evidence.date}
            </div>
            <div>
              <span className="block text-zinc-600">LOCATION</span>
              {evidence.location}
            </div>
            <div>
              <span className="block text-zinc-600">TYPE</span>
              {evidence.type.toUpperCase()}
            </div>
            <div>
              <span className="block text-zinc-600">STATUS</span>
              VERIFIED
            </div>
          </div>
          
          {/* Viewer Component */}
          <div className="flex-1 min-h-[400px] flex items-center justify-center">
            {evidence.type === 'document' && <DocumentViewer data={evidence.content} />}
            {evidence.type === 'photo' && <PhotoViewer data={evidence.content} />}
            {evidence.type === 'radar' && <RadarViewer />}
            {evidence.type === 'audio' && <AudioViewer data={evidence.content} />}
          </div>
          
          {/* Description */}
          <div className="mt-8 p-4 bg-white/5 border-l-2 border-green-500 rounded-r-lg">
            <h4 className="text-xs font-bold text-green-500 mb-1 uppercase tracking-wider">Analyst Note</h4>
            <p className="text-sm text-zinc-300">{evidence.content.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
