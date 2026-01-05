
import React from 'react';
import { RefreshCcw } from 'lucide-react';

export const BalanceCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] p-6 bg-gradient-to-r from-[#FF3F6F] to-[#FF0055] shadow-lg">
      {/* Content */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#4FD1C5] rounded-full flex items-center justify-center text-white border-2 border-white/20">
            <span className="font-bold text-lg">₮</span>
          </div>
          <div className="flex items-baseline ml-3">
            <span className="text-4xl font-bold text-white tracking-tight">28411.48</span>
            <span className="text-sm font-medium text-white/90 ml-2">USDT</span>
          </div>
        </div>
        
        <button className="text-white hover:rotate-180 transition-transform duration-500">
          <RefreshCcw size={32} />
        </button>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 bg-white text-[#FF0055] font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg">
          انسحاب
        </button>
        <button className="flex-1 bg-[#111111] text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg">
          إعادة الشحن
        </button>
      </div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
    </div>
  );
};
