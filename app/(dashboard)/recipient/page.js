"use client";
import { Edit2, Trash2, X } from "lucide-react";
import { useState } from "react";

export default function RecipientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recipients = [
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
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    type: "Remitium To Remitium",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    };

    setRecipients((prev) => [newRecipient, ...prev]);
    setIsModalOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      type: "Remitium To Remitium",
      email: "",
      phone: "",
      country: "",
      city: "",
      state: "",
      zip: "",
      address: "",
    });
  };

  return (
    <div className="space-y-8 relative">
      <div>
        <h1 className="text-2xl font-bold text-gray-700">Recipients</h1>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-brand-navy text-lg">
            Recent Recipients
          </h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer bg-brand-primary text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-brand-primary-hover transition-all"
          >
            + Add Recipient
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50/50 text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Receiver & Type</th>
                <th className="px-4 py-4">Email</th>
                <th className="px-4 py-4">Phone</th>
                <th className="px-4 py-4">Country</th>
                <th className="px-4 py-4">City/State</th>
                <th className="px-4 py-4">Zip</th>
                <th className="px-4 py-4">Address</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recipients.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50/30 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="font-bold text-brand-navy text-sm whitespace-nowrap">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-brand-primary font-bold uppercase">
                      {item.type}
                    </div>
                  </td>
                  <td className="px-4 py-5 text-sm text-gray-600">
                    {item.email}
                  </td>
                  <td className="px-4 py-5 text-sm text-gray-600">
                    {item.phone}
                  </td>
                  <td className="px-4 py-5 text-sm text-gray-600">
                    {item.country}
                  </td>
                  <td className="px-4 py-5 text-sm text-gray-600">
                    <div className="whitespace-nowrap">{item.city}</div>
                  </td>
                  <td className="px-4 py-5 text-sm text-gray-600">
                    {item.zip}
                  </td>
                  <td className="px-4 py-5 text-sm text-gray-600 italic truncate max-w-[150px]">
                    {item.address}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="cursor-pointer p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="cursor-pointer p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {recipients.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No recipients found. Click &quot;+ Add Recipient&quot; to
                    add one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Recipient Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0">
              <h2 className="text-xl font-bold text-brand-navy">
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
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
                    Transaction Type *
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-1 focus:ring-brand-primary outline-none appearance-none bg-gray-50/50 cursor-pointer"
                  >
                    <option value="Remitium To Remitium">
                      Remitium To Remitium
                    </option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Mobile Money">Mobile Money</option>
                    <option value="Cash Pickup">Cash Pickup</option>
                  </select>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Country*
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Enter Country..."
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Bank Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Bank Name..."
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Bank Account Number*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Number..."
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Bank Routing Number*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Number..."
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter Name..."
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Middle Name{" "}
                      <span className="text-emerald-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name..."
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter Name..."
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Email..."
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
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
                      placeholder="Enter City..."
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      State*
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Enter State..."
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Zip Code*
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="Enter Code..."
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Number..."
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Address*
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter Address..."
                    required
                    className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#00B67A] text-white font-bold rounded-xl hover:bg-[#009e69] transition-all mt-4 shadow-lg shadow-[#00B67A]/30 cursor-pointer"
                >
                  Add Recipient
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
