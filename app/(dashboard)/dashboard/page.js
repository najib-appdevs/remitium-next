export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-brand-navy tracking-tight">Overview</h1>
        <p className="text-gray-500 mt-2">Welcome back! Here&apos;s what&apos;s happening with your account today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Balance", value: "$12,480.00", change: "+12.5%", color: "text-brand-primary" },
          { label: "Active Cards", value: "3", change: "0", color: "text-blue-500" },
          { label: "Pending Transfers", value: "2", change: "-1", color: "text-amber-500" },
          { label: "Total Saved", value: "$430.20", change: "+$24.00", color: "text-purple-500" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            <p className={`text-2xl font-black mt-2 ${stat.color}`}>{stat.value}</p>
            <p className="text-[10px] font-bold text-gray-500 mt-2">
              <span className={stat.change.startsWith("+") ? "text-brand-primary" : ""}>
                {stat.change}
              </span> from last month
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 min-h-[400px] flex items-center justify-center text-gray-400 font-medium italic">
        Chart and Recent Activity will be implemented here...
      </div>
    </div>
  );
}
