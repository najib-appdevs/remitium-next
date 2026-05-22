"use client";

import {
  ChevronDown,
  CreditCard,
  HelpCircle,
  History,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  Send,
  SendToBack,
  Settings,
  ShieldCheck,
  User,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { showToast } from '@/lib/toast';
import { authService } from '@/lib/services/api';

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Sidebar");

  const [isSettingsOpen, setIsSettingsOpen] = useState(
    pathname.includes("/settings") || pathname === "/profile",
  );

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await authService.logout();
      const responseData = response.data;

      // Show message from API response
      const successMsg = Array.isArray(responseData?.message?.success)
        ? responseData.message.success[0]
        : (responseData?.message?.success || "Logout success!");

      showToast.success(successMsg);
    } catch (error) {
      const errorData = error.response?.data;
      let errorMsg = "Logout failed";

      if (errorData?.message) {
        if (typeof errorData.message === "string") {
          errorMsg = errorData.message;
        } else if (typeof errorData.message === "object") {
          // Extract the first error message from the object keys (e.g. error)
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
      sessionStorage.removeItem("accessToken");
      setIsLogoutModalOpen(false);
      setLoading(false);
      router.push("/login");
    }
  };

  const isActive = (href) => pathname === href;

  const MENU_GROUPS = [
    {
      title: t("groups.general"),
      items: [
        {
          name: t("menu.dashboard"),
          href: "/dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: t("groups.payments"),
      items: [
        { name: t("menu.addMoney"), href: "/add-money", icon: PlusCircle },
        { name: t("menu.recipient"), href: "/recipient", icon: Users },
        {
          name: t("menu.sendRemittance"),
          href: "/send-remittance",
          icon: SendToBack,
        },
        { name: t("menu.moneyOut"), href: "/money-out", icon: Send },
      ],
    },
    {
      title: t("groups.finance"),
      items: [
        {
          name: t("menu.virtualCard"),
          href: "/cardyfie-virtual-card",
          icon: CreditCard,
        },
        { name: t("menu.transaction"), href: "/transaction", icon: History },
      ],
    },
  ];

  const SETTINGS_ITEMS = [
    { name: t("menu.profile"), href: "/profile", icon: User },
    {
      name: t("menu.security2fa"),
      href: "/settings/2FA-Security",
      icon: ShieldCheck,
    },
    {
      name: t("menu.kyc"),
      href: "/settings/KYC-verification",
      icon: UserCheck,
    },
  ];

  return (
    <>
      <aside
        className={`
          fixed inset-y-0 z-50 w-72 bg-[#0b1727] text-white transition-transform duration-300
          ltr:left-0 rtl:right-0
          ltr:lg:translate-x-0 rtl:lg:translate-x-0
          lg:sticky lg:top-0 lg:h-screen
          ${isOpen
            ? "translate-x-0"
            : "ltr:-translate-x-full rtl:translate-x-full"
          }
        `}
      >
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
            <button
              className="lg:hidden text-gray-300 hover:text-white"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav
            className="flex-1 px-4 py-4 space-y-8 overflow-y-auto hide-scrollbar"
            data-lenis-prevent="true"
          >
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
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      <item.icon
                        size={20}
                        className={
                          isActive(item.href) ? "text-white" : "text-gray-300"
                        }
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Settings Section */}
            <div className="space-y-2">
              <p className="px-4 text-xs font-bold text-gray-500 uppercase mb-4">
                {t("groups.accountManagement")}
              </p>
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 cursor-pointer
                  ${pathname.includes("/settings") || pathname === "/profile"
                    ? "text-white bg-white/5"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Settings size={20} />
                  {t("menu.settings")}
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isSettingsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${isSettingsOpen
                    ? "grid-rows-[1fr] opacity-100 mt-1"
                    : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="ltr:ml-4 ltr:pl-4 ltr:border-l rtl:mr-4 rtl:pr-4 rtl:border-r border-white/10 space-y-1">
                    {SETTINGS_ITEMS.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`
                          flex items-center gap-3 px-4 py-2.5 rounded-sm text-[13px] font-medium transition-all duration-200
                          ${isActive(item.href)
                            ? "text-brand-primary"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                          }
                        `}
                      >
                        <item.icon size={16} />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsLogoutModalOpen(true)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                <LogOut size={20} className="text-gray-300" />
                {t("menu.logout")}
              </button>
            </div>

            {/* Help Center */}
            <div className="pt-4 mt-8 border-t border-white/5">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-4">
                    <HelpCircle size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {t("helpCenter.title")}
                  </h4>
                  <p className="text-sm text-gray-300 mb-4">
                    {t("helpCenter.sub")}
                  </p>
                  <button className="w-full py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-sm text-xs font-bold transition-all duration-200 cursor-pointer">
                    {t("helpCenter.btn")}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl border border-gray-100 p-8 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-5">
              <LogOut size={28} className="translate-x-0.5" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {t("logoutConfirm.title")}
            </h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              {t("logoutConfirm.text")}
            </p>
            <div className="flex w-full gap-3">
              <button
                type="button"
                disabled={loading}
                onClick={() => setIsLogoutModalOpen(false)}
                className="flex-1 py-3 border border-gray-200 rounded-xl text-gray-500 text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer disabled:opacity-50"
              >
                {t("logoutConfirm.no")}
              </button>
              <button
                type="button"
                disabled={loading}
                onClick={handleLogout}
                className="flex-1 py-3 bg-red-500 text-white rounded-xl text-sm font-semibold hover:bg-red-600 transition-all shadow-md shadow-red-500/10 cursor-pointer disabled:opacity-50"
              >
                {loading ? t("logoutConfirm.loggingOut") : t("logoutConfirm.yes")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}