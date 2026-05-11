import { Download, Filter, Search } from "lucide-react";

export default function TransactionPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-navy tracking-tight">Transactions</h1>
          <p className="text-gray-500 mt-2">Track and manage all your global money movements in real-time.</p>
        </div>
        <button className="bg-white border border-gray-100 text-brand-navy px-6 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
          <Download size={18} />
          Export Statement
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-100 w-full sm:w-64">
              <Search size={16} className="text-gray-400" />
              <input type="text" placeholder="Search transactions..." className="bg-transparent text-xs focus:outline-none w-full" />
            </div>
            <button className="p-2.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-500 hover:text-brand-navy transition-all">
              <Filter size={18} />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            {["All", "Sent", "Received", "Virtual Card"].map((tab) => (
              <button 
                key={tab} 
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${tab === "All" ? "bg-brand-primary text-white" : "text-gray-500 hover:bg-gray-50"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table Placeholder */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <tr>
                <th className="px-8 py-4">Transaction Details</th>
                <th className="px-8 py-4">Category</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="group hover:bg-gray-50/50 transition-all">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-brand-navy text-xs">
                        {i % 2 === 0 ? "SJ" : "AM"}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy">Sarah Jenkins</p>
                        <p className="text-[10px] text-gray-500">May 11, 2026 · 12:45 PM</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-[11px] font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md">Transfer</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-brand-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      Completed
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right font-black text-brand-navy">
                    -$1,240.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 border-t border-gray-100 text-center">
          <button className="text-xs font-bold text-brand-primary hover:underline">View All Transactions</button>
        </div>
      </div>
    </div>
  );
}
