import { CreditCard, Eye, Lock, Zap } from "lucide-react";

export default function VirtualCardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-navy tracking-tight">Virtual Cards</h1>
          <p className="text-gray-500 mt-2">Generate and manage secure virtual cards for all your online payments.</p>
        </div>
        <button className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
          <Zap size={18} className="text-brand-primary" />
          Create New Card
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card Visualizer */}
        <div className="relative group">
          <div className="w-full aspect-[1.6/1] bg-gradient-to-br from-[#0b2a1f] to-[#0b1727] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-10 bg-amber-400/20 rounded-lg border border-amber-400/30 flex items-center justify-center">
                  <div className="w-8 h-6 bg-amber-400/40 rounded-sm" />
                </div>
                <span className="font-bold italic text-xl">REMITIUM</span>
              </div>

              <div className="space-y-2">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">Card Number</p>
                <p className="text-2xl font-mono tracking-[0.2em]">**** **** **** 4892</p>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">Card Holder</p>
                  <p className="font-bold">JOHN DOE</p>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">Expires</p>
                  <p className="font-bold">08 / 28</p>
                </div>
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/80" />
                  <div className="w-8 h-8 rounded-full bg-amber-500/80" />
                </div>
              </div>
            </div>

            {/* Background pattern */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="#00c881">
                <circle cx="150" cy="50" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="150" cy="50" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="150" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card Controls */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10 flex flex-col justify-center">
          <h3 className="font-bold text-brand-navy mb-8">Card Controls</h3>
          <div className="space-y-4">
            {[
              { label: "Freeze Card", icon: Lock, color: "text-amber-500", bg: "bg-amber-50" },
              { label: "View Details", icon: Eye, color: "text-blue-500", bg: "bg-blue-50" },
              { label: "Manage Limits", icon: CreditCard, color: "text-purple-500", bg: "bg-purple-50" },
            ].map((control) => (
              <button key={control.label} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${control.bg} ${control.color} rounded-xl flex items-center justify-center`}>
                    <control.icon size={20} />
                  </div>
                  <span className="font-bold text-brand-navy">{control.label}</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
