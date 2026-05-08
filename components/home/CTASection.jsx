export default function CTASection() {
  return (
    <section className="bg-brand-primary py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Send Money Effortlessly?
          </h2>
          <p className="text-emerald-50 text-lg opacity-90 max-w-2xl">
            Join thousands of satisfied users and experience secure, fast, and
            hassle-free money transfers with Remitium.
          </p>
        </div>

        <div className="shrink-0">
          <button className="bg-white hover:bg-gray-50 text-brand-primary font-bold px-10 py-4 rounded-md transition-all shadow-lg shadow-brand-primary/20 active:scale-95 text-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
