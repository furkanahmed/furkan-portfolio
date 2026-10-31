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
  ArrowUpRight
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
    
    // Construct real mailto link as fallback submission
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
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
      accent: "text-sky-400",
      action: () => handleCopy(personalInfo.email, "email"),
      copied: copiedEmail,
      label: "Copy Email",
    },
    {
      title: "Phone Call",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`,
      icon: Phone,
      accent: "text-emerald-400",
      action: () => handleCopy(personalInfo.phone, "phone"),
      copied: copiedPhone,
      label: "Call Now",
    },
    {
      title: "WhatsApp Direct",
      value: "Chat on WhatsApp",
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
      accent: "text-indigo-400",
      label: "Bangladesh",
    },
  ];

  return (
    <section id="contact" className="py-28 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Section Header */}
        <div className="space-y-3 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="uppercase tracking-widest">GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Contact Information
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Feel free to reach out for web development projects, IT training inquiries, or technical collaboration.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Direct Cards + Interactive Message Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Methods (Requirement 10: Email, Phone, WhatsApp) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1 mb-2">
              Direct Channels
            </h3>

            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5 truncate">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${method.accent}`} />
                    </div>
                    <div className="truncate">
                      <p className="text-xs text-slate-400 font-medium">
                        {method.title}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.isExternal ? "_blank" : undefined}
                          rel={method.isExternal ? "noopener noreferrer" : undefined}
                          className="text-sm font-semibold text-white hover:text-sky-300 transition-colors truncate block"
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
                      className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0 ml-2"
                      title={method.label}
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
                      className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0 ml-2"
                      title={method.label}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have a project inquiry or consultation in mind? Fill out the form below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry, Mentorship, etc."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your requirements or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-all duration-200 shadow-sm disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "sending" ? "Opening Mail..." : "Send Message"}</span>
                </button>

                {status === "success" && (
                  <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Your email client is opening with the message!</span>
                  </p>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

