"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  ChevronDown,
  CreditCard,
  FileText,
  Plus,
  Upload,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

// Status Badge
function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[11px] font-bold">
      <span className="w-1 h-1 rounded-full bg-emerald-500" />
      {status}
    </span>
  );
}

const TH_CLASSES =
  "px-4 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 whitespace-nowrap text-start";
const TD_CLASSES =
  "px-4 py-4 text-[12px] text-slate-600 border-b border-gray-50 whitespace-nowrap text-start";

export default function VirtualCardPage() {
  const t = useTranslations("VirtualCard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasActiveCard, setHasActiveCard] = useState(false);
  const [createdCardData, setCreatedCardData] = useState(null);

  // Dynamic localization arrays derived from your translation bundles
  const identityTypes = [
    t("identityTypes.nid"),
    t("identityTypes.passport"),
    t("identityTypes.bvn"),
  ];

  const countriesList = [
    t("countries.bangladesh"),
    t("countries.usa"),
    t("countries.uk"),
    t("countries.canada"),
    t("countries.australia"),
  ];

  const TRANSACTIONS = [
    {
      id: 1,
      type: t("transactionTypes.cardFund"),
      status: t("card.activeStatus"),
      totalAmount: "6.05 USD",
      transactionId: "CF18278982",
      requestAmount: "5.00 USD",
      fees: "1.05 USD",
    },
    {
      id: 2,
      type: t("transactionTypes.bankTransfer"),
      status: t("card.activeStatus"),
      totalAmount: "12.50 USD",
      transactionId: "BT92837465",
      requestAmount: "10.00 USD",
      fees: "2.50 USD",
    },
    {
      id: 3,
      type: t("transactionTypes.mobileRecharge"),
      status: t("card.activeStatus"),
      totalAmount: "15.75 USD",
      transactionId: "MR56473829",
      requestAmount: "15.00 USD",
      fees: "0.75 USD",
    },
    {
      id: 4,
      type: t("transactionTypes.walletTopUp"),
      status: t("card.activeStatus"),
      totalAmount: "25.30 USD",
      transactionId: "WT83726194",
      requestAmount: "24.00 USD",
      fees: "1.30 USD",
    },
    {
      id: 5,
      type: t("transactionTypes.utilityPayment"),
      status: t("card.activeStatus"),
      totalAmount: "40.00 USD",
      transactionId: "UP19283746",
      requestAmount: "38.50 USD",
      fees: "1.50 USD",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    identityType: t("identityTypes.passport"),
    identityNumber: "",
    idFront: null,
    idBack: null,
    yourPhoto: null,
    houseNumber: "",
    country: t("countries.bangladesh"),
    city: "",
    state: "",
    zipCode: "",
    address: "",
  });

  const [filePreviews, setFilePreviews] = useState({
    idFront: "",
    idBack: "",
    yourPhoto: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [fieldName]: file }));
      setFilePreviews((prev) => ({ ...prev, [fieldName]: file.name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasActiveCard(true);
    setCreatedCardData({
      name: `${formData.firstName} ${formData.lastName}`.toUpperCase(),
      number: "4112 •••• •••• 9823",
      expiry: "12/31",
      cvv: "382",
      balance: "0.00 USD",
      status: t("card.activeStatus"),
    });
    setIsModalOpen(false);
  };

  return (
    <div className="w-full space-y-8 text-start">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-700">{t("title")}</h1>
        {!hasActiveCard && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 active:scale-95 cursor-pointer"
          >
            <Plus size={18} fill="currentColor" />
            {t("btnCreate")}
          </button>
        )}
      </div>

      {/* 1) Virtual Card Section */}
      <section className="relative bg-white rounded-2xl border border-brand-border-color shadow-sm overflow-hidden p-8 animate-in fade-in duration-200">
        {hasActiveCard && createdCardData ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-6">
            {/* The Stunning Glassmorphic Card */}
            <div className="relative w-full max-w-sm h-56 rounded-2xl p-6 text-white overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-emerald-900 transition-all duration-300 hover:scale-[1.02] ltr:mr-auto rtl:ml-auto">
              <div className="absolute right-0 bottom-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute left-0 top-0 w-32 h-32 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                    {t("card.badge")}
                  </p>
                  <h3 className="text-lg font-black tracking-wide text-white mt-0.5">
                    {t("card.brandName")}
                  </h3>
                </div>
                <div className="bg-emerald-500/20 px-2.5 py-1 rounded-md border border-emerald-400/20 text-xs font-bold text-emerald-400">
                  {createdCardData.status}
                </div>
              </div>

              {/* Card Number */}
              <div className="mb-6">
                <span className="text-xl tracking-widest text-white/90">
                  {createdCardData.number}
                </span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[9px] text-emerald-400/80 uppercase tracking-wider mb-0.5">
                    {t("card.holderLabel")}
                  </p>
                  <span className="text-sm font-bold tracking-wide">
                    {createdCardData.name}
                  </span>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="text-[9px] text-emerald-400/80 uppercase tracking-wider mb-0.5">
                      {t("card.expiryLabel")}
                    </p>
                    <span className="text-xs font-bold ">{createdCardData.expiry}</span>
                  </div>
                  <div>
                    <p className="text-[9px] text-emerald-400/80 uppercase tracking-wider mb-0.5">
                      {t("card.cvvLabel")}
                    </p>
                    <span className="text-xs font-bold ">•••</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full">
                  {t("card.accountTag")}
                </span>
                <h3 className="text-2xl font-black text-gray-800 mt-2">
                  {t("card.balanceLabel")}: {createdCardData.balance}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {t("card.description")}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setCreatedCardData((prev) => ({
                      ...prev,
                      status: prev.status === t("card.activeStatus") ? t("card.frozenStatus") : t("card.activeStatus"),
                    }));
                  }}
                  className="px-6 py-3 border border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-600 rounded-xl text-sm font-bold transition-all active:scale-95 cursor-pointer"
                >
                  {createdCardData.status === t("card.activeStatus")
                    ? t("card.btnFreeze")
                    : t("card.btnUnfreeze")}
                </button>
                <button
                  onClick={() => {
                    setHasActiveCard(false);
                    setCreatedCardData(null);
                  }}
                  className="px-6 py-3 border border-red-100 hover:border-red-200 text-red-500 rounded-xl text-sm font-bold transition-all active:scale-95 cursor-pointer"
                >
                  {t("card.btnDelete")}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-brand-bg-light p-6 rounded-full border border-brand-border-color mb-6">
              <CreditCard size={48} className="text-brand-primary" />
            </div>

            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              {t("empty.title")}
            </h2>
            <p className="text-gray-500 mb-8 max-w-sm text-sm">
              {t("empty.description")}
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 active:scale-95 cursor-pointer"
            >
              <Zap size={18} fill="currentColor" />
              {t("empty.btnAction")}
            </button>
          </div>
        )}
      </section>

      {/* 2) Recent Transactions */}
      <section className="mt-16">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-emerald-50/20 to-teal-50/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-inner">
                <FileText size={18} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800 leading-tight">
                  {t("transactions.title")}
                </h2>
              </div>
            </div>

            <button
              type="button"
              className="bg-[#10b981] text-white rounded-xl border-none px-5 py-2.5 text-[13px] font-semibold tracking-[0.2px] cursor-pointer shadow-[0_4px_16px_rgba(16,185,129,0.18)] transition-[background,transform] duration-[180ms] hover:bg-[#059669] hover:-translate-y-px active:scale-[0.97]"
            >
              {t("transactions.btnViewMore")}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className={TH_CLASSES}>{t("transactions.thType")}</th>
                  <th className={TH_CLASSES}>{t("transactions.thId")}</th>
                  <th className={TH_CLASSES}>{t("transactions.thReqAmount")}</th>
                  <th className={TH_CLASSES}>{t("transactions.thFees")}</th>
                  <th className={TH_CLASSES}>{t("transactions.thTotal")}</th>
                  <th className={TH_CLASSES}>{t("transactions.thStatus")}</th>
                </tr>
              </thead>
              <tbody>
                {TRANSACTIONS.map((tx) => (
                  <tr
                    key={tx.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className={`${TD_CLASSES} font-bold text-slate-800`}>
                      {tx.type}
                    </td>
                    <td className={`${TD_CLASSES} text-[11px]`}>
                      {tx.transactionId}
                    </td>
                    <td className={TD_CLASSES}>{tx.requestAmount}</td>
                    <td className={TD_CLASSES}>{tx.fees}</td>
                    <td className={`${TD_CLASSES} font-black text-brand-primary`}>
                      {tx.totalAmount}
                    </td>
                    <td className={TD_CLASSES}>
                      <StatusBadge status={tx.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Create Card Customer Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs" data-lenis-prevent="true">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <CreditCard className="text-brand-primary" size={24} />
                {t("modal.headerTitle")}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* ─── 1) Personal Information ─── */}
                <div className="space-y-4">
                  <span className="block text-xs font-bold text-brand-primary uppercase tracking-wider pb-2 border-b border-gray-50">
                    {t("modal.section1Title")}
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelFirstName")}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder={t("modal.placeholderFirstName")}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelLastName")}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder={t("modal.placeholderLastName")}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelEmail")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t("modal.placeholderEmail")}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelDob")}
                        <span className="text-xs font-bold text-emerald-600 mx-2">{t("modal.labelDobHint")}</span>
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                {/* ─── 2) Identity Verification ─── */}
                <div className="space-y-4 pt-4">
                  <span className="block text-xs font-bold text-brand-primary uppercase tracking-wider pb-2 border-b border-gray-50">
                    {t("modal.section2Title")}
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelIdentityType")}
                      </label>
                      <Listbox
                        value={formData.identityType}
                        onChange={(val) =>
                          setFormData((prev) => ({
                            ...prev,
                            identityType: val,
                          }))
                        }
                      >
                        <div className="relative">
                          <ListboxButton className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white focus:border-brand-primary focus:outline-none transition-all text-start cursor-pointer text-sm font-bold text-gray-700">
                            <span>{formData.identityType}</span>
                            <ChevronDown size={16} className="text-gray-400" />
                          </ListboxButton>
                          <ListboxOptions className="absolute z-[100] mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                            {identityTypes.map((type) => (
                              <ListboxOption
                                key={type}
                                value={type}
                                className={({ active, selected }) =>
                                  `relative cursor-pointer select-none py-2.5 px-4 text-sm ${active
                                    ? "bg-emerald-50 text-brand-primary font-bold"
                                    : selected
                                      ? "text-emerald-600 font-bold bg-emerald-50/50"
                                      : "text-gray-700"
                                  }`
                                }
                              >
                                {type}
                              </ListboxOption>
                            ))}
                          </ListboxOptions>
                        </div>
                      </Listbox>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelIdentityNumber")}
                      </label>
                      <input
                        type="text"
                        name="identityNumber"
                        value={formData.identityNumber}
                        onChange={handleInputChange}
                        placeholder={t("modal.placeholderIdentityNumber")}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelUploadFront")}
                      </label>
                      <div className="relative border border-dashed border-gray-300 hover:border-brand-primary rounded-xl p-4 flex flex-col items-center text-center transition-all bg-gray-50/50 hover:bg-emerald-50/10 cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          required
                          onChange={(e) => handleFileChange(e, "idFront")}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <Upload size={20} className="text-gray-400 mb-1" />
                        <span className="text-[11px] font-bold text-gray-500 truncate max-w-full">
                          {filePreviews.idFront || t("modal.uploadFrontPlaceholder")}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelUploadBack")}
                      </label>
                      <div className="relative border border-dashed border-gray-300 hover:border-brand-primary rounded-xl p-4 flex flex-col items-center text-center transition-all bg-gray-50/50 hover:bg-emerald-50/10 cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          required
                          onChange={(e) => handleFileChange(e, "idBack")}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <Upload size={20} className="text-gray-400 mb-1" />
                        <span className="text-[11px] font-bold text-gray-500 truncate max-w-full">
                          {filePreviews.idBack || t("modal.uploadBackPlaceholder")}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelUploadUserPhoto")}
                      </label>
                      <div className="relative border border-dashed border-gray-300 hover:border-brand-primary rounded-xl p-4 flex flex-col items-center text-center transition-all bg-gray-50/50 hover:bg-emerald-50/10 cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          required
                          onChange={(e) => handleFileChange(e, "yourPhoto")}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <Upload size={20} className="text-gray-400 mb-1" />
                        <span className="text-[11px] font-bold text-gray-500 truncate max-w-full">
                          {filePreviews.yourPhoto || t("modal.uploadUserPhotoPlaceholder")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ─── 3) Address Details ─── */}
                <div className="space-y-4 pt-4">
                  <span className="block text-xs font-bold text-brand-primary uppercase tracking-wider pb-2 border-b border-gray-50">
                    {t("modal.section3Title")}
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelHouseNumber")}
                      </label>
                      <input
                        type="text"
                        name="houseNumber"
                        value={formData.houseNumber}
                        onChange={handleInputChange}
                        placeholder={t("modal.placeholderHouseNumber")}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelCountry")}
                      </label>
                      <Listbox
                        value={formData.country}
                        onChange={(val) =>
                          setFormData((prev) => ({ ...prev, country: val }))
                        }
                      >
                        <div className="relative">
                          <ListboxButton className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white focus:border-brand-primary focus:outline-none transition-all text-start cursor-pointer text-sm font-bold text-gray-700">
                            <span>{formData.country}</span>
                            <ChevronDown size={16} className="text-gray-400" />
                          </ListboxButton>
                          <ListboxOptions className="absolute z-[100] mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                            {countriesList.map((country) => (
                              <ListboxOption
                                key={country}
                                value={country}
                                className={({ active, selected }) =>
                                  `relative cursor-pointer select-none py-2.5 px-4 text-sm ${active
                                    ? "bg-emerald-50 text-brand-primary font-bold"
                                    : selected
                                      ? "text-emerald-600 font-bold bg-emerald-50/50"
                                      : "text-gray-700"
                                  }`
                                }
                              >
                                {country}
                              </ListboxOption>
                            ))}
                          </ListboxOptions>
                        </div>
                      </Listbox>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelCity")}
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder={t("modal.placeholderCity")}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelState")}
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder={t("modal.placeholderState")}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        {t("modal.labelZipCode")}
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder={t("modal.placeholderZipCode")}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      {t("modal.labelAddress")}
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder={t("modal.placeholderAddress")}
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-xl transition-all mt-6 shadow-lg shadow-brand-primary/20 cursor-pointer"
                >
                  {t("modal.btnSubmit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}