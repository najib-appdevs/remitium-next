"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { showToast } from '@/lib/toast';
import { walletService } from '@/lib/services/api';
import AddMoneyStatistics from "./AddMoneyStatistics";
import TransactionSummary from "./TransactionSummary";
import TransactionsLog from "./TransactionsLog";

function WalletCard({ currency, code, balance, flag, baseUrl, pathLocation }) {
  const t = useTranslations("DashboardPage");
  const imageUrl = flag ? `${baseUrl}${pathLocation}/${flag}` : "/images/default-flag.png";

  return (
    <div className="group relative flex flex-col gap-3 overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.85)] bg-[rgba(255,255,255,0.62)] px-3.5 pb-3.5 pt-4 shadow-[0_2px_16px_rgba(16,185,129,0.07),0_1px_4px_rgba(0,0,0,0.05)] backdrop-blur-[12px] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,185,129,0.15),0_4px_12px_rgba(0,0,0,0.08)]">
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-[18px_18px_0_0] bg-gradient-to-r from-[#10b981] to-[#34d399] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-[#10b98133] bg-[#f0fdf4]">
          <Image
            src={imageUrl}
            alt={`${currency} flag`}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-[11px] font-bold tracking-[0.5px] text-[#10b981] bg-[rgba(16,185,129,0.1)] rounded-[7px] px-2 py-0.5">
          {code}
        </span>
      </div>

      <div>
        <div className="truncate text-[11px] font-medium tracking-[0.3px] text-[#6b7280] mb-1">
          {currency}
        </div>
        <div className="text-[17px] font-bold tracking-[-0.5px] text-[#1a4731] leading-[1.1] truncate">
          {parseFloat(balance).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const t = useTranslations("DashboardPage");
  
  const [wallets, setWallets] = useState([]);
  const [walletPaths, setWalletPaths] = useState({});
  const [loading, setLoading] = useState(true);
  const [showAllWallets, setShowAllWallets] = useState(false);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await walletService.getWallets();
        
        if (response.data?.type === "success") {
          const data = response.data.data;
          setWallets(data.user_wallets || []);
          setWalletPaths(data.wallet_image_paths || {});
        }
      } catch (error) {
        showToast.error("Failed to load wallets");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, []);

  const displayedWallets = showAllWallets ? wallets : wallets.slice(0, 8);

  return (
    <div>
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="text-[20px] font-bold text-[#1a4731] tracking-[-0.3px]">
          {t("myWallets")}
        </div>
        
        {wallets.length > 8 && (
          <button 
            onClick={() => setShowAllWallets(!showAllWallets)}
            className="bg-[#10b981] text-white rounded-xl border-none px-5 py-2.5 text-[13px] font-semibold tracking-[0.2px] cursor-pointer shadow-[0_4px_16px_rgba(16,185,129,0.18)] transition-all hover:bg-[#059669] hover:-translate-y-px active:scale-[0.97]"
          >
            {showAllWallets ? "Show Less" : t("viewMore")}
          </button>
        )}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-100 rounded-[18px] animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedWallets.map((wallet) => (
            <WalletCard 
              key={wallet.id} 
              currency={wallet.currency}
              code={wallet.code}
              balance={wallet.balance}
              flag={wallet.flag}
              baseUrl={walletPaths.base_url}
              pathLocation={walletPaths.path_location}
            />
          ))}
        </div>
      )}

      {/* Add Money Statistics and Transaction Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        <AddMoneyStatistics />
        <TransactionSummary />
      </div>

      {/* Transaction Log */}
      <div className="grid grid-cols-1 gap-8 mt-16">
        <TransactionsLog />
      </div>
    </div>
  );
}