import { Camera, Mail, MapPin, Phone, Shield, User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-brand-navy tracking-tight">Account Profile</h1>
        <p className="text-gray-500 mt-2">Manage your personal information and account preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="w-full h-full rounded-full bg-gray-100 border-4 border-white shadow-md flex items-center justify-center text-gray-400 overflow-hidden">
                <User size={64} />
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center border-4 border-white shadow-lg hover:scale-110 transition-transform">
                <Camera size={18} />
              </button>
            </div>
            <h2 className="text-xl font-black text-brand-navy">John Doe</h2>
            <p className="text-sm text-gray-500 mb-6">john@example.com</p>
            
            <div className="flex items-center justify-center gap-2 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-full w-fit mx-auto">
              <Shield size={12} />
              Verified Account
            </div>
          </div>

          <div className="bg-[#0b1727] text-white rounded-[2.5rem] p-8 shadow-xl">
            <h3 className="font-bold mb-4">Account Security</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">2FA Status</span>
                <span className="text-[10px] font-bold bg-red-500/20 text-red-500 px-2 py-1 rounded">Disabled</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Identity (KYC)</span>
                <span className="text-[10px] font-bold bg-brand-primary/20 text-brand-primary px-2 py-1 rounded">Level 2 Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 md:p-12">
            <h3 className="text-xl font-bold text-brand-navy mb-8">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" defaultValue="John Doe" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="email" defaultValue="john@example.com" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" defaultValue="+1 234 567 890" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Address</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" defaultValue="123 Silicon Valley, CA" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-end">
              <button className="bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-primary-hover transition-all shadow-lg shadow-brand-primary/20">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
