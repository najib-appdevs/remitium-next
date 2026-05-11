"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  PlusCircle, 
  Users,
  SendToBack, 
  Send, 
  CreditCard, 
  History, 
  Settings, 
  ShieldCheck, 
  UserCheck,
  ChevronDown,
  LogOut,
  X,
  User
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const MENU_GROUPS = [
  {
    title: "General",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ]
  },
  {
    title: "Payments & Transfers",
    items: [
      { name: "Add Money", href: "/add-money", icon: PlusCircle },
      { name: "Recipient", href: "/recipient", icon: Users },
      { name: "Send Remittance", href: "/send-remittance", icon: SendToBack },
      { name: "Money Out", href: "/money-out", icon: Send },
    ]
  },
  {
    title: "Finance",
    items: [
      { name: "Virtual Card", href: "/cardyfie-virtual-card", icon: CreditCard },
      { name: "Transaction", href: "/transaction", icon: History },
    ]
  }
];

const SETTINGS_ITEMS = [
  { name: "Profile", href: "/profile", icon: User },
  { name: "2FA Security", href: "/settings/2FA-Security", icon: ShieldCheck },
  { name: "KYC Verification", href: "/settings/kyc", icon: UserCheck },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(pathname.includes("/settings") || pathname === "/profile");

  const isActive = (href) => pathname === href;

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-72 bg-[#0b1727] text-white transition-transform duration-300 lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 lg:p-8">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo/logo.webp" 
              alt="Remitium" 
              width={120} 
              height={30} 
            />
          </Link>
          <button className="lg:hidden text-gray-300 hover:text-white" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-8 overflow-y-auto custom-scrollbar">
          {MENU_GROUPS.map((group) => (
            <div key={group.title} className="space-y-2">
              <p className="px-4 text-xs font-bold text-gray-500 uppercase mb-4">
                {group.title}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                      ${isActive(item.href) 
                        ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                        : "text-gray-300 hover:text-white hover:bg-white/5"}
                    `}
                  >
                    <item.icon size={20} className={isActive(item.href) ? "text-white" : "text-gray-300"} />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Settings Section */}
          <div className="space-y-2">
            <p className="px-4 text-xs font-bold text-gray-500 uppercase mb-4">
              Account Management
            </p>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${(pathname.includes("/settings") || pathname === "/profile")
                  ? "text-white bg-white/5" 
                  : "text-gray-300 hover:text-white hover:bg-white/5"}
              `}
            >
              <div className="flex items-center gap-3">
                <Settings size={20} />
                Settings
              </div>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${isSettingsOpen ? "rotate-180" : ""}`} 
              />
            </button>

            {isSettingsOpen && (
              <div className="mt-1 ml-4 pl-4 border-l border-white/10 space-y-1">
                {SETTINGS_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200
                      ${isActive(item.href) 
                        ? "text-brand-primary" 
                        : "text-gray-300 hover:text-white hover:bg-white/5"}
                    `}
                  >
                    <item.icon size={16} />
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 mt-auto">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">
                JD
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">john@example.com</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-red-500/10 text-gray-300 hover:text-red-500 rounded-xl text-xs font-bold transition-all duration-200">
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
