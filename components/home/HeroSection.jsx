"use client";

import TransferWidget from "@/components/home/TransferWidget";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-brand-bg-light">
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

      {/* Additional Blobs */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-48 w-96 h-96 rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(0,200,129,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-20 -left-32 w-80 h-80 rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0,66,90,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative Circles/Dots */}
      <div className="absolute top-40 left-10 w-3 h-3 rounded-full bg-brand-primary/20 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-navy/10 animate-pulse" />
      <div className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-brand-primary/15 animate-float" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-brand-primary/20" />
      <div className="absolute bottom-20 right-1/3 w-3 h-3 rounded-full bg-brand-navy/5 animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-brand-primary/10" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-badge-bg border border-brand-badge-border text-brand-badge-text text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
          Welcome to Remitium
        </div>

        {/* Headline - Added mb-12 for more breathability */}
        <h1 className="relative font-semibold text-brand-navy leading-[1.1] tracking-tight text-5xl md:text-7xl mb-12">
          {/* Decorative Headline Dots */}
          <div className="absolute -top-6 -left-8 w-6 h-6 rounded-full bg-brand-primary/10 animate-pulse hidden md:block" />
          <div className="absolute -top-12 right-0 w-8 h-8 rounded-full bg-brand-primary/5 animate-float hidden md:block" style={{ animationDuration: '7s' }} />
          <div className="absolute top-1/2 -right-12 w-4 h-4 rounded-full bg-brand-navy/5 animate-bounce hidden md:block" style={{ animationDuration: '4s' }} />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-primary/20 animate-float" />
          
          Seamless Global
          <br />
          Transfers
          <br />
          <span className="text-brand-primary relative inline-block ml-3">
            Anywhere, Anytime
            <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-brand-primary rounded-sm" />
          </span>
        </h1>

        {/* CTA - Added mb-20 to separate the pitch from the tool */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.98] text-white text-base font-semibold px-8 py-4 rounded-xl transition-all duration-200 mb-20 no-underline shadow-lg shadow-green-500/10"
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
