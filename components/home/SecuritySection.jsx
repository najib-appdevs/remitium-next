import {
  CreditCard,
  Eye,
  Lock,
  ShieldCheck,
  Smartphone,
  Terminal,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: "256-bit", label: "AES Encryption" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "0", label: "Breaches" },
];

const SIDE_CARDS = [
  {
    title: "Fraud Detection System",
    desc: "Our intelligent system monitors system for suspicious activity, providing real-time fraud prevention.",
    icon: Eye,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Multi-Factor Authentication",
    desc: "Safeguard your account with an extra layer of protection through two-factor authentication.",
    icon: Smartphone,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

const BOTTOM_CARDS = [
  {
    title: "Platform Support",
    desc: "Convert data noise intelligent insights for competitive differentiation qulaity check equlity.",
    icon: Terminal,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
  },
  {
    title: "Payment Gateways",
    desc: "Remitium uses industry-standard payment methods like PayPal, Stripe, and others to keep your transfers safe.",
    icon: CreditCard,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    title: "Compliance Ready",
    desc: "Fully compliant with global AML and KYC standards, keeping transactions safe.",
    icon: ShieldCheck,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeroCard() {
  return (
    <div className="row-span-2 rounded-2xl p-8 relative overflow-hidden flex flex-col bg-slate-950">
      <div className="absolute -bottom-5 -right-5 opacity-5 pointer-events-none text-white">
        <Lock size={180} strokeWidth={1} />
      </div>

      <div className="flex items-center justify-between mb-8">
        <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium px-3 py-1 rounded-full w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Always active
        </span>

        <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <Lock size={28} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
        End-to-End Encryption
      </h3>
      <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light mb-8">
        All your transactions are protected with advanced encryption, ensuring
        your data stays secure and private.
      </p>

      <div className="mt-auto pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
        {HERO_STATS.map((s) => (
          <div key={s.label}>
            <span className="block text-xl md:text-2xl font-bold text-white leading-none">
              {s.value}
            </span>
            <span className="block text-sm text-slate-500 mt-2 uppercase tracking-wide">
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
    <div className="group bg-white border border-slate-200 hover:border-emerald-300 rounded-2xl p-8 flex flex-col transition-all duration-300">
      <div
        className={`w-12 h-12 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-base text-slate-600 leading-relaxed font-light">
        {desc}
      </p>
    </div>
  );
}

function BottomCard({ title, desc, icon: Icon, iconBg, iconColor }) {
  return (
    <div className="group bg-white border border-slate-200 hover:border-emerald-300 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 transition-all duration-300">
      <div
        className={`w-12 h-12 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SecuritySection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-8">
              <ShieldCheck size={16} />
              Security You Can Trust
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold text-[#0b1727] leading-[1.1] tracking-tight">
              Your safety is our <br />
              <span className="text-[#00c881]">Priority</span>
            </h2>
          </div>
        </div>

        <div className="h-px bg-slate-200 mb-12" />

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <HeroCard />
          <div className="grid grid-cols-1 gap-6">
            {SIDE_CARDS.map((card) => (
              <SideCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BOTTOM_CARDS.map((card) => (
            <BottomCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
