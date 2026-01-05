
import React from 'react';
import { 
  User, 
  Wallet, 
  History, 
  ArrowDownCircle, 
  Info, 
  HelpCircle, 
  ChevronRight,
  ClipboardList,
  FileText
} from 'lucide-react';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => (
  <div className="flex items-center justify-between py-5 border-b border-gray-100 last:border-0 cursor-pointer active:bg-gray-50 transition-colors">
    <div className="flex items-center space-x-4 flex-row-reverse w-full">
      <ChevronRight className="text-gray-400 ml-auto" size={20} />
      <span className="text-gray-800 font-medium text-[17px] mr-4 text-right flex-grow">{label}</span>
      <div className="text-gray-500 flex items-center justify-center w-8">
        {icon}
      </div>
    </div>
  </div>
);

export const MenuList: React.FC = () => {
  const items = [
    { icon: <User size={24} strokeWidth={1.5} />, label: 'المعلومات الشخصية' },
    { icon: <ClipboardList size={24} strokeWidth={1.5} />, label: 'تفاصيل الصندوق' },
    { icon: <FileText size={24} strokeWidth={1.5} />, label: 'سجل إعادة الشحن' },
    { icon: <History size={24} strokeWidth={1.5} />, label: 'سجل السحب' },
    { icon: <Info size={24} strokeWidth={1.5} />, label: 'نبذة عنا' },
    { icon: <HelpCircle size={24} strokeWidth={1.5} />, label: 'مساعدة' },
  ];

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <MenuItem key={index} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
};
