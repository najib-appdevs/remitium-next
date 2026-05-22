"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showToast } from '@/lib/toast';
import { authService } from '@/lib/services/api';

export default function VerifyCode() {
  //   const t = useTranslations("VerifyCodePage"); // Adjust translation key if needed (will do it later)
  const router = useRouter();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [canResend, setCanResend] = useState(true);
  const [countdown, setCountdown] = useState(0);

  // Get token from sessionStorage
  useEffect(() => {
    const token = sessionStorage.getItem("resetToken");
    if (!token) {
      showToast.error("Reset Session Expired. Please Start Over");
      router.push("/forgot-password");
      return;
    }
    setResetToken(token);
  }, [router]);

  // Countdown Timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code || !resetToken) {
      showToast.error("The code field is required.");
      return;
    }

    setLoading(true);

    try {
      const response = await authService.verifyCode(resetToken, code);

      if (response.data?.type === "success") {
        showToast.success(
          response.data?.message?.success?.[0] || 
          "Code Verified Successfully"
        );
        
        // Redirect to reset password page
        router.push("/reset-password");
      }

    } catch (error) {
      const errorMsg = 
        error.response?.data?.message?.error?.[0] || 
        error.response?.data?.message || 
        "The selected code is invalid.";

      showToast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!resetToken || !canResend) return;

    setResendLoading(true);

    try {
      const response = await authService.resendCode(resetToken);

      if (response.data?.type === "success") {
        const newToken = response.data?.data?.token;
        
        if (newToken) {
          sessionStorage.setItem("resetToken", newToken);
          setResetToken(newToken);
        }

        showToast.success(
          response.data?.message?.success?.[0] || 
          "OTP resend success"
        );

        setCanResend(false);
        setCountdown(60); // 60 seconds cooldown
      }

    } catch (error) {
      const errorMsg = error.response?.data?.message?.error?.[0];
      const waitTime = error.response?.data?.data?.wait_time;

      if (waitTime) {
        setCountdown(parseInt(waitTime));
        setCanResend(false);
        showToast.error(`You can resend after ${waitTime} seconds`);
      } else {
        showToast.error(errorMsg || "Failed to resend code");
      }
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 pt-32 pb-24">
      <div className="w-full max-w-[480px] bg-slate-100 rounded-[24px] p-8 md:p-12 shadow-sm border border-slate-200">
        
        <div className="flex justify-center mb-10">
          <Image
            src="/logo/logo.webp"
            alt="Remitium Logo"
            width={180}
            height={50}
            className="h-10 w-auto"
          />
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-2">
            Verify Code
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
            Enter the verification code sent to your email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              id="code"
              type="text"
              required
              placeholder="Enter verification code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
              maxLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full py-4 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-bold rounded-xl transition-all shadow-md active:scale-[0.99] mt-4 text-lg disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : "Verify Code"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 font-medium">
            Didn't receive code?{" "}
            <button
              onClick={handleResend}
              disabled={!canResend || resendLoading}
              className="text-emerald-500 font-bold hover:text-emerald-600 hover:underline disabled:text-slate-400 disabled:cursor-not-allowed"
            >
              {resendLoading ? "Sending..." : 
               countdown > 0 ? `Resend in ${countdown}s` : "Resend"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}