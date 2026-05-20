"use client";

import Image from "next/image";
import AddMoneyStatistics from "./AddMoneyStatistics";
import TransactionSummary from "./TransactionSummary";
import TransactionsLog from "./TransactionsLog";
import { useTranslations } from "next-intl";

const wallets = [
  { countryKey: "unitedStates", code: "us", value: "19528.35", currency: "USD" },
  { countryKey: "unitedKingdom", code: "gb", value: "12480.00", currency: "GBP" },
  { countryKey: "europeanUnion", code: "eu", value: "8240.50", currency: "EUR" },
  { countryKey: "japan", code: "jp", value: "15400.00", currency: "JPY" },
  { countryKey: "canada", code: "ca", value: "11200.75", currency: "CAD" },
  { countryKey: "australia", code: "au", value: "9800.40", currency: "AUD" },
  { countryKey: "india", code: "in", value: "725000.00", currency: "INR" },
  { countryKey: "bangladesh", code: "bd", value: "1345000.00", currency: "BDT" },
];

function WalletCard({ countryKey, code, value, currency }) {
  const t = useTranslations("DashboardPage");
  return (
    <div className="group relative flex flex-col gap-3 overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.85)] bg-[rgba(255,255,255,0.62)] px-3.5 pb-3.5 pt-4 shadow-[0_2px_16px_rgba(16,185,129,0.07),0_1px_4px_rgba(0,0,0,0.05)] backdrop-blur-[12px] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,185,129,0.15),0_4px_12px_rgba(0,0,0,0.08)]">
      {/* Top indicator bar matching ::before pseudo-element */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-[18px_18px_0_0] bg-gradient-to-r from-[#10b981] to-[#34d399] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-[#10b98133] bg-[#f0fdf4]">
          <Image
            src={`https://flagcdn.com/w80/${code}.png`}
            alt={`${t(countryKey)} flag`}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-[11px] font-bold tracking-[0.5px] text-[#10b981] bg-[rgba(16,185,129,0.1)] rounded-[7px] px-2 py-0.5">
          {currency}
        </span>
      </div>

      <div>
        <div className="truncate text-[11px] font-medium tracking-[0.3px] text-[#6b7280] mb-1">
          {t(countryKey)}
        </div>
        <div className="text-[17px] font-bold tracking-[-0.5px] text-[#1a4731] leading-[1.1] truncate">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const t = useTranslations("DashboardPage");
  return (
    <div>
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="text-[20px] font-bold text-[#1a4731] tracking-[-0.3px]">
          {t("myWallets")}
        </div>
        <button className="bg-[#10b981] text-white rounded-xl border-none px-5 py-2.5 text-[13px] font-semibold tracking-[0.2px] cursor-pointer shadow-[0_4px_16px_rgba(16,185,129,0.18)] transition-[background,transform] duration-[180ms] hover:bg-[#059669] hover:-translate-y-px active:scale-[0.97]">
          {t("viewMore")}
        </button>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {wallets.map((wallet) => (
          <WalletCard key={wallet.currency} {...wallet} />
        ))}
      </div>
      {/* Add Money Statistics and Transaction Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        <AddMoneyStatistics />
        <TransactionSummary />
      </div>
      {/* Transaction log */}
      <div className="grid grid-cols-1 gap-8 mt-16">
        <TransactionsLog />
      </div>
    </div>
  );
}
