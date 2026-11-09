"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Send, 
  Check, 
  Copy,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Construct real mailto link for reliable client-side dispatch
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Project Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus("success");
    }, 600);
  };

  const contactMethods = [
    {
      title: "Direct Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      accent: "text-amber-400",
      action: () => handleCopy(personalInfo.email, "email"),
      copied: copiedEmail,
      label: "Copy Email",
    },
    {
      title: "Direct Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`,
      icon: Phone,
      accent: "text-emerald-400",
      action: () => handleCopy(personalInfo.phone, "phone"),
      copied: copiedPhone,
      label: "Copy Phone",
    },
    {
      title: "WhatsApp Direct",
      value: "Chat on WhatsApp (+880 1622-536026)",
      href: personalInfo.whatsapp,
      icon: MessageSquare,
      accent: "text-emerald-400",
      isExternal: true,
      label: "Start Chat",
    },
    {
      title: "Current Location",
      value: personalInfo.location,
      icon: MapPin,
      accent: "text-amber-400",
      label: "Bangladesh",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-white/[0.08] relative overflow-x-clip bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
        
        {/* Unified Section Header */}
        <div className="space-y-4 mb-16 text-center sm:text-left w-full max-w-full box-border">
          <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-medium text-amber-400 bg-amber-950/40 border border-amber-500/30 backdrop-blur-sm [overflow-wrap:anywhere]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span className="uppercase tracking-[0.14em] sm:tracking-widest break-words">GET IN TOUCH</span>
          </div>
          <h2 className="text-[clamp(1.9rem,6.5vw,3rem)] font-black text-white tracking-tight leading-tight [overflow-wrap:anywhere] break-words">
            Let's Build Something Reliable
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed [overflow-wrap:anywhere]">
            Have a web development project, technical consultation, or training inquiry? Reach out directly via email, WhatsApp, or the message form.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Direct Cards + Interactive Message Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Methods (Email, Phone, WhatsApp, Location) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF37] px-1 mb-2">
              Direct Channels
            </h3>

            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="p-5 rounded-2xl bg-[#0B1120] border border-white/[0.12] hover:border-amber-400/40 transition-all duration-300 flex items-center justify-between group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5 truncate">
                    <div className="w-11 h-11 rounded-xl bg-[#151D30] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${method.accent}`} />
                    </div>
                    <div className="truncate">
                      <p className="text-xs text-slate-400 font-mono">
                        {method.title}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.isExternal ? "_blank" : undefined}
                          rel={method.isExternal ? "noopener noreferrer" : undefined}
                          className="text-sm font-semibold text-white hover:text-amber-300 transition-colors truncate block"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-slate-200 truncate">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Quick Action Button */}
                  {method.action ? (
                    <button
                      onClick={method.action}
                      type="button"
                      className="p-2.5 rounded-xl bg-[#151D30] hover:bg-[#1E293B] text-slate-400 hover:text-white transition-colors shrink-0 ml-2 border border-white/5"
                      title={method.label}
                      aria-label={method.label}
                    >
                      {method.copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  ) : method.href ? (
                    <a
                      href={method.href}
                      target={method.isExternal ? "_blank" : undefined}
                      rel={method.isExternal ? "noopener noreferrer" : undefined}
                      className="p-2.5 rounded-xl bg-[#151D30] hover:bg-[#1E293B] text-slate-400 hover:text-white transition-colors shrink-0 ml-2 border border-white/5"
                      title={method.label}
                      aria-label={method.label}
                    >
                      <ArrowUpRight className="w-4 h-4 text-amber-400" />
                    </a>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0B1120] border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <h3 className="text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                <span>Send a Direct Message</span>
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to quickly dispatch an email inquiry regarding software development or training.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Hasan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#151D30] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. tanvir@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#151D30] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Web Development Inquiry, IT Training, etc."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#151D30] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your requirements, goals, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#151D30] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400/60 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#D4AF37] hover:bg-[#F3E5AB] text-black transition-all duration-300 shadow-md hover:shadow-amber-500/20 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === "sending" ? "Opening Mail..." : "Send Message"}</span>
                  </button>

                  {status === "success" && (
                    <p className="text-xs text-emerald-400 flex items-center gap-1.5 font-mono">
                      <Check className="w-4 h-4" />
                      <span>Email client launched with your message!</span>
                    </p>
                  )}
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
