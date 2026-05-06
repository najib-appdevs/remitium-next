"use client";

import TransferWidget from "@/components/home/TransferWidget";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#f7faf8]">
      {/* Background: dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,129,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background: blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,200,129,0.13) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -right-10 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,66,90,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
          Welcome to Remitium
        </div>

        {/* Headline - Added mb-12 for more breathability */}
        <h1 className="font-semibold text-[#0b1727] leading-[1.1] tracking-tight text-5xl md:text-7xl mb-12">
          Seamless Global
          <br />
          Transfers
          <br />
          <span className="text-[#00c881] relative inline-block ml-3">
            Anywhere, Anytime
            <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-[#00c881] rounded-sm" />
          </span>
        </h1>

        {/* CTA - Added mb-20 to separate the pitch from the tool */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#00c881] hover:bg-[#00a96c] active:scale-[0.98] text-white text-base font-semibold px-8 py-4 rounded-xl transition-all duration-200 mb-20 no-underline shadow-lg shadow-green-500/10"
        >
          Get started
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Transfer Widget Container */}
        <div className="w-full drop-shadow-2xl">
          <TransferWidget />
        </div>
      </div>
    </section>
  );
}
