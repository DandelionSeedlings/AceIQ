"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Zap, Star, Crown } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "R49",
    period: "per month",
    description: "Perfect for exam crunch time",
    icon: Zap,
    features: [
      "All 8 study features",
      "All subjects",
      "AI Tutor access",
      "Unlimited generations",
      "English & Afrikaans",
      "CAPS & IEB aligned",
      "Snap & Solve",
    ],
    cta: "Get Monthly Access",
    popular: false,
  },
  {
    name: "Term",
    price: "R199",
    period: "per term",
    description: "Best for serious students",
    icon: Star,
    features: [
      "All 8 study features",
      "All subjects",
      "AI Tutor access",
      "Unlimited generations",
      "English & Afrikaans",
      "CAPS & IEB aligned",
      "Snap & Solve",
      "Priority support",
    ],
    cta: "Get Term Access",
    popular: true,
  },
  {
    name: "Year",
    price: "R499",
    period: "per year",
    description: "Best value. Full year access.",
    icon: Crown,
    features: [
      "All 8 study features",
      "All subjects",
      "AI Tutor access",
      "Unlimited generations",
      "English & Afrikaans",
      "CAPS & IEB aligned",
      "Snap & Solve",
      "Priority support",
      "Lifetime updates",
    ],
    cta: "Get Year Access",
    popular: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="pricing" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            No Subscriptions. <span className="gradient-text">Ever.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Pay once for the period you need. No recurring fees. No hidden costs. No monthly surprises.
          </p>

          {/* NO SUBSCRIPTIONS BANNER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-50 border-2 border-red-200 text-red-700 font-bold text-sm mb-8"
          >
            <X className="w-5 h-5" />
            NO MONTHLY SUBSCRIPTIONS — We hate them too.
            <X className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl bg-white border-2 p-8 ${
                plan.popular
                  ? "pricing-popular border-primary shadow-xl shadow-primary/10 lg:scale-105"
                  : "border-border card-hover"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    plan.popular ? "bg-primary text-white" : "bg-primary/10 text-primary"
                  }`}
                >
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </span>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full text-center py-3.5 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? "btn-shine bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </a>

              {/* One-time note */}
              <p className="text-center text-xs text-gray-400 mt-3">
                One-time payment. No auto-renewal.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-success/10 text-success text-sm font-semibold">
            <Check className="w-5 h-5" />
            7-Day Money-Back Guarantee — No questions asked
          </div>
        </motion.div>
      </div>
    </section>
  );
}
