"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, BookOpen, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";

const SHEET_URL = "https://docs.google.com/spreadsheets/d/1ItRi09zxbjrfAUBxcbeCEVLCbICGvB9fcsM2VQM_hwE/edit?usp=sharing";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm mb-6">
              <Sparkles size={16} />
              <span>AI-Powered Study Companion</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your AI Study Companion{" "}
              <span className="gradient-text">for CAPS & IEB</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              AceIQ turns your textbooks into flashcards, tests, mind maps, and a personal AI tutor — all inside Google Sheets. Built for South African students, Grade 8-12, in English and Afrikaans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={SHEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                <ExternalLink size={20} />
                Open AceIQ in Google Sheets
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, text: "CAPS Aligned" },
                { icon: BookOpen, text: "IEB Ready" },
                { icon: Globe, text: "English & Afrikaans" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <badge.icon size={16} className="text-accent" />
                  {badge.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Logo/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-3xl p-8 flex flex-col items-center gap-6">
                <Image
                  src="/aceiq-logo-stacked.png"
                  alt="AceIQ Logo"
                  width={300}
                  height={300}
                  className="w-full max-w-[280px] h-auto"
                  priority
                />
                <div className="w-full space-y-3">
                  <div className="h-3 bg-white/10 rounded-full w-3/4" />
                  <div className="h-3 bg-white/10 rounded-full w-full" />
                  <div className="h-3 bg-white/10 rounded-full w-5/6" />
                </div>
                <div className="flex gap-2 w-full flex-wrap justify-center">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs">Mathematics</span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs">Physical Science</span>
                  <span className="px-3 py-1 rounded-full bg-success/20 text-success text-xs">History</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
