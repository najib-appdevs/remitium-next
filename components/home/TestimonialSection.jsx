"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

// ─── Data ─────────────────────────────────────────────────────────────────────

const getTestimonials = (t) => [
  {
    quote: t("testimonial1Quote"),
    name: t("testimonial1Name"),
    role: t("testimonial1Role"),
    corridor: "🇺🇸 → 🇳🇬",
    initials: "SJ",
    avatarBg: "bg-[#00c881]",
    tag: { label: t("testimonial1Tag"), style: "green" },
    variant: "white",
  },
  {
    quote: t("testimonial2Quote"),
    name: t("testimonial2Name"),
    role: t("testimonial2Role"),
    corridor: "🇺🇸 → 🇰🇪",
    initials: "DM",
    avatarBg: "bg-[#534ab7]",
    tag: { label: t("testimonial2Tag"), style: "white" },
    variant: "dark",
  },
  {
    quote: t("testimonial3Quote"),
    name: t("testimonial3Name"),
    role: t("testimonial3Role"),
    corridor: "🇬🇧 → 🇬🇭",
    initials: "AK",
    avatarBg: "bg-[#185fa5]",
    variant: "white",
  },
  {
    quote: t("testimonial4Quote"),
    name: t("testimonial4Name"),
    role: t("testimonial4Role"),
    corridor: "🇪🇸 → 🇲🇽",
    initials: "RM",
    avatarBg: "bg-white/25",
    tag: { label: t("testimonial4Tag"), style: "white" },
    variant: "accent",
  },
  {
    quote: t("testimonial5Quote"),
    name: t("testimonial5Name"),
    role: t("testimonial5Role"),
    corridor: "🇨🇦 → 🇻🇳",
    initials: "LN",
    avatarBg: "bg-[#854f0b]",
    variant: "white",
  },
  {
    quote: t("testimonial6Quote"),
    name: t("testimonial6Name"),
    role: t("testimonial6Role"),
    corridor: "🇸🇦 → 🇵🇰",
    initials: "FO",
    avatarBg: "bg-[#993556]",
    variant: "white",
  },
];

