"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "Studying alone is hard and overwhelming",
  "Textbooks are scattered and hard to navigate",
  "Past papers are difficult to find and organize",
  "You don't know what to focus on for exams",
];

const solutions = [
  "AceIQ reads your material and creates everything you need",
  "All your subjects organized in one Google Sheet",
  "Auto-generated practice tests from your notes",
  "Personalized study plans that tell you exactly what to study",
];

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-[#0F0F1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-400">
              Studying Without Help Is Tough
            </h2>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3 glass rounded-xl p-4">
                  <XCircle className="text-danger shrink-0 mt-0.5" size={20} />
                  <p className="text-gray-300">{p}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text">
              AceIQ Fixes Everything
            </h2>
            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3 glass rounded-xl p-4 border-primary/20">
                  <CheckCircle className="text-success shrink-0 mt-0.5" size={20} />
                  <p className="text-white">{s}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
