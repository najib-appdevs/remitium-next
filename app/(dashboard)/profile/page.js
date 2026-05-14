"use client";

import { ChevronDown, EyeOff, Mail, Upload } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT COLUMN: Header + Profile Info (50%) */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* PAGE HEADER (Outside the white card) */}
          <div className="flex justify-between items-center px-1">
            <h1 className="text-2xl font-bold text-gray-700">
              Profile Settings
            </h1>
            <button className="cursor-pointer bg-[#dc3545] hover:bg-red-700 text-white px-6 py-2 rounded-sm font-medium transition-colors flex items-center gap-2">
              Delete Account
            </button>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Banner & Avatar Section */}
            <div className="relative">
              <div className="h-48 w-full bg-[url('/images/bg_img/side-bg.webp')] bg-cover bg-center bg-no-repeat"></div>
              <div className="px-8 pb-6 flex items-end gap-4 -mt-12 relative z-10">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <Image
                      src="/images/profile-default.webp"
                      alt="User"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-brand-emerald text-white p-1.5 rounded-full border-2 border-white hover:brightness-95 transition-all">
                    <Upload size={14} />
                  </button>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white lg:text-[#1a2b3c] drop-shadow-md lg:drop-shadow-none">
                    appdevs
                  </h2>
                  <div className="flex items-center gap-2 text-white lg:text-gray-500 text-sm">
                    <Mail size={14} />
                    <span>user@appdevs.net</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="p-8 pt-4 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* FIRST NAME */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 tracking-wider">
                    First Name*
                  </label>
                  <input
                    type="text"
                    defaultValue="App"
                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-brand-emerald text-gray-600 font-medium"
                  />
                </div>

                {/* LAST NAME */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 tracking-wider">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    defaultValue="Devs"
                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-brand-emerald text-gray-600 font-medium"
                  />
                </div>

                {/* COUNTRY */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 tracking-wider">
                    Country*
                  </label>
                  <div className="relative">
                    <select className="w-full p-3 border border-gray-200 rounded-xl outline-none appearance-none focus:border-brand-emerald text-gray-600 font-medium bg-white">
                      <option>Bangladesh</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 tracking-wider">
                    Phone
                  </label>
                  <div className="flex">
                    <div className="bg-brand-primary text-white px-4 flex items-center justify-center rounded-l-xl font-bold">
                      +880
                    </div>
                    <input
                      type="text"
                      defaultValue="1555555555"
                      className="w-full p-3 border border-gray-200 border-l-0 rounded-r-xl outline-none focus:border-brand-emerald text-gray-600 font-medium"
                    />
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 tracking-wider">
                    Address
                  </label>
                  <input
                    type="text"
                    defaultValue="Dhaka, Bangladesh"
                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-brand-emerald text-gray-600 font-medium"
                  />
                </div>

                {/* CITY */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 tracking-wider">
                    City
                  </label>
                  <input
                    type="text"
                    defaultValue="Dhaka"
                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-brand-emerald text-gray-600 font-medium"
                  />
                </div>

                {/* STATE */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 tracking-wider">
                    State
                  </label>
                  <input
                    type="text"
                    defaultValue="Dhaka"
                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-brand-emerald text-gray-600 font-medium"
                  />
                </div>

                {/* ZIP CODE */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 tracking-wider">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    defaultValue="1245"
                    className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-brand-emerald text-gray-600 font-medium"
                  />
                </div>
              </div>

              <button className="cursor-pointer w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary-hover transition-all shadow-lg shadow-emerald-500/20">
                Update Profile
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Change Password (50%) */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-2xl font-bold text-gray-700 px-1">
            Change Password
          </h1>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-600 tracking-wider">
                Current Password*
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-brand-emerald text-gray-600"
                />
                <EyeOff
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={18}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-600 tracking-wider">
                New Password*
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-brand-emerald text-gray-600"
                />
                <EyeOff
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={18}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-600 tracking-wider">
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-brand-emerald text-gray-600"
                />
                <EyeOff
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={18}
                />
              </div>
            </div>

            <button className="cursor-pointer w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary-hover transition-all shadow-lg shadow-emerald-500/20">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
