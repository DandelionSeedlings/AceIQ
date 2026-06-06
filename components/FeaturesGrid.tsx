"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Layers,
  FileQuestion,
  Brain,
  Calendar,
  Bot,
  Camera,
  Languages,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "AI Summaries",
    desc: "Turn any chapter into a clear, concise summary",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Layers,
    title: "Flashcards",
    desc: "Auto-generated flashcards with smart review tracking",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: FileQuestion,
    title: "Practice Tests",
    desc: "CAPS-style multiple choice tests with instant feedback",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: Brain,
    title: "Mind Maps",
    desc: "Visual concept maps that connect your topics",
    color: "text-mindmap",
    bg: "bg-mindmap/10",
  },
  {
    icon: Calendar,
    title: "Learning Plans",
    desc: "Personalized week-by-week study schedules",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Bot,
    title: "AI Tutor",
    desc: "Ask anything. Get instant help in English or Afrikaans.",
    color: "text-tutor",
    bg: "bg-tutor/10",
  },
  {
    icon: Camera,
    title: "Snap & Solve",
    desc: "Take a photo of a maths problem. Get step-by-step help.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Languages,
    title: "Bilingual",
    desc: "Full Afrikaans and English support for all materials",
    color: "text-success",
    bg: "bg-success/10",
  },
];

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 bg-[#0F0F1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Ace Your Exams</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AceIQ combines 8 powerful study tools into one seamless Google Sheets experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors group"
            >
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon className={f.color} size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
