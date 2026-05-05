export default function ImpactSection() {
  return (
    <section className="py-24 px-6 bg-[#fbfdfc]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          {/* Illustration Placeholder */}
          <div className="bg-[#eaf8f3] rounded-full aspect-square w-full max-w-md mx-auto flex items-center justify-center border-4 border-dashed border-[#00c881]/20">
            <span className="text-[#00c881] font-semibold">
              Globe Illustration
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-12">
          <div>
            <div className="text-sm font-bold tracking-widest text-[#00c881] uppercase mb-3">
              Trusted By Thousands
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b1727] leading-tight mb-6">
              Our Growing Impact
              <br />
              Across the Globe
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              Join a rapidly expanding community of users who trust Remitium for
              their international money transfers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-[#0b1727]">
                5M<span className="text-[#00c881]">+</span>
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                Active Global
                <br />
                Users
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-[#0b1727]">
                1.2M<span className="text-[#00c881]">+</span>
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                Daily Transfer
                <br />
                Volume
              </p>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <h3 className="text-4xl font-extrabold text-[#0b1727]">
                100<span className="text-[#00c881]">+</span>
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                Supported
                <br />
                Countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
