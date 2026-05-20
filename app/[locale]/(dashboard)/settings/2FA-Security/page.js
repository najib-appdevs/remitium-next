"use client";

import { Apple, Copy, Play } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TwoFactorPage() {
  const t = useTranslations("TwoFactor");
  const address = "BTRILINRLMPX3FWH";

  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      {/* Left Column */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-700">
          {t("twoFactorTitle")}
        </h2>

        <div
          className="flex-1 p-6 rounded-2xl flex flex-col gap-5"
          style={{
            background: "#f0faf5",
            border: "0.5px solid #a7dfbf",
          }}
        >
          {/* Address field */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: "#2d6a45" }}
            >
              {t("addressLabel")}<span className="text-emerald-500">*</span>
            </label>
            <div
              className="flex rounded-xl overflow-hidden"
              style={{ border: "0.5px solid #a7dfbf" }}
            >
              <input
                type="text"
                readOnly
                value={address}
                className="w-full px-4 py-2.5 text-sm focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  color: "#0d3d24",
                }}
              />
              <button
                className="cursor-pointer px-4 flex items-center justify-center transition-colors"
                style={{ background: "#10b981" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#059669")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#10b981")
                }
              >
                <Copy size={18} color="#fff" />
              </button>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex-1 flex justify-center items-center">
            <div
              className="p-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.65)",
                border: "0.5px solid #c4ecd5",
              }}
            >
              <Image
                src="/images/QRCode.png"
                alt={t("qrAlt")}
                width={100}
                height={100}
                className="w-48 h-48"
              />
            </div>
          </div>

          <button
            className="cursor-pointer w-full py-3 rounded-xl text-white font-semibold text-sm transition-colors mt-auto"
            style={{ background: "#10b981" }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#059669")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#10b981")}
          >
            {t("enableBtn")}
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-700">
          {t("googleAuthTitle")}
        </h2>

        <div
          className="flex-1 p-6 rounded-2xl flex flex-col gap-5"
          style={{
            background: "#f0faf5",
            border: "0.5px solid #a7dfbf",
          }}
        >
          <h3 className="font-bold text-sm" style={{ color: "#0d3d24" }}>
            {t("downloadAppTitle")}
          </h3>

          <p className="text-sm leading-relaxed" style={{ color: "#2d6a45" }}>
            {t("securityDescription")}{" "}
            <a href="#" className="text-emerald-500 hover:underline ms-1">
              {t("howToSetupLink")}
            </a>
          </p>

          {/* App Image */}
          <div className="flex-1 flex justify-center items-center">
            <div
              className="p-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.65)",
                border: "0.5px solid #c4ecd5",
              }}
            >
              <Image
                src="/images/Google Authenticator.webp"
                alt={t("googleAuthAlt")}
                width={100}
                height={100}
                className="w-36 h-36"
              />
            </div>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col gap-3 mt-auto">
            <button
              className="cursor-pointer w-full py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              style={{ background: "#10b981" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#059669")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#10b981")}
            >
              <Play size={18} fill="currentColor" />
              {t("downloadAndroidBtn")}
            </button>
            <button
              className="cursor-pointer w-full py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              style={{ background: "#10b981" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#059669")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#10b981")}
            >
              <Apple size={18} fill="currentColor" />
              {t("downloadIosBtn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}