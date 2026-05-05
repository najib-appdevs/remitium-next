import Button from "../ui/Button";
import TransferWidget from "./TransferWidget";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 px-6 overflow-hidden bg-[#fbfdfc]">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block bg-[#eaf8f3] text-[#00c881] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          World&apos;s Best Transfer App
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b1727] leading-tight mb-4">
          Seamless Global
          <br />
          Transfers
          <span className="block text-[#00c881] mt-2 underline decoration-[#00c881] decoration-4 underline-offset-8">
            Anytime, Anywhere
          </span>
        </h1>

        <div className="mt-10">
          <Button className="shadow-lg shadow-[#00c881]/20">Get Started</Button>
        </div>

        <div className="mt-20">
          <TransferWidget />
        </div>
      </div>

      {/* Decorative Background Elements (Placeholders) */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  );
}
