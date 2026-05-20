"use client";

import {
  ChevronDown,
  Eye,
  EyeOff,
  Lock,
  Trash2,
  Upload,
  User,
} from "lucide-react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const countriesList = [
  { name: "Bangladesh", phoneCode: "+880" },
  { name: "United States", phoneCode: "+1" },
  { name: "United Kingdom", phoneCode: "+44" },
];

export default function ProfilePage() {
  const t = useTranslations("Profile");
  const [active, setActive] = useState("profile");
  const [selectedCountry, setSelectedCountry] = useState(countriesList[0]);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl shadow-emerald-900/5 bg-white border border-gray-100 min-h-[600px]">
      {/* ── Sidebar ── */}
      <aside className="w-full md:w-72 flex-shrink-0 flex flex-col py-8 bg-[#0a2e1c]">
        <div className="flex flex-col items-center text-center px-6 mb-10">
          <div className="relative group mb-4">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden border-4 border-[#1a5c38] shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/profile-default.webp"
                alt={t("userAvatarAlt")}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <Upload size={20} className="text-white" />
              </div>
            </div>
            {/* Active state indicator dot positioned dynamically across layouts */}
            <div className="absolute -bottom-1 -right-1 rtl:-left-1 rtl:right-auto w-6 h-6 bg-emerald-500 rounded-lg border-2 border-[#0a2e1c]" />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-white tracking-tight">
              appdevs
            </h2>
            <p className="text-xs font-medium text-emerald-400/80">
              user@appdevs.net
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 px-4">
          <SbBtn
            icon={<User size={19} />}
            label={t("profileSettingsTab")}
            active={active === "profile"}
            onClick={() => setActive("profile")}
          />
          <SbBtn
            icon={<Lock size={19} />}
            label={t("securityPasswordTab")}
            active={active === "password"}
            onClick={() => setActive("password")}
          />
        </nav>

        <div className="mx-6 my-6 h-px bg-emerald-900/50" />

        <div className="mt-auto px-4">
          <SbBtn icon={<Trash2 size={19} />} label={t("deleteAccountTab")} danger />
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-50/30">
        <div className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              {active === "profile" ? t("accountSettingsHeading") : t("securitySettingsHeading")}
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {active === "profile" ? t("accountSettingsSub") : t("securitySettingsSub")}
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-10">
          {/* Profile panel */}
          {active === "profile" && (
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-2 duration-500">
              <PanelLabel>{t("personalInfoLabel")}</PanelLabel>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Field label={t("firstNameField")}>
                  <input type="text" defaultValue="App" className={inp} />
                </Field>
                <Field label={t("lastNameField")}>
                  <input type="text" defaultValue="Devs" className={inp} />
                </Field>

                <Field label={t("countryField")}>
                  <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                    <div className="relative">
                      <ListboxButton className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 rounded-xl bg-white border border-gray-200 focus:border-emerald-500 focus:outline-none transition-all text-start cursor-pointer">
                        <span>{selectedCountry.name}</span>
                        <ChevronDown size={16} className="text-gray-400" />
                      </ListboxButton>
                      <ListboxOptions className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                        {countriesList.map((country) => (
                          <ListboxOption
                            key={country.name}
                            value={country}
                            className={({ active, selected }) =>
                              `relative cursor-pointer select-none py-2.5 px-4 text-sm ${active
                                ? "bg-emerald-50 text-[#10b981] font-bold"
                                : selected
                                  ? "text-emerald-600 font-bold bg-emerald-50/50"
                                  : "text-gray-700"
                              }`
                            }
                          >
                            {country.name}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>
                </Field>
                <Field label={t("phoneField")}>
                  <div className="flex rounded-xl overflow-hidden border border-gray-200 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all">
                    <span className="px-4 flex items-center bg-gray-100 text-gray-600 text-sm font-semibold border-e border-gray-200">
                      {selectedCountry.phoneCode}
                    </span>
                    <input
                      type="text"
                      defaultValue="1555555555"
                      className="flex-1 min-w-0 px-4 py-3 text-sm text-gray-700 outline-none bg-white"
                    />
                  </div>
                </Field>
                <Field label={t("addressField")}>
                  <input
                    type="text"
                    defaultValue="Dhaka, Bangladesh"
                    className={inp}
                  />
                </Field>
                <Field label={t("cityField")}>
                  <input type="text" defaultValue="Dhaka" className={inp} />
                </Field>
                <Field label={t("stateField")}>
                  <input type="text" defaultValue="Dhaka" className={inp} />
                </Field>
                <Field label={t("zipField")}>
                  <input type="text" defaultValue="1245" className={inp} />
                </Field>
              </div>

              <div className="mt-10 flex justify-center">
                <button className="cursor-pointer px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 active:scale-95">
                  {t("saveBtn")}
                </button>
              </div>
            </div>
          )}

          {/* Password panel */}
          {active === "password" && (
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-500">
              <PanelLabel>{t("securityInfoLabel")}</PanelLabel>
              <div className="flex flex-col gap-6 mt-6">
                <PwField
                  label={t("currentPasswordLabel")}
                  placeholder={t("currentPasswordPlaceholder")}
                />
                <PwField
                  label={t("newPasswordLabel")}
                  placeholder={t("newPasswordPlaceholder")}
                />
                <PwField
                  label={t("confirmPasswordLabel")}
                  placeholder={t("confirmPasswordPlaceholder")}
                />
              </div>
              <div className="mt-10 flex justify-center">
                <button className="cursor-pointer px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 active:scale-95">
                  {t("updatePasswordBtn")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const inp =
  "w-full px-4 py-3 text-sm text-gray-700 rounded-xl outline-none bg-white border border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-gray-400";

function SbBtn({ icon, label, active = false, danger = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 group relative cursor-pointer
        ${active
          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-900/20"
          : danger
            ? "text-red-400 hover:bg-red-500/10"
            : "text-emerald-100/60 hover:text-white hover:bg-white/5"
        }`}
    >
      <span
        className={`${active ? "text-white" : danger ? "text-red-400" : "text-emerald-400"} transition-colors`}
      >
        {icon}
      </span>
      {label}
      {active && (
        <span className="absolute right-3 rtl:left-3 rtl:right-auto w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      )}
    </button>
  );
}

function PanelLabel({ children }) {
  return (
    <div className="flex items-center gap-4">
      <p className="text-xs font-bold uppercase tracking-widest text-emerald-600/80 shrink-0">
        {children}
      </p>
      <div className="h-px w-full bg-gray-100" />
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] font-semibold text-gray-700 ms-1">
        {label}
      </label>
      {children}
    </div>
  );
}

function PwField({ label, placeholder }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] font-semibold text-gray-700 ms-1">
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}

          className={`${inp} pr-12 ltr:pr-12 rtl:pl-12 rtl:pr-4 text-start`}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3.5 ltr:right-3.5 ltr:left-auto rtl:left-3.5 rtl:right-auto text-gray-400 hover:text-emerald-500 transition-colors p-1 flex items-center justify-center z-10"
        >

          {show ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>
    </div>
  );
}