"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Grade 8–12. CAPS & IEB. English & Afrikaans. Everything you need to pass with flying colours.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Parents",
    desc: "Track your child's study progress and exam readiness. See exactly what they're working on.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: BookOpen,
    title: "Tutors",
    desc: "Generate personalized materials for every student instantly. Save hours of prep time.",
    color: "text-success",
    bg: "bg-success/10",
  },
];

export default function ForWho() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-[#0F0F1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built For <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you're a student, parent, or tutor — AceIQ has something for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 text-center hover:bg-white/5 transition-colors"
            >
              <div className={`w-16 h-16 rounded-2xl ${a.bg} flex items-center justify-center mx-auto mb-6`}>
                <a.icon className={a.color} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{a.title}</h3>
              <p className="text-gray-400">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
