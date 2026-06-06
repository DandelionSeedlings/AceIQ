"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Lock, ArrowLeft, Sparkles, Shield, Globe, BookOpen } from "lucide-react";
import Image from "next/image";

const SHEET_URL = "https://docs.google.com/spreadsheets/d/1ItRi09zxbjrfAUBxcbeCEVLCbICGvB9fcsM2VQM_hwE/edit?usp=sharing";

export default function StartPage() {
  return (
    <main className="min-h-screen bg-[#0F0F1A] flex flex-col">
      {/* Header */}
      <header className="p-4">
        <a href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm">Back to AceIQ</span>
        </a>
      </header>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Image
            src="/aceiq-icon.png"
            alt="AceIQ"
            width={100}
            height={100}
            className="mx-auto mb-6 w-24 h-24"
          />
          <h1 className="text-3xl font-bold mb-3">
            Welcome to <span className="gradient-text">AceIQ</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Your AI Study Companion for CAPS & IEB
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {[
            { icon: Shield, text: "CAPS Aligned" },
            { icon: BookOpen, text: "IEB Ready" },
            { icon: Globe, text: "English & Afrikaans" },
          ].map((b) => (
            <span key={b.text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-300">
              <b.icon size={12} className="text-accent" />
              {b.text}
            </span>
          ))}
        </motion.div>

        {/* Big CTA Button */}
        <motion.a
          href={SHEET_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full py-4 bg-primary text-white rounded-xl font-semibold text-center flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors mb-6"
        >
          <ExternalLink size={20} />
          Open AceIQ in Google Sheets
        </motion.a>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full glass rounded-2xl p-6 mb-6"
        >
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <Sparkles size={18} className="text-accent" />
            How to Get Started
          </h2>
          <ol className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary-light shrink-0">1</span>
              <span className="text-gray-300">Tap the button above to open AceIQ in Google Sheets</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary-light shrink-0">2</span>
              <span className="text-gray-300">Make a copy to your own Google Drive</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary-light shrink-0">3</span>
              <span className="text-gray-300">Choose your plan: R49 / R199 / R499</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary-light shrink-0">4</span>
              <span className="text-gray-300">Pay via EFT or scan the QR code</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs text-accent shrink-0">5</span>
              <span className="text-gray-300">Send proof of payment via WhatsApp</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-xs text-success shrink-0">6</span>
              <span className="text-gray-300">Receive your security key and start studying!</span>
            </li>
          </ol>
        </motion.div>

        {/* Security Key Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full glass rounded-xl p-4 mb-6 flex items-start gap-3"
        >
          <Lock className="text-accent shrink-0 mt-0.5" size={18} />
          <p className="text-xs text-gray-400">
            <span className="text-white font-medium">Need a security key?</span> After payment, send your proof of payment via WhatsApp and we will send your key within 2 hours.
          </p>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.a
          href="https://wa.me/27728393087"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full py-3 bg-success/10 border border-success/30 text-success rounded-xl font-medium text-center flex items-center justify-center gap-2 hover:bg-success/20 transition-colors"
        >
          <MessageCircle size={18} />
          WhatsApp Us: +27 72 839 3087
        </motion.a>
      </div>
    </main>
  );
}
