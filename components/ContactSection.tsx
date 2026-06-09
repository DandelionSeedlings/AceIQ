"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MessageCircle, Send, Check, Lock, ExternalLink, Building2, CreditCard, QrCode } from "lucide-react";
import Image from "next/image";


export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [showBanking, setShowBanking] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "order",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I am interested in AceIQ.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AInterest: ${formData.interest}%0ASubject/Grade: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/27728393087?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0F0F1A]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400">
            Ready to start studying smarter? Reach out and we will get you set up.
          </p>
        </motion.div>

        {/* Quick Access Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass rounded-2xl p-6 mb-8 border border-primary/20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <ExternalLink className="text-primary-light" size={22} />
              </div>
              <div>
                <div className="font-semibold">Ready to get AceIQ?</div>
                <div className="text-sm text-gray-400">Choose your plan and pay securely</div>
              </div>
            </div>
            <a
              href="/start"
              className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Get AceIQ
            </a>
          </div>
        </motion.div>

        {/* How to Get Your Security Key */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-xl p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <Lock className="text-accent" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-3">How to Get Your Security Key</h3>
              <ol className="text-sm text-gray-400 space-y-2 list-decimal list-inside">
                <li>Click <strong>Open AceIQ</strong> above to access the Google Sheet</li>
                <li>Make your payment (Monthly R49 / Term R199 / Year R499)</li>
                <li>Send proof of payment via <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">WhatsApp</a> or <a href="mailto:dandelionseedlings@outlook.com" className="text-accent hover:underline">email</a></li>
                <li>We will send you your <strong>security key</strong> within 2 hours</li>
                <li>Enter the key in AceIQ and start studying!</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Banking Details Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8"
        >
          <button
            onClick={() => setShowBanking(!showBanking)}
            className="w-full glass rounded-xl p-5 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                <Building2 className="text-success" size={22} />
              </div>
              <div className="text-left">
                <div className="font-semibold">Banking Details</div>
                <div className="text-sm text-gray-400">FNB / EFT or scan to pay</div>
              </div>
            </div>
            <div className={`text-gray-400 transition-transform ${showBanking ? "rotate-180" : ""}`}>
              ▼
            </div>
          </button>

          {showBanking && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-b-xl border-t border-white/5 overflow-hidden"
            >
              <div className="p-6 grid md:grid-cols-2 gap-8">
                {/* Bank Details */}
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <CreditCard size={18} className="text-primary-light" />
                    EFT Details
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bank</span>
                      <span className="font-medium">FNB / RMB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Account Holder</span>
                      <span className="font-medium">Simone Theron</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Account Type</span>
                      <span className="font-medium">FNB Premier Current</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Account Number</span>
                      <span className="font-medium font-mono">63144251509</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Branch Code</span>
                      <span className="font-medium font-mono">250655</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 pt-2">
                    Please use your name as reference. Send proof of payment via WhatsApp or email.
                  </p>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center justify-center">
                  <h4 className="font-semibold flex items-center gap-2 mb-4">
                    <QrCode size={18} className="text-accent" />
                    Scan to Pay
                  </h4>
                  <div className="bg-white rounded-xl p-3">
                    <Image
                      src="/payment-qr.png"
                      alt="Scan to pay with FNB"
                      width={200}
                      height={200}
                      className="w-48 h-48"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Scan with your banking app
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          <a
            href="https://wa.me/27728393087"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-5 flex items-center gap-4 hover:bg-white/5 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
              <Phone className="text-success" size={22} />
            </div>
            <div>
              <div className="text-sm text-gray-500">WhatsApp</div>
              <div className="font-medium">+27 72 839 3087</div>
            </div>
          </a>
          <a
            href="mailto:dandelionseedlings@outlook.com"
            className="glass rounded-xl p-5 flex items-center gap-4 hover:bg-white/5 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Mail className="text-primary-light" size={22} />
            </div>
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <div className="font-medium">dandelionseedlings@outlook.com</div>
            </div>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="glass rounded-2xl p-8"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                <Check className="text-success" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-gray-400">We will be in touch via WhatsApp shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                    placeholder="+27 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">I am interested in</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    <option value="order" className="bg-[#1A1A2E]">Ordering AceIQ</option>
                    <option value="affiliate" className="bg-[#1A1A2E]">Affiliate Program</option>
                    <option value="support" className="bg-[#1A1A2E]">Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Subject / Grade</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder="e.g. Grade 10 Mathematics"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary resize-none"
                  placeholder="Tell us what you need..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Send via WhatsApp
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
