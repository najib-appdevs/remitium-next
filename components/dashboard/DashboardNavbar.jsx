"use client";

import { Bell, ChevronDown, Globe, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function DashboardNavbar({ onMenuClick }) {
  const pathname = usePathname();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");
  const langRef = useRef(null);

  const languages = [
    { code: "English", name: "English" },
    { code: "Arabic", name: "Arabic" },
    { code: "Spanish", name: "Spanish" },
  ];

  // Helper to format route name for breadcrumbs
  const getRouteName = (path) => {
    if (path === "/dashboard") return "Overview";
    const segments = path.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button
          className="p-2 -ml-2 text-gray-400 hover:text-brand-navy lg:hidden"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold text-brand-navy">Dashboard</span>
          <span className="text-gray-400">/</span>
          <span className="text-brand-primary font-medium">
            {getRouteName(pathname)}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        {/* Language Switcher */}
        <div className="relative hidden md:block" ref={langRef}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-gray-600 hover:bg-gray-50 rounded-full transition-all border border-gray-100"
          >
            <Globe size={14} className="text-brand-primary" />
            <span>{currentLang}</span>
            <ChevronDown
              size={14}
              className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-[60]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.code);
                    setIsLangOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors font-medium"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-brand-navy hover:bg-gray-50 rounded-full transition-all border border-gray-100">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Profile */}
        <Link
          href="/profile"
          className="flex items-center gap-3 pl-3 sm:pl-6 border-l border-gray-100 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 overflow-hidden shadow-sm">
            <Image
              src="/images/profile-default.webp"
              alt="Remitium"
              width={120}
              height={30}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
