"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Share2, Wallet, ExternalLink } from "lucide-react";

const SHEET_URL = "https://docs.google.com/spreadsheets/d/1ItRi09zxbjrfAUBxcbeCEVLCbICGvB9fcsM2VQM_hwE/edit?usp=sharing";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    desc: "Register as an AceIQ affiliate in 30 seconds.",
  },
  {
    icon: Share2,
    title: "Share Your Link",
    desc: "Post on social media, WhatsApp, or share with students and parents.",
  },
  {
    icon: Wallet,
    title: "Get Paid",
    desc: "Earn 30% commission for every sale. Paid directly to your account.",
  },
];

export default function AffiliateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="affiliate" className="py-20 bg-[#0F0F1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Earn As You <span className="gradient-text">Sell</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Know students, parents, or teachers who need AceIQ? Earn commission for every sale you refer.
          </p>
        </motion.div>

        {/* Commission Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-block glass rounded-2xl px-10 py-8">
            <div className="text-5xl font-bold gradient-text mb-2">30%</div>
            <div className="text-lg text-gray-300">Commission Per Sale</div>
            <div className="text-sm text-gray-500 mt-1">No caps. No limits.</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <step.icon className="text-primary-light" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors"
          >
            Join the Affiliate Program
          </a>
          <a
            href={SHEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-colors"
          >
            <ExternalLink size={18} />
            See AceIQ in Action
          </a>
        </motion.div>
      </div>
    </section>
  );
}
