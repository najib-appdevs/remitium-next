"use client";

import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const langRef = useRef(null);

  const languages = [
    { code: "en", name: t("english") },
    { code: "ar", name: t("arabic") },
    { code: "es", name: t("spanish") },
  ];
  
  const currentLangName = languages.find(l => l.code === locale)?.name || t("english");

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
    { name: t("home"), href: "/" },
    { name: t("services"), href: "/services" },
    { name: t("feesCalculator"), href: "/fees-calculator" },
    { name: t("downloadApp"), href: "/download-app" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 px-4 py-3 md:px-6 transition-all duration-500`}
    >
      <nav
        className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/40 rounded-2xl py-2 px-6"
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-[14px] rounded-full transition-all cursor-pointer ${
                    isActive
                      ? "text-brand-primary font-bold bg-brand-primary/5"
                      : "font-semibold text-gray-600 hover:text-brand-primary hover:bg-brand-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 text-[14px] font-semibold text-gray-600 hover:bg-gray-100 rounded-full transition-all cursor-pointer"
              >
                <span>{currentLangName}</span>
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
                        setIsLangOpen(false);
                        router.replace(pathname, { locale: lang.code });
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
              {t("login")}
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-bold transition-colors cursor-pointer ${
                    isActive
                      ? "text-brand-primary"
                      : "text-gray-800 hover:text-brand-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="h-px bg-gray-100 my-2" />
            <div className="flex flex-col gap-3">
              <div className="flex justify-center gap-4 text-gray-500 font-medium py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      router.replace(pathname, { locale: lang.code });
                    }}
                    className={`${locale === lang.code ? "text-brand-primary" : ""} cursor-pointer`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              <Link
                href="/login"
                className="bg-brand-primary text-white py-4 rounded-full text-lg font-bold cursor-pointer"
              >
                {t("login")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
