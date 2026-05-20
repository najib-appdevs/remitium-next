"use client";

import { ChartColumnBig } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { monthKey: "jan", remittance: 500, moneyOut: 5800, all: 300 },
  { monthKey: "feb", remittance: 0, moneyOut: 0, all: 0 },
  { monthKey: "mar", remittance: 150, moneyOut: 50, all: 100 },
  { monthKey: "apr", remittance: 400, moneyOut: 0, all: 350 },
  { monthKey: "may", remittance: 0, moneyOut: 0, all: 0 },
  { monthKey: "jun", remittance: 0, moneyOut: 0, all: 0 },
  { monthKey: "jul", remittance: 0, moneyOut: 0, all: 0 },
  { monthKey: "aug", remittance: 0, moneyOut: 0, all: 0 },
  { monthKey: "sep", remittance: 0, moneyOut: 0, all: 0 },
  { monthKey: "oct", remittance: 0, moneyOut: 0, all: 0 },
  { monthKey: "nov", remittance: 0, moneyOut: 0, all: 0 },
  { monthKey: "dec", remittance: 0, moneyOut: 0, all: 0 },
];

const TransactionSummary = () => {
  const t = useTranslations("TransactionSummary");

  const chartData = data.map((item) => ({
    ...item,
    month: t(`months.${item.monthKey}`),
  }));

  return (
    <div className="w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-inner">
            <ChartColumnBig size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 leading-tight">
              {t("title")}
            </h2>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
            barGap={4} // Space between the 3 bars in a group
          >
            <CartesianGrid vertical={false} stroke="#f0f0f0" />

            <XAxis
              dataKey="month"
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 13 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 13 }}
              domain={[0, 6000]}
              ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]}
              tickFormatter={(value) => value.toFixed(2)}
            />

            <Tooltip
              cursor={{ fill: "#f9fafb" }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="square"
              wrapperStyle={{ paddingTop: "30px" }}
            />

            {/* Thicker Bars for each category */}
            <Bar
              name={t("sendRemittance")}
              dataKey="remittance"
              fill="#00BA88"
              radius={[4, 4, 4, 4]}
              barSize={12}
            />

            <Bar
              name={t("moneyOut")}
              dataKey="moneyOut"
              fill="#00BA88"
              radius={[4, 4, 4, 4]}
              barSize={12}
            />

            <Bar
              name={t("all")}
              dataKey="all"
              fill="#00BA88"
              radius={[4, 4, 4, 4]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionSummary;
