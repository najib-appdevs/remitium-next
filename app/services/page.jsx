"use client";

import CTASection from "@/components/home/CTASection";
import { Banknote, Globe, Wallet, Zap } from "lucide-react";

const SERVICES = [
  {
    title: "Global Remittance",
    description:
      "Send money securely to friends and family worldwide with Remitium’s fast and reliable remittance services.",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    title: "Bank Transfers",
    description:
      "Transfer funds directly to your recipient’s bank account, ensuring quick and secure international transactions.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-700",
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
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-emerald-100">
      {/* ── MODERN HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
              Our Services
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] max-w-4xl">
              Financial mobility for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                borderless world.
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              Remitium provides secure, convenient, and fast solutions to meet
              all your money transfer needs, no matter where you are.
            </p>
          </div>
        </div>
      </section>

      {/* ── BENTO-INSPIRED SERVICES ── */}
      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {SERVICES.map((service, idx) => (
              <div
                key={service.title}
                className={`group relative bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 flex flex-col justify-between overflow-hidden
                  ${idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5"}
                `}
              >
                {/* Abstract Pattern Background */}
                <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  {service.icon}
                </div>

                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.lightColor} ${service.textColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-lg leading-relaxed font-normal mb-8 max-w-md">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Highlight Bar */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${service.color}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="mt-20">
        <CTASection />
      </div>
    </div>
  );
}
