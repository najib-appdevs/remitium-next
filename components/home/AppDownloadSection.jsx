"use client";
import { AppStoreIcon, GooglePlayIcon } from "@/components/ui/StoreButtonIcon";
import { CircleDot, Fingerprint, MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

/**
 * Editorial Glassmorphism Layout
 * Focuses on depth (Z-index), typography as a background element,
 * and ultra-refined frosted glass effects.
 */
export default function AppDownloadSection() {
  const t = useTranslations("AppDownloadSection");
  return (
    <section className="relative pt-16 pb-32 px-6 bg-[#fbfcfd] overflow-hidden">
      {/* 1. Large Background Typography (Watermark Effect) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none z-0">
        <h2
          className="text-[20vw] font-black text-transparent uppercase leading-none tracking-tighter"
          style={{ WebkitTextStroke: "2px rgba(0, 200, 129, 0.08)" }}
        >
          REMITIUM
        </h2>
      </div>

      {/* 2. Abstract Geometric Blurs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-100/60 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-50/80 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 3. The Main Creative Stack */}
        <div className="flex flex-col items-center -mt-8">
          {/* Tagline */}
          <div
            className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-12"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <span className="w-2 h-2 rounded-full bg-[#00c881]" />
            {t("badge")}
          </div>

          <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
            {/* Left Glass Panel: Context */}
            <div
              className="order-2 lg:order-1 lg:-mr-12 z-30 w-full max-w-sm p-12 bg-white/20 backdrop-blur-3xl border border-white/60 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] transform lg:-rotate-2 transition-transform hover:rotate-0 duration-700"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h3 className="text-3xl font-light text-slate-800 mb-8 leading-tight">
                {t("leftPanelHeading")} <br />
                <span className="font-semibold italic">
                  {t("leftPanelHighlight")}
                </span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10">
                {t("leftPanelDescription")}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Fingerprint className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                    {t("biometricVault")}
                  </span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <CircleDot className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                    {t("liveFxSync")}
                  </span>
                </div>
              </div>
            </div>

            {/* Center: The Hero Image */}
            <div
              className="order-1 lg:order-2 relative z-20 transition-all duration-1000 hover:scale-[1.05]"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-16 border border-emerald-500/10 rounded-full animate-[spin_20s_linear_infinite]" />

              <Image
                src="/images/Download-App.webp"
                alt="App Interface"
                width={440}
                height={850}
                className="object-contain drop-shadow-[0_60px_100px_rgba(0,0,0,0.12)] relative z-10"
                priority
              />
            </div>

            {/* Right Glass Panel: Call to Action */}
            <div
              className="order-3 lg:-ml-12 z-30 w-full max-w-sm p-12 bg-white/20 backdrop-blur-3xl border border-white/60 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] transform lg:rotate-2 transition-transform hover:rotate-0 duration-700"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <p className="text-xs font-black text-emerald-600 uppercase tracking-[0.4em] mb-4">
                {t("onboarding")}
              </p>
              <h3 className="text-3xl font-light text-slate-800 mb-8 leading-tight">
                {t("rightPanelHeading")} <br />
                <span className="font-semibold italic">
                  {t("rightPanelHighlight")}
                </span>
              </h3>

              <div className="flex flex-col gap-6">
                <div className="transition-all hover:-translate-x-2 duration-300 cursor-pointer">
                  <AppStoreIcon />
                </div>
                <div className="transition-all hover:-translate-x-2 duration-300 cursor-pointer">
                  <GooglePlayIcon />
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200/50">
                <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-emerald-500 transition-colors group">
                  {t("viewFeaturesBtn")}{" "}
                  <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
