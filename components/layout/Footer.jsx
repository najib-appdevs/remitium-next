import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1727] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-lg font-bold mb-6">About</h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Remitium is your trusted partner for secure, fast, and affordable
            global money transfers. We are dedicated to making financial
            services accessible worldwide.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              F
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              T
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              I
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              L
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Explore</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-bold mb-6">Stay Updated with Remitium</h3>
          <p className="text-sm text-gray-400 mb-6">
            Sign up for our newsletter to receive the latest updates, exclusive
            offers, and tips on how to make the most of your money transfers.
            Stay informed, stay ahead!
          </p>
          <div className="flex bg-[#162536] rounded-md p-1">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent text-white px-4 py-2 w-full focus:outline-none text-sm"
            />
            <button className="bg-[#00c881] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#00a66b] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© Copyright 2024. All Rights Reserved by Remitium.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
