"use client";

import { ChevronLeft, ChevronRight, Search, History } from "lucide-react";
import { useState } from "react";

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
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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

const TH_CLASSES =
  "px-4 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 whitespace-nowrap";
const TD_CLASSES =
  "px-4 py-4 text-[12px] text-slate-600 border-b border-gray-50 whitespace-nowrap";

export default function RemittanceTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Filter logs based on search input
  const filteredLogs = LOGS.filter((log) => {
    const q = searchQuery.toLowerCase();
    return (
      log.recipient.toLowerCase().includes(q) ||
      log.transactionId.toLowerCase().includes(q) ||
      log.methodName.toLowerCase().includes(q) ||
      log.method.toLowerCase().includes(q)
    );
  });

  const totalPages = Math.ceil(filteredLogs.length / pageSize) || 1;
  const activePage = Math.min(currentPage, totalPages);
  const startIndex = (activePage - 1) * pageSize;
  const paginatedLogs = filteredLogs.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-inner">
              <History size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">
                All Transaction Logs
              </h1>
            </div>
          </div>
          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-brand-primary focus:border-brand-primary block w-full pl-10 p-2.5 outline-none transition-all focus:bg-white focus:shadow-sm"
              placeholder="Search transactions..."
            />
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[1200px]">
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
                <th className={`${TH_CLASSES} text-right`}>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedLogs.map((log) => (
                <tr
                  key={log.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className={`${TD_CLASSES} font-bold text-slate-800`}>
                    {log.recipient}
                  </td>
                  <td className={`${TD_CLASSES} font-mono text-[11px]`}>
                    {log.transactionId}
                  </td>
                  <td className={TD_CLASSES}>{log.method}</td>
                  <td className={TD_CLASSES}>{log.methodName}</td>
                  <td className={TD_CLASSES}>
                    {log.methodNumber} / {log.phone}
                  </td>
                  <td className={TD_CLASSES}>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-medium text-[11px]">
                      {log.purpose}
                    </span>
                  </td>
                  <td className={TD_CLASSES}>{log.source}</td>
                  <td className={`${TD_CLASSES} text-rose-500 font-bold`}>
                    {log.amount}
                  </td>
                  <td className={TD_CLASSES}>{log.fees}</td>
                  <td className={`${TD_CLASSES} font-semibold`}>
                    {log.totalPayable}
                  </td>
                  <td className={`${TD_CLASSES} text-gray-400 text-[11px]`}>
                    {log.rate}
                  </td>
                  <td
                    className={`${TD_CLASSES} text-emerald-600 font-black text-[13px]`}
                  >
                    {log.receive}
                  </td>
                  <td className={TD_CLASSES}>
                    <StatusBadge status={log.status} />
                  </td>
                  <td className={`${TD_CLASSES} text-right`}>
                    <button className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white px-3 py-1 rounded-md font-bold text-[10px] transition-all uppercase tracking-tighter cursor-pointer">
                      Repeat
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedLogs.length === 0 && (
                <tr>
                  <td
                    colSpan="14"
                    className="text-center py-12 text-gray-400 font-medium text-sm"
                  >
                    No transaction records found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── Pagination  ─── */}
      <div className="px-6 py-6 border-t border-gray-100 flex items-center justify-center bg-gray-50/20">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={activePage === 1}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              activePage === 1
                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 active:scale-95"
            }`}
            title="Previous Page"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                activePage === page
                  ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 active:scale-95"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={activePage === totalPages}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              activePage === totalPages
                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 active:scale-95"
            }`}
            title="Next Page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
