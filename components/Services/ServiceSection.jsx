import {
  ArrowRightLeft,
  Banknote,
  Globe,
  RefreshCcw,
  ShieldCheck,
  Target,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const SERVICES = [
  {
    title: "Remittance",
    description:
      "Send money securely to friends and family worldwide with Remitium’s fast and reliable remittance services.",
    icon: <Globe className="w-6 h-6" />,
    accent: {
      bg: "bg-brand-badge-bg/40",
      border: "border-brand-badge-border/40",
      title: "text-brand-navy",
      body: "text-brand-navy/70",
    },
  },
  {
    title: "Bank Transfer",
    description:
      "Transfer funds directly to your recipient’s bank account, ensuring quick and secure international transactions.",
    icon: <ArrowRightLeft className="w-6 h-6" />,
    accent: {
      bg: "bg-brand-badge-bg/40",
      border: "border-brand-badge-border/40",
      title: "text-brand-navy",
      body: "text-brand-navy/70",
    },
  },
  {
    title: "Cash Pickup",
    description:
      "Send funds for recipients to collect in cash from agent locations worldwide. A flexible and accessible way to transfer money.",
    icon: <Banknote className="w-6 h-6" />,
    accent: {
      bg: "bg-brand-badge-bg/40",
      border: "border-brand-badge-border/40",
      title: "text-brand-navy",
      body: "text-brand-navy/70",
    },
  },
  {
    title: "Mobile Wallet",
    description:
      "Send money directly to your recipient's mobile wallet in their preferred service. Instant, safe, and convenient.",
    icon: <Wallet className="w-6 h-6" />,
    accent: {
      bg: "bg-brand-badge-bg/40",
      border: "border-brand-badge-border/40",
      title: "text-brand-navy",
      body: "text-brand-navy/70",
    },
  },
];

function BentoCard({ service, idx }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative overflow-hidden cursor-default transition-all duration-500 ease-out
        ${service.accent.bg} backdrop-blur-xl rounded-[2rem] p-10 border
        ${hovered ? "border-white/80 -translate-y-2 scale-[1.03] shadow-2xl shadow-brand-primary/10" : `${service.accent.border} shadow-sm`}
      `}
    >
      {/* Subtle Gradient Reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

      {/* Index */}
      <span className="absolute right-8 top-8 text-xs font-bold text-brand-navy/20">
        {String(idx + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className={`text-4xl mb-6 ${service.accent.title} leading-none`}>
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className={`text-2xl font-bold ${service.accent.title} mb-4 tracking-tight`}
      >
        {service.title}
      </h3>

      {/* Body */}
      <p
        className={`text-base leading-relaxed font-medium ${service.accent.body}`}
      >
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-badge-bg/20 backdrop-blur-[30px] rounded-[3rem] p-12 md:p-20 border border-brand-badge-border/30 shadow-2xl shadow-brand-primary/5">
          {/* Header Row */}
          <div className="flex flex-col items-start text-left mb-8 gap-6">
            <div className="inline-flex items-center gap-2 bg-brand-badge-bg border border-brand-badge-border text-brand-badge-text text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              Our Core Services
            </div>

            <h1 className="relative text-4xl md:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.1] max-w-4xl">
              {/* Decorative Headline Dots */}
              <div className="absolute -top-6 -left-8 w-6 h-6 rounded-full bg-brand-primary/10 animate-pulse hidden md:block" />
              <div
                className="absolute -top-12 right-0 w-8 h-8 rounded-full bg-brand-primary/5 animate-float hidden md:block"
                style={{ animationDuration: "7s" }}
              />
              <div
                className="absolute top-1/2 -right-12 w-4 h-4 rounded-full bg-brand-navy/5 animate-bounce hidden md:block"
                style={{ animationDuration: "4s" }}
              />
              What we <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-teal-500">
                Build Together
              </span>
            </h1>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.map((service, idx) => (
              <BentoCard key={service.title} service={service} idx={idx} />
            ))}
          </div>

          <div className="mt-12 bg-white/40 backdrop-blur-md border border-brand-badge-border/50 rounded-[2rem] p-8 flex flex-wrap items-center gap-10">
            {[
              {
                label: "Full-service",
                icon: <ShieldCheck className="w-5 h-5" />,
              },
              { label: "End-to-end", icon: <RefreshCcw className="w-5 h-5" /> },
              { label: "Outcome-driven", icon: <Target className="w-5 h-5" /> },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 text-sm font-bold text-brand-navy/50 hover:text-brand-primary transition-colors cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white/80 border border-white flex items-center justify-center text-brand-primary shadow-sm shadow-brand-primary/10">
                  {item.icon}
                </div>
                {item.label}
              </div>
            ))}
            <div className="ml-auto text-sm font-bold text-brand-navy/30">
              4 core services &rarr;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
