import React from 'react';
import { motion } from 'motion/react';
import { EvidenceCase } from '../data/cases';
import { FileText, Image as ImageIcon, Radio, Activity, Lock } from 'lucide-react';

interface CaseCardProps {
  data: EvidenceCase;
  onClick: (id: string) => void;
}

export const CaseCard: React.FC<CaseCardProps> = ({ data, onClick }) => {
  const Icon = {
    document: FileText,
    photo: ImageIcon,
    audio: Radio,
    radar: Activity
  }[data.type];

  const statusColor = {
    'DECLASSIFIED': 'text-green-500 border-green-500',
    'REDACTED': 'text-amber-500 border-amber-500',
    'CONFIDENTIAL': 'text-red-500 border-red-500',
    'TOP SECRET': 'text-red-600 border-red-600'
  }[data.classification];

  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(data.id)}
      className="flex-shrink-0 w-[300px] h-[420px] bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer relative group overflow-hidden rounded-sm flex flex-col"
    >
      {/* Top Status Bar */}
      <div className="h-2 w-full flex">
        <div className={`flex-1 ${data.classification === 'DECLASSIFIED' ? 'bg-green-600' : 'bg-red-600'}`}></div>
        <div className="w-8 bg-zinc-800"></div>
        <div className="w-2 bg-white/20"></div>
      </div>
      
      {/* Image Area */}
      <div className="h-48 w-full relative overflow-hidden bg-black">
        <img 
          src={data.thumbnail} 
          alt={data.title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        
        {/* Type Icon Overlay */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/80">
          <Icon size={18} />
        </div>
        
        {/* ID Overlay */}
        <div className="absolute bottom-2 left-4 font-mono text-xs text-white/60 tracking-widest">
          {data.archiveId}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-5 flex flex-col flex-1">
        <div className={`text-[10px] font-bold border w-fit px-2 py-0.5 mb-3 rounded-sm ${statusColor}`}>
          {data.classification}
        </div>
        
        <h3 className="font-display text-2xl font-medium leading-none mb-2 text-zinc-100 group-hover:text-white transition-colors">
          {data.title}
        </h3>
        
        <div className="mt-auto space-y-2">
          <div className="h-[1px] w-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors"></div>
          <div className="flex justify-between items-end">
            <div className="text-xs font-mono text-zinc-500">
              <div className="mb-1">LOC: {data.location}</div>
              <div>DAT: {data.date}</div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-white bg-white/10 px-2 py-1 rounded">
              OPEN FILE
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20"></div>
    </motion.div>
  );
};
