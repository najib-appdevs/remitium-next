import { CreditCard, Plus, Zap } from "lucide-react";

// ─── Status Badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[11px] font-bold">
      <span className="w-1 h-1 rounded-full bg-emerald-500" />
      {status}
    </span>
  );
}

const TRANSACTIONS = [
  {
  id: 1,
  type: "Card Fund",
  status: "Success",
  totalAmount: "6.05 USD",
  transactionId: "CF18278982",
  requestAmount: "5.00 USD",
  fees: "1.05 USD",
},

{
  id: 2,
  type: "Bank Transfer",
  status: "Success",
  totalAmount: "12.50 USD",
  transactionId: "BT92837465",
  requestAmount: "10.00 USD",
  fees: "2.50 USD",
},

{
  id: 3,
  type: "Mobile Recharge",
  status: "Success",
  totalAmount: "15.75 USD",
  transactionId: "MR56473829",
  requestAmount: "15.00 USD",
  fees: "0.75 USD",
},

{
  id: 4,
  type: "Wallet Top-up",
  status: "Success",
  totalAmount: "25.30 USD",
  transactionId: "WT83726194",
  requestAmount: "24.00 USD",
  fees: "1.30 USD",
},

{
  id: 5,
  type: "Utility Payment",
  status: "Success",
  totalAmount: "40.00 USD",
  transactionId: "UP19283746",
  requestAmount: "38.50 USD",
  fees: "1.50 USD",
},

{
  id: 6,
  type: "Crypto Purchase",
  status: "Success",
  totalAmount: "102.99 USD",
  transactionId: "CP66554433",
  requestAmount: "100.00 USD",
  fees: "2.99 USD",
},

{
  id: 7,
  type: "Subscription",
  status: "Success",
  totalAmount: "9.99 USD",
  transactionId: "SB11223344",
  requestAmount: "8.99 USD",
  fees: "1.00 USD",
},

{
  id: 8,
  type: "Cash Out",
  status: "Success",
  totalAmount: "55.20 USD",
  transactionId: "CO77889911",
  requestAmount: "53.00 USD",
  fees: "2.20 USD",
},
];

const TH_CLASSES = "px-4 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 whitespace-nowrap";
const TD_CLASSES = "px-4 py-4 text-[12px] text-slate-600 border-b border-gray-50 whitespace-nowrap";

export default function VirtualCardPage() {
  return (
    <div className="w-full space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-700">Virtual Cards</h1>
        <button className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 active:scale-95 cursor-pointer">
          <Plus size={18} fill="currentColor" />
          Create Card
        </button>
      </div>

      {/* 1) Virtual Card Section */}
      <section className="relative bg-white rounded-2xl border border-brand-border-color shadow-sm overflow-hidden p-8">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          {/* Centered Visual Placeholder */}
          <div className="bg-brand-bg-light p-6 rounded-full border border-brand-border-color mb-6">
            <CreditCard size={48} className="text-brand-primary" />
          </div>

          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            No active virtual cards
          </h2>
          <p className="text-gray-500 mb-8 max-w-sm text-sm">
            Generate a secure virtual card for your online subscriptions and
            safe shopping with instant freeze capabilities.
          </p>

          {/* Main Center Button */}
          <button className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 active:scale-95 cursor-pointer">
            <Zap size={18} fill="currentColor" />
            Create Your First Card
          </button>
        </div>
      </section>

      {/* 2) Recent Transactions */}
      <section>
        <div className="flex items-center justify-between my-4">
          <h3 className="text-2xl font-bold text-gray-700">
            Recent Transactions
          </h3>
          <button className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 active:scale-95 cursor-pointer">
            View More
          </button>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className={TH_CLASSES}>Type</th>
                  <th className={TH_CLASSES}>Transaction ID</th>
                  <th className={TH_CLASSES}>Request Amount</th>
                  <th className={TH_CLASSES}>Fees & Charges</th>
                  <th className={TH_CLASSES}>Total Amount</th>
                  <th className={TH_CLASSES}>Status</th>
                </tr>
              </thead>
              <tbody>
                {TRANSACTIONS.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className={`${TD_CLASSES} font-bold text-slate-800`}>{tx.type}</td>
                    <td className={`${TD_CLASSES} font-mono text-[11px]`}>{tx.transactionId}</td>
                    <td className={TD_CLASSES}>{tx.requestAmount}</td>
                    <td className={TD_CLASSES}>{tx.fees}</td>
                    <td className={`${TD_CLASSES} font-black text-brand-primary`}>{tx.totalAmount}</td>
                    <td className={TD_CLASSES}>
                      <StatusBadge status={tx.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
