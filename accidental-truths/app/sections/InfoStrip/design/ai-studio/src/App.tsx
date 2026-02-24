/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FilmInfoStrip from './components/FilmInfoStrip';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Hero Placeholder */}
      <div className="flex-1 flex items-center justify-center text-white/20 uppercase tracking-widest text-sm">
        Hero Section Placeholder
      </div>
      
      {/* Film Info Strip */}
      <FilmInfoStrip />
      
      {/* Content Placeholder */}
      <div className="h-[200px] bg-[#050505]" />
    </div>
  );
}

