
import React from 'react';

export const InviteCard: React.FC = () => {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-5 flex items-center justify-between border border-gray-800/50">
      <div className="flex-1 mr-4">
        <h3 className="text-lg font-bold text-white mb-1">دعوة الأصدقاء</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          مقابل كل ربح يحققه صديقك بعد التسجيل، سوف تتلقى نسبة مقابلة من العمولة
        </p>
      </div>
      
      <button className="bg-[#FF2A68] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all active:scale-95 whitespace-nowrap">
        أدعو الآن
      </button>
    </div>
  );
};
