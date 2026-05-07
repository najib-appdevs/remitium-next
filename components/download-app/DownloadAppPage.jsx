"use client";

import FeaturesGallery from "@/components/FeaturesGallery/FeaturesGallery";
import { AppStoreIcon, GooglePlayIcon } from "@/components/ui/StoreButtonIcon";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function DownloadAppPage() {
  return (
    <div className="bg-[#fcfdfd] font-jost">
      {/* ── PREMIUM CENTERED HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#fcfdfd]">
        {/* Advanced Mesh Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-navy/5 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,200,129,0.03)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-semibold px-5 py-2.5 rounded-full mb-8 shadow-sm tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
            Get the Remitium App
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold text-brand-navy mb-10 leading-[1.1] tracking-tight">
            Transfer Money <br />
            <span className="text-brand-primary relative">
              Anytime Anywhere
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-brand-primary/20"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 text-lg md:text-2xl max-w-2xl leading-relaxed mb-12 font-normal">
            Download the Remitium mobile app and enjoy seamless, secure, and
            instant money transfers on the go. Send and receive funds anytime,
            anywhere, with just a tap!
          </p>

          {/* Centered Mockup with Floating Elements */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Main Mockup */}
            <div className="relative z-10 animate-float">
              <Image
                src="/images/download-app (2).webp"
                alt="Remitium App Interface"
                width={800}
                height={1200}
                className="w-full h-auto max-w-[450px] mx-auto drop-shadow-[0_60px_100px_rgba(0,0,0,0.12)]"
                priority
              />
            </div>

            {/* Store Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <AppStoreIcon className="hover:scale-105 transition-all shadow-2xl shadow-black/10 !w-52 !h-16 rounded-2xl" />
              <GooglePlayIcon className="hover:scale-105 transition-all shadow-2xl shadow-black/10 !w-52 !h-16 rounded-2xl" />
            </div>

            {/* Glow background behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
          </div>
        </div>
      </section>

      {/* ── FEATURES Gallery ── */}
      <FeaturesGallery />

      {/* ── CREATIVE DOWNLOAD SECTION ── */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-brand-bg-light rounded-[3.5rem] relative overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] -ml-80 -mt-80 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] -mr-40 -mb-40" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10 p-8 md:p-20">
            {/* Left Side: Creative Image Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative h-[400px] md:h-[600px] flex items-center justify-center">
              <div className="relative w-full max-w-[320px] lg:max-w-none">
                {/* Secondary Mockup (Shadow/Blur) */}
                <div className="absolute top-10 -right-10 w-[350px] opacity-20 blur-sm transform -rotate-12 hidden md:block">
                  <Image
                    src="/images/download-app.webp"
                    alt="App Background"
                    width={400}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                {/* Main Mockup */}
                <div className="relative z-20 w-full max-w-[420px] mx-auto lg:mx-0 animate-float">
                  <Image
                    src="/images/download-app.webp"
                    alt="Remitium App"
                    width={450}
                    height={900}
                    className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,200,129,0.3)]"
                  />
                </div>
                {/* Floating Decorative Elements */}
                <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl animate-float hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-brand-navy text-[12px] font-bold">
                      Trusted by 10k+
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Content & QR */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
                Download the App
              </div>

              <h2 className="text-4xl md:text-6xl font-semibold text-brand-navy mb-10 leading-[1.1] tracking-tight">
                Access Remitium <br />
                <span className="text-brand-primary">Anytime, Anywhere</span>
              </h2>

              <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
                Send money, manage your wallet, and track transactions on the
                go. Get the Remitium app today!
              </p>

              {/* Action Area */}
              <div className="flex flex-col md:flex-row items-center gap-10 w-full">
                {/* QR Glass Card */}

                {/* Buttons Stack */}
                <div className="flex flex- gap-8 mt-6">
                  <AppStoreIcon className="bg-white !text-brand-navy hover:bg-brand-primary hover:!text-white transition-all shadow-xl !w-44 !h-14" />
                  <GooglePlayIcon className="bg-white !text-brand-navy hover:bg-brand-primary hover:!text-white transition-all shadow-xl !w-44 !h-14" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
