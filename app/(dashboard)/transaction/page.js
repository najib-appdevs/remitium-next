"use client";

import React from "react";
import { Search } from "lucide-react";

// ─── Status Badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[11px] font-bold">
      <span className="w-1 h-1 rounded-full bg-emerald-500" />
      {status}
    </span>
  );
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
const LOGS = [
  {
    id: 1,
    recipient: "Elton Amena Fields Hubbard",
    totalPayable: "26.25 USD",
    baseAmount: "25.00 USD",
    transactionId: "SR07378824",
    method: "Mobile Wallet",
    methodName: "InstaPay Egypt",
    methodNumber: "587",
    phone: "87",
    purpose: "Family",
    source: "Business",
    amount: "25.00 USD",
    rate: "1 USD = 149.90 KES",
    fees: "1.25 USD",
    paymentMethod: "Wallet (USD)",
    receive: "3747.50 KES",
    status: "Success",
  },
  {
    id: 2,
    recipient: "Elton Amena Fields Hubbard",
    totalPayable: "26.25 USD",
    baseAmount: "25.00 USD",
    transactionId: "SR07378824",
    method: "Mobile Wallet",
    methodName: "InstaPay Egypt",
    methodNumber: "587",
    phone: "87",
    purpose: "Family",
    source: "Business",
    amount: "25.00 USD",
    rate: "1 USD = 149.90 KES",
    fees: "1.25 USD",
    paymentMethod: "Wallet (USD)",
    receive: "3747.50 KES",
    status: "Success",
  },
  {
    id: 3,
    recipient: "Elton Amena Fields Hubbard",
    totalPayable: "26.25 USD",
    baseAmount: "25.00 USD",
    transactionId: "SR07378824",
    method: "Mobile Wallet",
    methodName: "InstaPay Egypt",
    methodNumber: "587",
    phone: "87",
    purpose: "Family",
    source: "Business",
    amount: "25.00 USD",
    rate: "1 USD = 149.90 KES",
    fees: "1.25 USD",
    paymentMethod: "Wallet (USD)",
    receive: "3747.50 KES",
    status: "Success",
  },
  {
    id: 4,
    recipient: "Elton Amena Fields Hubbard",
    totalPayable: "26.25 USD",
    baseAmount: "25.00 USD",
    transactionId: "SR07378824",
    method: "Mobile Wallet",
    methodName: "InstaPay Egypt",
    methodNumber: "587",
    phone: "87",
    purpose: "Family",
    source: "Business",
    amount: "25.00 USD",
    rate: "1 USD = 149.90 KES",
    fees: "1.25 USD",
    paymentMethod: "Wallet (USD)",
    receive: "3747.50 KES",
    status: "Success",
  },
  {
    id: 5,
    recipient: "Elton Amena Fields Hubbard",
    totalPayable: "26.25 USD",
    baseAmount: "25.00 USD",
    transactionId: "SR07378824",
    method: "Mobile Wallet",
    methodName: "InstaPay Egypt",
    methodNumber: "587",
    phone: "87",
    purpose: "Family",
    source: "Business",
    amount: "25.00 USD",
    rate: "1 USD = 149.90 KES",
    fees: "1.25 USD",
    paymentMethod: "Wallet (USD)",
    receive: "3747.50 KES",
    status: "Success",
  },
];

const TH_CLASSES = "px-4 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 whitespace-nowrap";
const TD_CLASSES = "px-4 py-4 text-[12px] text-slate-600 border-b border-gray-50 whitespace-nowrap";

export default function RemittanceTable() {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-gray-700">All Transaction Logs</h1>
        <div className="relative w-72">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-brand-primary focus:border-brand-primary block w-full pl-10 p-2 outline-none transition-all focus:bg-white focus:shadow-sm"
            placeholder="Search transactions..."
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className={TH_CLASSES}>Recipient</th>
              <th className={TH_CLASSES}>Transaction ID</th>
              <th className={TH_CLASSES}>Method</th>
              <th className={TH_CLASSES}>Method Name</th>
              <th className={TH_CLASSES}>Number/Phone</th>
              <th className={TH_CLASSES}>Purpose</th>
              <th className={TH_CLASSES}>Source</th>
              <th className={TH_CLASSES}>Amount</th>
              <th className={TH_CLASSES}>Fees</th>
              <th className={TH_CLASSES}>Total Payable</th>
              <th className={TH_CLASSES}>Exchange Rate</th>
              <th className={TH_CLASSES}>Will Get</th>
              <th className={TH_CLASSES}>Status</th>
              <th className={TH_CLASSES}>Action</th>
            </tr>
          </thead>
          <tbody>
            {LOGS.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50/50 transition-colors">
                <td className={`${TD_CLASSES} font-bold text-slate-800`}>{log.recipient}</td>
                <td className={`${TD_CLASSES} font-mono text-[11px]`}>{log.transactionId}</td>
                <td className={TD_CLASSES}>{log.method}</td>
                <td className={TD_CLASSES}>{log.methodName}</td>
                <td className={TD_CLASSES}>{log.methodNumber} / {log.phone}</td>
                <td className={TD_CLASSES}>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-medium text-[11px]">{log.purpose}</span>
                </td>
                <td className={TD_CLASSES}>{log.source}</td>
                <td className={`${TD_CLASSES} text-rose-500 font-bold`}>{log.amount}</td>
                <td className={TD_CLASSES}>{log.fees}</td>
                <td className={`${TD_CLASSES} font-semibold`}>{log.totalPayable}</td>
                <td className={`${TD_CLASSES} text-gray-400 text-[11px]`}>{log.rate}</td>
                <td className={`${TD_CLASSES} text-emerald-600 font-black text-[13px]`}>{log.receive}</td>
                <td className={TD_CLASSES}>
                  <StatusBadge status={log.status} />
                </td>
                <td className={TD_CLASSES}>
                  <button className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white px-3 py-1 rounded-md font-bold text-[10px] transition-all uppercase tracking-tighter">
                    Repeat
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      
    </section>
  );
}