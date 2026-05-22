"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { showToast } from '@/lib/toast';
import { authService } from '@/lib/services/api';

export default function ResetPassword() {
//   const t = useTranslations("ResetPasswordPage"); // Adjust translation key if needed (will do it later)
  const router = useRouter();

  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetToken, setResetToken] = useState("");

  // Get token from sessionStorage
  useEffect(() => {
    const token = sessionStorage.getItem("resetToken");
    if (!token) {
      showToast.error("No reset token found. Please start over.");
      router.push("/forgot-password");
      return;
    }
    setResetToken(token);
  }, [router]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, password_confirmation } = formData;

    if (!password || !password_confirmation) {
      showToast.error("Please fill in all fields");
      return;
    }

    if (password !== password_confirmation) {
      showToast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      showToast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await authService.resetPassword(
        resetToken,
        password,
        password_confirmation
      );

      if (response.data?.type === "success") {
        showToast.success(
          response.data?.message?.success?.[0] || 
          "Password reset successfully"
        );

        // Clear token after successful reset
        sessionStorage.removeItem("resetToken");

        // Redirect to login
        router.push("/login");
      }

    } catch (error) {
      const errorMsg = 
        error.response?.data?.message?.error?.[0] || 
        error.response?.data?.message || 
        "Failed to reset password. Please try again.";

      showToast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 pt-32 pb-24">
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
            Reset Password
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
            Please enter your new password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* New Password */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="New Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              name="password_confirmation"
              type={showConfirmPassword ? "text" : "password"}
              required
              placeholder="Confirm New Password"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-bold rounded-xl transition-all shadow-md active:scale-[0.99] mt-6 text-lg disabled:cursor-not-allowed"
          >
            {loading ? "Resetting Password..." : "Reset Password"}
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 font-medium">
            Remembered your password?{" "}
            <Link
              href="/login"
              className="text-emerald-500 font-bold hover:text-emerald-600 hover:underline"
            >
              Back to Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}