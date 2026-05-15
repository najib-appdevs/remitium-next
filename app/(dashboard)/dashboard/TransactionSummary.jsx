"use client";

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
  { month: "Jan", remittance: 500, moneyOut: 5800, all: 300 },
  { month: "Feb", remittance: 0, moneyOut: 0, all: 0 },
  { month: "Mar", remittance: 150, moneyOut: 50, all: 100 },
  { month: "Apr", remittance: 400, moneyOut: 0, all: 350 },
  { month: "May", remittance: 0, moneyOut: 0, all: 0 },
  { month: "Jun", remittance: 0, moneyOut: 0, all: 0 },
  { month: "Jul", remittance: 0, moneyOut: 0, all: 0 },
  { month: "Aug", remittance: 0, moneyOut: 0, all: 0 },
  { month: "Sep", remittance: 0, moneyOut: 0, all: 0 },
  { month: "Oct", remittance: 0, moneyOut: 0, all: 0 },
  { month: "Nov", remittance: 0, moneyOut: 0, all: 0 },
  { month: "Dec", remittance: 0, moneyOut: 0, all: 0 },
];

const TransactionSummary = () => {
  return (
    <div className="w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-700">
          Transaction Summary
        </h1>
      </div>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
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
              name="Send Remittance"
              dataKey="remittance"
              fill="#00BA88"
              radius={[4, 4, 4, 4]}
              barSize={12}
            />

            <Bar
              name="Money Out"
              dataKey="moneyOut"
              fill="#00BA88"
              radius={[4, 4, 4, 4]}
              barSize={12}
            />

            <Bar
              name="ALL"
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
