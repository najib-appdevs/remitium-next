export default function AppDownloadSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          {/* Mobile App Mockup Placeholders */}
          <div className="bg-[#eaf8f3] rounded-3xl w-64 h-[500px] border-8 border-gray-800 shadow-2xl relative z-10 flex flex-col mx-auto md:ml-auto md:mr-10">
            <div className="flex-1 bg-white rounded-2xl m-2 overflow-hidden border border-gray-100 flex flex-col items-center justify-center text-gray-300">
              App UI
            </div>
          </div>
          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-64 bg-emerald-50 rounded-full -z-10 blur-3xl opacity-50"></div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <div className="text-sm font-bold tracking-widest text-[#00c881] uppercase mb-3">
              Available On The Go
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b1727] leading-tight mb-6">
              Access Remitium
              <br />
              Anytime, Anywhere
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              Send money, manage your wallet, and track transactions directly
              from your smartphone. Download the Remitium app today and
              experience seamless global transfers on the go.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#0b1727] text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <div className="text-[10px] text-gray-400">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>
            <button className="bg-[#0b1727] text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <span className="text-2xl">▶️</span>
              <div className="text-left">
                <div className="text-[10px] text-gray-400">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
