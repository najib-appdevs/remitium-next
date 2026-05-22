"use client";

import Image from "next/image";
import Link from "next/link";
import { EyeOff, Eye } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from '@/lib/toast';
import { authService } from '@/lib/services/api';

export default function RegisterPage() {
  const t = useTranslations("RegisterPage");
  const router = useRouter();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    policy: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { first_name, last_name, email, password, policy } = formData;

    if (!first_name || !last_name || !email || !password) {
      showToast.error("Please Fill in all the information");
      return;
    }

    if (!policy) {
      showToast.error("Please Accept Terms and Policy");
      return;
    }

    setLoading(true);

    try {
      const response = await authService.register(
        first_name,
        last_name,
        email,
        password,
        policy
      );
      const responseData = response.data;

      // Save the token if successful
      const token = responseData?.data?.token;
      if (token) {
        localStorage.setItem("accessToken", token);
      }

      // Show message from API response
      const successMsg = Array.isArray(responseData?.message?.success)
        ? responseData.message.success[0]
        : (responseData?.message?.success || "Registration Successful");

      showToast.success(successMsg);

      // Redirect to dashboard
      router.push("/dashboard");

    } catch (error) {
      const errorData = error.response?.data;
      let errorMsg = "Registration Failed";

      if (errorData?.message) {
        if (typeof errorData.message === "string") {
          errorMsg = errorData.message;
        } else if (typeof errorData.message === "object") {
          // Extract the first error message from the object keys (e.g. error, email, etc.)
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
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 py-12 pt-32 pb-24">
      {/* Main Card */}
      <div className="w-full max-w-[550px] bg-slate-100 rounded-[24px] p-8 md:p-12 shadow-sm border border-slate-200">
        
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
        <div className="mb-8 text-left md:text-left">
          <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-2">
            {t("heading")}
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            {t("subheading")}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                id="first-name"
                name="first_name"
                type="text"
                required
                placeholder={t("firstNamePlaceholder")}
                value={formData.first_name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
              />
            </div>
            <div>
              <input
                id="last-name"
                name="last_name"
                type="text"
                required
                placeholder={t("lastNamePlaceholder")}
                value={formData.last_name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
              />
            </div>
          </div>

          <div>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t("emailPlaceholder")}
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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

          {/* Terms Checkbox */}
          <div className="flex items-center pt-2">
            <input
              id="policy"
              name="policy"
              type="checkbox"
              required
              checked={formData.policy}
              onChange={handleChange}
              className="cursor-pointer h-5 w-5 text-emerald-500 focus:ring-emerald-500 border-slate-300 rounded-md"
            />
            <label htmlFor="policy" className="ml-3 block text-sm text-slate-500 font-medium">
              {t("termsAgreement")}{" "}
              <Link href="#" className="text-slate-600 decoration-slate-400 font-bold">
                {t("termsLink")}
              </Link>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full py-4 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-bold rounded-xl transition-all shadow-md active:scale-[0.99] mt-6 text-xl disabled:cursor-not-allowed"
          >
            {loading ? "Registrationg..." : t("registerButton")}
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 font-medium">
            {t("alreadyHaveAccount")}{" "}
            <Link
              href="/login"
              className="cursor-pointer text-emerald-500 font-bold hover:text-emerald-600"
            >
              {t("loginNow")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}