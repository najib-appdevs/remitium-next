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
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { showToast } from '@/lib/toast';
import { profileService } from '@/lib/services/api';
import { useRouter } from "next/navigation";

const defaultImage = "/images/profile-default.webp";

export default function ProfilePage() {
  const t = useTranslations("Profile");
  const router = useRouter();

  const [active, setActive] = useState("profile");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [userData, setUserData] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Profile Form
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    mobile_code: "",
    mobile: "",
    state: "",
    city: "",
    zip_code: "",
    address: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Password Form
  const [passwordData, setPasswordData] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
  });

  const [showPass, setShowPass] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  // Fetch Profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await profileService.getProfile();
        
        if (response.data?.type === "success" && response.data?.data) {
          const apiData = response.data.data;
          const user = apiData.user_info || {};

          setUserData(user);
          setCountries(apiData.countries || []);

          setFormData({
            firstname: user.firstname || "",
            lastname: user.lastname || "",
            country: user.country || "",
            mobile_code: user.mobile_code || "",
            mobile: user.mobile || "",
            state: user.state || "",
            city: user.city || "",
            zip_code: user.zip_code || "",
            address: user.address || "",
          });

          if (user.country && apiData.countries?.length) {
            const current = apiData.countries.find(c => c.name === user.country);
            if (current) {
              setSelectedCountry({
                name: current.name,
                phoneCode: current.mobile_code,
              });
            }
          }
        }
      } catch (error) {
        showToast.error("Failed to load profile information");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => {
      const updated = { ...prev, [name]: value };
      // Real-time password match validation
      if (name === "password" || name === "password_confirmation") {
        const newPass = name === "password" ? value : prev.password;
        const confirmPass = name === "password_confirmation" ? value : prev.password_confirmation;
        if (confirmPass && newPass !== confirmPass) {
          setPasswordMismatch(true);
        } else {
          setPasswordMismatch(false);
        }
      }
      return updated;
    });
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setFormData(prev => ({
      ...prev,
      country: country.name,
      mobile_code: country.phoneCode
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Update Profile
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const updateFormData = new FormData();
      Object.keys(formData).forEach(key => {
        updateFormData.append(key, formData[key]);
      });
      if (imageFile) updateFormData.append('image', imageFile);

      const response = await profileService.updateProfile(updateFormData);

      showToast.success(
        response.data?.message?.success?.[0] || "Profile updated successfully!"
      );
      window.location.reload();
    } catch (error) {
      const errorMsg = error.response?.data?.message?.error?.[0] || "Failed to update profile";
      showToast.error(errorMsg);
    } finally {
      setUpdating(false);
    }
  };

  // Update Password
  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (passwordData.password !== passwordData.password_confirmation) {
      showToast.error("Passwords do not match");
      return;
    }

    setUpdating(true);
    try {
      const form = new FormData();
      form.append("current_password", passwordData.current_password);
      form.append("password", passwordData.password);
      form.append("password_confirmation", passwordData.password_confirmation);

      const response = await profileService.updatePassword(form);

      showToast.success(
        response.data?.message?.success?.[0] || "Password updated successfully!"
      );

      setPasswordData({
        current_password: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error) {
      const errorMsg = error.response?.data?.message?.error?.[0] || "Failed to update password";
      showToast.error(errorMsg);
    } finally {
      setUpdating(false);
    }
  };

  // Delete Account
  const handleDeleteProfile = async () => {
    setDeleting(true);
    try {
      const response = await profileService.deleteProfile();
      showToast.success(
        response.data?.message?.success?.[0] || "Account deleted successfully"
      );
      router.push("/login");
    } catch (error) {
      const errorMsg = error.response?.data?.message?.error?.[0] || "Failed to delete account";
      showToast.error(errorMsg);
    } finally {
      setDeleting(false);
      setShowDeleteModal(false);
    }
  };

  const getImageUrl = () => {
    if (previewImage) return previewImage;
    if (!userData?.image) return defaultImage;
    const paths = userData.image_paths || {};
    return `${paths.base_url || ''}${paths.path_location || ''}/${userData.image}`;
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-[400px]">Loading profile...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl shadow-emerald-900/5 bg-white border border-gray-100 min-h-[600px]">
      {/* Sidebar */}
      <aside className="w-full md:w-72 flex-shrink-0 flex flex-col py-8 bg-[#0a2e1c]">
        <div className="flex flex-col items-center text-center px-6 mb-10">
          <div className="relative group mb-4">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-[#1a5c38] shadow-lg">
              <Image
                src={getImageUrl()}
                alt="Profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <label className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-2xl">
              <Upload size={20} className="text-white" />
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          </div>
          <h2 className="text-lg font-semibold text-white tracking-tight">{userData?.username}</h2>
          <p className="text-xs font-medium text-emerald-400/80">{userData?.email}</p>
        </div>

        <nav className="flex flex-col gap-2 px-4">
          <SbBtn icon={<User size={19} />} label={t("profileSettingsTab")} active={active === "profile"} onClick={() => setActive("profile")} />
          <SbBtn icon={<Lock size={19} />} label={t("securityPasswordTab")} active={active === "password"} onClick={() => setActive("password")} />
        </nav>

        <div className="mx-6 my-6 h-px bg-emerald-900/50" />

        <div className="mt-auto px-4">
          <SbBtn icon={<Trash2 size={19} />} label={t("deleteAccountTab")} danger onClick={() => setShowDeleteModal(true)} />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-50/30">
        <div className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              {active === "profile" ? t("accountSettingsHeading") : t("securitySettingsHeading")}
            </h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-10">
          {/* Profile Tab */}
          {active === "profile" && (
            <form onSubmit={handleUpdateProfile} className="max-w-3xl">
              <PanelLabel>{t("personalInfoLabel")}</PanelLabel>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Field label={t("firstNameField")}>
                  <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} required className={inp} />
                </Field>
                <Field label={t("lastNameField")}>
                  <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} required className={inp} />
                </Field>

                <Field label={t("countryField")}>
                  <Listbox value={selectedCountry} onChange={handleCountryChange}>
                    <div className="relative">
                      <ListboxButton className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 rounded-xl bg-white border border-gray-200 focus:border-emerald-500 focus:outline-none transition-all text-start cursor-pointer">
                        <span>{selectedCountry?.name || "Select Country"}</span>
                        <ChevronDown size={16} className="text-gray-400" />
                      </ListboxButton>
                      <ListboxOptions className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1">
                        {countries.map((country) => (
                          <ListboxOption
                            key={country.id}
                            value={{ name: country.name, phoneCode: country.mobile_code }}
                            className={({ active }) => `py-2.5 px-4 text-sm cursor-pointer ${active ? "bg-emerald-50 text-emerald-600" : "text-gray-700"}`}
                          >
                            {country.name}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>
                </Field>

                <Field label={t("phoneField")}>
                  <div className="flex rounded-xl overflow-hidden border border-gray-200 focus-within:border-emerald-500">
                    <span className="px-4 flex items-center bg-gray-100 text-gray-600 text-sm font-semibold border-e border-gray-200">
                      {selectedCountry?.phoneCode || formData.mobile_code}
                    </span>
                    <input type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} required className="flex-1 px-4 py-3 text-sm outline-none bg-white" />
                  </div>
                </Field>

                <Field label={t("addressField")}>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} required className={inp} />
                </Field>
                <Field label={t("cityField")}>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} required className={inp} />
                </Field>
                <Field label={t("stateField")}>
                  <input type="text" name="state" value={formData.state} onChange={handleInputChange} required className={inp} />
                </Field>
                <Field label={t("zipField")}>
                  <input type="text" name="zip_code" value={formData.zip_code} onChange={handleInputChange} required className={inp} />
                </Field>
              </div>

              <div className="mt-10 flex justify-center">
                <button type="submit" disabled={updating} className="cursor-pointer px-10 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-semibold shadow-lg transition-all">
                  {updating ? "Updating..." : t("saveBtn")}
                </button>
              </div>
            </form>
          )}

          {/* Password Tab */}
          {active === "password" && (
            <form onSubmit={handleUpdatePassword} className="max-w-2xl">
              <PanelLabel>{t("securityInfoLabel")}</PanelLabel>
              <div className="flex flex-col gap-6 mt-6">
                <PwField label={t("currentPasswordLabel")} name="current_password" value={passwordData.current_password} onChange={handlePasswordChange} show={showPass.current} toggle={() => setShowPass(p => ({...p, current: !p.current}))} required minLength={6} />
                <PwField label={t("newPasswordLabel")} name="password" value={passwordData.password} onChange={handlePasswordChange} show={showPass.new} toggle={() => setShowPass(p => ({...p, new: !p.new}))} required minLength={6} />
                <PwField label={t("confirmPasswordLabel")} name="password_confirmation" value={passwordData.password_confirmation} onChange={handlePasswordChange} show={showPass.confirm} toggle={() => setShowPass(p => ({...p, confirm: !p.confirm}))} required minLength={6} error={passwordMismatch ? "Passwords do not match" : ""} />
              </div>
              <div className="mt-10 flex justify-center">
                <button type="submit" disabled={updating || passwordMismatch} className="cursor-pointer px-10 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white font-semibold shadow-lg transition-all">
                  {updating ? "Updating Password..." : t("updatePasswordBtn")}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-red-600">Delete Account</h3>
            <p className="mt-4 text-gray-600">This action is permanent and cannot be undone. All your data will be lost.</p>
            
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="cursor-pointer flex-1 py-3.5 rounded-xl border border-gray-300 font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteProfile}
                disabled={deleting}
                className="cursor-pointer flex-1 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium disabled:bg-red-400"
              >
                {deleting ? "Deleting..." : "Yes, Delete My Account"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===================== Helper Components ===================== */
const inp = "w-full px-4 py-3 text-sm text-gray-700 rounded-xl outline-none bg-white border border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-gray-400";

function SbBtn({ icon, label, active = false, danger = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 group relative cursor-pointer
        ${active ? "bg-emerald-500 text-white shadow-lg shadow-emerald-900/20" : danger ? "text-red-400 hover:bg-red-500/10" : "text-emerald-100/60 hover:text-white hover:bg-white/5"}`}
    >
      <span className={`${active ? "text-white" : danger ? "text-red-400" : "text-emerald-400"}`}>{icon}</span>
      {label}
    </button>
  );
}

function PanelLabel({ children }) {
  return (
    <div className="flex items-center gap-4">
      <p className="text-xs font-bold uppercase tracking-widest text-emerald-600/80 shrink-0">{children}</p>
      <div className="h-px w-full bg-gray-100" />
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] font-semibold text-gray-700 ms-1">{label}</label>
      {children}
    </div>
  );
}

function PwField({ label, name, value, onChange, show, toggle, required, minLength, error }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] font-semibold text-gray-700 ms-1">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          className={`${inp} pr-12 ${error ? "!border-red-400 !focus:border-red-500 !focus:ring-red-500/10" : ""}`}
        />
        <button type="button" onClick={toggle} className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500">
          {show ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500 font-medium ms-1 -mt-0.5">{error}</p>}
    </div>
  );
}