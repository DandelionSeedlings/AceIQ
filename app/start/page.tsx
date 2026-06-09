"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Building2, CreditCard, QrCode, Check, ExternalLink, MessageCircle, Mail, Copy, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FORM_URL = "https://forms.gle/kQUmyFx1wx6eudJr6";

const plans = [
  {
    name: "Monthly",
    price: "R49",
    period: "per month",
    desc: "Perfect for exam crunch time",
    formParam: "Monthly (R49)",
  },
  {
    name: "Term",
    price: "R199",
    period: "per term",
    desc: "Best for serious students",
    formParam: "Term (R199)",
    popular: true,
  },
  {
    name: "Year",
    price: "R499",
    period: "per year",
    desc: "Best value. Full year access.",
    formParam: "Year (R499)",
  },
];

const bankDetails = {
  bank: "FNB / RMB",
  holder: "Simone Theron",
  type: "FNB Premier Current Account",
  number: "63144251509",
  branch: "250655",
};

export default function StartPage() {
  const [copied, setCopied] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFormUrl = (planParam: string) => {
    // Pre-fill the plan in the Google Form using the actual entry ID
    return `${FORM_URL}?usp=pp_url&entry.1307287026=${encodeURIComponent(planParam)}`;
  };

  return (
    <main className="min-h-screen bg-[#0F0F1A] flex flex-col">
      {/* Header */}
      <header className="p-4">
        <a href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm">Back to AceIQ</span>
        </a>
      </header>

      <div className="flex-1 flex flex-col items-center px-4 py-8 max-w-2xl mx-auto w-full">
        {/* Logo & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Image
            src="/aceiq-icon.png"
            alt="AceIQ"
            width={80}
            height={80}
            className="mx-auto mb-4 w-20 h-20"
          />
          <h1 className="text-3xl font-bold mb-2">
            Get Your <span className="gradient-text">AceIQ</span> License
          </h1>
          <p className="text-gray-400 text-sm">
            Pay once, study smarter. No subscriptions ever.
          </p>
        </motion.div>

        {/* Step 1: Choose Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full mb-8"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary-light">1</span>
            Choose Your Plan
          </h2>
          <div className="grid gap-4">
            {plans.map((plan) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(plan.formParam)}
                className={`w-full glass rounded-xl p-5 text-left transition-all ${
                  selectedPlan === plan.formParam
                    ? "border-2 border-accent bg-accent/10"
                    : "border border-white/10 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{plan.name}</span>
                      {plan.popular && (
                        <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full">POPULAR</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{plan.desc}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{plan.price}</div>
                    <div className="text-xs text-gray-500">{plan.period}</div>
                  </div>
                </div>
                {selectedPlan === plan.formParam && (
                  <div className="mt-3 flex items-center gap-2 text-accent text-sm">
                    <CheckCircle2 size={16} />
                    Selected — scroll down to pay
                  </div>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Step 2: Banking Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full glass rounded-2xl p-6 mb-8 border border-primary/20"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary-light">2</span>
            Pay via EFT
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bank Details */}
            <div className="space-y-4">
              <h3 className="font-medium flex items-center gap-2 text-sm text-gray-300">
                <Building2 size={16} className="text-primary-light" />
                Banking Details
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Bank", value: bankDetails.bank },
                  { label: "Account Holder", value: bankDetails.holder },
                  { label: "Account Type", value: bankDetails.type },
                  { label: "Account Number", value: bankDetails.number, copyable: true },
                  { label: "Branch Code", value: bankDetails.branch, copyable: true },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-gray-400">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium font-mono">{item.value}</span>
                      {item.copyable && (
                        <button
                          onClick={() => copyToClipboard(item.value)}
                          className="p-1 rounded hover:bg-white/10 transition-colors"
                          title="Copy"
                        >
                          {copied ? <Check size={14} className="text-success" /> : <Copy size={14} className="text-gray-500" />}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 pt-2">
                Please use your <strong>name + "AceIQ"</strong> as the payment reference.
              </p>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-medium flex items-center gap-2 text-sm text-gray-300 mb-4">
                <QrCode size={16} className="text-accent" />
                Scan to Pay
              </h3>
              <div className="bg-white rounded-xl p-3">
                <Image
                  src="/payment-qr.png"
                  alt="Scan to pay with FNB"
                  width={180}
                  height={180}
                  className="w-44 h-44"
                />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Scan with your banking app
              </p>
            </div>
          </div>
        </motion.div>

        {/* Step 3: Submit Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full glass rounded-2xl p-6 mb-8 border border-accent/20"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm text-accent">3</span>
            Submit Proof of Payment
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            Once you have paid, click the button below to upload your proof of payment. We will send your security key within 2 hours.
          </p>

          <a
            href={selectedPlan ? getFormUrl(selectedPlan) : FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-all ${
              selectedPlan
                ? "bg-accent text-white hover:bg-accent/90"
                : "bg-white/10 text-gray-400 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (!selectedPlan) {
                e.preventDefault();
                alert("Please select a plan first (Step 1 above).");
              }
            }}
          >
            <ExternalLink size={20} />
            {selectedPlan ? "I've Paid — Upload Proof of Payment" : "Select a Plan First"}
          </a>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href="https://wa.me/27728393087"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-success hover:underline"
            >
              <MessageCircle size={16} />
              WhatsApp us your POP
            </a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a
              href="mailto:dandelionseedlings@outlook.com"
              className="flex items-center gap-2 text-primary-light hover:underline"
            >
              <Mail size={16} />
              Email your POP
            </a>
          </div>
        </motion.div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full glass rounded-xl p-5"
        >
          <h3 className="font-semibold mb-3 text-sm">What happens next?</h3>
          <ol className="text-sm text-gray-400 space-y-2 list-decimal list-inside">
            <li>You pay via EFT or scan the QR code</li>
            <li>You upload your proof of payment using the button above</li>
            <li>We verify your payment (usually within 2 hours)</li>
            <li>We send your <strong>security key</strong> via WhatsApp or email</li>
            <li>You enter the key in AceIQ and start studying!</li>
          </ol>
        </motion.div>
      </div>
    </main>
  );
}
