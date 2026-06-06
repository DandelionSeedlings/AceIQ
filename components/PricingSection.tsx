"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, ExternalLink, Lock } from "lucide-react";

const SHEET_URL = "https://docs.google.com/spreadsheets/d/1ItRi09zxbjrfAUBxcbeCEVLCbICGvB9fcsM2VQM_hwE/edit?usp=sharing";

const plans = [
  {
    name: "Monthly",
    price: "R49",
    period: "per month",
    desc: "Perfect for exam crunch time",
    features: [
      "All features included",
      "All subjects",
      "AI tutor access",
      "Unlimited generations",
      "English & Afrikaans",
      "CAPS & IEB aligned",
    ],
    cta: "Get Access",
    popular: false,
  },
  {
    name: "Term",
    price: "R199",
    period: "per term",
    desc: "Best for serious students",
    features: [
      "All features included",
      "All subjects",
      "AI tutor access",
      "Unlimited generations",
      "English & Afrikaans",
      "CAPS & IEB aligned",
      "Priority support",
    ],
    cta: "Get Access",
    popular: true,
  },
  {
    name: "Year",
    price: "R499",
    period: "per year",
    desc: "Best value. Full year access.",
    features: [
      "All features included",
      "All subjects",
      "AI tutor access",
      "Unlimited generations",
      "English & Afrikaans",
      "CAPS & IEB aligned",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Get Access",
    popular: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-20 bg-[#0F0F1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple Pricing. <span className="gradient-text">No Subscriptions. Ever.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pay once for the period you need. No recurring fees. No hidden costs.
          </p>
        </motion.div>

        {/* No Subscriptions Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-danger/10 border border-danger/30 text-danger font-semibold">
            <span>🚫</span> NO MONTHLY SUBSCRIPTIONS — We hate them too.
          </div>
        </motion.div>

        {/* How to get access note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex justify-center mb-10"
        >
          <div className="glass rounded-xl px-6 py-4 flex items-center gap-3 max-w-xl">
            <Lock className="text-accent shrink-0" size={20} />
            <p className="text-sm text-gray-300">
              <span className="text-white font-medium">How it works:</span> Click "Get Access" to open AceIQ in Google Sheets. Then{" "}
              <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">WhatsApp us</a>{" "}
              or <a href="mailto:dandelionseedlings@outlook.com" className="text-accent hover:underline">email</a>{" "}
              your proof of payment to receive your <span className="text-white font-medium">security key</span>.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative glass rounded-2xl p-8 ${
                plan.popular ? "border-2 border-accent" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-accent text-white rounded-full text-sm font-semibold">
                    <Star size={14} fill="currentColor" /> POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="text-success shrink-0 mt-0.5" size={16} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={SHEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <ExternalLink size={18} />
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
