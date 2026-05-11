"use client";

import React, { useState } from "react";
import AddMoneyLog from "./AddMoneyLog";

// Lucide-style inline SVG icons — contextually matched to each field/row
const IconRefresh = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
  </svg>
);

const IconGateway = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const IconChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

// Summary row icons — each matched to the concept
const IconEntered = () => (
  // Pencil/edit — "what you typed"
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const IconFees = () => (
  // Receipt — "charges"
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9"/>
    <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
    <rect x="6" y="14" width="12" height="8"/>
  </svg>
);

const IconWillGet = () => (
  // Wallet — "what you receive"
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
    <circle cx="17" cy="13" r="1" fill="currentColor"/>
  </svg>
);

const IconTotal = () => (
  // Banknote — "total payable"
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
    <circle cx="12" cy="15" r="2"/>
  </svg>
);

const IconAddMoney = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

export default function AddMoneyPage() {
  const [amount, setAmount] = useState("");
  const [gateway, setGateway] = useState("Paypal USD");
  const [currency, setCurrency] = useState("United States (USD)");
  const [isGatewayOpen, setIsGatewayOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  
  const gateways = ["Paypal USD", "Stripe USD"];
  const currencies = ["United States (USD)", "European Union (EUR)", "United Kingdom (GBP)"];
  
  const fee = 0.10;
  const availableBalance = 19528.35;

  const parsedAmount = parseFloat(amount) || 0;
  const totalPayable = parsedAmount + fee;

  const summaryRows = [
    {
      icon: <IconEntered />,
      label: "Entered Amount",
      value: `${parsedAmount.toFixed(2)} USD`,
      iconWrapClass: "bg-emerald-50 text-emerald-700",
      valueClass: "text-gray-600",
    },
    {
      icon: <IconFees />,
      label: "Total Fees & Charges",
      value: `${fee.toFixed(2)} USD`,
      iconWrapClass: "bg-emerald-50 text-emerald-700",
      valueClass: "text-gray-600",
    },
    {
      icon: <IconWillGet />,
      label: "Will Get",
      value: `${parsedAmount.toFixed(2)} USD`,
      iconWrapClass: "bg-emerald-50 text-emerald-700",
      valueClass: "text-gray-600",
    },
  ];

  return (
    <div className="space-y-8 w-full">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-brand-navy tracking-tight">Add Money</h1>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left: Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 md:p-10">

          {/* Exchange rate pill */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full py-2 px-5">
              <span className="text-blue-400">
                <IconRefresh />
              </span>
              <span className="text-blue-500 font-semibold text-sm">Exchange Rate</span>
              <span className="text-blue-300 text-sm">·</span>
              <span className="text-blue-400 text-sm font-medium">1 USD = 1.00 USD</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Payment Gateway */}
            <div className="space-y-2">
              <label className="block text-xs font-medium uppercase tracking-wide text-gray-500">
                Payment Gateway <span className="text-brand-primary normal-case">*</span>
              </label>
              <div className="relative">
                {/* Custom Styled Dropdown */}
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setIsGatewayOpen(!isGatewayOpen)}
                >
                  <div className="w-full border border-gray-200 rounded-xl pl-10 pr-8 py-4 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary flex items-center justify-between text-gray-600 text-sm min-h-[54px] transition-all hover:border-brand-primary/30">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">
                        <IconGateway />
                      </span>
                      <span>{gateway}</span>
                    </div>
                    <span className={`text-gray-400 transition-transform duration-200 ${isGatewayOpen ? 'rotate-180' : ''}`}>
                      <IconChevronDown />
                    </span>
                  </div>

                  {isGatewayOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      {gateways.map((opt) => (
                        <div
                          key={opt}
                          className={`px-10 py-3 text-sm transition-colors hover:bg-brand-primary/5 hover:text-brand-primary cursor-pointer ${gateway === opt ? 'bg-brand-primary/10 text-brand-primary font-bold' : 'text-gray-600'}`}
                          onClick={() => {
                            setGateway(opt);
                            setIsGatewayOpen(false);
                          }}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Click outside to close */}
                {isGatewayOpen && (
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsGatewayOpen(false)}
                  />
                )}
              </div>
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <label className="block text-xs font-medium uppercase tracking-wide text-gray-500">
                Amount <span className="text-brand-primary normal-case">*</span>
              </label>
              <div className="flex">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min={1}
                  max={5000}
                  step={0.01}
                  placeholder="Enter Amount"
                  className="w-full border border-gray-200 rounded-l-xl py-4 px-4 focus:outline-none focus:ring-1 focus:ring-brand-primary font-medium text-sm text-gray-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="relative min-w-fit">
                  <button
                    type="button"
                    onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                    className="bg-brand-primary text-white px-4 py-4 rounded-r-xl flex items-center gap-2 font-medium text-sm whitespace-nowrap h-full cursor-pointer"
                  >
                    {currency}
                    <span className={`transition-transform duration-200 ${isCurrencyOpen ? 'rotate-180' : ''}`}>
                      <IconChevronDown />
                    </span>
                  </button>

                  {isCurrencyOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden min-w-[200px] animate-in fade-in slide-in-from-top-2 duration-200">
                      {currencies.map((curr) => (
                        <div
                          key={curr}
                          className={`px-6 py-3 text-sm transition-colors hover:bg-brand-primary/5 hover:text-brand-primary cursor-pointer ${currency === curr ? 'bg-brand-primary/10 text-brand-primary font-bold' : 'text-gray-600'}`}
                          onClick={() => {
                            setCurrency(curr);
                            setIsCurrencyOpen(false);
                          }}
                        >
                          {curr}
                        </div>
                      ))}
                    </div>
                  )}

                  {isCurrencyOpen && (
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsCurrencyOpen(false)}
                    />
                  )}
                </div>
              </div>
              <div className="pt-1 text-right space-y-0.5">
                <p className="text-[#fca04b] font-medium text-sm">
                  Available Balance: {availableBalance.toLocaleString()} USD
                </p>
                <p className="text-[#fca04b] font-medium text-sm">
                  Limit: 1.00 – 5,000.00 USD
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full mt-24 bg-brand-primary hover:bg-brand-primary-hover text-white font-medium py-4 rounded-xl transition-all text-lg shadow-md shadow-brand-primary/10 flex items-center justify-center gap-2 cursor-pointer"
          >
            <IconAddMoney />
            Add Money
          </button>
        </div>

        {/* Right: Summary */}
        <div className="w-full lg:w-1/2 bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 h-fit">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Summary</p>

          <div className="divide-y divide-gray-50">
            {summaryRows.map(({ icon, label, value, iconWrapClass, valueClass }) => (
              <div key={label} className="flex items-center justify-between py-5 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconWrapClass}`}>
                    {icon}
                  </div>
                  <span className="text-gray-600 font-medium text-sm">{label}</span>
                </div>
                <span className={`font-medium text-base ${valueClass}`}>{value}</span>
              </div>
            ))}

            {/* Total payable — simple row */}
            <div className="flex items-center justify-between py-5 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-700">
                  <IconTotal />
                </div>
                <span className="text-gray-600 font-medium text-sm">Total Payable Amount</span>
              </div>
              <span className="text-gray-600 font-medium text-lg">
                {totalPayable.toFixed(2)} USD
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Add Money Log */}
      <AddMoneyLog />
    </div>
  );
}