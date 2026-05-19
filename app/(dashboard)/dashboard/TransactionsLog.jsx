"use client";

import { FileText, RefreshCw, X } from "lucide-react";
import { useState } from "react";

export default function TransactionsLog() {
  const [selectedTx, setSelectedTx] = useState(null);

  const transactions = [
    {
      headerTitle: "Send Remittance To Elton Amena Fields Hubbard",
      totalAmountText: "26.25 USD",
      transactionId: "SR07378824",
      method: "Mobile Wallet",
      mobileMethodName: "InstaPay EgyptEgyptian Banks Company",
      mobileMethodNumber: "587",
      phone: "87",
      sendingPurpose: "Family",
      sourceOfFunds: "Business",
      amount: "25.00 USD",
      exchangeRate: "1 USD = 149.90 KES",
      feesCharges: "1.25 USD",
      paymentMethod: "Wallet (United States - USD)",
      willGetAmount: "3747.50 KES",
      status: "Success",
      bottomActionButton: "Repeat Transaction",
    },
    {
      headerTitle: "Send Remittance To Jane Doe",
      totalAmountText: "52.00 USD",
      transactionId: "SR08492048",
      method: "Bank Transfer",
      mobileMethodName: "Cairo Bank Egypt",
      mobileMethodNumber: "912",
      phone: "43",
      sendingPurpose: "Family Support",
      sourceOfFunds: "Salary",
      amount: "50.00 USD",
      exchangeRate: "1 USD = 30.90 EGP",
      feesCharges: "2.00 USD",
      paymentMethod: "Wallet (United States - USD)",
      willGetAmount: "1545.00 EGP",
      status: "Success",
      bottomActionButton: "Repeat Transaction",
    },
    {
      headerTitle: "Send Remittance To John Smith",
      totalAmountText: "103.50 USD",
      transactionId: "SR01948572",
      method: "Mobile Wallet",
      mobileMethodName: "Vodafone Cash Egypt",
      mobileMethodNumber: "382",
      phone: "99",
      sendingPurpose: "Education",
      sourceOfFunds: "Savings",
      amount: "100.00 USD",
      exchangeRate: "1 USD = 30.90 EGP",
      feesCharges: "3.50 USD",
      paymentMethod: "Wallet (United States - USD)",
      willGetAmount: "3090.00 EGP",
      status: "Pending",
      bottomActionButton: "Repeat Transaction",
    },
  ];

  // Important 8 data column headers for the main table rows
  const headers = [
    "Remittance Title",
    "Total Amount",
    "Transaction ID",
    "Status",
    "Method",
    "Amount",
    "Exchange Rate",
    "Action",
  ];

  const TH_CLASSES =
    "px-6 py-4 text-xs font-bold text-gray-400 uppercase whitespace-nowrap text-left border-b border-gray-100";
  const TD_CLASSES =
    "px-6 py-5 whitespace-nowrap text-sm font-bold text-gray-700 border-b border-gray-50";

  return (
    <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden w-full relative">
      {/* Card Header */}
      <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-emerald-50/20 to-teal-50/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-inner">
            <FileText size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 leading-tight">
              Transactions Log
            </h2>
          </div>
        </div>
        <button
          type="button"
          className="bg-[#10b981] text-white rounded-xl border-none px-5 py-2.5 text-[13px] font-semibold tracking-[0.2px] cursor-pointer shadow-[0_4px_16px_rgba(16,185,129,0.18)] transition-[background,transform] duration-[180ms] hover:bg-[#059669] hover:-translate-y-px active:scale-[0.97]"
        >
          View More
        </button>
      </div>

      {/* Main Table (Horizontal structure showing 8 important fields for multiple transactions) */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50/60">
            <tr>
              {headers.map((header) => (
                <th key={header} className={TH_CLASSES}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {transactions.map((tx) => (
              <tr
                key={tx.transactionId}
                onClick={() => setSelectedTx(tx)}
                className="group hover:bg-emerald-50/10 transition-colors duration-100 cursor-pointer"
              >
                {/* 1. Remittance Title */}
                <td className={`${TD_CLASSES} min-w-[280px]`}>
                  <span className="text-gray-800 font-bold group-hover:text-[#10b981] transition-colors leading-tight">
                    {tx.headerTitle}
                  </span>
                </td>

                {/* 2. Total Amount */}
                <td className={TD_CLASSES}>
                  <span className="text-[#10b981] font-black">
                    {tx.totalAmountText}
                  </span>
                </td>

                {/* 3. Transaction ID */}
                <td className={TD_CLASSES}>
                  <span className="font-mono text-xs bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg">
                    {tx.transactionId}
                  </span>
                </td>

                {/* 4. Status */}
                <td className={TD_CLASSES}>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border shadow-xs ${
                      tx.status === "Success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-amber-200 bg-amber-50 text-amber-700"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        tx.status === "Success"
                          ? "bg-emerald-500"
                          : "bg-amber-500"
                      }`}
                    />
                    {tx.status}
                  </span>
                </td>

                {/* 5. Method */}
                <td className={TD_CLASSES}>{tx.method}</td>

                {/* 6. Amount */}
                <td className={TD_CLASSES}>{tx.amount}</td>

                {/* 7. Exchange Rate */}
                <td className={TD_CLASSES}>{tx.exchangeRate}</td>

                {/* 8. Action (Details button) */}
                <td className={TD_CLASSES} onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => setSelectedTx(tx)}
                    className="py-1.5 px-4 rounded-lg text-white text-xs font-semibold bg-[#10b981] hover:bg-[#059669] transition-all cursor-pointer shadow-sm shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FULL TRANSACTION DETAILS MODAL (Exactly 16 elements grouped beautifully) */}
      {selectedTx && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glassmorphism backdrop */}
          <div
            onClick={() => setSelectedTx(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
          />

          {/* Modal Content container */}
          <div className="relative bg-white rounded-[2rem] shadow-2xl border border-gray-100 w-full max-w-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="px-8 py-5 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-emerald-50/20 to-teal-50/10 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <FileText size={16} />
                </div>
                <span className="text-sm font-bold text-gray-800">
                  Detailed Receipt
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTx(null)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Receipt Details */}
            <div className="p-8 overflow-y-auto flex flex-col gap-6">
              {/* Header Title Banner */}
              <div className="bg-[#f0faf5] border border-[#a7dfbf]/60 rounded-xl p-5 flex flex-col gap-3.5 shadow-xs">
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 leading-none">
                    Remittance Title
                  </span>
                  <span className="text-sm font-extrabold text-[#0d3d24]">
                    {selectedTx.headerTitle}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t border-[#a7dfbf]/30 pt-3">
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 leading-none">
                      Total Payable Amount
                    </span>
                    <span className="text-lg font-black text-[#10b981]">
                      {selectedTx.totalAmountText}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border shadow-xs ${
                        selectedTx.status === "Success"
                          ? "border-emerald-200 bg-white text-emerald-700"
                          : "border-amber-200 bg-white text-amber-700"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                          selectedTx.status === "Success"
                            ? "bg-emerald-500"
                            : "bg-amber-500"
                        }`}
                      />
                      {selectedTx.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Grouped Horizontal Receipt Tables */}
              <div className="flex flex-col gap-5">
                {/* GROUP 1: Reference & Core Information */}
                <div className="bg-gray-50/50 rounded-xl border border-gray-100 p-4">
                  <span className="block text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2.5 pb-1.5 border-b border-gray-200/50">
                    Basic Information
                  </span>
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-100/70 last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Transaction ID
                        </td>
                        <td className="py-2 text-xs font-bold text-gray-700 text-right font-mono">
                          {selectedTx.transactionId}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100/70 last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Status
                        </td>
                        <td className="py-2 text-xs font-bold text-[#10b981] text-right">
                          {selectedTx.status}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100/70 last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Method
                        </td>
                        <td className="py-2 text-xs font-bold text-gray-700 text-right">
                          {selectedTx.method}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100/70 last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Sending Purpose
                        </td>
                        <td className="py-2 text-xs font-bold text-gray-700 text-right">
                          {selectedTx.sendingPurpose}
                        </td>
                      </tr>
                      <tr className="last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Source of Funds
                        </td>
                        <td className="py-2 text-xs font-bold text-gray-700 text-right">
                          {selectedTx.sourceOfFunds}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* GROUP 2: Mobile Network Info */}
                <div className="bg-gray-50/50 rounded-xl border border-gray-100 p-4">
                  <span className="block text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2.5 pb-1.5 border-b border-gray-200/50">
                    Recipient Transfer Destination
                  </span>
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-100/70 last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Mobile Method Name
                        </td>
                        <td className="py-2 text-xs font-bold text-gray-700 text-right">
                          {selectedTx.mobileMethodName}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100/70 last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Mobile Method Number
                        </td>
                        <td className="py-2 text-xs font-bold text-gray-700 text-right font-mono">
                          {selectedTx.mobileMethodNumber}
                        </td>
                      </tr>
                      <tr className="last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Phone Suffix
                        </td>
                        <td className="py-2 text-xs font-bold text-gray-700 text-right">
                          {selectedTx.phone}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* GROUP 3: Pricing & Settlement */}
                <div className="bg-gray-50/50 rounded-xl border border-gray-100 p-4">
                  <span className="block text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2.5 pb-1.5 border-b border-gray-200/50">
                    Pricing & Settlement
                  </span>
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-100/70 last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Amount
                        </td>
                        <td className="py-2 text-xs font-bold text-gray-700 text-right">
                          {selectedTx.amount}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100/70 last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Exchange Rate
                        </td>
                        <td className="py-2 text-xs font-bold text-gray-700 text-right">
                          {selectedTx.exchangeRate}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100/70 last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Fees & Charges
                        </td>
                        <td className="py-2 text-xs font-bold text-red-500 text-right">
                          +{selectedTx.feesCharges}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100/70 last:border-none">
                        <td className="py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Payment Method
                        </td>
                        <td className="py-2 text-xs font-bold text-gray-700 text-right">
                          {selectedTx.paymentMethod}
                        </td>
                      </tr>
                      <tr className="last:border-none">
                        <td className="py-2 text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                          Will Get Amount
                        </td>
                        <td className="py-2 text-sm font-black text-[#10b981] text-right">
                          {selectedTx.willGetAmount}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 border-t border-gray-50 bg-gray-50/50 flex flex-col sm:flex-row justify-end items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedTx(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 text-gray-500 text-xs font-bold hover:bg-gray-100 transition-colors cursor-pointer text-center"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => setSelectedTx(null)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl text-white text-xs font-bold cursor-pointer transition-all bg-[#10b981] hover:bg-[#059669] hover:-translate-y-0.5 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20"
              >
                <RefreshCw size={12} />
                {selectedTx.bottomActionButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
