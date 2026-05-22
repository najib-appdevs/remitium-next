"use client";

import Image from "next/image";
import Link from "next/link";
import { EyeOff, Eye } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from '@/lib/toast';
import { authService } from '@/lib/services/api';

export default function LoginPage() {
  const t = useTranslations("LoginPage");
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Login Logic
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showToast.error("Please enter your Email and Password");
      return;
    }

    setLoading(true);

    try {
      const response = await authService.login(email, password);
      const responseData = response.data;

      // Save the token if successful
      const token = responseData?.data?.user_data?.token;
      if (token) {
        sessionStorage.setItem("accessToken", token);
      }

      // Show message from API response
      const successMsg = Array.isArray(responseData?.message?.success)
        ? responseData.message.success[0]
        : (responseData?.message?.success || "Login Successful");

      showToast.success(successMsg);

      // Redirect to dashboard or home page
      router.push("/dashboard");

    } catch (error) {
      const errorData = error.response?.data;
      let errorMsg = "Login failed";

      if (errorData?.message) {
        if (typeof errorData.message === "string") {
          errorMsg = errorData.message;
        } else if (typeof errorData.message === "object") {
          // Extract the first error message from the object keys
          const firstKey = Object.keys(errorData.message)[0];
          if (firstKey) {
            const val = errorData.message[firstKey];
            errorMsg = Array.isArray(val) ? val[0] : (typeof val === "string" ? val : JSON.stringify(val));
          }
        }
      } else if (errorData?.error) {
        errorMsg = typeof errorData.error === "string" ? errorData.error : JSON.stringify(errorData.error);
      } else if (error.message) {
        errorMsg = error.message;
      }

      showToast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 pt-32 pb-24">
      {/* Main Card */}
      <div className="w-full max-w-[480px] bg-slate-100 rounded-[24px] p-8 md:p-12 shadow-sm border border-slate-200">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo/logo.webp"
            alt="Remitium Logo"
            width={180}
            height={50}
            className="h-10 w-auto"
          />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-2">
            {t("heading")}
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            {t("subheading")}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t("emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
            />
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder={t("passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-bold text-emerald-500 hover:text-emerald-600 hover:underline"
            >
              {t("forgotPassword")}
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full py-4 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-bold rounded-xl transition-all shadow-md active:scale-[0.99] mt-4 text-lg disabled:cursor-not-allowed"
          >
            {loading ? "Login..." : t("loginButton")}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-slate-600 font-medium">
            {t("noAccount")}{" "}
            <Link
              href="/register"
              className="text-emerald-500 font-bold hover:text-emerald-600 hover:underline"
            >
              {t("registerNow")}
            </Link>
          </p>

          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            {t("termsAgreement")}{" "}
            <Link href="/terms" className="text-emerald-500 font-bold hover:text-emerald-600 hover:underline">
              {t("termsLink")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}