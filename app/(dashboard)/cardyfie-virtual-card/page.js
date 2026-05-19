"use client";

import { useState } from "react";
import { CreditCard, FileText, Plus, Zap, X, Upload, ChevronDown } from "lucide-react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

const identityTypes = ["Passport", "National ID Card", "Driving License"];

const countriesList = [
  "Bangladesh",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
];

// ─── Status Badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[11px] font-bold">
      <span className="w-1 h-1 rounded-full bg-emerald-500" />
      {status}
    </span>
  );
}

const TRANSACTIONS = [
  {
    id: 1,
    type: "Card Fund",
    status: "Success",
    totalAmount: "6.05 USD",
    transactionId: "CF18278982",
    requestAmount: "5.00 USD",
    fees: "1.05 USD",
  },
  {
    id: 2,
    type: "Bank Transfer",
    status: "Success",
    totalAmount: "12.50 USD",
    transactionId: "BT92837465",
    requestAmount: "10.00 USD",
    fees: "2.50 USD",
  },
  {
    id: 3,
    type: "Mobile Recharge",
    status: "Success",
    totalAmount: "15.75 USD",
    transactionId: "MR56473829",
    requestAmount: "15.00 USD",
    fees: "0.75 USD",
  },
  {
    id: 4,
    type: "Wallet Top-up",
    status: "Success",
    totalAmount: "25.30 USD",
    transactionId: "WT83726194",
    requestAmount: "24.00 USD",
    fees: "1.30 USD",
  },
  {
    id: 5,
    type: "Utility Payment",
    status: "Success",
    totalAmount: "40.00 USD",
    transactionId: "UP19283746",
    requestAmount: "38.50 USD",
    fees: "1.50 USD",
  },
  {
    id: 6,
    type: "Crypto Purchase",
    status: "Success",
    totalAmount: "102.99 USD",
    transactionId: "CP66554433",
    requestAmount: "100.00 USD",
    fees: "2.99 USD",
  },
  {
    id: 7,
    type: "Subscription",
    status: "Success",
    totalAmount: "9.99 USD",
    transactionId: "SB11223344",
    requestAmount: "8.99 USD",
    fees: "1.00 USD",
  },
  {
    id: 8,
    type: "Cash Out",
    status: "Success",
    totalAmount: "55.20 USD",
    transactionId: "CO77889911",
    requestAmount: "53.00 USD",
    fees: "2.20 USD",
  },
];

const TH_CLASSES =
  "px-4 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 whitespace-nowrap";
const TD_CLASSES =
  "px-4 py-4 text-[12px] text-slate-600 border-b border-gray-50 whitespace-nowrap";

