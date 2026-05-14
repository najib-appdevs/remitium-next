"use client";
import {
  ArrowLeftRight,
  Banknote,
  Calculator,
  ChevronDown,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import SendRemittanceLog from "./SendRemittanceLog";

const IconRefresh = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

export default function SendRemittancePage() {
  const [sendAmount, setSendAmount] = useState(100);
  const exchangeRate = 764.83;
  const fees = 2.0;
  const getAmount = (sendAmount * exchangeRate).toFixed(2);
  const totalPayable = (parseFloat(sendAmount) + fees).toFixed(2);

  return (
    <div className="space-y-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN: Input Form */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-700 mb-6">
            Send Remittance
          </h1>

          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-12">
            {/* Exchange Rate Badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full py-2 px-5">
                <span className="text-blue-400">
                  <IconRefresh />
                </span>
                <span className="text-blue-500 font-semibold text-sm">
                  Exchange Rate
                </span>
                <span className="text-blue-300 text-sm">·</span>
                <span className="text-blue-400 text-sm font-medium">
                  1 USD = {exchangeRate} NGN
                </span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Currency Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-500">
                    You Send
                    <span className="text-brand-primary normal-case">*</span>
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      className="w-full p-4 border border-gray-200 rounded-l-2xl outline-none focus:border-emerald-500 font-bold text-gray-700"
                    />
                    <div className="flex items-center gap-2 bg-[#00B67A] text-white px-4 rounded-r-2xl cursor-pointer hover:brightness-95">
                      <div className="w-6 h-6 rounded-full overflow-hidden bg-white flex items-center justify-center">
                        <span className="text-[10px]">🇺🇸</span>
                      </div>
                      <span className="font-bold text-sm">USD</span>
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-500">
                    They Get
                    <span className="text-brand-primary normal-case">*</span>
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      readOnly
                      value={getAmount}
                      className="w-full p-4 border border-gray-200 rounded-l-2xl outline-none bg-gray-50 font-bold text-gray-700"
                    />
                    <div className="flex items-center gap-2 bg-[#00B67A] text-white px-4 rounded-r-2xl cursor-pointer hover:brightness-95">
                      <div className="w-6 h-6 rounded-full overflow-hidden bg-white flex items-center justify-center">
                        <span className="text-[10px]">🇳🇬</span>
                      </div>
                      <span className="font-bold text-sm">NGN</span>
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Transaction Method */}
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wide text-gray-500">
                  Transaction Method
                  <span className="text-brand-primary normal-case">*</span>
                </label>
                <div className="relative">
                  <select className="w-full p-4 border border-gray-200 rounded-2xl outline-none appearance-none focus:border-emerald-500 text-gray-600 bg-white">
                    <option>Bank Transfer</option>
                    <option>Wallet Transfer</option>
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={18}
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-24 bg-brand-primary hover:bg-brand-primary-hover text-white font-medium py-4 rounded-xl transition-all text-lg shadow-md shadow-brand-primary/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Summary */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Summary</h2>

          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 h-fit">
            <div className="divide-y divide-gray-50">
              {/* Sending Amount */}
              <div className="flex items-center justify-between py-5 border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-700">
                    <Calculator size={16} />
                  </div>
                  <span className="text-gray-600 font-medium text-sm">
                    Sending Amount
                  </span>
                </div>
                <span className="font-medium text-base text-gray-600">
                  {parseFloat(sendAmount).toFixed(2)} USD
                </span>
              </div>

              {/* Limit */}
              <div className="flex items-center justify-between py-5 border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-700">
                    <ArrowLeftRight size={16} />
                  </div>
                  <span className="text-gray-600 font-medium text-sm">
                    Limit
                  </span>
                </div>
                <span className="font-medium text-base text-gray-600">
                  1 - 50,000.00 USD
                </span>
              </div>

              {/* Total Fees */}
              <div className="flex items-center justify-between py-5 border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-700">
                    <Wallet size={16} />
                  </div>
                  <span className="text-gray-600 font-medium text-sm">
                    Total Fees & Charges
                  </span>
                </div>
                <span className="font-medium text-base text-gray-600">
                  {fees.toFixed(2)} USD
                </span>
              </div>

              {/* Will Get */}
              <div className="flex items-center justify-between py-5 border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-700">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-gray-600 font-medium text-sm">
                    Will Get
                  </span>
                </div>
                <span className="font-medium text-base text-gray-600">
                  {getAmount} NGN
                </span>
              </div>

              {/* Total Payable */}
              <div className="flex items-center justify-between py-5 pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-700">
                    <Banknote size={16} />
                  </div>
                  <span className="text-gray-600 font-medium text-sm">
                    Total Payable Amount
                  </span>
                </div>
                <span className="text-gray-600 font-medium text-lg">
                  {totalPayable} USD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Send Remittance Log */}
      <SendRemittanceLog />
    </div>
  );
}
