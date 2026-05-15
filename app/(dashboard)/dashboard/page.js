import Image from "next/image";
import AddMoneyStatistics from "./AddMoneyStatistics";
import TransactionSummary from "./TransactionSummary";
import TransactionsLog from "./TransactionsLog";

export default function DashboardPage() {
  const wallets = [
    {
      country: "United States",
      code: "us",
      value: "19528.35",
      currency: "USD",
    },
    {
      country: "United Kingdom",
      code: "gb",
      value: "12480.00",
      currency: "GBP",
    },
    {
      country: "European Union",
      code: "eu",
      value: "8240.50",
      currency: "EUR",
    },
    { country: "Japan", code: "jp", value: "15400.00", currency: "JPY" },
    { country: "Canada", code: "ca", value: "11200.75", currency: "CAD" },
    { country: "Australia", code: "au", value: "9800.40", currency: "AUD" },
    { country: "India", code: "in", value: "725000.00", currency: "INR" },
    { country: "Bangladesh", code: "bd", value: "1345000.00", currency: "BDT" },
  ];

  return (
    <div className="space-y-8 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-700">My Wallets</h1>
        <button className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 active:scale-95 cursor-pointer text-sm">
          View More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wallets.map((wallet) => (
          <div
            key={wallet.currency}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between"
          >
            {/* Left Div: Text Content */}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-gray-800 tracking-wide">
                {wallet.country}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-900 tracking-tighter">
                  {wallet.value}
                </span>
                <span className="text-2xl font-black text-[#10b981]">
                  {wallet.currency}
                </span>
              </div>
            </div>

            {/* Right Div: Image Content */}
            <div className="flex-shrink-0">
              <div className="relative w-14 h-14 overflow-hidden rounded-full border border-gray-50 shadow-sm">
                <Image
                  src={`https://flagcdn.com/w80/${wallet.code}.png`}
                  alt={`${wallet.country} flag`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        <AddMoneyStatistics />
        <TransactionSummary />
      </div>

      <div className="grid grid-cols-1 gap-8 mt-16">
        <TransactionsLog/>
      </div>
    </div>
  );
}
