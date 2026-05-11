"use client";
import {
  ArrowRight,
  Globe,
  QrCode,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[var(--background)] flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-b from-[var(--brand-badge-bg)] via-white to-transparent rounded-[100%] opacity-50 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[var(--brand-badge-bg)] rounded-full opacity-30 blur-3xl" />
        {/* Subtle geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(var(--brand-primary) 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 items-center gap-y-12 lg:gap-x-28">
        {/* Creative Center-Left Content Area */}
        <div 
          className="col-span-12 lg:col-span-7 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00c881]" />
            The Premium Way to Transfer Money Globally
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-black text-[var(--brand-navy)] leading-[1] tracking-tighter mb-8 max-w-2xl">
            Go Further, <br />
            Wait Less <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-primary-hover)] to-[var(--brand-navy)]">
              Send Globally.
            </span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-gray-500 leading-relaxed mb-10">
            Remitium redefining borders. Transfer money across 180+ countries
            instantly with zero hidden fees and bank-level security.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <button className="w-full sm:w-auto group relative px-10 py-5 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-extrabold rounded-2xl shadow-xl shadow-green-100 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-[var(--brand-navy)] font-extrabold rounded-2xl border border-[var(--brand-border-color)] hover:bg-[var(--brand-bg-light)] transition-all flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-[var(--brand-primary)]" />
              Instant Quote
            </button>
          </div>

          {/* Subtle Mobile Visual Component */}
          <div className="lg:hidden w-full mt-12 px-6 flex justify-center">
            <div className="w-full max-w-[300px] h-[300px] bg-white rounded-3xl shadow-2xl border border-[var(--brand-border-color)] p-6 relative">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[var(--brand-primary)]" />
                <span className="font-bold text-[var(--brand-navy)] text-sm">
                  USD/EUR Trade
                </span>
              </div>
              <div className="text-3xl font-bold text-[var(--brand-navy)] mt-4">
                1.0845
              </div>
              <div className="text-[var(--brand-primary)] text-sm font-bold mt-1">
                +0.22% Today
              </div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-[var(--brand-primary)] rounded-2xl flex items-center justify-center shadow-lg shadow-green-100">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Abstract Isometric UI Composition - The "Creative" Part */}
        <div 
          className="hidden lg:block col-span-12 lg:col-span-5 xl:col-span-6 relative h-[700px]"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: "2000px" }}
          >
            {/* Main "Glass" Portal */}
            <div
              className="relative w-[340px] xl:w-[380px] h-[580px] bg-white/60 backdrop-blur-3xl rounded-[3rem] border-4 border-white shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden z-10"
              style={{
                transform:
                  "rotateX(51deg) rotateY(-11deg) rotateZ(35deg) scale3d(1.1, 1.1, 1.1)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-badge-bg)] to-white/0 opacity-60"></div>

              {/* Fake UI Content */}
              <div className="relative p-10 space-y-6 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="px-3 py-1 bg-white rounded-lg border border-[var(--brand-border-color)] text-[10px] font-bold text-gray-400">
                    RMT.INTL.PAYMENT
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[var(--brand-border-color)] space-y-3">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Active Balance
                  </p>
                  <p className="text-3xl font-black text-[var(--brand-navy)]">
                    $74,800.00
                  </p>
                </div>

                <div className="relative p-5 rounded-2xl bg-[var(--brand-bg-light)] border border-[var(--brand-border-color)]">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-[var(--brand-border-color)] mb-3">
                    <QrCode className="w-6 h-6 text-[var(--brand-navy)]" />
                  </div>
                  <p className="font-bold text-[var(--brand-navy)] text-sm mb-1">
                    Send to Sarah Jenkins
                  </p>
                  <p className="text-gray-500 text-xs truncate">
                    sarah.j.design@email.com
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[var(--brand-border-color)] space-y-3">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-bold">
                    <span>You pay ($USD)</span>
                    <span>They get (£GBP)</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold text-[var(--brand-navy)]">
                    <span>1,500.00</span>
                    <RefreshCw className="w-4 h-4 text-gray-300" />
                    <span>1,238.45</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-[var(--brand-navy)] text-white font-bold rounded-xl mt-4">
                  Send Funds
                </button>
              </div>
            </div>

            {/* Back Elements (Floating Behind) */}

            {/* World Map Plane */}
            <div
              className="absolute top-[20%] right-[-10%] w-[500px] h-[300px] z-0"
              style={{
                transform:
                  "rotateX(55deg) rotateY(0deg) rotateZ(35deg) translateZ(-150px)",
                opacity: 0.1,
              }}
            >
              <Globe className="w-full h-full text-[var(--brand-primary)]" />
            </div>

            {/* Front Elements (Floating Ahead) */}

            {/* Currency Box USD */}
            <div
              className="absolute top-[20%] left-0 animate-float z-20"
              style={{
                transform:
                  "rotateX(51deg) rotateY(-11deg) rotateZ(35deg) translateZ(80px)",
              }}
            >
              <div className="bg-white p-5 rounded-2xl border border-[var(--brand-border-color)] shadow-2xl flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-badge-bg)] text-[var(--brand-badge-text)] flex items-center justify-center font-bold text-lg">
                  $
                </div>
                <div>
                  <p className="font-bold text-[var(--brand-navy)] text-lg">
                    5,000
                  </p>
                  <p className="text-gray-400 text-xs">United States (USD)</p>
                </div>
              </div>
            </div>

            {/* Currency Box EUR */}
            <div
              className="absolute bottom-10 right-[-10%] animate-float-delayed z-20"
              style={{
                transform:
                  "rotateX(51deg) rotateY(-11deg) rotateZ(35deg) translateZ(120px)",
              }}
            >
              <div className="bg-[var(--brand-navy)] p-5 rounded-2xl border border-[var(--brand-navy)] shadow-2xl text-white flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] flex items-center justify-center font-bold text-lg text-white">
                  €
                </div>
                <div>
                  <p className="font-bold text-lg">4,615</p>
                  <p className="text-gray-400 text-xs">Europe (EUR)</p>
                </div>
              </div>
            </div>

            {/* Connection Line */}
            <svg
              className="absolute inset-0 w-full h-full z-15 pointer-events-none"
              viewBox="0 0 600 700"
            >
              <path
                d="M100,200 C300,100 400,600 500,500"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="3"
                strokeDasharray="10 10"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style={{
                      stopColor: "var(--brand-primary)",
                      stopOpacity: 0,
                    }}
                  />
                  <stop
                    offset="50%"
                    style={{
                      stopColor: "var(--brand-primary)",
                      stopOpacity: 0.6,
                    }}
                  />
                  <stop
                    offset="100%"
                    style={{
                      stopColor: "var(--brand-primary)",
                      stopOpacity: 0,
                    }}
                  />
                </linearGradient>
              </defs>
            </svg>

            {/* Security Indicator */}
            <div
              className="absolute bottom-[20%] left-[-15%] animate-bounce-slow z-20"
              style={{
                transform:
                  "rotateX(51deg) rotateY(-11deg) rotateZ(35deg) translateZ(150px)",
              }}
            >
              {/* <div className="bg-white/80 backdrop-blur-md p-3 rounded-full border-2 border-white shadow-xl flex items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-[var(--brand-primary)]" />
                <div className="text-xs font-bold text-[var(--brand-navy)]">
                  Bank-Grade Secured
                </div>
              </div> */}
            </div>

            {/* Live Rate Feed */}
            <div
              className="absolute top-[35%] right-[-15%] xl:right-[-25%] animate-float-slow z-20"
              style={{
                transform:
                  "rotateX(51deg) rotateY(-11deg) rotateZ(35deg) translateZ(100px)",
              }}
            >
              <div className="bg-white p-6 rounded-[2rem] border border-[var(--brand-border-color)] shadow-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Live Rate
                  </p>
                  <p className="text-lg font-black text-[var(--brand-navy)] mb-1">
                    1 USD = 0.92 EUR
                  </p>
                  <div className="h-1.5 w-32 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-blue-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: rotateX(51deg) rotateY(-11deg) rotateZ(35deg)
              translateZ(80px) translateY(0px);
          }
          50% {
            transform: rotateX(51deg) rotateY(-11deg) rotateZ(35deg)
              translateZ(80px) translateY(-15px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: rotateX(51deg) rotateY(-11deg) rotateZ(35deg)
              translateZ(120px) translateY(0px);
          }
          50% {
            transform: rotateX(51deg) rotateY(-11deg) rotateZ(35deg)
              translateZ(120px) translateY(15px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: rotateX(51deg) rotateY(-11deg) rotateZ(35deg)
              translateZ(100px) translateX(0px);
          }
          50% {
            transform: rotateX(51deg) rotateY(-11deg) rotateZ(35deg)
              translateZ(100px) translateX(10px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: rotateX(51deg) rotateY(-11deg) rotateZ(35deg)
              translateZ(150px) translateY(0px);
          }
          50% {
            transform: rotateX(51deg) rotateY(-11deg) rotateZ(35deg)
              translateZ(150px) translateY(-8px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 1s;
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite 0.5s;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
