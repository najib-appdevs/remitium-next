"use client";

import Image from "next/image";
import Link from "next/link";
import { EyeOff } from "lucide-react";

export default function LoginPage() {
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
            Login to Your Account
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Welcome Back! Access Your Remitium Account to Manage Transfers
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" action="#" method="POST">
          <div>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter Email..."
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
            />
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter Password..."
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
            />
            <button 
              type="button" 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <EyeOff size={20} />
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              href="#"
              className="text-sm font-bold text-emerald-500 hover:text-emerald-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-4 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-md active:scale-[0.99] mt-4 text-lg"
          >
            Login Now
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-slate-600 font-medium">
            Don&apos;t Have An Account?{" "}
            <Link
              href="/register"
              className="text-emerald-500 font-bold hover:text-emerald-600 hover:underline"
            >
              Register Now
            </Link>
          </p>
          
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            By clicking Login you are agreeing with our{" "}
            <Link href="/terms" className="text-emerald-500 font-bold hover:text-emerald-600 hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}