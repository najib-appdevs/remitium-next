"use client";

import Image from "next/image";
import Link from "next/link";
import { EyeOff } from "lucide-react";

export default function RegisterPage() {
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
            Create Your Remitium Account
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Join Remitium Today and Start Sending Money Effortlessly
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" action="#" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                placeholder="First Name"
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
              />
            </div>
            <div>
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                placeholder="Last Name"
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
              placeholder="Email"
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
            />
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700 placeholder-slate-400"
            />
            <button 
              type="button" 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <EyeOff size={20} />
            </button>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center pt-2">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-5 w-5 text-emerald-500 focus:ring-emerald-500 border-slate-300 rounded-md"
            />
            <label htmlFor="terms" className="ml-3 block text-sm text-slate-500 font-medium">
              I have agreed with{" "}
              <Link href="#" className="text-slate-600 decoration-slate-400 font-bold">
                Terms Of Use & Privacy Policy
              </Link>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-4 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-md active:scale-[0.99] mt-6 text-xl"
          >
            Register Now
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 font-medium">
            Already Have An Account?{" "}
            <Link
              href="/login"
              className="text-emerald-500 font-bold hover:text-emerald-600"
            >
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}