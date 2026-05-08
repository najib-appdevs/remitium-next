"use client";

import { ArrowDown, ChevronDown, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const EXCHANGE_RATE = 764.83;

const FAQS = [
  {
    question: "How are transfer fees calculated?",
    answer:
      "Our transfer fees depend on the destination country, payment method, and transfer amount. You can check the exact fees before confirming your transaction.",
  },
  {
    question: "Do exchange rates affect my transfer fees?",
    answer:
      "Exchange rates are updated in real-time and included in your total cost. Any changes in the exchange rate may impact the final amount received by your recipient.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No, Remitium ensures full transparency with no hidden fees. All charges are clearly displayed before you complete your transfer.",
  },
  {
    question: "Can I get a refund on transfer fees if I cancel a transaction?",
    answer:
      "If your transaction is canceled before processing, the transfer amount and fees may be refunded. However, once processed, fees are non-refundable.",
  },
];

export default function FeesCalculator() {
  const [sendAmount, setSendAmount] = useState("100");
  const [openIndex, setOpenIndex] = useState(null);

  const receiveAmount = (parseFloat(sendAmount) || 0) * EXCHANGE_RATE;

  return (
    <div className="bg-white min-h-screen relative overflow-hidden font-jost selection:bg-brand-primary/10">
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
          className="absolute top-1/2 -right-48 w-96 h-96 rounded-full pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(0,200,129,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Decorative Circles/Dots */}
      <div className="absolute top-40 left-10 w-3 h-3 rounded-full bg-brand-primary/20 animate-bounce" style={{ animationDuration: "3s" }} />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-brand-navy/10 animate-pulse" />
      <div className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-brand-primary/15 animate-float" style={{ animationDuration: "5s" }} />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-brand-primary/20" />

      {/* Hero & Calculator Section */}
      <div className="max-w-7xl mx-auto pt-20 px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Left Side: Hero Content */}
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="inline-flex items-center gap-2 bg-brand-badge-bg border border-brand-badge-border text-brand-badge-text text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              Transparent & Affordable Fees
            </div>
          </div>

          <h1 className="relative text-4xl md:text-6xl font-bold text-brand-navy leading-[1.1]">
            {/* Decorative Headline Dots */}
            <div className="absolute -top-6 -left-8 w-6 h-6 rounded-full bg-brand-primary/10 animate-pulse hidden md:block" />
            <div className="absolute -top-12 right-0 w-8 h-8 rounded-full bg-brand-primary/5 animate-float hidden md:block" style={{ animationDuration: "7s" }} />
            
            Simple Secure <br />
            <span className="text-brand-primary underline decoration-2 underline-offset-8 whitespace-nowrap">
              Low-Cost Transfers
            </span>
          </h1>

          <p className="text-brand-navy/60 text-lg max-w-lg leading-relaxed font-medium">
            Send money internationally with competitive rates and no hidden
            charges. Check our fees and make informed transfers with confidence.
          </p>

          <button className="bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg shadow-brand-primary/20 active:scale-95 text-lg">
            Get Started
          </button>
        </div>

        {/* Right Side: Calculator Card */}
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-primary/5 blur-3xl rounded-[3rem] -z-10" />

          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-navy/5 border border-brand-badge-border/30">
            <div className="bg-brand-badge-bg/50 backdrop-blur-md rounded-3xl p-6 mb-10 text-center border border-brand-badge-border/40">
              <p className="text-brand-navy/60 font-bold text-sm mb-2 uppercase tracking-wider">
                Exchange Rate
              </p>
              <p className="text-2xl font-black text-brand-navy">
                1 USD = <span className="text-brand-primary">{EXCHANGE_RATE}</span> NGN
              </p>
            </div>

            <div className="space-y-10">
              <div className="relative">
                <label className="block text-sm font-bold text-brand-navy/70 mb-3 ml-1">
                  You Send<span className="text-brand-primary">*</span>
                </label>

                <div className="group flex items-center bg-white border border-brand-badge-border/50 rounded-2xl overflow-hidden focus-within:border-brand-primary/50 focus-within:ring-4 focus-within:ring-brand-primary/5 transition-all duration-300">
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    className="flex-1 px-6 py-5 text-2xl font-black text-brand-navy bg-transparent outline-none"
                  />

                  <div className="flex items-center gap-3 px-6 py-5 bg-brand-badge-bg/30 border-l border-brand-badge-border/30">
                    <Image
                      src="https://flagcdn.com/w40/us.png"
                      alt="USD"
                      width={32}
                      height={32}
                      className="rounded-sm"
                    />
                    <ChevronDown size={20} className="text-brand-navy/40" />
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center -my-8 z-10">
                <div className="bg-brand-primary p-4 rounded-2xl border-4 border-white shadow-lg shadow-brand-primary/30 group cursor-pointer hover:rotate-180 transition-transform duration-500">
                  <ArrowDown
                    size={20}
                    className="text-white"
                    strokeWidth={3}
                  />
                </div>
                <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-brand-badge-border/30 -z-10" />
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-navy/70 mb-3 ml-1">
                  They Get<span className="text-brand-primary">*</span>
                </label>

                <div className="flex items-center bg-brand-badge-bg/10 border border-brand-badge-border/50 rounded-2xl overflow-hidden">
                  <input
                    type="text"
                    readOnly
                    value={receiveAmount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                    className="flex-1 px-6 py-5 text-2xl font-black text-brand-navy bg-transparent outline-none"
                  />

                  <div className="flex items-center gap-3 px-6 py-5 bg-brand-badge-bg/30 border-l border-brand-badge-border/30">
                    <Image
                      src="https://flagcdn.com/w40/ng.png"
                      alt="NGN"
                      width={32}
                      height={32}
                      className="rounded-sm"
                    />
                    <ChevronDown size={20} className="text-brand-navy/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <section className="max-w-7xl mx-auto py-32 px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-badge-bg border border-brand-badge-border text-brand-badge-text text-sm font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            Fees & Charges FAQs
          </div>

          <h2 className="relative text-4xl md:text-6xl font-bold text-brand-navy tracking-tight leading-tight">
            {/* Decorative Heading Dots */}
            <div className="absolute -top-4 left-1/4 w-4 h-4 rounded-full bg-brand-primary/10 animate-float hidden md:block" />
            Understanding Our <br /> Transparent Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`group bg-white/60 backdrop-blur-lg p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer ${
                openIndex === index
                  ? "border-brand-primary shadow-xl shadow-brand-primary/5"
                  : "border-brand-badge-border/30 shadow-sm hover:shadow-md hover:border-brand-badge-border"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className={`font-bold text-xl leading-tight transition-colors ${openIndex === index ? "text-brand-primary" : "text-brand-navy"}`}>
                  {faq.question}
                </span>

                <div
                  className={`shrink-0 p-2.5 rounded-xl text-white transition-all duration-500 ${
                    openIndex === index
                      ? "bg-brand-navy rotate-180"
                      : "bg-brand-primary group-hover:bg-brand-primary-hover"
                  }`}
                >
                  <Plus
                    size={20}
                    className={`transition-transform duration-500 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    strokeWidth={3}
                  />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-60 mt-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-brand-navy/60 text-lg leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
