"use client";

import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* ── LEFT COLUMN: INFO & BRANDING ── */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-badge-bg border border-brand-badge-border text-brand-badge-text text-sm font-medium px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                Reach Out
              </div>
              <h1 className="text-5xl font-black leading-tight mb-6">
                Let&apos;s build <br />
                <span className="text-brand-primary">something</span> <br />
                <span className="underline decoration-brand-primary/90 underline-offset-8">
                  together.
                </span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed">
                Have a specific inquiry or just want to say hi? We’d love to
                hear from you.
              </p>
            </div>

            {/* Status Card: Open Time */}
            <div className="relative overflow-hidden bg-brand-navy rounded-3xl p-8 text-white shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
                    <Clock className="w-4 h-4 text-brand-navy" />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-wider">
                    Business Hours
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mon - Sat</h3>
                <p className="text-brand-primary text-lg font-medium">
                  10.00AM — 05.30PM
                </p>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl" />
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-6">
              <ContactLink
                icon={<Mail className="w-5 h-5" />}
                label="Email Support"
                value="support@remitium.com"
                href="mailto:support@remitium.com"
              />
              <ContactLink
                icon={<Phone className="w-5 h-5" />}
                label="Call Center"
                value="+1 (234) 567-890"
                href="tel:+1234567890"
              />
              <ContactLink
                icon={<MapPin className="w-5 h-5" />}
                label="Headquarters"
                value="London, UK EC1A 1BB"
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN: INTERACTIVE FORM ── */}
          <div className="lg:w-2/3">
            <div className="bg-brand-bg-light rounded-[3rem] p-8 md:p-16 border border-slate-100">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <FloatingInput
                    label="Your Name"
                    placeholder="Jane Doe"
                    type="text"
                  />
                  <FloatingInput
                    label="Email Address"
                    placeholder="jane@example.com"
                    type="email"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    What can we help you with?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["General", "Technical", "Billing", "Partnership"].map(
                      (tag) => (
                        <button
                          key={tag}
                          type="button"
                          className="px-6 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold hover:border-brand-primary hover:text-brand-primary transition-all"
                        >
                          {tag}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-slate-300 py-4 focus:outline-none focus:border-brand-primary transition-colors resize-none text-lg"
                  />
                </div>

                <button className="group flex items-center gap-4 bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary-hover transition-all shadow-xl shadow-brand-primary/20">
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for Quick Links
function ContactLink({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div className="w-12 h-12 rounded-2xl bg-brand-bg-light flex items-center justify-center text-slate-400 group-hover:bg-brand-badge-bg group-hover:text-brand-primary transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {label}
        </p>
        <p className="text-slate-900 font-bold">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

// Sub-component for Inputs
function FloatingInput({ label, placeholder, type }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-slate-300 py-4 focus:outline-none focus:border-brand-primary transition-colors text-lg"
      />
    </div>
  );
}
