import { ShieldCheck, Smartphone } from "lucide-react";

export default function TwoFactorPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl font-black text-brand-navy tracking-tight">2FA Security</h1>
        <p className="text-gray-500 mt-2">Add an extra layer of security to your account by enabling two-factor authentication.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-24 h-24 bg-brand-primary/10 rounded-[2rem] flex items-center justify-center text-brand-primary shrink-0">
            <ShieldCheck size={48} />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-navy">Authenticator App</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Use an app like Google Authenticator or Authy to generate one-time codes for every login attempt and critical transaction.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/5 w-fit px-3 py-1 rounded-md">
              <Smartphone size={12} />
              Recommended
            </div>
          </div>
        </div>

        <div className="mt-10 pt-10 border-t border-gray-100 space-y-6">
          <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-200">
                <ShieldCheck size={20} className="text-gray-400" />
              </div>
              <div>
                <p className="font-bold text-brand-navy">Two-Factor Authentication</p>
                <p className="text-xs text-gray-400 mt-1">Status: <span className="text-red-500 font-bold uppercase">Disabled</span></p>
              </div>
            </div>
            <button className="bg-brand-primary text-white px-8 py-3 rounded-2xl font-bold hover:bg-brand-primary-hover transition-all">
              Enable Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
