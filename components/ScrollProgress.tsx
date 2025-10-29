// components/ScrollProgress.tsx
"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Thin progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8b9d83]/60 via-[#6b7d63]/80 to-[#8b9d83]/60 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Subtle glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[#8b9d83]/20 via-[#6b7d63]/30 to-[#8b9d83]/20 origin-left z-[49] blur-sm"
        style={{ scaleX }}
      />
    </>
  );
};