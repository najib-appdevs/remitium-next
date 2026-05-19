"use client";

import { ClipboardClock, Edit2, Trash2, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

const transactionTypes = [
  "Remitium To Remitium",
  "Bank Transfer",
  "Mobile Money",
  "Cash Pickup",
];

const countriesList = [
  "Bangladesh",
  "United States",
  "United Kingdom",
];

const TH_CLASSES =
  "px-6 py-4 text-xs font-bold text-gray-400 uppercase whitespace-nowrap text-left border-b border-gray-100";
const TD_CLASSES =
  "px-6 py-5 whitespace-nowrap text-sm text-gray-700 border-b border-gray-50";

export default function RecipientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  const [recipientsList, setRecipientsList] = useState([
    {
      name: "App Devs4",
      type: "Remitium To Remitium",
      email: "user6@appdevs.net",
      country: "Bangladesh",
      phone: "454654654",
      city: "Dhaka, Bangladesh",
      state: "Dhaka, Bangladesh",
      zip: "1245",
      address: "Dhaka, Bangladesh",
    },
    {
      name: "Tech Nova Ltd",
      type: "Remitium To Remitium",
      email: "contact@technova.com",
      country: "Bangladesh",
      phone: "01711223344",
      city: "Chattogram, Bangladesh",
      state: "Chattogram, Bangladesh",
      zip: "4000",
      address: "Agrabad, Chattogram, Bangladesh",
    },
    {
      name: "Elton Amena",
      type: "Bank Transfer",
      email: "", // Will render as N/A in the table
      country: "Bangladesh",
      phone: "5874521",
      city: "Dhaka",
      state: "Dhaka",
      zip: "1212",
      address: "Mirpur, Dhaka, Bangladesh",
      bankName: "InstaPay Egypt",
      accountNumber: "58745214552",
      routingNumber: "02145785",
    },
    {
      name: "Skyline Solutions",
      type: "Remitium To Remitium",
      email: "hello@skylinebd.com",
      country: "Bangladesh",
      phone: "01899887766",
      city: "Khulna, Bangladesh",
      state: "Khulna, Bangladesh",
      zip: "9100",
      address: "Sonadanga, Khulna, Bangladesh",
    },
    {
      name: "NextGen Apps",
      type: "Remitium To Remitium",
      email: "support@nextgenapps.io",
      country: "Bangladesh",
      phone: "01922334455",
      city: "Sylhet, Bangladesh",
      state: "Sylhet, Bangladesh",
      zip: "3100",
      address: "Zindabazar, Sylhet, Bangladesh",
    },
    {
      name: "NextGen Apps",
      type: "Remitium To Remitium",
      email: "support@nextgenapps.io",
      country: "Bangladesh",
      phone: "01922334455",
      city: "Sylhet, Bangladesh",
      state: "Sylhet, Bangladesh",
      zip: "3100",
      address: "Zindabazar, Sylhet, Bangladesh",
    },
    {
      name: "NextGen Apps",
      type: "Remitium To Remitium",
      email: "support@nextgenapps.io",
      country: "Bangladesh",
      phone: "01922334455",
      city: "Sylhet, Bangladesh",
      state: "Sylhet, Bangladesh",
      zip: "3100",
      address: "Zindabazar, Sylhet, Bangladesh",
    },
    {
      name: "NextGen Apps",
      type: "Remitium To Remitium",
      email: "support@nextgenapps.io",
      country: "Bangladesh",
      phone: "01922334455",
      city: "Sylhet, Bangladesh",
      state: "Sylhet, Bangladesh",
      zip: "3100",
      address: "Zindabazar, Sylhet, Bangladesh",
    },
  ]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    type: "Remitium To Remitium",
    email: "",
    phone: "",
    country: "Bangladesh",
    city: "",
    state: "",
    zip: "",
    address: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    type: "Remitium To Remitium",
    email: "",
    phone: "",
    country: "Bangladesh",
    city: "",
    state: "",
    zip: "",
    address: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipient = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      type: formData.type,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      address: formData.address,
      bankName: formData.type === "Bank Transfer" ? formData.bankName : "",
      accountNumber: formData.type === "Bank Transfer" ? formData.accountNumber : "",
      routingNumber: formData.type === "Bank Transfer" ? formData.routingNumber : "",
    };

    setRecipientsList((prev) => [newRecipient, ...prev]);
    setIsModalOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      type: "Remitium To Remitium",
      email: "",
      phone: "",
      country: "Bangladesh",
      city: "",
      state: "",
      zip: "",
      address: "",
      bankName: "",
      accountNumber: "",
      routingNumber: "",
    });
  };

  const handleEditClick = (item, index) => {
    const nameParts = item.name.split(" ");
    let fName = "";
    let mName = "";
    let lName = "";

    if (nameParts.length >= 3) {
      fName = nameParts[0];
      mName = nameParts.slice(1, -1).join(" ");
      lName = nameParts[nameParts.length - 1];
    } else if (nameParts.length === 2) {
      fName = nameParts[0];
      lName = nameParts[1];
    } else {
      fName = item.name;
    }

    setSelectedRecipient({ ...item, index });
    setEditFormData({
      firstName: fName,
      middleName: mName,
      lastName: lName,
      type: item.type,
      email: item.email || "",
      phone: item.phone,
      country: item.country || "Bangladesh",
      city: item.city,
      state: item.state,
      zip: item.zip,
      address: item.address,
      bankName: item.bankName || "",
      accountNumber: item.accountNumber || "",
      routingNumber: item.routingNumber || "",
    });
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedName = `${editFormData.firstName} ${editFormData.middleName ? editFormData.middleName + ' ' : ''}${editFormData.lastName}`.trim().replace(/\s+/g, ' ');
    
    setRecipientsList((prev) =>
      prev.map((item, idx) =>
        idx === selectedRecipient.index
          ? {
              ...item,
              name: updatedName,
              type: editFormData.type,
              email: editFormData.email,
              country: editFormData.country,
              city: editFormData.city,
              state: editFormData.state,
              zip: editFormData.zip,
              phone: editFormData.phone,
              address: editFormData.address,
              bankName: editFormData.type === "Bank Transfer" ? editFormData.bankName : "",
              accountNumber: editFormData.type === "Bank Transfer" ? editFormData.accountNumber : "",
              routingNumber: editFormData.type === "Bank Transfer" ? editFormData.routingNumber : "",
            }
          : item
      )
    );
    setIsEditModalOpen(false);
    setSelectedRecipient(null);
  };

  const handleDeleteClick = (item, index) => {
    setSelectedRecipient({ ...item, index });
    setIsDeleteModalOpen(true);
  };

  const handleDeleteSubmit = () => {
    setRecipientsList((prev) =>
      prev.filter((_, idx) => idx !== selectedRecipient.index)
    );
    setIsDeleteModalOpen(false);
    setSelectedRecipient(null);
  };

  return (
    <div className="space-y-8 relative">
      <div>
        <h1 className="text-2xl font-bold text-gray-700">Recipients</h1>
      </div>

      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden w-full relative">
        {/* Card Header */}
        <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-emerald-50/20 to-teal-50/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-inner">
              <ClipboardClock size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 leading-tight">
                Recent Recipients
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer bg-[#10b981] text-white rounded-xl border-none px-5 py-2.5 text-[13px] font-semibold tracking-[0.2px] shadow-[0_4px_16px_rgba(16,185,129,0.18)] transition-[background,transform] duration-[180ms] hover:bg-[#059669] hover:-translate-y-px active:scale-[0.97]"
          >
            + Add Recipient
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="bg-gray-50/60">
              <tr>
                <th className={TH_CLASSES}>Receiver</th>
                <th className={TH_CLASSES}>Email</th>
                <th className={TH_CLASSES}>Country</th>
                <th className={TH_CLASSES}>Phone</th>
                <th className={TH_CLASSES}>City</th>
                <th className={TH_CLASSES}>State</th>
                <th className={TH_CLASSES}>Zip Code</th>
                <th className={TH_CLASSES}>Address</th>
                <th className={`${TH_CLASSES} text-right`}>Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recipientsList.map((item, index) => (
                <tr
                  key={index}
                  className="group hover:bg-emerald-50/10 transition-colors duration-100"
                >
                  <td className={TD_CLASSES}>
                    <div className="text-gray-800 font-bold group-hover:text-[#10b981] transition-colors leading-tight">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-bold uppercase mt-0.5">
                      {item.type === "Bank Transfer" && item.bankName
                        ? `Bank Transfer (${item.bankName} - A/C: ${item.accountNumber})`
                        : item.type}
                    </div>
                  </td>
                  <td className={TD_CLASSES}>
                    {item.email ? item.email : <span className="text-gray-400 font-medium">N/A</span>}
                  </td>
                  <td className={TD_CLASSES}>
                    {item.country}
                  </td>
                  <td className={`${TD_CLASSES} font-mono font-medium text-gray-600`}>
                    {item.phone}
                  </td>
                  <td className={TD_CLASSES}>
                    {item.city}
                  </td>
                  <td className={TD_CLASSES}>
                    {item.state}
                  </td>
                  <td className={TD_CLASSES}>
                    {item.zip}
                  </td>
                  <td className={`${TD_CLASSES} italic truncate max-w-[200px] text-gray-500 font-normal`} title={item.address}>
                    {item.address}
                  </td>
                  <td className={`${TD_CLASSES} text-right`}>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEditClick(item, index)}
                        className="cursor-pointer p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(item, index)}
                        className="cursor-pointer p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {recipientsList.length === 0 && (
                <tr>
                  <td
                    colSpan="9"
                    className="px-6 py-8 text-center text-gray-400 font-medium text-sm"
                  >
                    No recipients found. Click &quot;+ Add Recipient&quot; to add one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Recipient Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0">
              <h2 className="text-xl  text-gray-800">
                Create Recipient
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto custom-scrollbar">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Transaction Type */}
                <div>
                  <label className="block text-xs  text-gray-500 mb-2 uppercase tracking-wider">
                    Transaction Type *
                  </label>
                  <Listbox
                    value={formData.type}
                    onChange={(val) => setFormData((prev) => ({ ...prev, type: val }))}
                  >
                    <div className="relative">
                      <ListboxButton className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white focus:border-emerald-500 focus:outline-none transition-all text-left cursor-pointer text-sm  text-gray-700">
                        <span>{formData.type}</span>
                        <ChevronDown size={16} className="text-gray-400" />
                      </ListboxButton>
                      <ListboxOptions className="absolute z-[100] mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                        {transactionTypes.map((type) => (
                          <ListboxOption
                            key={type}
                            value={type}
                            className={({ active, selected }) =>
                              `relative cursor-pointer select-none py-2.5 px-4 text-sm ${
                                active
                                  ? "bg-emerald-50 text-[#10b981] "
                                  : selected
                                    ? "text-emerald-600  bg-emerald-50/50"
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

                {/* Country dropdown */}
                <div>
                  <label className="text-xs  text-gray-700 block mb-1">
                    Country*
                  </label>
                  <Listbox
                    value={formData.country}
                    onChange={(val) => setFormData((prev) => ({ ...prev, country: val }))}
                  >
                    <div className="relative">
                      <ListboxButton className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white focus:border-emerald-500 focus:outline-none transition-all text-left cursor-pointer text-sm  text-gray-700">
                        <span>{formData.country || "Select Country"}</span>
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
                                  ? "bg-emerald-50 text-[#10b981] "
                                  : selected
                                    ? "text-emerald-600  bg-emerald-50/50"
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

                {/* Bank Details section conditionally visible */}
                {formData.type === "Bank Transfer" && (
                  <div className="p-5 bg-emerald-50/30 border border-emerald-100 rounded-2xl space-y-4 animate-in slide-in-from-top-2 duration-200">
                    <span className="block text-xs  text-emerald-800 uppercase tracking-wider">
                      Bank Details
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs  text-gray-700 block mb-1">
                          Bank Name*
                        </label>
                        <input
                          type="text"
                          name="bankName"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          placeholder="Enter Bank Name"
                          required
                          className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                        />
                      </div>
                      <div>
                        <label className="text-xs  text-gray-700 block mb-1">
                          Bank Account Number*
                        </label>
                        <input
                          type="text"
                          name="accountNumber"
                          value={formData.accountNumber}
                          onChange={handleInputChange}
                          placeholder="Enter Number"
                          required
                          className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700 font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-xs  text-gray-700 block mb-1">
                          Bank Routing Number*
                        </label>
                        <input
                          type="text"
                          name="routingNumber"
                          value={formData.routingNumber}
                          onChange={handleInputChange}
                          placeholder="Enter Routing"
                          required
                          className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      Middle Name{" "}
                      <span className="text-emerald-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Email"
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      City*
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter City"
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      State*
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Enter State"
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      Zip Code*
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="Enter Code"
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Number"
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700 font-mono"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label className="text-xs  text-gray-700 block mb-1">
                      Address*
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter Address"
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#10b981] hover:bg-[#059669] text-white  rounded-xl transition-all mt-4 shadow-lg shadow-[#10b981]/20 cursor-pointer"
                >
                  Add Recipient
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Recipient Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0">
              <h2 className="text-xl  text-gray-800">
                Recipient Edit
              </h2>
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setSelectedRecipient(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto custom-scrollbar">
              <form className="space-y-6" onSubmit={handleEditSubmit}>
                {/* Transaction Type */}
                <div>
                  <label className="block text-xs  text-gray-500 mb-2 uppercase tracking-wider">
                    Transaction Type *
                  </label>
                  <Listbox
                    value={editFormData.type}
                    onChange={(val) => setEditFormData((prev) => ({ ...prev, type: val }))}
                  >
                    <div className="relative">
                      <ListboxButton className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white focus:border-emerald-500 focus:outline-none transition-all text-left cursor-pointer text-sm  text-gray-700">
                        <span>{editFormData.type}</span>
                        <ChevronDown size={16} className="text-gray-400" />
                      </ListboxButton>
                      <ListboxOptions className="absolute z-[100] mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                        {transactionTypes.map((type) => (
                          <ListboxOption
                            key={type}
                            value={type}
                            className={({ active, selected }) =>
                              `relative cursor-pointer select-none py-2.5 px-4 text-sm ${
                                active
                                  ? "bg-emerald-50 text-[#10b981] "
                                  : selected
                                    ? "text-emerald-600  bg-emerald-50/50"
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

                {/* Country Listbox dropdown */}
                <div>
                  <label className="text-xs  text-gray-700 block mb-1">
                    Country*
                  </label>
                  <Listbox
                    value={editFormData.country}
                    onChange={(val) => setEditFormData((prev) => ({ ...prev, country: val }))}
                  >
                    <div className="relative">
                      <ListboxButton className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white focus:border-emerald-500 focus:outline-none transition-all text-left cursor-pointer text-sm  text-gray-700">
                        <span>{editFormData.country || "Select Country"}</span>
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
                                  ? "bg-emerald-50 text-[#10b981] "
                                  : selected
                                    ? "text-emerald-600  bg-emerald-50/50"
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

                {/* Bank Details section conditionally visible */}
                {editFormData.type === "Bank Transfer" && (
                  <div className="p-5 bg-emerald-50/30 border border-emerald-100 rounded-2xl space-y-4 animate-in slide-in-from-top-2 duration-200">
                    <span className="block text-xs  text-emerald-800 uppercase tracking-wider">
                      Bank Details
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs  text-gray-700 block mb-1">
                          Bank Name*
                        </label>
                        <input
                          type="text"
                          name="bankName"
                          value={editFormData.bankName}
                          onChange={handleEditInputChange}
                          placeholder="Enter Bank Name"
                          required
                          className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                        />
                      </div>
                      <div>
                        <label className="text-xs  text-gray-700 block mb-1">
                          Bank Account Number*
                        </label>
                        <input
                          type="text"
                          name="accountNumber"
                          value={editFormData.accountNumber}
                          onChange={handleEditInputChange}
                          placeholder="Enter Number"
                          required
                          className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700 font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-xs  text-gray-700 block mb-1">
                          Bank Routing Number*
                        </label>
                        <input
                          type="text"
                          name="routingNumber"
                          value={editFormData.routingNumber}
                          onChange={handleEditInputChange}
                          placeholder="Enter Routing"
                          required
                          className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Receiver Info Section */}
                <div className="pt-2 border-t border-gray-50">
                  <span className="block text-xs  text-emerald-700 uppercase tracking-wider mb-4">
                    Receiver details
                  </span>

                  {/* Name Fields Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs  text-gray-700 block mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={editFormData.firstName}
                        onChange={handleEditInputChange}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs  text-gray-700 block mb-1">
                        Middle Name <span className="text-emerald-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="middleName"
                        value={editFormData.middleName}
                        onChange={handleEditInputChange}
                        placeholder="Enter Middle Name"
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs  text-gray-700 block mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={editFormData.lastName}
                        onChange={handleEditInputChange}
                        required
                        className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="text-xs  text-gray-700 block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditInputChange}
                    placeholder="Enter Email"
                    className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                  />
                </div>

                {/* City, State, Zip Code grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      City*
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={editFormData.city}
                      onChange={handleEditInputChange}
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      State*
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={editFormData.state}
                      onChange={handleEditInputChange}
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      Zip Code*
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={editFormData.zip}
                      onChange={handleEditInputChange}
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                </div>

                {/* Phone & Address grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleEditInputChange}
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700 font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs  text-gray-700 block mb-1">
                      Address*
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={editFormData.address}
                      onChange={handleEditInputChange}
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500  text-gray-700"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#10b981] hover:bg-[#059669] text-white  rounded-xl transition-all mt-4 shadow-lg shadow-[#10b981]/20 cursor-pointer"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl border border-gray-100 p-8 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-5">
              <Trash2 size={28} />
            </div>
            <h3 className="text-lg  text-gray-800 mb-2">Delete Recipient</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Are you sure to delete this recipient?
            </p>
            <div className="flex w-full gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setSelectedRecipient(null);
                }}
                className="flex-1 py-3 border border-gray-200 rounded-xl text-gray-500 text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                No
              </button>
              <button
                type="button"
                onClick={handleDeleteSubmit}
                className="flex-1 py-3 bg-red-500 text-white rounded-xl text-sm font-semibold hover:bg-red-600 transition-all shadow-md shadow-red-500/10 cursor-pointer"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
