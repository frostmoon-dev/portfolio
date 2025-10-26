// File: components/Header.tsx
// Mission: Elevated sage green navigation with smooth interactions

"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backgroundColor: scrolled ? `rgba(248, 249, 245, ${headerOpacity.get()})` : "transparent",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl shadow-lg shadow-[#8a9a7e]/5 border-b border-[#a8b5a0]/20"
          : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-6 flex justify-between items-center">
        {/* Logo with subtle hover effect */}
        <Link
          href="/"
          className="relative group"
        >
          <motion.span
            className="text-[#4a5a43] font-semibold text-xl tracking-tight"
            style={{ fontFamily: "'Biro Script reduced Regular', cursive" }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Fatihah
          </motion.span>
          <motion.div
            className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#8a9a7e] to-transparent"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-10">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#archive">Archive</NavLink>
          <li>
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="#connect"
                className="relative bg-gradient-to-br from-[#8a9a7e] to-[#6b7a63] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-[#8a9a7e]/25 hover:shadow-xl hover:shadow-[#8a9a7e]/35 overflow-hidden group"
              >
                <span className="relative z-10">Connect</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#6b7a63] to-[#4a5a43]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

// Reusable NavLink component with elegant underline animation
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link
        href={href}
        className="relative text-[#6b7a63] hover:text-[#4a5a43] transition-colors text-sm font-medium tracking-wide group"
      >
        {children}
        <motion.span
          className="absolute -bottom-1 left-0 h-[2px] bg-[#8a9a7e] rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </Link>
    </li>
  );
};