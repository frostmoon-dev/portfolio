// File: app/page.tsx
// Mission: Elegant footer with social links and subtle animations

"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ArchiveGrid } from "@/components/ArchiveGrid";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#a8b5a0]/30 to-transparent" />
      </div>

      <ProjectGrid />
      <ArchiveGrid />

      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-b from-[#f0f4ed] to-[#e8ede5] border-t border-[#a8b5a0]/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#8a9a7e] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#a8b5a0] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          {/* Connect Section */}
          <div id="connect" className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 
                className="text-4xl md:text-5xl text-[#4a5a43] mb-4 font-light"
                style={{ fontFamily: "'Lock Serif Light', serif" }}
              >
                Let's Create Together
              </h3>
              <p 
                className="text-lg text-[#6b7a63] max-w-xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Fragment Mono', monospace" }}
              >
                Have a project in mind? Let's bring your vision to life with elegant code and thoughtful design.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-center gap-4 mb-12"
            >
              <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="mailto:hello@example.com" icon={<Mail className="w-5 h-5" />} label="Email" />
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="mailto:hello@example.com"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-br from-[#8a9a7e] to-[#6b7a63] text-white rounded-full font-medium tracking-wide shadow-lg shadow-[#8a9a7e]/25 hover:shadow-xl hover:shadow-[#8a9a7e]/35 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#a8b5a0]/30 to-transparent mb-12"
          />

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#6b7a63]"
            style={{ fontFamily: "'Fragment Mono', monospace" }}
          >
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <span>© 2025 Nurfatihah Muhammad</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Full-Spectrum Software Developer</span>
            </div>

            {/* Made with love */}
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span>Crafted with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 text-[#8a9a7e] fill-[#8a9a7e]" />
              </motion.div>
              <span>& Next.js</span>
            </motion.div>
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex justify-center items-center gap-3"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-[#8a9a7e]"
            />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="w-2 h-2 rounded-full bg-[#a8b5a0]"
            />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="w-2 h-2 rounded-full bg-[#c5d4bc]"
            />
          </motion.div>
        </div>
      </footer>
    </main>
  );
}

// Reusable Social Link Component
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#a8b5a0]/30 text-[#4a5a43] shadow-md shadow-[#8a9a7e]/10 hover:shadow-lg hover:shadow-[#8a9a7e]/20 hover:border-[#8a9a7e]/50 transition-all duration-300"
    >
      {icon}
    </motion.a>
  );
};