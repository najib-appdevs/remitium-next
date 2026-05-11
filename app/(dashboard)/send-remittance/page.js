import { ArrowRight, Globe, Info, Zap } from "lucide-react";

export default function SendRemittancePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-navy tracking-tight">Send Remittance</h1>
          <p className="text-gray-500 mt-2">Send money to your loved ones across the globe with the best rates.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Form Area */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 md:p-12">
            <div className="space-y-8">
              {/* Amount Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">You Send</label>
                  <div className="flex items-center justify-between">
                    <input type="number" defaultValue="1000" className="bg-transparent text-2xl font-black text-brand-navy focus:outline-none w-full" />
                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">🇺🇸</div>
                      <span className="font-bold text-sm">USD</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">They Receive</label>
                  <div className="flex items-center justify-between">
                    <input type="number" defaultValue="1450000" className="bg-transparent text-2xl font-black text-brand-navy focus:outline-none w-full" />
                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] text-white font-bold">🇳🇬</div>
                      <span className="font-bold text-sm">NGN</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-primary rounded-full items-center justify-center text-white shadow-lg z-10">
                  <ArrowRight size={20} />
                </div>
              </div>

              {/* Rate Info */}
              <div className="p-6 bg-brand-primary/5 rounded-3xl border border-brand-primary/10 flex flex-col md:flex-row justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exchange Rate</p>
                    <p className="font-bold text-brand-navy">1 USD = 1,450.00 NGN</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary">
                    <Info size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fee</p>
                    <p className="font-bold text-brand-navy">$0.00 (Zero Fee)</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-brand-navy text-white py-6 rounded-3xl font-bold hover:bg-slate-800 transition-all text-lg shadow-xl shadow-slate-100">
                Continue to Transfer
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Info Area */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-emerald-950 text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Why use Remitium?</h3>
              <ul className="space-y-4">
                {[
                  "Best exchange rates in the market",
                  "Instant transfers to 100+ countries",
                  "Zero hidden fees, always transparent",
                  "Bank-level security for every cent"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-white/70">
                    <div className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
              <Globe size={180} />
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8">
            <h3 className="font-bold text-brand-navy mb-4">Delivery Options</h3>
            <div className="space-y-3">
              {["Bank Transfer", "Mobile Wallet", "Cash Pickup"].map((opt) => (
                <div key={opt} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-xs font-bold text-gray-600">
                  {opt}
                  <span className="text-brand-primary">Available</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
