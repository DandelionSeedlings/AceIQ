"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Layers,
  FileQuestion,
  GitBranch,
  Calendar,
  Bot,
  Camera,
  Languages,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "AI Summaries",
    description: "Turn any chapter into a clear, concise summary you can actually understand",
    color: "primary",
  },
  {
    icon: Layers,
    title: "Flashcards",
    description: "Auto-generated flashcards with smart review tracking and progress bars",
    color: "accent",
  },
  {
    icon: FileQuestion,
    title: "Practice Tests",
    description: "CAPS-style multiple choice tests with instant feedback and scoring",
    color: "success",
  },
  {
    icon: GitBranch,
    title: "Mind Maps",
    description: "Visual concept maps that connect topics and show relationships",
    color: "mindmap",
  },
  {
    icon: Calendar,
    title: "Learning Plans",
    description: "Personalized week-by-week study schedules based on your exam dates",
    color: "tutor",
  },
  {
    icon: Bot,
    title: "AI Tutor",
    description: "Ask anything. Get instant help in English or Afrikaans, 24/7",
    color: "primary",
  },
  {
    icon: Camera,
    title: "Snap & Solve",
    description: "Take a photo of a maths problem. Get step-by-step solutions with explanations",
    color: "accent",
  },
  {
    icon: Languages,
    title: "Bilingual",
    description: "Full Afrikaans and English support for all materials and the AI tutor",
    color: "success",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary border-primary/20",
  accent: "bg-orange-100 text-orange-600 border-orange-200",
  success: "bg-green-100 text-green-600 border-green-200",
  mindmap: "bg-purple-100 text-purple-600 border-purple-200",
  tutor: "bg-sky-100 text-sky-600 border-sky-200",
};

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="features" ref={ref} className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Everything You Need
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            One Tool. <span className="gradient-text">Every Study Need.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AceIQ doesn't just store your notes — it transforms them into powerful study tools
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className={`card-hover group p-6 rounded-2xl bg-white border ${
                i === 0 || i === 5 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  colorMap[feature.color]
                }`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
