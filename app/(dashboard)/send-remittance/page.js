"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  ArrowLeftRight,
  Banknote,
  Calculator,
  ChevronDown,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import Image from "next/image";
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

const sendCurrencies = [
  { code: "USD", name: "United States", flag: "us" },
  { code: "GBP", name: "United Kingdom", flag: "gb" },
  { code: "EUR", name: "European Union", flag: "eu" },
];

const receiveCurrencies = [
  { code: "NGN", name: "Nigeria", flag: "ng", rate: 764.83 },
  { code: "GHS", name: "Ghana", flag: "gh", rate: 11.5 },
  { code: "KES", name: "Kenya", flag: "ke", rate: 137.5 },
];

const card =
  "bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5 overflow-visible";

export default function SendRemittancePage() {
  const [sendAmount, setSendAmount] = useState(100);
  const [method, setMethod] = useState("Bank Transfer");
  const [sendCurrency, setSendCurrency] = useState(sendCurrencies[0]);
  const [receiveCurrency, setReceiveCurrency] = useState(receiveCurrencies[0]);

  const exchangeRate = receiveCurrency.rate;
  const fees = 2.0;
  const getAmount = (sendAmount * exchangeRate).toFixed(2);
  const totalPayable = (parseFloat(sendAmount) + fees).toFixed(2);

  const methods = ["Bank Transfer", "Wallet Transfer"];

  const summaryRows = [
    {
      icon: <Calculator size={16} />,
      label: "Sending Amount",
      value: `${parseFloat(sendAmount).toFixed(2)} ${sendCurrency.code}`,
    },
    {
      icon: <ArrowLeftRight size={16} />,
      label: "Limit",
      value: `1 - 50,000.00 ${sendCurrency.code}`,
    },
    {
      icon: <Wallet size={16} />,
      label: "Total Fees & Charges",
      value: `${fees.toFixed(2)} ${sendCurrency.code}`,
    },
    {
      icon: <ShieldCheck size={16} />,
      label: "Will Get",
      value: `${getAmount} ${receiveCurrency.code}`,
    },
  ];

  return (
    <div className="space-y-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT COLUMN: Input Form */}
        <div className="space-y-6 w-full">
          <h1 className="text-2xl font-bold text-gray-700 mb-6">
            Send Remittance
          </h1>

          <div
            className={card}
            style={{
              background: "#f0faf5",
              border: "0.5px solid #a7dfbf",
            }}
          >
            {/* Exchange Rate Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#e1f5ee] border border-[#9fe1cb]">
              <span className="text-[#0f6e56] flex items-center">
                <IconRefresh />
              </span>
              <span className="text-sm font-medium text-[#0f6e56]">
                Exchange Rate
              </span>
              <span className="text-sm text-[#1d9e75]">
                · 1 {sendCurrency.code} = {exchangeRate} {receiveCurrency.code}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {/* Currency Inputs */}
              <div className="grid grid-cols-1 gap-6">
                {/* You Send */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-500">
                    You Send <span className="text-emerald-500">*</span>
                  </label>
                  <div className="flex rounded-lg border border-gray-200 focus-within:border-emerald-400 bg-white overflow-visible relative">
                    <input
                      type="number"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      className="flex-1 min-w-0 px-3 py-2.5 text-sm text-gray-600 outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-bold"
                    />
                    <Listbox value={sendCurrency} onChange={setSendCurrency}>
                      <div className="relative flex shrink-0">
                        <ListboxButton className="px-3 flex items-center gap-2 text-white text-sm font-medium bg-[#10b981] hover:bg-[#059669] transition-colors cursor-pointer focus:outline-none rounded-r-lg">
                          <Image
                            src={`https://flagcdn.com/w40/${sendCurrency.flag}.png`}
                            alt={sendCurrency.name}
                            className="w-5 h-3.5 object-cover rounded-[2px] border border-white/20"
                            width={20}
                            height={14}
                          />
                          <span>
                            {sendCurrency.name} ({sendCurrency.code})
                          </span>
                          <ChevronDown size={12} />
                        </ListboxButton>
                        <ListboxOptions className="absolute right-0 z-50 mt-10 w-64 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                          {sendCurrencies.map((sc) => (
                            <ListboxOption
                              key={sc.code}
                              value={sc}
                              className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 data-[selected]:bg-emerald-100 data-[selected]:text-emerald-900 data-[selected]:font-semibold flex items-center gap-2"
                            >
                              <Image
                                src={`https://flagcdn.com/w40/${sc.flag}.png`}
                                alt={sc.name}
                                className="w-5 h-3.5 object-cover rounded-[2px] border border-gray-100"
                                width={20}
                                height={14}
                              />
                              <span>
                                {sc.name} ({sc.code})
                              </span>
                            </ListboxOption>
                          ))}
                        </ListboxOptions>
                      </div>
                    </Listbox>
                  </div>
                </div>

                {/* They Get */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-500">
                    They Get <span className="text-emerald-500">*</span>
                  </label>
                  <div className="flex rounded-lg border border-gray-200 bg-gray-50 overflow-visible relative">
                    <input
                      type="text"
                      readOnly
                      value={getAmount}
                      className="flex-1 min-w-0 px-3 py-2.5 text-sm text-gray-600 outline-none bg-transparent font-bold"
                    />
                    <Listbox
                      value={receiveCurrency}
                      onChange={setReceiveCurrency}
                    >
                      <div className="relative flex shrink-0">
                        <ListboxButton className="px-3 flex items-center gap-2 text-white text-sm font-medium bg-[#10b981] hover:bg-[#059669] transition-colors cursor-pointer focus:outline-none rounded-r-lg">
                          <Image
                            src={`https://flagcdn.com/w40/${receiveCurrency.flag}.png`}
                            alt={receiveCurrency.name}
                            className="w-5 h-3.5 object-cover rounded-[2px] border border-white/20"
                            width={20}
                            height={14}
                          />
                          <span>
                            {receiveCurrency.name} ({receiveCurrency.code})
                          </span>
                          <ChevronDown size={12} />
                        </ListboxButton>
                        <ListboxOptions className="absolute right-0 z-50 mt-10 w-64 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                          {receiveCurrencies.map((rc) => (
                            <ListboxOption
                              key={rc.code}
                              value={rc}
                              className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 data-[selected]:bg-emerald-100 data-[selected]:text-emerald-900 data-[selected]:font-semibold flex items-center gap-2"
                            >
                              <Image
                                src={`https://flagcdn.com/w40/${rc.flag}.png`}
                                alt={rc.name}
                                className="w-5 h-3.5 object-cover rounded-[2px] border border-gray-100"
                                width={20}
                                height={14}
                              />
                              <span>
                                {rc.name} ({rc.code})
                              </span>
                            </ListboxOption>
                          ))}
                        </ListboxOptions>
                      </div>
                    </Listbox>
                  </div>
                </div>
              </div>

              {/* Transaction Method */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-500">
                  Transaction Method <span className="text-emerald-500">*</span>
                </label>
                <Listbox value={method} onChange={setMethod}>
                  <div className="relative">
                    <ListboxButton className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-700 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-emerald-400 text-left cursor-pointer">
                      <span>{method}</span>
                      <span className="text-gray-500 flex items-center pointer-events-none">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </ListboxButton>
                    <ListboxOptions className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                      {methods.map((m) => (
                        <ListboxOption
                          key={m}
                          value={m}
                          className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 data-[selected]:bg-emerald-100 data-[selected]:text-emerald-900 data-[selected]:font-semibold"
                        >
                          {m}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white text-sm font-medium cursor-pointer transition-colors mt-auto bg-[#10b981] hover:bg-[#059669]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Summary */}
        <div className="space-y-6 w-full">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Summary</h2>
          <div
            className={card}
            style={{
              background: "#f0faf5",
              border: "0.5px solid #a7dfbf",
            }}
          >
            {summaryRows.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between py-1.5 border-b border-[#f3f4f6]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#e1f5ee] text-[#0f6e56]">
                    {icon}
                  </div>
                  <span className="text-sm text-gray-500">{label}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {value}
                </span>
              </div>
            ))}

            {/* Total */}
            <div className="flex items-center justify-between px-3 py-2 rounded-lg mt-1 bg-[#f0faf5]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#10b981]">
                  <span className="text-white flex items-center">
                    <Banknote size={16} />
                  </span>
                </div>
                <span className="text-sm font-medium text-[#0d3d24]">
                  Total Payable Amount
                </span>
              </div>
              <span className="text-base font-medium text-[#0d3d24]">
                {totalPayable} {sendCurrency.code}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Send Remittance Log */}
      <div className="grid grid-cols-1 gap-8 mt-16">
        <SendRemittanceLog />
      </div>
    </div>
  );
}
