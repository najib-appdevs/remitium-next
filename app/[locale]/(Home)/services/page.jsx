"use client";

import ServicesSection from "@/components/Services/ServiceSection";
import { Banknote, Globe, Wallet, Zap } from "lucide-react";

const SERVICES = [
  {
    title: "Global Remittance",
    description:
      "Send money securely to friends and family worldwide with Remitium’s fast and reliable remittance services.",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-brand-primary",
    lightColor: "bg-brand-badge-bg",
    textColor: "text-brand-badge-text",
  },
  {
    title: "Bank Transfers",
    description:
      "Transfer funds directly to your recipient’s bank account, ensuring quick and secure international transactions.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-brand-navy",
    lightColor: "bg-slate-100",
    textColor: "text-brand-navy",
  },
  {
    title: "Instant Cash Pickup",
    description:
      "Send funds for recipients to collect in cash from agent locations worldwide. A flexible and accessible way to transfer money.",
    icon: <Banknote className="w-6 h-6" />,
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-700",
  },
  {
    title: "Mobile Wallet",
    description:
      "Send money directly to your recipient's mobile wallet in their preferred service. Instant, safe, and convenient.",
    icon: <Wallet className="w-6 h-6" />,
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen font-jost selection:bg-brand-primary/10">
      {/* ── PREMIUM HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Architecture */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          {/* Background: dot grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-navy/5 rounded-full blur-[100px]" />

          {/* Additional Blobs */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 -right-48 w-96 h-96 rounded-full pointer-events-none opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(0,200,129,0.1) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Decorative Circles/Dots */}
        <div
          className="absolute top-40 left-10 w-3 h-3 rounded-full bg-brand-primary/20 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-navy/10 animate-pulse" />
        <div
          className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-brand-primary/15 animate-float"
          style={{ animationDuration: "5s" }}
        />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-brand-primary/20" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-badge-bg border border-brand-badge-border text-brand-badge-text text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              Our Services
            </div>

            <h1 className="relative text-4xl md:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.1] max-w-4xl">
              {/* Decorative Headline Dots */}
              <div className="absolute -top-6 -left-8 w-6 h-6 rounded-full bg-brand-primary/10 animate-pulse hidden md:block" />
              <div
                className="absolute -top-12 right-0 w-8 h-8 rounded-full bg-brand-primary/5 animate-float hidden md:block"
                style={{ animationDuration: "7s" }}
              />
              <div
                className="absolute top-1/2 -right-12 w-4 h-4 rounded-full bg-brand-navy/5 animate-bounce hidden md:block"
                style={{ animationDuration: "4s" }}
              />
              Financial mobility for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-teal-500">
                borderless world.
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed font-medium">
              Remitium provides secure, convenient, and fast solutions to meet
              all your money transfer needs, no matter where you are.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTIONS ── */}
      <ServicesSection />
    </div>
  );
}
