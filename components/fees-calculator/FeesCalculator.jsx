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
    <div className="bg-[#fcfcfc] min-h-screen">
      {/* Hero & Calculator Section */}

      <div className="max-w-7xl mx-auto pt-20 px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Left Side: Hero Content */}

        <div className="space-y-8">
          <div className="flex items-center">
            <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
              Transparent & Affordable Fees
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl font-bold text-[#0b1727] leading-[1.1]">
            Simple Secure <br />
            <span className="text-[#00c881] underline decoration-2 underline-offset-8 whitespace-nowrap">
              Low-Cost Transfers
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            Send money internationally with competitive rates and no hidden
            charges. Check our fees and make informed transfers with confidence.
          </p>

          <button className="bg-[#00c881] hover:bg-[#00a96c] text-white font-bold px-10 py-4 rounded-md transition-all shadow-lg shadow-green-500/20 active:scale-95 text-lg">
            Get Started
          </button>
        </div>

        {/* Right Side: Calculator Card */}

        <div className="relative">
          <div className="absolute -inset-4 bg-gray-200/20 blur-3xl rounded-[3rem] -z-10" />

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] border border-gray-50">
            <div className="bg-[#f8fafc]/80 rounded-3xl p-6 mb-10 text-center border border-gray-50/50">
              <p className="text-[#0b1727] font-bold text-sm mb-2">
                Exchange Rate
              </p>

              <p className="text-xl font-black text-[#0b1727]">
                1 USD = {EXCHANGE_RATE} NGN
              </p>
            </div>

            <div className="space-y-10">
              <div className="relative">
                <label className="block text-sm font-bold text-[#0b1727] mb-3">
                  You Send<span className="text-[#00c881]">*</span>
                </label>

                <div className="flex items-center bg-[#f9fafb] border border-gray-100 rounded-2xl overflow-hidden focus-within:bg-white focus-within:border-gray-200 transition-all">
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    className="flex-1 px-6 py-5 text-2xl font-bold text-[#0b1727] bg-transparent outline-none"
                  />

                  <div className="flex items-center gap-3 px-6 py-5 border-l border-gray-100">
                    <Image
                      src="https://flagcdn.com/w40/us.png"
                      alt="USD"
                      width={32}
                      height={32}
                      className=""
                    />

                    <ChevronDown size={20} className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center -my-6 z-10">
                <div className="bg-[#eaebed] p-3 rounded-xl border-4 border-white">
                  <ArrowDown
                    size={20}
                    className="text-[#0b1727]"
                    strokeWidth={2.5}
                  />
                </div>

                <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-200 -z-10" />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0b1727] mb-3">
                  They Get<span className="text-[#00c881]">*</span>
                </label>

                <div className="flex items-center bg-[#f9fafb] border border-gray-100 rounded-2xl overflow-hidden">
                  <input
                    type="text"
                    readOnly
                    value={receiveAmount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                    className="flex-1 px-6 py-5 text-2xl font-bold text-[#0b1727] bg-transparent outline-none"
                  />

                  <div className="flex items-center gap-3 px-6 py-5 border-l border-gray-100">
                    <Image
                      src="https://flagcdn.com/w40/ng.png"
                      alt="NGN"
                      width={32}
                      height={32}
                      className=""
                    />

                    <ChevronDown size={20} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- NEW FAQ SECTION --- */}

      <section className="max-w-7xl mx-auto py-32 px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
            Fees & Charges FAQs
          </div>

          <h2 className="text-3xl md:text-6xl font-bold text-[#0b1727]">
            Understanding Our <br /> Transparent Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`group bg-white p-6 rounded-2xl border transition-all cursor-pointer ${
                openIndex === index
                  ? "border-[#00c881] shadow-lg shadow-green-500/5"
                  : "border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[#0b1727] font-bold text-lg leading-tight">
                  {faq.question}
                </span>

                <div
                  className={`shrink-0 p-2 rounded-full text-white transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#0b1727] rotate-180"
                      : "bg-[#00c881] group-hover:bg-[#00a96c]"
                  }`}
                >
                  <Plus
                    size={20}
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    strokeWidth={3}
                  />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
