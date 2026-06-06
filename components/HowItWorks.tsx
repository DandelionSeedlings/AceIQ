"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Plus, Upload, Zap, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plus,
    title: "Add Your Subject",
    description: "Add your exam roster in the sidebar. Select your grade, subject, and exam date.",
    color: "primary",
  },
  {
    number: "02",
    icon: Upload,
    title: "Upload Your Notes",
    description: "Paste notes, upload PDFs, or snap a photo of your textbook. AceIQ reads everything.",
    color: "accent",
  },
  {
    number: "03",
    icon: Zap,
    title: "Click Generate",
    description: "AceIQ builds flashcards, tests, summaries, mind maps, and a learning plan — automatically.",
    color: "success",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Study & Ask",
    description: "Use the AI tutor, track your progress, and ace your exams. In English or Afrikaans.",
    color: "tutor",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-tutor/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four simple steps from textbook to top marks
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-accent to-tutor" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${
                      step.color === "primary"
                        ? "bg-primary text-white shadow-primary/30"
                        : step.color === "accent"
                        ? "bg-accent text-white shadow-accent/30"
                        : step.color === "success"
                        ? "bg-success text-white shadow-success/30"
                        : "bg-tutor text-white shadow-tutor/30"
                    }`}
                  >
                    <step.icon className="w-7 h-7" />
                  </div>

                  <span className="text-4xl font-black text-gray-200 mb-2">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
