export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          {/* Illustration Placeholder */}
          <div className="bg-[#eaf8f3] rounded-3xl p-8 aspect-video flex items-center justify-center border-4 border-dashed border-[#00c881]/20">
            <span className="text-[#00c881] font-semibold">
              How It Works Illustration
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-10">
          <div>
            <div className="text-sm font-bold tracking-widest text-[#00c881] uppercase mb-3">
              How It Works
            </div>
            <h2 className="text-4xl font-bold text-[#0b1727] leading-tight">
              Easy, Fast, And
              <br />
              Secure Money
              <br />
              Transfers
            </h2>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#00c881] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-[#00c881]/30">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0b1727] mb-2">
                  Sign Up or Log In
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Create an account or log in to get started with your secure
                  money transfers.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#00c881] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-[#00c881]/30">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0b1727] mb-2">
                  Add Details and Choose a Service
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Enter recipient details, select your preferred transfer
                  method, and see transparent rates instantly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#00c881] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-[#00c881]/30">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0b1727] mb-2">
                  Send Money Securely
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Confirm your transaction and track it in real-time until it
                  reaches its destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
