"use client";

import { ChartNoAxesCombined } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { monthKey: "jan", amount: 5190.88 },
  { monthKey: "feb", amount: 2000.0 },
  { monthKey: "mar", amount: 1000.0 },
  { monthKey: "apr", amount: 1400.0 },
  { monthKey: "may", amount: 400.0 },
  { monthKey: "jun", amount: 2450.0 },
  { monthKey: "jul", amount: 5500.88 },
  { monthKey: "aug", amount: 4325.93 },
  { monthKey: "sep", amount: 6000.0 },
  { monthKey: "oct", amount: 2500.0 },
  { monthKey: "nov", amount: 1000.0 },
  { monthKey: "dec", amount: 1500.0 },
];

const AddMoneyStatistics = () => {
  const t = useTranslations("AddMoneyStatistics");

  const chartData = data.map((item) => ({
    ...item,
    month: t(`months.${item.monthKey}`),
  }));

  return (
    <div className="w-full bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-inner">
            <ChartNoAxesCombined size={20} />
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
            margin={{ top: 60, right: 10, left: 10, bottom: 20 }}
            barGap={0}
          >
            <CartesianGrid
              vertical={false}
              stroke="#f0f0f0"
              strokeDasharray="0"
            />

            <XAxis
              dataKey="month"
              orientation="top"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#374151", fontSize: 14, fontWeight: 500 }}
              dy={-30}
            />

            <YAxis hide domain={[0, 7500]} />

            {/* Tooltip added for hover data display */}
            <Tooltip
              cursor={{ fill: "#f3f4f6", opacity: 0.4 }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              formatter={(value) => [`$${value.toFixed(2)}`, t("amount")]}
            />

            <Bar
              dataKey="amount"
              radius={[10, 10, 10, 10]}
              barSize={35} // Reduced from 55 to 35 for a slimmer look
              minPointSize={2}
            >
              <LabelList
                dataKey="amount"
                position="top"
                content={(props) => {
                  const { x, y, width, value } = props;
                  const labelY = value === 0 ? y - 5 : y - 12;

                  return (
                    <text
                      x={x + width / 2}
                      y={labelY}
                      fill="black"
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight="bold"
                    >
                      {value === 0 ? "$0" : `$${value.toFixed(2)}`}
                    </text>
                  );
                }}
              />

              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  className="transition-opacity duration-300 hover:opacity-80"
                  fill={entry.amount > 0 ? "#22C58E" : "#f3f4f6"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h3 className="text-center mt-2 text-base font-bold text-gray-700">
        {t("overview")}
      </h3>
    </div>
  );
};

export default AddMoneyStatistics;
