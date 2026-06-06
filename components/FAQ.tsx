"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need to know coding to use AceIQ?",
    answer: "No, not at all. AceIQ is a Google Sheets add-on. You install it with one click from the Google Workspace Marketplace, and everything works inside Google Sheets — the tool you already know.",
  },
  {
    question: "Is AceIQ really CAPS aligned?",
    answer: "Yes. AceIQ uses the official CAPS curriculum framework for all subjects. The AI is trained on CAPS outcomes and assessment standards to ensure everything it generates matches what your teacher expects.",
  },
  {
    question: "Can I use it for Afrikaans subjects?",
    answer: "Absolutely. AceIQ has full bilingual support. You can generate summaries, flashcards, tests, and chat with the AI tutor in both English and Afrikaans. Subjects like Wiskunde, Lewenswetenskappe, and Afrikaans HT are fully supported.",
  },
  {
    question: "What subjects are supported?",
    answer: "All Grade 10–12 subjects: Mathematics / Wiskunde, Physical Sciences / Fisiese Wetenskappe, Life Sciences / Lewenswetenskappe, Accounting / Rekeningkunde, History / Geskiedenis, Geography / Aardrykskunde, Afrikaans HT, English HL, Business Studies / Besigheidstudies, Economics / Ekonomie, and more.",
  },
  {
    question: "Is my data safe?",
    answer: "Yes. Everything stays in your own Google Drive. We don't store your notes or personal data on our servers. AceIQ runs entirely within Google's secure infrastructure.",
  },
  {
    question: "What if I don't like it?",
    answer: "We offer a 7-day money-back guarantee. No questions asked. If AceIQ doesn't help you study better, just email us and we'll refund you in full.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about AceIQ
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="bg-white rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
