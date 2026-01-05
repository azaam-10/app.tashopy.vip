
import React, { useState } from 'react';
import { Header } from './components/Header';
import { BalanceCard } from './components/BalanceCard';
import { InviteCard } from './components/InviteCard';
import { MenuList } from './components/MenuList';
import { BottomNav } from './components/BottomNav';
import { ActionModal } from './components/ActionModal';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const userName = "+963932816776";

  return (
    <div className="min-h-screen bg-black flex flex-col pb-24 relative overflow-x-hidden">
      {/* Main Content with conditional blur - Adjusted to blur-[2px] for a subtler effect */}
      <div className={`flex flex-col transition-all duration-500 ${showModal ? 'blur-[2px] pointer-events-none scale-[0.98]' : ''}`}>
        {/* Top Section with Black Background */}
        <div className="p-4 space-y-4">
          <Header />
          <BalanceCard />
          <InviteCard />
          
          {/* Logout Button */}
          <button className="w-full bg-[#E8EDF2] text-[#4A5568] font-medium py-3 rounded-xl transition-active active:scale-[0.98] mt-2">
            تسجيل الخروج
          </button>
        </div>

        {/* Bottom Section with White Background */}
        <div className="mt-4 bg-white rounded-t-[2rem] flex-grow shadow-2xl p-6 relative">
          <MenuList />
        </div>
      </div>

      {/* Floating Chat Button */}
      {!showModal && (
        <button className="fixed bottom-24 right-6 w-14 h-14 bg-[#FF2D55] rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 z-40 animate-bounce-subtle">
          <MessageCircle className="text-white fill-current" size={28} />
        </button>
      )}

      {/* Action Modal Overlay */}
      {showModal && <ActionModal userName={userName} />}

      <BottomNav />

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
