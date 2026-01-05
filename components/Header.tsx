
import React from 'react';
import { Copy } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="relative flex items-center justify-between py-6 px-2">
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-gray-100 shadow-sm">
           <div className="w-10 h-10 bg-[#FF6B00] rounded-md flex flex-col items-center justify-center overflow-hidden relative">
              {/* Simple Robot SVG representation */}
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                <path d="M12 2a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zM9 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM8 15a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8z" />
              </svg>
           </div>
        </div>
        
        {/* User Info */}
        <div className="flex flex-col ml-4">
          <h2 className="text-xl font-bold text-white">+963932816776</h2>
          <div className="flex items-center text-gray-300 text-sm mt-0.5">
            <span>ID:50207</span>
            <Copy size={14} className="ml-2 cursor-pointer opacity-80" />
          </div>
        </div>
      </div>

      {/* Language Switch */}
      <button className="absolute top-0 right-0 text-white text-sm font-medium pt-2">
        اللغة
      </button>

      {/* Decorative Background Elements (TikTok/Chat icons simulation) */}
      <div className="absolute -right-4 top-10 opacity-10 pointer-events-none">
         <svg width="80" height="80" viewBox="0 0 24 24" fill="white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18.5a6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-6.5-6.5 6.5 6.5 0 0 1 10.5-5.11V.02z"/></svg>
      </div>
    </div>
  );
};
