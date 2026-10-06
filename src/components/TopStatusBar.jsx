import React from 'react';
import { Wifi, Battery } from 'lucide-react';

export default function TopStatusBar({ dark = false }) {
  return (
    <div className={`w-full px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold select-none z-30 transition-colors ${
      dark ? 'text-white' : 'text-slateWarm-800'
    }`}>
      {/* Hora simulada */}
      <span className="tracking-tight text-[13px] font-bold">09:41</span>

      {/* Dynamic island / Notch simétrico */}
      <div className="w-24 h-4 bg-black/90 rounded-full mx-auto shadow-inner flex items-center justify-end px-2">
        <div className="w-2 h-2 rounded-full bg-emerald-950/80 border border-emerald-500/30"></div>
      </div>

      {/* Iconos de conectividad */}
      <div className="flex items-center space-x-1.5">
        <span className="text-[10px] font-bold tracking-tight">5G</span>
        <Wifi size={13} strokeWidth={2.5} />
        <div className="flex items-center">
          <Battery size={16} strokeWidth={2.2} className="rotate-90" />
        </div>
      </div>
    </div>
  );
}
