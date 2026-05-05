import Card from "../ui/Card";

export default function TestimonialSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="text-sm font-bold tracking-widest text-[#00c881] uppercase mb-3">
          What Our Users Say
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0b1727] leading-tight mb-16">
          See Why People Around The
          <br />
          World Trust Remitium For Their
          <br />
          Money Transfer Needs.
        </h2>

        <div className="relative">
          {/* Nav Buttons */}
          <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-12 w-10 h-10 rounded-full bg-[#00c881] text-white items-center justify-center hover:bg-[#00a66b] z-20">
            ←
          </button>

          <Card className="px-6 py-10 md:px-20 mx-0 md:mx-4 border border-gray-100 shadow-xl shadow-gray-100/50">
            <div className="text-[#00c881] text-5xl md:text-6xl opacity-20 mx-auto w-fit mb-4 md:mb-6 h-8 md:h-10 overflow-hidden font-serif">
              &quot;&quot;
            </div>
            <p className="text-lg md:text-2xl font-medium text-[#0b1727] italic leading-relaxed mb-6 md:mb-8">
              &quot;Remitium makes it so easy to send money to my family abroad.
              The secure platform and multiple payment options give me peace of
              mind.&quot;
            </p>
            <div className="flex justify-center gap-1 text-yellow-400 mb-4">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <h4 className="font-bold text-lg text-[#0b1727]">Sarah Johnson</h4>
            <p className="text-sm text-gray-500">Regular User</p>
          </Card>

          <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-12 w-10 h-10 rounded-full bg-[#00c881] text-white items-center justify-center hover:bg-[#00a66b] z-20">
            →
          </button>

          {/* Mobile Nav Dots/Arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-400 flex items-center justify-center hover:bg-gray-50">
              ←
            </button>
            <button className="w-10 h-10 rounded-full bg-[#00c881] text-white flex items-center justify-center hover:bg-[#00a66b]">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent -z-10"></div>
    </section>
  );
}
