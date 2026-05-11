export default function MoneyOutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-brand-navy tracking-tight">Money Out</h1>
        <p className="text-gray-500 mt-2">Send money to any bank account, mobile wallet, or for cash pickup globally.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8">
            <h3 className="font-bold text-brand-navy mb-6">Transfer Details</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-sm text-gray-400 italic">
                Transfer form interface will be implemented here...
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#0b1727] text-white rounded-[2.5rem] p-8 shadow-xl">
            <h3 className="font-bold mb-4">Live Exchange Rate</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400 text-sm">USD to EUR</span>
                <span className="font-bold">0.92</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400 text-sm">USD to GBP</span>
                <span className="font-bold">0.78</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400 text-sm">USD to NGN</span>
                <span className="font-bold text-brand-primary">1,450.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
