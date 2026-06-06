"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0F0F1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/aceiq-logo-horizontal.png"
              alt="AceIQ"
              width={140}
              height={35}
              className="h-8 w-auto opacity-80"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#affiliate" className="hover:text-white transition-colors">Affiliate</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
            <a href="https://wa.me/27728393087" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> +27 72 839 3087
            </a>
            <a href="mailto:dandelionseedlings@outlook.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} /> dandelionseedlings@outlook.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>Powered by Dandelion Seedlings — Growing bright minds 🌱</p>
          <p className="mt-2">© 2026 AceIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
