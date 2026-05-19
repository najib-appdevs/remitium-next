import Image from "next/image";
import { useTranslations } from "next-intl";

// Sub-components

function ArrowIcon() {
  return (
    <svg
      width="9"
      height="9"
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

function ChevronIcon() {
  return (
    <svg
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="text-[#a0bab4] ml-auto flex-shrink-0"
      aria-hidden="true"
    >
    </svg>
  );
}

function TransferRow({
  fromFlag,
  fromAlt,
  toFlag,
  toAlt,
  name,
  method,
  amount,
  time,
}) {
  return (
    <div className="flex items-center gap-2.5 bg-[#f7faf8] rounded-[10px] px-3 py-2">
      {/* From */}
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
      <div className="w-5 h-5 rounded-full bg-[#00c881] flex items-center justify-center flex-shrink-0">
        <ArrowIcon />
      </div>

      {/* To */}
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

      <span className="text-[11.5px] text-[#3d5a55] truncate">
        {name} · {method}
      </span>

      <span className="text-[12px] font-bold text-[#00a96c] ml-auto whitespace-nowrap">
        {amount}
      </span>
      <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
        {time}
      </span>
    </div>
  );
}

function TrustBadge({ title, sub, icon, iconBg, iconColor }) {
  return (
    <div className="flex items-center gap-3 bg-white border border-[#e2ede9] hover:border-[#a3ecd0] rounded-[12px] px-4 py-3 transition-colors duration-200">
      <div
        className={`w-[34px] h-[34px] rounded-[9px] ${iconBg} ${iconColor} flex items-center justify-center flex-shrink-0`}
      >
        {icon}
      </div>
      <div>
        <p className="text-[12px] font-bold text-[#0b1727]">{title}</p>
        <p className="text-[11px] text-slate-500 font-medium">{sub}</p>
      </div>
      <ChevronIcon />
    </div>
  );
}

/** Dark card with concentric ring decorations */
function GlobeCard() {
  const t = useTranslations("ImpactSection");
  return (
    <div
      className="rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between mb-4"
      style={{
        background: "linear-gradient(135deg, #0b2a1f 0%, #0b1727 100%)",
        minHeight: "200px",
      }}
    >
      {/* Concentric rings */}
      {[120, 200, 300].map((size, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute rounded-full border border-[rgba(0,200,129,0.12)] pointer-events-none"
          style={{
            width: size,
            height: size,
            top: -(size / 2) - 20,
            right: -(size / 2) - 20,
          }}
        />
      ))}

      {/* Dot map watermark */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 opacity-10 pointer-events-none"
      >
        <svg width="130" height="90" viewBox="0 0 130 90" fill="#00c881">
          {[10, 30, 50, 70, 90, 110].map((x) =>
            [10, 28, 46, 64, 80].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />
            )),
          )}
        </svg>
      </div>

      <div className="relative z-10">
        <h3 className="font-extrabold text-white text-[16px] leading-snug mb-1">
          {t("globeTitle1")}
          <br />
          {t("globeTitle2")}
        </h3>
        <p className="text-[11px] text-slate-300 font-normal">
          {t("globeSubtitle")}
        </p>
      </div>

      <div className="relative z-10 mt-auto pt-5 border-t border-white/[0.08]">
        <span className="font-extrabold text-[#00c881] text-[26px] leading-none">
          {t("globeVolume")}
        </span>
        <p className="text-[10px] text-slate-400 mt-0.5">
          {t("globeVolumeLabel")}
        </p>
      </div>
    </div>
  );
}

// Main Component

export default function ImpactSection() {
  const t = useTranslations("ImpactSection");

  const STATS = [
    { value: t("stat1Value"), suffix: "+", label: t("stat1Label") },
    { value: t("stat2Value"), suffix: "+", label: t("stat2Label") },
    { value: t("stat3Value"), suffix: "+", label: t("stat3Label") },
  ];

  const LIVE_TRANSFERS = [
    {
      fromFlag: "https://flagcdn.com/us.svg",
      fromAlt: "US",
      toFlag: "https://flagcdn.com/ng.svg",
      toAlt: "Nigeria",
      name: "James O.",
      method: t("methodBank"),
      amount: "+₦76,483",
      time: t("time2s"),
    },
    {
      fromFlag: "https://flagcdn.com/gb.svg",
      fromAlt: "UK",
      toFlag: "https://flagcdn.com/gh.svg",
      toAlt: "Ghana",
      name: "Ama K.",
      method: t("methodWallet"),
      amount: "+₵ 840",
      time: t("time14s"),
    },
    {
      fromFlag: "https://flagcdn.com/us.svg",
      fromAlt: "US",
      toFlag: "https://flagcdn.com/ke.svg",
      toAlt: "Kenya",
      name: "David M.",
      method: t("methodRemitium"),
      amount: "+KSh 2,100",
      time: t("time41s"),
    },
    {
      fromFlag: "https://flagcdn.com/ca.svg",
      fromAlt: "Canada",
      toFlag: "https://flagcdn.com/in.svg",
      toAlt: "India",
      name: "Rajesh P.",
      method: t("methodBank"),
      amount: "+₹45,200",
      time: t("time1m"),
    },
  ];

  const TRUST_BADGES = [
    {
      title: t("trust1Title"),
      sub: t("trust1Sub"),
      iconBg: "bg-[#e6f9f2]",
      iconColor: "text-[#0a7a52]",
      icon: (
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: t("trust2Title"),
      sub: t("trust2Sub"),
      iconBg: "bg-[#e6f1fb]",
      iconColor: "text-[#185fa5]",
      icon: (
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      ),
    },
    {
      title: t("trust3Title"),
      sub: t("trust3Sub"),
      iconBg: "bg-[#faeeda]",
      iconColor: "text-[#854f0b]",
      icon: (
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#f7faf8] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
            {t("badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b1727] leading-tight tracking-tight">
            {t("headingPart1")}
            <br />
            {t("headingPart2")}
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-sm mt-3">
            {t("description")}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4">
          {/* LEFT — Stats + Live feed */}
          <div 
            className="bg-white border border-[#e2ede9] rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {/* Map dot watermark */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"
            >
              <svg viewBox="0 0 800 400" width="100%" fill="#00c881">
                {[
                  100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540,
                  580, 620, 660, 700,
                ].map((x) =>
                  [100, 150, 200, 250].map((y) => (
                    <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
                  )),
                )}
              </svg>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 relative z-10">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-1 py-2 ${i > 0 ? "pl-6 border-l border-[#e2ede9]" : ""}`}
                >
                  <div className="flex items-end gap-0.5 leading-none">
                    <span className="text-[32px] font-extrabold text-[#0b1727]">
                      {stat.value}
                    </span>
                    <span className="text-[22px] font-bold text-[#00c881] mb-0.5">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium leading-snug whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-[#e2ede9] relative z-10" />

            {/* Live feed */}
            <div className="flex flex-col gap-4 relative z-10">
              <p className="text-[10px] font-medium text-slate-400 tracking-[0.08em] uppercase mb-1">
                {t("liveTransfersLabel")}
              </p>
              {LIVE_TRANSFERS.map((t, i) => (
                <div key={t.name} data-aos="fade-up" data-aos-delay={300 + (i * 100)}>
                  <TransferRow {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Dark globe card + trust badges */}
          <div className="flex flex-col gap-0" data-aos="fade-left" data-aos-delay="400">
            <GlobeCard />
            <div className="flex flex-col gap-2.5">
              {TRUST_BADGES.map((b, i) => (
                <div key={b.title} data-aos="fade-up" data-aos-delay={500 + (i * 100)}>
                  <TrustBadge {...b} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
