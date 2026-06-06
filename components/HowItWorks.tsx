"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plus, Upload, Zap, MessageCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Plus,
    title: "Add Your Subject",
    desc: "Add your exam roster in the sidebar. Choose from all CAPS and IEB subjects.",
  },
  {
    num: "02",
    icon: Upload,
    title: "Upload Your Notes",
    desc: "Paste notes, upload PDFs, or snap a photo of your textbook page.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Click Generate",
    desc: "AceIQ builds flashcards, tests, summaries, and mind maps automatically.",
  },
  {
    num: "04",
    icon: MessageCircle,
    title: "Study & Ask",
    desc: "Use the AI tutor, track your progress, and ace your exams.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-20 bg-[#0F0F1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How <span className="gradient-text">AceIQ</span> Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Four simple steps from first setup to exam success.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-6 text-center h-full">
                <div className="text-5xl font-bold text-white/10 mb-4">{step.num}</div>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-primary-light" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
