"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AceIQ helped me go from 45% to 72% in Mathematics. The AI tutor explains things better than my textbook.",
    author: "Grade 11 Student",
    location: "Johannesburg",
  },
  {
    quote: "I generate flashcards for all my tutoring students in minutes. Game changer for my prep time.",
    author: "Private Tutor",
    location: "Pretoria",
  },
  {
    quote: "My daughter finally has a study plan she actually follows. And it is in Afrikaans!",
    author: "Parent",
    location: "Cape Town",
  },
];

export default function Testimonials() {
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
            What Students & Parents <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 relative"
            >
              <Quote className="text-primary/30 absolute top-6 right-6" size={32} />
              <p className="text-gray-300 mb-6 italic">"{t.quote}"</p>
              <div>
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-gray-500">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
