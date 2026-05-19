import {
  CreditCard,
  Eye,
  Lock,
  ShieldCheck,
  Smartphone,
  Terminal,
} from "lucide-react";
import { useTranslations } from "next-intl";

// Sub-components

function HeroCard() {
  const t = useTranslations("SecuritySection");

  const HERO_STATS = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <div className="h-full rounded-3xl p-8 relative overflow-hidden flex flex-col bg-slate-950">
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative orb */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Watermark icon */}
      <div className="absolute -bottom-6 -right-6 opacity-[0.06] pointer-events-none text-white">
        <Lock size={200} strokeWidth={0.75} />
      </div>

      {/* Top row */}
      <div className="relative flex items-start justify-between mb-auto">
        <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {t("alwaysActive")}
        </span>

        <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-500/25 text-emerald-400 flex items-center justify-center">
          <Lock size={22} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>

      {/* Body */}
      <div className="relative mt-8">
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight mb-4">
          {t("heroTitle")}
        </h3>
        <p className="text-slate-400 leading-relaxed text-base font-light">
          {t("heroDescription")}
        </p>
      </div>

      {/* Stats */}
      <div className="relative mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
        {HERO_STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-1.5">
            <span className="text-2xl md:text-3xl font-bold text-white leading-none tabular-nums">
              {s.value}
            </span>
            <span className="text-[11px] text-slate-500 uppercase tracking-widest font-medium">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SideCard({ title, desc, icon: Icon, iconBg, iconColor }) {
  return (
    <div className="group h-full bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-50 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300">
      <div
        className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={20} strokeWidth={2} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-[15px] text-[#0b1727] mb-1">{title}</h3>
        <p className="text-base text-gray-700 leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  );
}

function BottomCard({ title, desc, icon: Icon, iconBg, iconColor }) {
  return (
    <div className="group h-full bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-50 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300">
      <div
        className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={20} strokeWidth={2} />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-bold text-[15px] text-[#0b1727] mb-1">{title}</h4>
        <p className="text-base text-gray-700 leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  );
}

// Main Component

export default function SecuritySection() {
  const t = useTranslations("SecuritySection");

  const SIDE_CARDS = [
    {
      title: t("fraudDetectionTitle"),
      desc: t("fraudDetectionDesc"),
      icon: Eye,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: t("mfaTitle"),
      desc: t("mfaDesc"),
      icon: Smartphone,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
  ];

  const BOTTOM_CARDS = [
    {
      title: t("platformTitle"),
      desc: t("platformDesc"),
      icon: Terminal,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-700",
    },
    {
      title: t("paymentTitle"),
      desc: t("paymentDesc"),
      icon: CreditCard,
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600",
    },
  ];

  return (
    <section className="py-28 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-6 mb-16"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-xs font-semibold px-4 py-2 rounded-full tracking-wide uppercase">
            <ShieldCheck size={14} />
            {t("badge")}
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#0b1727] leading-[1.08] tracking-tight max-w-2xl">
            {t("headingPart1")}
            <br />
            <span className="text-[#00c881]">{t("headingHighlight")}</span>
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* LEFT — Hero, spans 2 rows on desktop */}
          <div
            className="lg:row-span-2"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <HeroCard />
          </div>

          {/* RIGHT row 1 — Side cards */}
          <div className="grid grid-cols-2 gap-4">
            {SIDE_CARDS.map((card, i) => (
              <div
                key={card.title}
                data-aos="fade-left"
                data-aos-delay={300 + i * 100}
              >
                <SideCard {...card} />
              </div>
            ))}
          </div>

          {/* RIGHT row 2 — Bottom cards */}
          <div className="grid grid-cols-2 gap-4">
            {BOTTOM_CARDS.map((card, i) => (
              <div
                key={card.title}
                data-aos="fade-up"
                data-aos-delay={500 + i * 100}
              >
                <BottomCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
