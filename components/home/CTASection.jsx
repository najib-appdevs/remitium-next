import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="bg-[#00c881] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Send Money Effortlessly?
          </h2>
          <p className="text-emerald-50 text-lg opacity-90 max-w-2xl">
            Join thousands of satisfied users who trust Remitium for their
            international money transfers. It&apos;s fast, secure, and easy to
            use.
          </p>
        </div>

        <div className="shrink-0">
          <Button className="bg-white text-[#00c881] hover:bg-emerald-50 font-bold px-8 py-4 text-lg">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
