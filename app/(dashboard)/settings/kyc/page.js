import { CheckCircle2, FileText, UserCheck } from "lucide-react";

export default function KYCPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-black text-brand-navy tracking-tight">Identity Verification</h1>
        <p className="text-gray-500 mt-2">Verify your identity to increase your transaction limits and unlock full account features.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10">
            <h3 className="font-bold text-brand-navy mb-8">Verification Steps</h3>
            <div className="space-y-8">
              {[
                { step: 1, title: "Phone Number", desc: "Verify your mobile number via SMS", status: "Verified", color: "text-brand-primary" },
                { step: 2, title: "Personal Info", desc: "Add your full legal name and address", status: "Verified", color: "text-brand-primary" },
                { step: 3, title: "ID Document", desc: "Upload a photo of your Passport or National ID", status: "In Progress", color: "text-blue-500" },
                { step: 4, title: "Face Match", desc: "Take a quick selfie to confirm your identity", status: "Pending", color: "text-gray-400" },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className={`w-10 h-10 rounded-full ${item.status === 'Verified' ? 'bg-brand-primary' : 'bg-gray-100'} flex items-center justify-center shrink-0`}>
                    {item.status === 'Verified' ? <CheckCircle2 size={20} className="text-white" /> : <span className="font-bold text-gray-400">{item.step}</span>}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-brand-navy">{item.title}</p>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.status}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-gray-100">
              <button className="w-full bg-brand-navy text-white py-5 rounded-[2rem] font-bold hover:bg-slate-800 transition-all">
                Continue Verification
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
              <UserCheck size={24} />
            </div>
            <h3 className="font-bold text-brand-navy mb-2">Current Tier: 1</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed mb-6">
              Your daily limit is currently <span className="font-bold text-brand-navy">$500</span>. Verify your ID to increase it to <span className="font-bold text-brand-navy">$50,000</span>.
            </p>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-1/2" />
            </div>
          </div>

          <div className="bg-emerald-950 text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <FileText size={20} className="text-brand-primary" />
              </div>
              <h3 className="font-bold mb-2">Why Verify?</h3>
              <p className="text-[10px] text-white/60 leading-relaxed">
                Verification helps us comply with international financial regulations and keeps your account safe from unauthorized access.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
              <UserCheck size={140} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
