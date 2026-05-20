"use client";

import { History } from "lucide-react";
import { useTranslations } from "next-intl";

// ─── Status Config ─────────────────────────────────────────────────────────────
const STATUS_MAP = {
  Completed: {
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  Pending: {
    dot: "bg-amber-500",
    text: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  Failed: {
    dot: "bg-red-500",
    text: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
  },
};

function StatusBadge({ status }) {
  const t = useTranslations("AddMoney");
  const s = STATUS_MAP[status] ?? STATUS_MAP.Pending;
  const statusKey = status.toLowerCase();
  const displayStatus = t.has(`status.${statusKey}`)
    ? t(`status.${statusKey}`)
    : status;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border shadow-xs ${s.bg} ${s.border} ${s.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${s.dot}`} />
      {displayStatus}
    </span>
  );
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
const LOGS = [
  {
    id: 1,
    title: "Add Balance via ADPay USD",
    status: "Pending",
    payableAmount: 3032.0,
    amount: 3000.0,
    currency: "USD",
    transactionId: "AM50586973",
    exchangeRate: "1.00 USD = 1.00 USD",
    feesCharges: 32.0,
    willReceive: 3000.0,
  },
  {
    id: 2,
    title: "Add Balance via Paypal USD",
    status: "Completed",
    payableAmount: 510.5,
    amount: 500.0,
    currency: "USD",
    transactionId: "AM40471882",
    exchangeRate: "1.00 USD = 1.00 USD",
    feesCharges: 10.5,
    willReceive: 500.0,
  },
  {
    id: 3,
    title: "Add Balance via Stripe USD",
    status: "Completed",
    payableAmount: 1215.0,
    amount: 1200.0,
    currency: "USD",
    transactionId: "AM38295641",
    exchangeRate: "1.00 USD = 1.00 USD",
    feesCharges: 15.0,
    willReceive: 1200.0,
  },
  {
    id: 4,
    title: "Add Balance via ADPay USD",
    status: "Failed",
    payableAmount: 808.0,
    amount: 800.0,
    currency: "USD",
    transactionId: "AM27183049",
    exchangeRate: "1.00 USD = 1.00 USD",
    feesCharges: 8.0,
    willReceive: 800.0,
  },
  {
    id: 5,
    title: "Add Balance via Paypal USD",
    status: "Completed",
    payableAmount: 253.5,
    amount: 250.0,
    currency: "USD",
    transactionId: "AM16072938",
    exchangeRate: "1.00 USD = 1.00 USD",
    feesCharges: 3.5,
    willReceive: 250.0,
  },
];

// ─── Component Styles ─────────────────────────────────────────────────────────
const TH_CLASSES =
  "px-6 py-4 text-xs font-bold text-gray-400 uppercase whitespace-nowrap text-left border-b border-gray-100";
const TD_CLASSES =
  "px-6 py-5 whitespace-nowrap text-sm font-bold text-gray-700 border-b border-gray-50";

export default function AddMoneyLog() {
  const t = useTranslations("AddMoney");

  const headersKeys = [
    "title",
    "transactionId",
    "exchangeRate",
    "amount",
    "feesCharges",
    "willGet",
    "payableAmount",
    "status",
  ];

  const formatLogTitle = (title) => {
    const prefix = "Add Balance via ";
    if (title.startsWith(prefix)) {
      const gateway = title.substring(prefix.length);
      let gwTranslated = gateway;
      if (gateway.toLowerCase().includes("paypal")) {
        gwTranslated = t("gateways.paypal");
      } else if (gateway.toLowerCase().includes("stripe")) {
        gwTranslated = t("gateways.stripe");
      }
      return t("addBalanceVia", { gateway: gwTranslated });
    }
    return title;
  };

  return (
    <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden w-full relative">
      {/* ── Section Header ── */}
      <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-emerald-50/20 to-teal-50/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-inner">
            <History size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 leading-tight">
              {t("logsTitle")}
            </h2>
          </div>
        </div>

        {/* View More Button */}
        <button
          type="button"
          className="bg-[#10b981] text-white rounded-xl border-none px-5 py-2.5 text-[13px] font-semibold tracking-[0.2px] cursor-pointer shadow-[0_4px_16px_rgba(16,185,129,0.18)] transition-[background,transform] duration-[180ms] hover:bg-[#059669] hover:-translate-y-px active:scale-[0.97]"
        >
          {t("viewMore")}
        </button>
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto w-full">
        {LOGS.length === 0 ? (
          <div className="py-16 text-center">
            <History size={40} className="text-gray-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-gray-400">
              {t("noRecords")}
            </p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/60">
              <tr>
                {headersKeys.map((key) => (
                  <th key={key} className={TH_CLASSES}>
                    {t(`headers.${key}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {LOGS.map((log) => (
                <tr
                  key={log.id}
                  className="group hover:bg-emerald-50/10 transition-colors duration-100"
                >
                  {/* 1. Title */}
                  <td className={`${TD_CLASSES} min-w-[240px]`}>
                    <p className="text-gray-800 font-bold group-hover:text-[#10b981] transition-colors leading-tight">
                      {formatLogTitle(log.title)}
                    </p>
                  </td>

                  {/* 2. Transaction ID */}
                  <td className={TD_CLASSES}>
                    <span className=" text-xs bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg">
                      {log.transactionId}
                    </span>
                  </td>

                  {/* 3. Exchange Rate */}
                  <td className={TD_CLASSES}>
                    <span className="text-sm text-gray-500 font-medium">
                      {log.exchangeRate}
                    </span>
                  </td>

                  {/* 4. Amount */}
                  <td className={TD_CLASSES}>
                    <span className="text-gray-700 font-bold">
                      {log.amount.toFixed(2)} {log.currency}
                    </span>
                  </td>

                  {/* 5. Fees & Charges */}
                  <td className={TD_CLASSES}>
                    <span className="text-red-500 font-bold">
                      +{log.feesCharges.toFixed(2)} {log.currency}
                    </span>
                  </td>

                  {/* 6. Will Get */}
                  <td className={TD_CLASSES}>
                    <span className="text-[#10b981] font-black">
                      {log.willReceive.toFixed(2)} {log.currency}
                    </span>
                  </td>

                  {/* 7. Payable Amount */}
                  <td className={TD_CLASSES}>
                    <span className="text-[#0d3d24] font-black">
                      {log.payableAmount.toFixed(2)} {log.currency}
                    </span>
                  </td>

                  {/* 8. Status */}
                  <td className={TD_CLASSES}>
                    <StatusBadge status={log.status} />
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
