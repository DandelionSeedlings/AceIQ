"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookX, Brain, Lightbulb } from "lucide-react";

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-danger/10 text-danger text-sm font-semibold mb-4">
              <BookX className="w-4 h-4" />
              The Problem
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Studying alone is{" "}
              <span className="text-danger">hard</span>
            </h2>
            <ul className="space-y-4">
              {[
                "Textbooks are overwhelming — hundreds of pages, no clear focus",
                "Past papers are scattered across different websites",
                "You don't know what to study first or how to plan your time",
                "No one explains concepts in Afrikaans when you need it",
                "Tutoring is expensive and not always available",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-danger/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-danger text-xs font-bold">✕</span>
                  </span>
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
              <Lightbulb className="w-4 h-4" />
              The Solution
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              AceIQ reads your material and{" "}
              <span className="gradient-text">creates everything</span> you need
            </h2>
            <ul className="space-y-4">
              {[
                "Upload your PDF notes or paste textbook content — AI does the rest",
                "Auto-generated flashcards, tests, summaries, and mind maps",
                "Personalized learning plans based on your exam dates",
                "Bilingual AI tutor: ask in English or Afrikaans, get answers instantly",
                "Snap a photo of a maths problem — get step-by-step solutions",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-success text-xs font-bold">✓</span>
                  </span>
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20"
            >
              <div className="flex items-center gap-3">
                <Brain className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold text-primary">Built on Google Sheets</p>
                  <p className="text-sm text-gray-600">
                    No new apps to learn. Everything works inside the tools you already use.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
