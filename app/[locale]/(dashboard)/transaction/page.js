"use client";

import { ChevronLeft, ChevronRight, History, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { showToast } from '@/lib/toast';
import { transactionService } from '@/lib/services/api';

function StatusBadge({ status }) {
  const isSuccess = status?.toLowerCase() === "success";
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${
      isSuccess 
        ? "bg-emerald-50 border-emerald-100 text-emerald-600" 
        : "bg-amber-50 border-amber-100 text-amber-600"
    }`}>
      <span className={`w-1 h-1 rounded-full ${isSuccess ? "bg-emerald-500" : "bg-amber-500"}`} />
      {status}
    </span>
  );
}

export default function RemittanceTable() {
  const t = useTranslations("RemittanceLog");

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch Transactions
  const fetchTransactions = async (page = 1, search = "") => {
    setLoading(true);
    try {
      const response = await transactionService.getTransactionLog(page, search);
      
      if (response.data?.type === "success" && response.data?.data?.transactions) {
        const txData = response.data.data.transactions;
        setTransactions(txData.data || []);
        setCurrentPage(txData.current_page || 1);
        setTotalPages(txData.last_page || 1);
      }
    } catch (error) {
      showToast.error("Failed to load transactions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const openDetail = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTransaction(null);
  };

  return (
    <>
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <History size={20} />
            </div>
            <h1 className="text-xl font-bold text-gray-800">{t("title")}</h1>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 p-3 outline-none transition-all focus:bg-white"
              placeholder={t("searchPlaceholder")}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Recipient</th>
                <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Amount</th>
                <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-16 text-gray-400">Loading transactions...</td>
                </tr>
              ) : transactions.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-16 text-gray-400">No transactions found</td>
                </tr>
              ) : (
                transactions.map((tx) => (
                  <tr
                    key={tx.transaction_id}
                    onClick={() => openDetail(tx)}
                    className="hover:bg-gray-50/70 cursor-pointer transition-all border-b border-gray-100 last:border-none group"
                  >
                    <td className="px-6 py-5 text-sm text-gray-600">
                      {new Date(tx.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-5 font-mono text-sm text-gray-700 group-hover:text-emerald-600 transition-colors">
                      {tx.transaction_id}
                    </td>
                    <td className="px-6 py-5 text-sm font-medium">{tx.type}</td>
                    <td className="px-6 py-5 text-sm font-medium text-gray-800">
                      {tx.recipient_name || "Not Available"}
                    </td>
                    <td className="px-6 py-5 text-sm font-bold text-right text-rose-600">
                      {tx.request_amount} {tx.request_currency}
                    </td>
                    <td className="px-6 py-5">
                      <StatusBadge status={tx.status} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl p-1">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p-1))} 
              disabled={currentPage === 1} 
              className="p-3 hover:bg-gray-100 rounded-xl disabled:opacity-40 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`cursor-pointer w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-xl transition-all ${
                  currentPage === page 
                    ? 'bg-emerald-500 text-white' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))} 
              disabled={currentPage === totalPages} 
              className="p-3 hover:bg-gray-100 rounded-xl disabled:opacity-40 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Transaction Detail Modal */}
      {showModal && selectedTransaction && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" data-lenis-prevent="true">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center border-b border-gray-200  px-6 py-5">
              <h2 className="text-2xl font-bold text-gray-900">Transaction Details</h2>
              <button onClick={closeModal} className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
                <X size={28} />
              </button>
            </div>

            <div className="p-8 space-y-8 overflow-y-auto max-h-[65vh]">
              <div className="grid grid-cols-2 gap-y-6 text-sm">
                <div><span className="text-gray-500 block">Transaction ID</span><strong className="font-mono">{selectedTransaction.transaction_id}</strong></div>
                <div><span className="text-gray-500 block">Date & Time</span><strong>{new Date(selectedTransaction.created_at).toLocaleString()}</strong></div>
                <div><span className="text-gray-500 block">Type</span><strong>{selectedTransaction.type}</strong></div>
                <div><span className="text-gray-500 block">Status</span><StatusBadge status={selectedTransaction.status} /></div>
              </div>

              <div className="border-t border-gray-200 pt-8 space-y-5">
                <div className="flex justify-between items-center"><span className="text-gray-500">Sent Amount</span><span className="font-bold text-lg">{selectedTransaction.request_amount} {selectedTransaction.request_currency}</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-500">Total Payable</span><span className="font-bold text-lg">{parseFloat(selectedTransaction.total_payable).toFixed(2)} {selectedTransaction.request_currency}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Fees Charged</span><span>{parseFloat(selectedTransaction.total_charge).toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Exchange Rate</span><span>1 {selectedTransaction.request_currency} = {selectedTransaction.exchange_rate}</span></div>
                
                {selectedTransaction.receive_amount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold text-lg border-t border-gray-200 pt-4">
                    <span>Recipient Will Receive</span>
                    <span>{parseFloat(selectedTransaction.receive_amount).toFixed(2)} {selectedTransaction.receiver_currency}</span>
                  </div>
                )}
              </div>

              {selectedTransaction.recipient_name && (
                <div className="pt-4">
                  <p className="text-gray-500 text-sm mb-1">Recipient Name</p>
                  <p className="font-medium text-gray-900">{selectedTransaction.recipient_name}</p>
                </div>
              )}

              {selectedTransaction.payment_gateway && (
                <div>
                  <p className="text-gray-500 text-sm mb-1">Payment Gateway</p>
                  <p className="font-medium">{selectedTransaction.payment_gateway}</p>
                </div>
              )}
            </div>

            <div className="p-6">
              <button
                className="cursor-pointer w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl transition-all active:scale-[0.985]"
                onClick={() => {
                  showToast.success("Repeat transaction feature coming soon!");
                  closeModal();
                }}
              >
                REPEAT THIS TRANSACTION
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}