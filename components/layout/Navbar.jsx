"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");

  const langRef = useRef(null);

  const languages = [
    { code: "English", name: "English" },
    { code: "Arabic", name: "Arabic" },
    { code: "Spanish", name: "Spanish" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Fees Calculator", href: "/fees-calculator" },
    { name: "Download App", href: "/download-app" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 px-4 py-3 md:px-6 transition-all duration-500 ${
        scrolled
          ? "bg-white/60 backdrop-blur-xl border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/40 shadow-2xl border border-white/40 rounded-2xl py-2 px-6"
            : "bg-transparent border-transparent py-4 px-8"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 transition-transform hover:scale-105 cursor-pointer"
          >
            <Image
              src="/logo/logo.webp"
              alt="Logo"
              width={110}
              height={30}
              className="w-auto h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-[14px] font-semibold text-gray-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded-full transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 text-[14px] font-semibold text-gray-600 hover:bg-gray-100 rounded-full transition-all cursor-pointer"
              >
                <span>{currentLang}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-[60]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary/10 hover:text-brand-primary transition-colors cursor-pointer"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Login Button */}
            <Link
              href="/login"
              className="bg-brand-primary text-white px-8 py-2.5 rounded-full text-[14px] font-bold shadow-md shadow-brand-primary/10 hover:bg-brand-primary-hover transition-all cursor-pointer"
            >
              Login
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center">
              <span
                className={`h-[2px] bg-gray-900 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-full"}`}
              />
              <span
                className={`h-[2px] bg-gray-900 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-full"}`}
              />
              <span
                className={`h-[2px] bg-gray-900 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-full"}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-4 top-20 lg:hidden transition-all duration-300 transform ${
          isMobileMenuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-2xl">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-gray-800 hover:text-brand-primary cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <div className="flex flex-col gap-3">
              <div className="flex justify-center gap-4 text-gray-500 font-medium py-2">
                <button
                  onClick={() => setCurrentLang("English")}
                  className={`${currentLang === "English" ? "text-brand-primary" : ""} cursor-pointer`}
                >
                  English
                </button>
                <button
                  onClick={() => setCurrentLang("Arabic")}
                  className={`${currentLang === "Arabic" ? "text-brand-primary" : ""} cursor-pointer`}
                >
                  Arabic
                </button>
                <button
                  onClick={() => setCurrentLang("Spanish")}
                  className={`${currentLang === "Spanish" ? "text-brand-primary" : ""} cursor-pointer`}
                >
                  Spanish
                </button>
              </div>
              <Link
                href="/login"
                className="bg-brand-primary text-white py-4 rounded-full text-lg font-bold cursor-pointer"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
