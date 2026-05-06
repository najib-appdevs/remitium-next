"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const EXCHANGE_RATE = 764.83;
const METHODS = ["Bank Transfer", "Mobile Wallet", "Remitium to Remitium"];

export default function TransferWidget() {
  const [sendAmount, setSendAmount] = useState("100");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(METHODS[0]);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const receiveAmount = useCallback(() => {
    const amt = parseFloat(sendAmount) || 0;
    return (amt * EXCHANGE_RATE).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, [sendAmount]);

  return (
    <div className="w-full bg-white border border-[#e2ede9] rounded-2xl p-7 shadow-sm">
      {/* Rate Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[11px] font-semibold text-gray-500 tracking-widest uppercase mb-1">
            Live exchange rate
          </p>
          <p className="font-bold text-[17px] text-[#0b1727]">
            1 USD ={" "}
            <span className="text-[#00c881]">
              {EXCHANGE_RATE.toLocaleString()}
            </span>{" "}
            NGN
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-[#e6f9f2] text-[#0a7a52] text-[11px] font-bold px-3 py-1 rounded-full border border-[#a3ecd0]">
          <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
        {/* Sending Field */}
        <div className="flex flex-col gap-2.5">
          <label className="text-[11px] font-bold text-[#00425a] tracking-wide uppercase flex items-center gap-1">
            Sending Currency <span className="text-[#00c881]">*</span>
          </label>
          <div className="flex items-center border border-[#e2ede9] rounded-xl h-[56px] focus-within:border-[#00c881] transition-all bg-white">
            <input
              type="number"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
              className="flex-1 min-w-0 border-none outline-none px-4 font-bold text-[17px] text-[#0b1727] bg-transparent"
            />
            <div className="flex items-center gap-2 px-3 border-l border-[#eef4f2] bg-[#fafdfc] h-full flex-shrink-0 rounded-r-xl">
              <div className="w-[24px] h-[24px] rounded-full overflow-hidden shadow-sm">
                <Image
                  src="https://flagcdn.com/us.svg"
                  alt="US"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <span className="text-[13px] font-bold text-[#3d5a55]">USD</span>
            </div>
          </div>
        </div>

        {/* Receiving Field */}
        <div className="flex flex-col gap-2.5">
          <label className="text-[11px] font-bold text-[#00425a] tracking-wide uppercase flex items-center gap-1">
            Receiving Currency <span className="text-[#00c881]">*</span>
          </label>
          <div className="flex items-center border border-[#e2ede9] rounded-xl h-[56px] bg-[#f8faf9]">
            <input
              type="text"
              value={receiveAmount()}
              readOnly
              className="flex-1 min-w-0 border-none outline-none px-4 font-bold text-[17px] text-[#00a96c] bg-transparent"
            />
            <div className="flex items-center gap-2 px-3 border-l border-[#eef4f2] bg-[#fafdfc] h-full flex-shrink-0 rounded-r-xl">
              <div className="w-[24px] h-[24px] rounded-full overflow-hidden shadow-sm">
                <Image
                  src="https://flagcdn.com/ng.svg"
                  alt="NG"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <span className="text-[13px] font-bold text-[#3d5a55]">NGN</span>
            </div>
          </div>
        </div>

        {/* CUSTOM DROPDOWN METHOD */}
        <div className="flex flex-col gap-2.5" ref={dropdownRef}>
          <label className="text-[11px] font-bold text-[#00425a] tracking-wide uppercase flex items-center gap-1">
            Transaction Method <span className="text-[#00c881]">*</span>
          </label>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`w-full h-[56px] flex items-center justify-between px-4 bg-white border ${
                isOpen
                  ? "border-[#00c881] ring-1 ring-[#00c881]"
                  : "border-[#e2ede9]"
              } rounded-xl transition-all text-left shadow-sm`}
            >
              <span className="text-[14px] font-bold text-[#3d5a55] truncate">
                {selectedMethod}
              </span>
              <svg
                className={`w-4 h-4 text-[#00c881] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* CUSTOM DROPDOWN OPTIONS LIST */}
            {isOpen && (
              <div className="absolute top-[62px] left-0 w-full bg-white border border-[#e2ede9] rounded-xl shadow-sm z-50 py-2 overflow-hidden transform origin-top transition-all scale-100">
                {METHODS.map((method) => (
                  <button
                    key={method}
                    onClick={() => {
                      setSelectedMethod(method);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3.5 text-[14px] font-semibold transition-colors hover:bg-[#f2fcf8] ${
                      selectedMethod === method
                        ? "bg-[#e6f9f2] text-[#0a7a52]"
                        : "text-[#3d5a55] hover:text-[#00a96c]"
                    }`}
                  >
                    {method}
                    {selectedMethod === method && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <button className="cursor-pointer w-full flex items-center justify-center gap-2 bg-[#00c881] hover:bg-[#00a96c] active:scale-[0.98] text-white font-bold text-base py-4 rounded-xl transition-all duration-200 shadow-sm shadow-green-500/10">
        Continue Transfer
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
      </button>
    </div>
  );
}
