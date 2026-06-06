"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, ChalkboardTeacher } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    subtitle: "Grade 10–12",
    description:
      "CAPS & IEB curriculum. English & Afrikaans. All subjects supported. From Wiskunde to Lewenswetenskappe.",
    features: ["All subjects", "Bilingual", "Exam countdown", "Progress tracking"],
    color: "primary",
  },
  {
    icon: Users,
    title: "Parents",
    subtitle: "Stay Informed",
    description:
      "Track your child's study progress, exam readiness, and subject coverage. Know exactly where they need help.",
    features: ["Progress dashboard", "Exam alerts", "Subject overview", "Study time tracking"],
    color: "accent",
  },
  {
    icon: ChalkboardTeacher,
    title: "Tutors",
    subtitle: "Scale Your Impact",
    description:
      "Generate personalized materials for every student instantly. Create flashcards, tests, and summaries in minutes, not hours.",
    features: ["Bulk generation", "Student profiles", "Custom topics", "Time saving"],
    color: "success",
  },
];

export default function ForWho() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Built For You
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who Is AceIQ <span className="gradient-text">For?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="card-hover bg-white rounded-2xl p-8 border border-border"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  audience.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : audience.color === "accent"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                <audience.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {audience.title}
              </h3>
              <p className="text-sm font-semibold text-primary mb-4">
                {audience.subtitle}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {audience.description}
              </p>

              <div className="space-y-2">
                {audience.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
