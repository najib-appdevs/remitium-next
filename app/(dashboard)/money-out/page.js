"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import MoneyOutLog from "./MoneyOutLog";

// Lucide-style inline SVG icons — contextually matched to each field/row
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

const IconGateway = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const IconChevronDown = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Summary row icons — each matched to the concept
const IconEntered = () => (
  // Pencil/edit — "what you typed"
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconFees = () => (
  // Receipt — "charges"
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const IconWillGet = () => (
  // Wallet — "what you receive"
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
    <path d="M16 3.13a4 4 0 010 7.75" />
    <circle cx="17" cy="13" r="1" fill="currentColor" />
  </svg>
);

const IconTotal = () => (
  // Banknote — "total payable"
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
    <circle cx="12" cy="15" r="2" />
  </svg>
);

const card =
  "bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5 overflow-visible";

export default function MoneyOutPage() {
  const [amount, setAmount] = useState("");
  const [gateway, setGateway] = useState("Paypal USD");
  const [currency, setCurrency] = useState("United States (USD)");

  const gateways = ["Paypal USD", "Stripe USD"];
  const currencies = [
    "United States (USD)",
    "European Union (EUR)",
    "United Kingdom (GBP)",
  ];

  const fee = 0.1;
  const availableBalance = 19528.35;

  const parsedAmount = parseFloat(amount) || 0;
  const totalPayable = parsedAmount + fee;

  const getFlagCode = (curr) => {
    if (curr.includes("USD")) return "us";
    if (curr.includes("EUR")) return "eu";
    if (curr.includes("GBP")) return "gb";
    return "us";
  };

  const summaryRows = [
    {
      icon: <IconEntered />,
      label: "Entered Amount",
      value: `${parsedAmount.toFixed(2)} USD`,
    },
    {
      icon: <IconFees />,
      label: "Total Fees & Charges",
      value: `${fee.toFixed(2)} USD`,
    },
    {
      icon: <IconWillGet />,
      label: "Will Get",
      value: `${parsedAmount.toFixed(2)} USD`,
    },
  ];

  return (
    <div className="space-y-8 w-full">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Money Out</h1>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: Form */}
        <div
          className={`w-full lg:w-1/2 ${card}`}
          style={{
            background: "#f0faf5",
            border: "0.5px solid #a7dfbf",
          }}
        >
          {/* Exchange rate pill */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#e1f5ee] border border-[#9fe1cb]">
            <span className="text-[#0f6e56] flex items-center">
              <IconRefresh />
            </span>
            <span className="text-sm font-medium text-[#0f6e56]">
              Exchange Rate
            </span>
            <span className="text-sm text-[#1d9e75]">· 1 USD = 289.38 PKR</span>
          </div>

          <div className="flex flex-col gap-5">
            {/* Payment Gateway */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-500">
                Payment Gateway <span className="text-emerald-500">*</span>
              </label>
              <Listbox value={gateway} onChange={setGateway}>
                <div className="relative">
                  <ListboxButton className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-700 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-emerald-400 text-left cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">
                        <IconGateway />
                      </span>
                      <span>{gateway}</span>
                    </div>
                    <span className="text-gray-500 flex items-center pointer-events-none">
                      <IconChevronDown />
                    </span>
                  </ListboxButton>
                  <ListboxOptions className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                    {gateways.map((opt) => (
                      <ListboxOption
                        key={opt}
                        value={opt}
                        className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 data-[selected]:bg-emerald-100 data-[selected]:text-emerald-900 data-[selected]:font-semibold"
                      >
                        {opt}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>

            {/* Amount & Currency */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-500">
                Amount <span className="text-emerald-500">*</span>
              </label>
              <div className="flex rounded-lg border border-gray-200 focus-within:border-emerald-400 bg-white overflow-visible relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min={1}
                  max={5000}
                  step={0.01}
                  placeholder="Enter Amount"
                  className="flex-1 min-w-0 px-3 py-2.5 text-sm text-gray-600 outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-bold"
                />
                <Listbox value={currency} onChange={setCurrency}>
                  <div className="relative flex shrink-0">
                    <ListboxButton className="px-3 flex items-center gap-2 text-white text-sm font-medium bg-[#10b981] hover:bg-[#059669] transition-colors cursor-pointer focus:outline-none rounded-r-lg">
                      <span>{currency}</span>
                      <IconChevronDown />
                    </ListboxButton>
                    <ListboxOptions className="absolute right-0 z-50 mt-10 w-64 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                      {currencies.map((curr) => (
                        <ListboxOption
                          key={curr}
                          value={curr}
                          className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 data-[selected]:bg-emerald-100 data-[selected]:text-emerald-900 data-[selected]:font-semibold flex items-center gap-2"
                        >
                          <span>{curr}</span>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
              <div className="flex flex-col gap-0.5 mt-1">
                <p className="text-sm text-[#fca04b] font-medium">
                  Available Balance: {availableBalance.toLocaleString()} USD
                </p>
                <p className="text-sm text-[#fca04b] font-medium">
                  Limit: 1.00 – 5,000.00 USD
                </p>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white text-sm font-medium cursor-pointer transition-colors mt-auto bg-[#10b981] hover:bg-[#059669]"
            >
              Money Out
            </button>
          </div>
        </div>

        {/* Right: Summary */}
        <div
          className={`w-full lg:w-1/2 ${card}`}
          style={{
            background: "#f0faf5",
            border: "0.5px solid #a7dfbf",
          }}
        >
          <p className="text-sm font-medium tracking-widest text-gray-400 pb-1.5 border-b border-[#f3f4f6]">
            Summary
          </p>

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
              <span className="text-sm font-medium text-gray-700">{value}</span>
            </div>
          ))}

          {/* Total */}
          <div className="flex items-center justify-between px-3 py-2 rounded-lg mt-1 bg-[#f0faf5]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#10b981]">
                <span className="text-white flex items-center">
                  <IconTotal />
                </span>
              </div>
              <span className="text-sm font-medium text-[#0d3d24]">
                Total Payable Amount
              </span>
            </div>
            <span className="text-base font-medium text-[#0d3d24]">
              {totalPayable.toFixed(2)} USD
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-16">
        <MoneyOutLog />
      </div>
    </div>
  );
}
