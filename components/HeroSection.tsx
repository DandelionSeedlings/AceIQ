"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Globe, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="particles-bg min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-32 h-32 rounded-full bg-tutor/10 blur-xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-mindmap/10 blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Study Companion
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your AI Study Companion{" "}
              <span className="gradient-text">for CAPS & IEB</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              AceIQ turns your textbooks into flashcards, tests, mind maps, and a personal AI tutor — all inside Google Sheets. Built for South African students, in{" "}
              <span className="font-semibold text-primary">English</span> and{" "}
              <span className="font-semibold text-primary">Afrikaans</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#pricing"
                className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Get AceIQ
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/5 transition-all"
              >
                See How It Works
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, text: "CAPS Aligned" },
                { icon: Check, text: "IEB Ready" },
                { icon: Globe, text: "English & Afrikaans" },
              ].map((badge, i) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-border text-sm font-medium text-gray-600"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-border bg-white">
              {/* Mock Header */}
              <div className="bg-primary px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <span className="ml-2 text-white/80 text-sm font-medium">AceIQ — Study Hub</span>
              </div>

              {/* Mock Content */}
              <div className="p-4 space-y-3">
                {/* Subject Pills */}
                <div className="flex gap-2 flex-wrap">
                  {["Wiskunde", "Fisiese Wetenskap", "Afrikaans HT", "English HL"].map((s) => (
                    <span
                      key={s}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        s === "Wiskunde"
                          ? "bg-primary text-white"
                          : "bg-primary-light text-primary"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-1 border-b border-border pb-2">
                  {["Opsomming", "Kernwoorde", "Flitskaarte", "Oefentoets", "AI Tutor"].map(
                    (t, i) => (
                      <span
                        key={t}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          i === 0 ? "text-primary border-b-2 border-primary" : "text-gray-400"
                        }`}
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>

                {/* Content Cards */}
                <div className="space-y-2">
                  <div className="p-3 rounded-lg border border-border bg-cream">
                    <h4 className="text-sm font-semibold text-primary mb-1">Week 1: Algebra</h4>
                    <p className="text-xs text-gray-600">
                      Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols...
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-cream">
                    <h4 className="text-sm font-semibold text-primary mb-1">Week 2: Trigonometrie</h4>
                    <p className="text-xs text-gray-600">
                      Trigonometry studies relationships between side lengths and angles of triangles...
                    </p>
                  </div>
                </div>

                {/* AI Tutor Mini */}
                <div className="p-3 rounded-lg bg-tutor/10 border border-tutor/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-tutor flex items-center justify-center">
                      <span className="text-white text-xs">AI</span>
                    </div>
                    <span className="text-xs font-semibold text-tutor">AceIQ Tutor</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Hallo! Ek is jou AceIQ tutor. Vra my enigiets oor Wiskunde!
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">Live AI Tutor Active</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
