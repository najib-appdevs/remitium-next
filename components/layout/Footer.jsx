"use client";
import { Mail, MapPin, ArrowUpRight, Sparkles, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const NAV = {
  solutions: [
    { label: "AI Comparison", href: "#" },
    { label: "Top 7 Automation Tools", href: "#" },
    { label: "CRM for Law Firms", href: "#" },
  ],
  resources: [
    { label: "AI Consulting", href: "#" },
    { label: "200 AI Tools for Marketing", href: "#" },
    { label: "Open AI Agent Kit Intro", href: "#" },
  ],
  company: [
    { label: "About us", href: "#" },
    { label: "Schedule a meeting", href: "#" },
    { label: "Career", href: "#" },
    { label: "Medien / Presse", href: "#" },
  ],
};

function NavGroup({ title, links }) {
  return (
    <div className="group">
      <p className="text-[9px] font-black uppercase tracking-[0.45em] text-emerald-500 mb-5 flex items-center gap-2">
        <span className="block w-4 h-px bg-emerald-500" />
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group/link flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 text-sm"
            >
              <span className="w-0 group-hover/link:w-3 h-px bg-emerald-400 transition-all duration-300 ease-out" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 overflow-hidden">

      {/* ── Texture Layer ── */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px)",
        }}
      />

      {/* ── Glows ── */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/10 blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full bg-emerald-800/20 blur-[100px] z-0 pointer-events-none" />

      {/* ════════════════════════════════
          HERO STRIP — big headline row
      ════════════════════════════════ */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">

          {/* Left: wordmark + tagline */}
          <div className="flex-1 max-w-xl">
            <Image
              src="/logo/logo.webp"
              alt="Remitium"
              width={150}
              height={48}
              className="object-contain mb-8 brightness-0 invert"
            />
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Crafting the future of{" "}
              <em className="not-italic text-emerald-400">Global Liquidity.</em>
            </h2>
            <p className="mt-4 text-slate-400 text-base font-light max-w-sm">
              Seamless, AI-powered wealth movement — built for the world&apos;s next economy.
            </p>
          </div>

          {/* Right: newsletter pill */}
          <div className="w-full lg:w-auto lg:min-w-[360px]">
            <p className="text-[9px] font-black uppercase tracking-[0.45em] text-emerald-500 mb-4 flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Join the Revolution
            </p>
            <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1.5 focus-within:border-emerald-500/50 transition-colors">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 pl-5 pr-3 focus:outline-none"
              />
              <button className="shrink-0 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 transition-colors text-slate-950 text-xs font-black uppercase tracking-widest rounded-full px-5 py-3">
                Subscribe
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="mt-2.5 text-[9px] text-slate-600 uppercase tracking-widest pl-4">
              Exclusive insights · Weekly digest
            </p>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          MAIN GRID — nav + contact
      ════════════════════════════════ */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12">

          {/* Nav columns */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <NavGroup title="Solutions" links={NAV.solutions} />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <NavGroup title="Resources" links={NAV.resources} />
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <NavGroup title="Company" links={NAV.company} />
          </div>

          {/* Contact card — floated right */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 flex flex-col justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.45em] text-emerald-500 mb-5 flex items-center gap-2">
                <span className="block w-4 h-px bg-emerald-500" />
                Contact
              </p>
              <div className="space-y-5">
                <Link
                  href="mailto:hello@remitium.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
                    hello@remitium.com
                  </span>
                </Link>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-slate-500" />
                  </div>
                  <span className="text-sm text-slate-500">Berlin, Germany</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-10">
              {[
                { Icon: FaLinkedinIn, label: "LinkedIn" },
                { Icon: FaYoutube, label: "YouTube" },
                { Icon: FaInstagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          BOTTOM BAR — giant watermark + legal
      ════════════════════════════════ */}
      <div className="relative z-10 overflow-hidden">
        {/* Watermark word */}
        <p
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 text-[18vw] font-black text-transparent uppercase leading-none tracking-tighter select-none pointer-events-none"
          style={{ WebkitTextStroke: "1px rgba(16,185,129,0.07)" }}
        >
          REMITIUM
        </p>

        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
          <div className="text-center sm:text-left">
            <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
              © 2026 Remitium. Built with Excellence.
            </p>
            <p className="text-slate-700 text-[9px] uppercase tracking-widest mt-0.5">
              bakedwith GmbH · Berlin · Europe
            </p>
          </div>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Legal notice"].map((label) => (
              <Link
                key={label}
                href="#"
                className="group flex items-center gap-1 text-slate-600 hover:text-emerald-500 text-[10px] font-black uppercase tracking-widest transition-colors"
              >
                {label}
                <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative pb-20 overflow-hidden select-none pointer-events-none">
        <h2 className="text-[18vw] font-black text-white/[0.1] uppercase leading-none tracking-tighter text-center whitespace-nowrap">
          REMITIUM
        </h2>
      </div>
    </footer>
  );
}