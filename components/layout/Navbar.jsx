"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2 text-xl font-bold text-[#00c881]">
          {/* Logo */}
          <Image
            src="/logo/logo.webp"
            alt="Remitium Logo"
            width={130}
            height={40}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="#" className="hover:text-[#00c881] transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-[#00c881] transition-colors">
            Service
          </Link>
          <Link href="#" className="hover:text-[#00c881] transition-colors">
            Web Solution
          </Link>
          <Link href="#" className="hover:text-[#00c881] transition-colors">
            Product App
          </Link>
          <Link href="#" className="hover:text-[#00c881] transition-colors">
            About
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 rounded px-2 py-1">
            <span>English</span>
          </div>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[#00c881] mr-2"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-[#00c881] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col py-4 px-6 gap-4 text-sm font-medium text-gray-700">
            <Link href="#" className="hover:text-[#00c881] transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-[#00c881] transition-colors">
              Service
            </Link>
            <Link href="#" className="hover:text-[#00c881] transition-colors">
              Web Solution
            </Link>
            <Link href="#" className="hover:text-[#00c881] transition-colors">
              Product App
            </Link>
            <Link href="#" className="hover:text-[#00c881] transition-colors">
              About
            </Link>
            <hr className="border-gray-100 my-2" />
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Language</span>
              <span className="text-[#00c881]">English</span>
            </div>
            <Link
              href="#"
              className="text-center bg-[#00c881] text-white py-2 rounded-md hover:bg-[#00a66b] transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