const getSummaryStats = (t) => [
  {
    value: t("stat1Value"),
    label: t("stat1Label"),
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
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    value: t("stat2Value"),
    label: t("stat2Label"),
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
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    value: t("stat3Value"),
    label: t("stat3Label"),
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
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    value: t("stat4Value"),
    label: t("stat4Label"),
    iconBg: "bg-[#eeedfe]",
    iconColor: "text-[#534ab7]",
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
];

// ─── Card variant styles ──────────────────────────────────────────────────────

const VARIANT_STYLES = {
  white: {
    card: "bg-white border border-[#e2ede9] hover:border-[#a3ecd0]",
    quoteIcon: "text-[#00c881] opacity-20",
    quote: "text-[#3d5a55]",
    divider: "border-[#e2ede9]",
    name: "text-[#0b1727]",
    role: "text-[#7a9990]",
    star: "text-amber-400",
  },
  dark: {
    card: "border-none",
    cardStyle: {
      background: "linear-gradient(135deg, #0b2a1f 0%, #0b1727 100%)",
    },
    quoteIcon: "text-[#00c881] opacity-40",
    quote: "text-white/82",
    divider: "border-white/[0.08]",
    name: "text-white",
    role: "text-white/40",
    star: "text-amber-400",
  },
  accent: {
    card: "border-none bg-[#00c881]",
    quoteIcon: "text-white opacity-30",
    quote: "text-white/92",
    divider: "border-white/20",
    name: "text-white",
    role: "text-white/55",
    star: "text-white",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function Stars({ className }) {
  return (
    <div className="flex gap-px">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-[10px] ${className}`}>
          ★
        </span>
      ))}
    </div>
  );
}

function Tag({ label, style }) {
  const cls =
    style === "green"
      ? "bg-[rgba(0,200,129,0.1)] text-[#00c881]"
      : "bg-white/15 text-white";
  return (
    <span
      className={`inline-flex items-center gap-1 text-[11.5px] font-bold px-3 py-1 rounded-full ${cls}`}
    >
      ★ {label}
    </span>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  corridor,
  initials,
  avatarBg,
  tag,
  variant = "white",
}) {
  const v = VARIANT_STYLES[variant];
  return (
    <div
      className={`flex-none w-[300px] rounded-[18px] p-6 flex flex-col gap-3.5 transition-colors duration-200 relative overflow-hidden ${v.card}`}
      style={v.cardStyle}
    >
      {/* Concentric ring decorations for dark card */}
      {variant === "dark" && (
        <>
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border border-[rgba(0,200,129,0.1)] pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-[rgba(0,200,129,0.06)] pointer-events-none" />
        </>
      )}

      {tag && <Tag {...tag} />}

      {/* Opening quote mark */}
      <div
        className={`text-[36px] leading-[0.6] -mb-1 ${v.quoteIcon}`}
        style={{ fontFamily: "Georgia, serif" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote */}
      <p
        className={`text-[15px] md:text-[16px] leading-[1.7] font-normal italic flex-1 ${v.quote}`}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Divider */}
      <hr className={`border-0 border-t ${v.divider}`} />

      {/* Footer */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 ${variant === "accent" ? "bg-white/25" : avatarBg} rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0`}
          >
            {initials}
          </div>
          <div>
            <p className={`text-[14px] font-bold leading-none mb-1 ${v.name}`}>
              {name}
            </p>
            <p className={`text-[12px] font-medium ${v.role}`}>
              {corridor} · {role}
            </p>
          </div>
        </div>
        <Stars className={v.star} />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const CARD_WIDTH = 314; // card width + gap

export default function TestimonialSection() {
  const t = useTranslations("TestimonialSection");
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const testimonialsData = getTestimonials(t);
  const summaryStatsData = getSummaryStats(t);
  const total = testimonialsData.length;

  const goTo = useCallback(
    (i) => {
      const idx = Math.max(0, Math.min(total - 1, i));
      setCurrent(idx);
      trackRef.current?.scrollTo({
        left: idx * CARD_WIDTH,
        behavior: "smooth",
      });
    },
    [total],
  );

  // Sync dot on native scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => setCurrent(Math.round(el.scrollLeft / CARD_WIDTH));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-20 px-6 bg-[#f7faf8] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between gap-4 mb-6" data-aos="fade-up" data-aos-duration="800">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
              {t("badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b1727] leading-tight tracking-tight">
              {t("headingPart1")} <br className="hidden md:block" />
              <span className="text-[#00c881]">{t("headingHighlight")}</span>{" "}
              {t("headingPart2")}
            </h2>
          </div>

          {/* Prev / Next buttons */}
          <div className="flex gap-2 pb-1 flex-shrink-0">
            {[
              { dir: -1, label: t("previousBtn"), path: "M19 12H5M12 5l-7 7 7 7" },
              { dir: 1, label: t("nextBtn"), path: "M5 12h14M12 5l7 7-7 7" },
            ].map(({ dir, label, path }) => (
              <button
                key={label}
                onClick={() => goTo(current + dir)}
                aria-label={label}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200
                  ${
                    dir === 1
                      ? "bg-[#00c881] border-[#00c881] text-white hover:bg-[#00a96c]"
                      : "bg-white border-[#e2ede9] text-[#3d5a55] hover:bg-[#00c881] hover:border-[#00c881] hover:text-white"
                  }`}
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d={path} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-[#e2ede9] mb-7" data-aos="fade-in" data-aos-delay="400" />

        {/* Horizontal scroll track */}
        <div
          ref={trackRef}
          className="flex gap-3.5 overflow-x-auto scroll-smooth pb-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {testimonialsData.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-5" data-aos="fade-in" data-aos-delay="600">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={t("goToBtn", { index: i + 1 })}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 bg-[#00c881]"
                  : "w-1.5 bg-[#e2ede9] hover:bg-[#a3ecd0]"
              }`}
            />
          ))}
        </div>

        {/* Bottom summary strip */}
        <div className="mt-5 bg-white border border-[#e2ede9] rounded-[14px] overflow-hidden flex flex-wrap" data-aos="zoom-in" data-aos-delay="700">
          {summaryStatsData.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-2.5 px-5 py-3.5 flex-1 min-w-[140px]
                ${i < summaryStatsData.length - 1 ? "border-r border-[#e2ede9]" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-[9px] ${s.iconBg} ${s.iconColor} flex items-center justify-center flex-shrink-0`}
              >
                {s.icon}
              </div>
              <div>
                <p className="font-extrabold text-[18px] text-[#0b1727] leading-none">
                  {s.value}
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
