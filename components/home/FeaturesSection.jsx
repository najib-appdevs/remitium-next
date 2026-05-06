import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: 1,
    title: "Sign Up or Log In",
    description:
      "Create an account in minutes or log in to start your journey with Remitium.",
  },
  {
    number: 2,
    title: "Add Details and Choose a Service",
    description:
      "Enter recipient details, select your preferred service like bank transfer, cash pickup, or mobile wallet, and confirm.",
  },
  {
    number: 3,
    title: "Send Money Securely",
    description:
      "Complete your transaction with confidence using one of our secure payment methods.",
  },
];

const RECENT_TRANSFERS = [
  {
    fromFlag: "https://flagcdn.com/us.svg",
    fromAlt: "US",
    toFlag: "https://flagcdn.com/ng.svg",
    toAlt: "Nigeria",
    recipient: "James O.",
    amount: "+₦76,483",
  },
  {
    fromFlag: "https://flagcdn.com/gb.svg",
    fromAlt: "UK",
    toFlag: "https://flagcdn.com/gh.svg",
    toAlt: "Ghana",
    recipient: "Ama K.",
    amount: "+₵ 840",
  },
  {
    fromFlag: "https://flagcdn.com/us.svg",
    fromAlt: "US",
    toFlag: "https://flagcdn.com/ke.svg",
    toAlt: "Kenya",
    recipient: "David M.",
    amount: "+KSh 2,100",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg
      width="10"
      height="10"
      fill="none"
      stroke="#fff"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function TransferRow({ fromFlag, fromAlt, toFlag, toAlt, recipient, amount }) {
  return (
    <div className="flex items-center gap-2 bg-[#f7faf8] rounded-lg px-3 py-2">
      {/* From flag */}
      <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 border border-[#e2ede9]">
        <Image
          src={fromFlag}
          alt={fromAlt}
          width={20}
          height={20}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      {/* Arrow */}
      <div className="w-[22px] h-[22px] rounded-full bg-[#00c881] flex items-center justify-center flex-shrink-0">
        <ArrowIcon />
      </div>

      {/* To flag */}
      <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 border border-[#e2ede9]">
        <Image
          src={toFlag}
          alt={toAlt}
          width={20}
          height={20}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      <span className="text-[11px] font-medium text-[#0b1727]">
        {recipient}
      </span>
      <span className="text-[12px] font-bold text-[#00a96c] ml-auto">
        {amount}
      </span>
    </div>
  );
}

function DashboardIllustration() {
  return (
    <div className="bg-[#e6f9f2] rounded-[20px] p-6 border border-[#a3ecd0] flex flex-col gap-4">
      {/* Phone card */}
      <div className="bg-white rounded-[14px] p-4 border border-[#e2ede9] flex flex-col gap-3">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#00c881] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              R
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#0b1727] leading-none">
                Remitium
              </p>
              <p className="text-[10px] text-[#7a9990]">Dashboard</p>
            </div>
          </div>
          <span className="bg-[#e6f9f2] text-[#0a7a52] text-[10px] font-semibold px-2 py-0.5 rounded-md">
            Live
          </span>
        </div>

        {/* Total */}
        <div className="border-t border-[#e2ede9] pt-3">
          <p className="text-[10px] text-[#7a9990] mb-1">
            Total sent this month
          </p>
          <p className="font-bold text-[22px] text-[#0b1727] leading-none">
            $12,480.00
          </p>
          {/* Progress bar */}
          <div className="h-2 bg-[#e2ede9] rounded-full mt-2 overflow-hidden">
            <div
              className="h-2 bg-[#00c881] rounded-full"
              style={{ width: "72%" }}
            />
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Transactions", value: "48" },
            { label: "Countries", value: "12" },
          ].map((s) => (
            <div key={s.label} className="bg-[#f7faf8] rounded-lg px-3 py-2">
              <p className="text-[10px] text-[#7a9990] font-medium mb-0.5">
                {s.label}
              </p>
              <p className="text-[14px] font-bold text-[#0b1727]">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent transfers */}
      <div className="flex flex-col gap-2">
        <p className="text-[10px] text-[#7a9990] font-medium px-0.5">
          Recent transfers
        </p>
        {RECENT_TRANSFERS.map((t) => (
          <TransferRow key={t.recipient} {...t} />
        ))}
      </div>
    </div>
  );
}

function Step({ number, title, description, isLast }) {
  return (
    <div className="flex gap-4">
      {/* Left: number + connector line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#00c881] text-white flex items-center justify-center font-bold text-base z-10 flex-shrink-0">
          {number}
        </div>
        {!isLast && (
          <div
            className="w-0.5 flex-1 bg-[#e2ede9] mt-1"
            style={{ minHeight: "32px" }}
          />
        )}
      </div>

      {/* Right: text */}
      <div className={`${isLast ? "pb-0" : "pb-6"} pt-2`}>
        <h3 className="font-bold text-[15px] text-[#0b1727] mb-1">{title}</h3>
        <p className="text-base text-gray-700 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-[#f7faf8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Illustration */}
        <DashboardIllustration />

        {/* Right: Steps */}
        <div className="flex flex-col gap-8">
          {/* Heading block */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00c881]" />
              How it works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b1727] leading-tight tracking-tight">
              Easy, fast,
              <br />
              and secure
              <br />
              money transfers
            </h2>
          </div>

          {/* Steps */}
          <div className="flex flex-col">
            {STEPS.map((step, i) => (
              <Step
                key={step.number}
                {...step}
                isLast={i === STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
