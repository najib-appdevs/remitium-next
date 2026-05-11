export default function AddMoneyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-brand-navy tracking-tight">Add Money</h1>
        <p className="text-gray-500 mt-2">Fund your Remitium wallet instantly using various payment methods.</p>
      </div>

      <div className="max-w-2xl bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-brand-primary/5 border border-brand-primary/10 rounded-3xl cursor-pointer hover:bg-brand-primary/10 transition-all group">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/></svg>
              </div>
              <p className="font-bold text-brand-navy">Bank Transfer</p>
              <p className="text-xs text-gray-500 mt-1">Instant via Open Banking</p>
            </div>
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-3xl cursor-pointer hover:bg-blue-100 transition-all group">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h10"/></svg>
              </div>
              <p className="font-bold text-brand-navy">Debit Card</p>
              <p className="text-xs text-gray-500 mt-1">Visa, Mastercard, Maestro</p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-center text-gray-400 text-sm italic">Funding interface will be implemented here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
