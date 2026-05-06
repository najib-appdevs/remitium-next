import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; // For the email icon
import { MdChevronRight } from "react-icons/md"; // For the menu arrows

export default function Footer() {
  return (
    <footer className="bg-[#0b1727] text-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* About Section */}
        <div className="md:col-span-4">
          <h3 className="text-2xl font-bold mb-6">About</h3>
          <p className="text-gray-300 mb-8 leading-relaxed text-[15px]">
            Remitium is your trusted solution for secure and seamless global
            money transfers. From bank deposits to cash pickups and mobile
            wallet options, we make sending and receiving money effortless.
          </p>
          <div className="flex gap-5">
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>

        {/* Explore Section */}
        <div className="md:col-span-3">
          <h3 className="text-2xl font-bold mb-6">Explore</h3>
          <ul className="space-y-4 text-gray-300">
            {["Services", "Web journal", "About Us", "Contact"].map((item) => (
              <li
                key={item}
                className="flex items-center gap-1 group cursor-pointer"
              >
                <MdChevronRight
                  size={18}
                  className="text-gray-500 group-hover:text-white"
                />
                <Link
                  href="#"
                  className="hover:text-white transition-colors text-[15px]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="md:col-span-5">
          <h3 className="text-2xl font-bold mb-6">
            Stay Updated with Remitium
          </h3>
          <p className="text-gray-300 mb-8 text-[15px]">
            Sign up for our newsletter to receive the latest updates, exclusive
            offers, and tips on how to make the most of your Remitium
            experience. Stay connected and never miss out on the news that
            matters to you!
          </p>

          {/* Pill-shaped Input Wrapper */}
          <div className="relative flex items-center w-full bg-[#1e293b]/50 rounded-full p-1 border border-gray-700/30">
            <div className="pl-4 text-gray-500">
              <HiOutlineMail size={22} />
            </div>
            <input
              type="email"
              placeholder="Enter Email..."
              className="bg-transparent text-white px-3 py-3 w-full focus:outline-none text-sm placeholder:text-gray-400"
            />
            <button className="bg-[#00c881] text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-[#00a66b] transition-all mr-1">
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-[14px] text-gray-300">
        <p>
          © Copyright 2026, All Rights Reserved By
          <span className="ml-1 font-bold text-gray-200">Remitium</span>
        </p>

        {/* Logo Section */}
        <div className="my-8 md:my-0 flex items-center gap-2">
          <Image
            src="/logo/logo.webp"
            alt="Remitium Logo"
            width={140}
            height={100}
            className="object-contain"
          />
        </div>

        <div className="flex gap-4 items-center">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="text-gray-700">/</span>
          <Link href="#" className="hover:text-white transition-colors">
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