export default function VirtualCardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasActiveCard, setHasActiveCard] = useState(false);
  const [createdCardData, setCreatedCardData] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    identityType: "Passport",
    identityNumber: "",
    idFront: null,
    idBack: null,
    yourPhoto: null,
    houseNumber: "",
    country: "Bangladesh",
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
      status: "Active",
    });
    setIsModalOpen(false);
  };

  return (
    <div className="w-full space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-700">Virtual Cards</h1>
        {!hasActiveCard && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 active:scale-95 cursor-pointer"
          >
            <Plus size={18} fill="currentColor" />
            Create Card
          </button>
        )}
      </div>

      {/* 1) Virtual Card Section */}
      <section className="relative bg-white rounded-2xl border border-brand-border-color shadow-sm overflow-hidden p-8 animate-in fade-in duration-200">
        {hasActiveCard && createdCardData ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-6">
            {/* The Stunning Glassmorphic Card */}
            <div className="relative w-full max-w-sm h-56 rounded-2xl p-6 text-white overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-emerald-900 transition-all duration-300 hover:scale-[1.02]">
              {/* Card Patterns */}
              <div className="absolute right-0 bottom-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute left-0 top-0 w-32 h-32 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                    Virtual Card
                  </p>
                  <h3 className="text-lg font-black tracking-wide text-white mt-0.5">
                    Cardyfie
                  </h3>
                </div>
                <div className="bg-emerald-500/20 px-2.5 py-1 rounded-md border border-emerald-400/20 text-xs font-bold text-emerald-400">
                  {createdCardData.status}
                </div>
              </div>

              {/* Card Number */}
              <div className="mb-6">
                <span className="text-xl font-mono tracking-widest text-white/90">
                  {createdCardData.number}
                </span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[9px] text-emerald-400/80 uppercase tracking-wider mb-0.5">
                    Card Holder
                  </p>
                  <span className="text-sm font-bold tracking-wide">
                    {createdCardData.name}
                  </span>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="text-[9px] text-emerald-400/80 uppercase tracking-wider mb-0.5">
                      Expiry
                    </p>
                    <span className="text-xs font-bold font-mono">
                      {createdCardData.expiry}
                    </span>
                  </div>
                  <div>
                    <p className="text-[9px] text-emerald-400/80 uppercase tracking-wider mb-0.5">
                      CVV
                    </p>
                    <span className="text-xs font-bold font-mono">
                      •••
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full">
                  Card Account
                </span>
                <h3 className="text-2xl font-black text-gray-800 mt-2">
                  Balance: {createdCardData.balance}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Secure shopping with instant freezing and auto-funding from your primary wallet.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setCreatedCardData(prev => ({
                      ...prev,
                      status: prev.status === "Active" ? "Frozen" : "Active"
                    }));
                  }}
                  className="px-6 py-3 border border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-600 rounded-xl text-sm font-bold transition-all active:scale-95 cursor-pointer"
                >
                  {createdCardData.status === "Active" ? "Freeze Card" : "Unfreeze Card"}
                </button>
                <button
                  onClick={() => {
                    setHasActiveCard(false);
                    setCreatedCardData(null);
                  }}
                  className="px-6 py-3 border border-red-100 hover:border-red-200 text-red-500 rounded-xl text-sm font-bold transition-all active:scale-95 cursor-pointer"
                >
                  Delete Card
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            {/* Centered Visual Placeholder */}
            <div className="bg-brand-bg-light p-6 rounded-full border border-brand-border-color mb-6">
              <CreditCard size={48} className="text-brand-primary" />
            </div>

            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              No active virtual cards
            </h2>
            <p className="text-gray-500 mb-8 max-w-sm text-sm">
              Generate a secure virtual card for your online subscriptions and
              safe shopping with instant freeze capabilities.
            </p>

            {/* Main Center Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 active:scale-95 cursor-pointer"
            >
              <Zap size={18} fill="currentColor" />
              Create Your First Card
            </button>
          </div>
        )}
      </section>

      {/* 2) Recent Transactions */}
      <section className="mt-16">
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-inner">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 leading-tight">
                Recent Transactions
              </h2>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 active:scale-95 cursor-pointer">
            View More
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className={TH_CLASSES}>Type</th>
                  <th className={TH_CLASSES}>Transaction ID</th>
                  <th className={TH_CLASSES}>Request Amount</th>
                  <th className={TH_CLASSES}>Fees & Charges</th>
                  <th className={TH_CLASSES}>Total Amount</th>
                  <th className={TH_CLASSES}>Status</th>
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
                    <td className={`${TD_CLASSES} font-mono text-[11px]`}>
                      {tx.transactionId}
                    </td>
                    <td className={TD_CLASSES}>{tx.requestAmount}</td>
                    <td className={TD_CLASSES}>{tx.fees}</td>
                    <td
                      className={`${TD_CLASSES} font-black text-brand-primary`}
                    >
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <CreditCard className="text-brand-primary" size={24} />
                Create Virtual Card
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
                    1. Personal Information
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter First Name"
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter Last Name"
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Email Address"
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        Date Of Birth*
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
                    2. Identity Verification
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Identity Type Listbox */}
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        Identity Type*
                      </label>
                      <Listbox
                        value={formData.identityType}
                        onChange={(val) => setFormData((prev) => ({ ...prev, identityType: val }))}
                      >
                        <div className="relative">
                          <ListboxButton className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white focus:border-brand-primary focus:outline-none transition-all text-left cursor-pointer text-sm font-bold text-gray-700">
                            <span>{formData.identityType}</span>
                            <ChevronDown size={16} className="text-gray-400" />
                          </ListboxButton>
                          <ListboxOptions className="absolute z-[100] mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                            {identityTypes.map((type) => (
                              <ListboxOption
                                key={type}
                                value={type}
                                className={({ active, selected }) =>
                                  `relative cursor-pointer select-none py-2.5 px-4 text-sm ${
                                    active
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
                        Identity Number*
                      </label>
                      <input
                        type="text"
                        name="identityNumber"
                        value={formData.identityNumber}
                        onChange={handleInputChange}
                        placeholder="Enter Identity Number"
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700 font-mono"
                      />
                    </div>
                  </div>

                  {/* Image uploads block */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        ID Card Image (Front Side)*
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
                          {filePreviews.idFront || "Upload Front Side"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        ID Card Image (Back Side)*
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
                          {filePreviews.idBack || "Upload Back Side"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        Your Photo*
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
                          {filePreviews.yourPhoto || "Upload Your Photo"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ─── 3) Address Details ─── */}
                <div className="space-y-4 pt-4">
                  <span className="block text-xs font-bold text-brand-primary uppercase tracking-wider pb-2 border-b border-gray-50">
                    3. Address Information
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        House Number*
                      </label>
                      <input
                        type="text"
                        name="houseNumber"
                        value={formData.houseNumber}
                        onChange={handleInputChange}
                        placeholder="Enter House Number"
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>

                    {/* Country Listbox dropdown */}
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        Country*
                      </label>
                      <Listbox
                        value={formData.country}
                        onChange={(val) => setFormData((prev) => ({ ...prev, country: val }))}
                      >
                        <div className="relative">
                          <ListboxButton className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white focus:border-brand-primary focus:outline-none transition-all text-left cursor-pointer text-sm font-bold text-gray-700">
                            <span>{formData.country}</span>
                            <ChevronDown size={16} className="text-gray-400" />
                          </ListboxButton>
                          <ListboxOptions className="absolute z-[100] mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                            {countriesList.map((country) => (
                              <ListboxOption
                                key={country}
                                value={country}
                                className={({ active, selected }) =>
                                  `relative cursor-pointer select-none py-2.5 px-4 text-sm ${
                                    active
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
                        City*
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter City"
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        State*
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Enter State"
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">
                        Zip Code*
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="Enter Code"
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary font-bold text-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Address*
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter Full Residential Address"
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
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
