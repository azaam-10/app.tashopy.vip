
import React from 'react';
import { Home, ClipboardList, Monitor, Users, UserCircle } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  highlighted?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, highlighted }) => (
  <div className={`flex flex-col items-center justify-center space-y-1 cursor-pointer transition-all ${highlighted ? '-mt-8' : ''}`}>
    <div className={`p-2 rounded-xl transition-all ${
      highlighted 
        ? 'bg-black text-white shadow-xl scale-125 border-4 border-white' 
        : active ? 'text-[#FF2A68]' : 'text-gray-400'
    }`}>
      {icon}
    </div>
    <span className={`text-[10px] font-medium transition-colors ${
      active ? 'text-[#FF2A68]' : 'text-gray-500'
    }`}>
      {label}
    </span>
  </div>
);

export const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2 flex items-center justify-between pb-6 z-50">
      <NavItem icon={<Home size={24} />} label="الصفحة الرئيسية" />
      <NavItem icon={<ClipboardList size={24} />} label="الطلب" />
      <NavItem icon={<Monitor size={24} />} label="معاملة" highlighted />
      <NavItem icon={<Users size={24} />} label="فريق" />
      <NavItem icon={<UserCircle size={24} />} label="بلدي" active />
    </div>
  );
};
