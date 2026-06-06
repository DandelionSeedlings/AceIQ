"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Share2, Users, DollarSign, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Sign Up",
    description: "Create your free affiliate account in 30 seconds",
  },
  {
    icon: Share2,
    title: "Share Your Link",
    description: "Post on social media, WhatsApp groups, or your blog",
  },
  {
    icon: DollarSign,
    title: "Get Paid",
    description: "Earn 30% commission on every sale. Paid monthly.",
  },
];

export default function AffiliateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="affiliate" ref={ref} className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <Share2 className="w-4 h-4" />
              Affiliate Program
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Earn As You <span className="gradient-text">Sell</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Know students, parents, or teachers who need AceIQ? Join our affiliate program and earn commission for every sale you refer. No caps. No limits. Just share and earn.
            </p>

            {/* Commission highlight */}
            <div className="p-6 rounded-2xl bg-white border-2 border-accent/20 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                  <span className="text-2xl font-black text-white">30%</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">Commission Per Sale</p>
                  <p className="text-sm text-gray-600">
                    R15–R150 per sale depending on the plan
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="btn-shine inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-accent/25"
            >
              Join Affiliate Program
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right - Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
