import { AppStoreIcon, GooglePlayIcon } from "@/components/ui/StoreButtonIcon";
import Image from "next/image";

export default function AppDownloadSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 flex justify-center md:justify-end">
            <Image
              src="/images/Download-App.webp"
              alt="Remitium Mobile App"
              width={500}
              height={600}
              className="max-w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-64 bg-emerald-50 rounded-full -z-10 blur-3xl opacity-50"></div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
              Download the App
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b1727] leading-tight mb-6">
              Access Remitium
              <br />
              Anytime, Anywhere
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              Send money, manage your wallet, and track transactions on the go.
              Get the Remitium app today!
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <AppStoreIcon />
            <GooglePlayIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
