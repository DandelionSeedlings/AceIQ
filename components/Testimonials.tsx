"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "AceIQ helped me go from 45% to 72% in Wiskunde. The AI tutor explains things better than my textbook. I finally understand trigonometry!",
    author: "Grade 11 Student",
    location: "Pretoria",
    subject: "Wiskunde",
    rating: 5,
  },
  {
    quote: "I generate flashcards for all my tutoring students in minutes. What used to take me hours now takes a few clicks. Game changer for my tutoring business.",
    author: "Private Tutor",
    location: "Johannesburg",
    subject: "Multiple Subjects",
    rating: 5,
  },
  {
    quote: "My daughter finally has a study plan she actually follows. And it's in Afrikaans! The flashcards for her Afrikaans HT exams were incredible.",
    author: "Parent",
    location: "Cape Town",
    subject: "Afrikaans HT",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Students & Parents <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="card-hover bg-cream rounded-2xl p-8 border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-gray-900">{t.author}</p>
                <p className="text-sm text-gray-500">
                  {t.location} • {t.subject}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
