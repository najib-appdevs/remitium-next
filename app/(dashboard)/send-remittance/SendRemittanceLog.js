"use client";

import React from "react";

// ─── Status Config ─────────────────────────────────────────────────────────────
const STATUS_MAP = {
  Completed: {
    dot: "bg-brand-primary",
    text: "text-brand-badge-text",
    bg: "bg-brand-badge-bg",
    border: "border-brand-badge-border",
  },
  Pending: {
    dot: "bg-brand-orange",
    text: "text-brand-orange",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  Failed: {
    dot: "bg-red-500",
    text: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
  },
};

function StatusBadge({ status }) {
  const s = STATUS_MAP[status] ?? STATUS_MAP.Pending;
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full border ${s.bg} ${s.border} ${s.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconHistory = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v5h5" />
    <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
    <path d="M12 7v5l4 2" />
  </svg>
);


const IconEmpty = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mx-auto">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

// ─── Mock Data ────────────────────────────────────────────────────────────────
const LOGS = [
  {
    id: 1,
    title: "Add Balance via ADPay USD",
    status: "Pending",
    payableAmount: 3032.00,
    amount: 3000.00,
    currency: "USD",
    transactionId: "AM50586973",
    exchangeRate: "1.00 USD = 1.00 USD",
    feesCharges: 32.00,
    willReceive: 3000.00,
    date: "May 11, 2026",
    time: "06:12 PM",
  },
  {
    id: 2,
    title: "Add Balance via Paypal USD",
    status: "Completed",
    payableAmount: 510.50,
    amount: 500.00,
    currency: "USD",
    transactionId: "AM40471882",
    exchangeRate: "1.00 USD = 1.00 USD",
    feesCharges: 10.50,
    willReceive: 500.00,
    date: "May 10, 2026",
    time: "11:45 AM",
  },
  {
    id: 3,
    title: "Add Balance via Stripe USD",
    status: "Completed",
    payableAmount: 1215.00,
    amount: 1200.00,
    currency: "USD",
    transactionId: "AM38295641",
    exchangeRate: "1.00 USD = 1.00 USD",
    feesCharges: 15.00,
    willReceive: 1200.00,
    date: "May 09, 2026",
    time: "03:20 PM",
  },
  {
    id: 4,
    title: "Add Balance via ADPay USD",
    status: "Failed",
    payableAmount: 808.00,
    amount: 800.00,
    currency: "USD",
    transactionId: "AM27183049",
    exchangeRate: "1.00 USD = 1.00 USD",
    feesCharges: 8.00,
    willReceive: 800.00,
    date: "May 08, 2026",
    time: "09:05 AM",
  },
  {
    id: 5,
    title: "Add Balance via Paypal USD",
    status: "Completed",
    payableAmount: 253.50,
    amount: 250.00,
    currency: "USD",
    transactionId: "AM16072938",
    exchangeRate: "1.00 USD = 1.00 USD",
    feesCharges: 3.50,
    willReceive: 250.00,
    date: "May 07, 2026",
    time: "07:50 PM",
  },
];

// ─── Table Header ─────────────────────────────────────────────────────────────
const TH_CLASSES = "px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap";

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SendRemittanceLog() {

  return (
    <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">

      {/* ── Section Header ── */}
      <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-badge-bg text-brand-badge-text flex items-center justify-center flex-shrink-0">
            <IconHistory />
          </div>
          <p className="text-base font-bold text-brand-navy leading-tight">Send Remittance Logs</p>
        </div>

        {/* View More */}
        <button className="px-5 py-2.5 bg-brand-primary text-white text-xs font-bold rounded-xl hover:bg-brand-primary-hover transition-colors cursor-pointer shadow-sm shadow-brand-primary/20">
          View More
        </button>
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto">
        {LOGS.length === 0 ? (
          <div className="py-16 text-center">
            <IconEmpty />
            <p className="mt-4 text-sm font-semibold text-gray-400">No records yet</p>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-50/60 border-b border-gray-100">
              <tr>
                <th className={TH_CLASSES}>Title</th>
                <th className={TH_CLASSES}>Status</th>
                <th className={TH_CLASSES}>Payable Amount</th>
                <th className={TH_CLASSES}>Amount</th>
                <th className={TH_CLASSES}>Transaction ID</th>
                <th className={TH_CLASSES}>Exchange Rate</th>
                <th className={TH_CLASSES}>Fees & Charges</th>
                <th className={TH_CLASSES}>You Will Receive</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {LOGS.map((log) => (
                <tr
                  key={log.id}
                  className="group hover:bg-brand-bg-light transition-colors duration-150"
                >
                  {/* Title */}
                  <td className="px-6 py-5 min-w-[200px]">
                    <p className="text-sm font-bold text-brand-navy group-hover:text-brand-primary transition-colors leading-tight">
                      {log.title}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">{log.date} · {log.time}</p>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <StatusBadge status={log.status} />
                  </td>

                  {/* Payable Amount */}
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="text-sm font-black text-brand-navy">
                      {log.payableAmount.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-gray-400 ml-1">{log.currency}</span>
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-700">
                      {log.amount.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-gray-400 ml-1">{log.currency}</span>
                  </td>

                  {/* Transaction ID */}
                  <td className="px-6 py-5">
                    <span className="font-mono text-[12px] font-bold text-brand-navy bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg">
                      {log.transactionId}
                    </span>
                  </td>

                  {/* Exchange Rate */}
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="text-[12px] font-medium text-gray-500">
                      {log.exchangeRate}
                    </span>
                  </td>

                  {/* Fees & Charges */}
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="text-[12px] font-semibold text-brand-orange">
                      {log.feesCharges.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-gray-400 ml-1">{log.currency}</span>
                  </td>

                  {/* You Will Receive */}
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="text-[12px] font-bold text-brand-primary">
                      +{log.willReceive.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-gray-400 ml-1">{log.currency}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
