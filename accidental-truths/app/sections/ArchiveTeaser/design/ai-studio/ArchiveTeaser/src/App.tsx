import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, X,
  Database, User, Hash, FileText, ArrowUpRight
} from 'lucide-react';
import { MOCK_DATA, RiskLevel, Agency } from './data';

// --- Utility Components ---

const RiskTag = ({ level }: { level: RiskLevel }) => {
  const colors = {
    LOW: "bg-emerald-900/30 text-emerald-400 border-emerald-900/50",
    MEDIUM: "bg-blue-900/30 text-blue-400 border-blue-900/50",
    HIGH: "bg-orange-900/30 text-orange-400 border-orange-900/50",
    CRITICAL: "bg-red-900/30 text-red-400 border-red-900/50"
  };
  
  return (
    <span className={`px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono border rounded-sm ${colors[level]}`}>
      {level}
    </span>
  );
};

// --- Main Application ---

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  // Filters
  const [search, setSearch] = useState("");
  const [agencyFilter, setAgencyFilter] = useState<Agency | "ALL">("ALL");

  const filteredData = useMemo(() => {
    return MOCK_DATA.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                            item.id.toLowerCase().includes(search.toLowerCase()) ||
                            item.fullText.toLowerCase().includes(search.toLowerCase());
      const matchesAgency = agencyFilter === "ALL" || item.agency === agencyFilter;
      return matchesSearch && matchesAgency;
    });
  }, [search, agencyFilter]);

  const selectedCase = useMemo(() => 
    MOCK_DATA.find(c => c.id === selectedId), 
  [selectedId]);

  return (
    <div className="min-h-[760px] bg-transparent text-zinc-400 font-sans selection:bg-cyan-900 selection:text-white overflow-x-hidden">
      
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#0b1016]/78 backdrop-blur-sm border-b border-white/5 h-16 flex items-center justify-between px-6 md:px-8">
        <div>
          <h1 className="text-white/90 font-display font-medium tracking-[0.14em] text-base uppercase">
            Accidental Truth<span className="text-cyan-500">:</span> Next
          </h1>
          <p className="text-[10px] font-mono text-zinc-600 tracking-[0.3em] uppercase mt-1">
            Archive Interface v2.4
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full">
            <Search size={14} className="text-zinc-500" />
            <input 
              type="text" 
              placeholder="SEARCH ARCHIVE..." 
              className="bg-transparent border-none outline-none text-xs font-mono w-48 text-white placeholder-zinc-700 uppercase tracking-wide"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="flex min-h-[760px]">
        
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-16 self-start max-h-[calc(100vh-4rem)] border-r border-white/5 bg-[#0b1016]/55 p-6 overflow-y-auto">
          <div className="mb-10">
            <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">Agency Filter</h3>
            <div className="flex flex-col gap-1">
              {['ALL', 'NRO', 'USAF', 'NAVY', 'CIA', 'CONGRESS', 'AARO'].map(agency => (
                <button
                  key={agency}
                  onClick={() => setAgencyFilter(agency as any)}
                  className={`text-xs px-3 py-2 text-left border-l-2 transition-all font-mono uppercase tracking-wide ${
                    agencyFilter === agency 
                      ? 'border-cyan-500 text-white bg-white/[0.02]' 
                      : 'border-transparent text-zinc-600 hover:text-zinc-400 hover:border-zinc-800'
                  }`}
                >
                  {agency}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">System Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
                <span>INDEXED FILES</span>
                <span className="text-white">{MOCK_DATA.length}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
                <span>LAST UPDATE</span>
                <span className="text-white">2024.11.02</span>
              </div>
              <div className="w-full h-px bg-white/5 my-4" />
              <div className="text-[10px] text-zinc-700 leading-relaxed">
                WARNING: THIS ARCHIVE CONTAINS CLASSIFIED INTELLIGENCE. UNAUTHORIZED DISTRIBUTION IS A FEDERAL OFFENSE.
              </div>
            </div>
          </div>
        </aside>

        {/* Main Grid */}
        <main className="flex-1 p-6 md:p-10">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-display font-light text-white tracking-tight">Evidence Index</h2>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest hidden md:inline-block">
              Showing {filteredData.length} Records
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredData.map((item, index) => (
              <motion.div
                layoutId={item.id}
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                onClick={() => setSelectedId(item.id)}
                className="group bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer flex flex-col h-[280px] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[10px] text-zinc-600 tracking-wider group-hover:text-cyan-500/70 transition-colors">
                      {item.id}
                    </span>
                    <RiskTag level={item.riskLevel} />
                  </div>
                  
                  <h3 className="text-white font-display text-xl font-light leading-snug mb-3 group-hover:text-cyan-50 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-3 mb-auto">
                    {item.excerpt}
                  </p>

                  <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">{item.agency}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-800" />
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">{item.date}</span>
                    </div>
                    <ArrowUpRight size={14} className="text-zinc-700 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>

      {/* Detail View Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-12 lg:p-24">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div 
              layoutId={selectedCase.id}
              className="relative w-full h-full bg-[#050505] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-7xl mx-auto"
            >
              {/* Left Column: Metadata */}
              <div className="w-full md:w-80 bg-[#080808] border-r border-white/5 p-8 flex flex-col overflow-y-auto shrink-0">
                <div className="mb-10">
                  <span className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase block mb-2">Case File ID</span>
                  <h2 className="font-mono text-lg text-white tracking-wider">{selectedCase.id}</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Status</span>
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-wide">
                      {selectedCase.status}
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Agency</span>
                    <div className="text-sm font-display text-white tracking-wide">{selectedCase.agency}</div>
                  </div>

                  <div>
                    <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Involved Parties</span>
                    <div className="flex flex-col gap-2">
                      {selectedCase.individuals.map(person => (
                        <div key={person} className="flex items-center gap-2 text-zinc-400 text-sm font-light">
                          <User size={12} className="text-zinc-600" />
                          {person}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5 mt-auto">
                     <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">Related Files</span>
                     <div className="flex flex-col gap-3">
                       {selectedCase.relatedIds.length > 0 ? (
                         selectedCase.relatedIds.map(rid => (
                           <button 
                             key={rid}
                             onClick={(e) => {
                               e.stopPropagation();
                               setSelectedId(rid);
                             }}
                             className="text-xs font-mono text-cyan-600 hover:text-cyan-400 transition-colors text-left truncate flex items-center gap-2"
                           >
                             <Hash size={10} />
                             {rid}
                           </button>
                         ))
                       ) : (
                         <span className="text-xs font-mono text-zinc-800 italic">No linked files.</span>
                       )}
                     </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="flex-1 bg-[#050505] overflow-y-auto relative">
                <div className="sticky top-0 right-0 p-6 flex justify-end bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none">
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="pointer-events-auto p-2 text-zinc-500 hover:text-white transition-colors bg-black/50 backdrop-blur-sm rounded-full border border-white/10"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="px-8 md:px-16 pb-16 pt-8 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h1 className="text-4xl md:text-5xl font-display font-light text-white mb-8 leading-tight tracking-tight">
                      {selectedCase.title}
                    </h1>

                    <div className="flex gap-4 mb-10">
                      <button className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 transition-all uppercase tracking-wider">
                        <Database size={14} />
                        Download Dossier
                      </button>
                      <button className="flex items-center gap-3 px-5 py-3 bg-cyan-900/10 hover:bg-cyan-900/20 border border-cyan-900/30 hover:border-cyan-900/50 text-xs font-mono text-cyan-400 transition-all uppercase tracking-wider">
                        <FileText size={14} />
                        Raw Data
                      </button>
                    </div>

                    {/* Video Placeholder */}
                    <div className="w-full aspect-video bg-[#080808] border border-white/5 mb-10 relative group overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-500 cursor-pointer backdrop-blur-sm">
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white/80 border-b-[10px] border-b-transparent ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                        Evidence Clip {selectedCase.id}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                      <p className="font-display text-2xl text-zinc-300 font-light leading-relaxed mb-10">
                        {selectedCase.excerpt}
                      </p>
                      
                      <div className="font-sans text-base font-light leading-loose text-zinc-400 space-y-6">
                        <p>
                          {selectedCase.fullText.split(' ').map((word, i) => {
                            const isRedacted = ((i * 37) + (selectedCase.id.length * 13)) % 100 < selectedCase.redactedPercentage;
                            return isRedacted ? (
                              <span key={i} className="redacted mx-0.5 text-transparent bg-zinc-800 rounded-sm px-1 select-none">████</span>
                            ) : (
                              <span key={i} className="mx-0.5">{word}</span>
                            );
                          })}
                        </p>
                        
                        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                            Authorized By: {selectedCase.individuals[0] || 'UNKNOWN'}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                            Clearance: {selectedCase.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
