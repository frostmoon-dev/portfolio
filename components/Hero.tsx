// File: components/Hero.tsx
// Mission: Sage green decorated hero with cute minimalistic touches

"use client";

import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headlineContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Hero = () => {
  const title = "Bridging Enterprise Systems & Modern User Experience";

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - windowSize.width / 2);
      mouseY.set(e.clientY - windowSize.height / 2);
    };

    if (windowSize.width > 0) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, windowSize]);

  const safeWidth = windowSize.width || 1;
  const safeHeight = windowSize.height || 1;

  const parallaxX_heavy = useTransform(
    mouseX,
    [-safeWidth / 2, safeWidth / 2],
    [-20, 20]
  );
  const parallaxY_heavy = useTransform(
    mouseY,
    [-safeHeight / 2, safeHeight / 2],
    [-20, 20]
  );

  const parallaxX_light = useTransform(
    mouseX,
    [-safeWidth / 2, safeWidth / 2],
    [-10, 10]
  );
  const parallaxY_light = useTransform(
    mouseY,
    [-safeHeight / 2, safeHeight / 2],
    [-10, 10]
  );

  const parallaxX_verylight = useTransform(
    mouseX,
    [-safeWidth / 2, safeWidth / 2],
    [-5, 5]
  );
  const parallaxY_verylight = useTransform(
    mouseY,
    [-safeHeight / 2, safeHeight / 2],
    [-5, 5]
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f9f5]">
      {/* Decorative Background Elements */}

      {/* Large organic blob - top right */}
      <motion.div
        style={{ x: parallaxX_verylight, y: parallaxY_verylight }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#a8b5a0]/20 to-[#8a9a7e]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium organic blob - bottom left */}
      <motion.div
        style={{ x: parallaxX_light, y: parallaxY_light }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#c5d4bc]/20 to-[#a8b5a0]/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Small accent blob - middle */}
      <motion.div
        style={{ x: parallaxX_heavy, y: parallaxY_heavy }}
        className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#8a9a7e]/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating decorative circles */}
      <motion.div
        style={{ x: parallaxX_light, y: parallaxY_light }}
        className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[#a8b5a0]/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        style={{ x: parallaxX_verylight, y: parallaxY_verylight }}
        className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-[#c5d4bc]/30 rounded-full"
        animate={{
          rotate: -360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      />

      {/* Cute floating mini elements */}
      <motion.div
        className="absolute top-1/3 left-1/6 w-2 h-2 rounded-full bg-[#a8b5a0]/40"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/5 w-3 h-3 rounded-full bg-[#c5d4bc]/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Content */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 pt-40 pb-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Decorative line above name with dots */}
        <motion.div
          variants={childVariants}
          className="flex items-center gap-2 mb-8"
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-[#8a9a7e]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#8a9a7e] to-transparent" />
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-[#a8b5a0]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>

        {/* Name */}
        <motion.h2
          variants={childVariants}
          style={{
            x: parallaxX_heavy,
            y: parallaxY_heavy,
            fontFamily: "'Biro Script reduced Regular', cursive",
          }}
          className="text-4xl md:text-5xl text-[#6b7a63] mb-4 tracking-wide"
        >
          Nurfatihah Muhammad
        </motion.h2>

        {/* Small accent with minimal symbol */}
        <motion.div
          variants={childVariants}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-8 h-[1px] bg-[#a8b5a0]" />
          <span className="text-sm text-[#8a9a7e] font-light tracking-widest flex items-center gap-1">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ✦
            </motion.span>
            FROSTMOON
          </span>
          <div className="w-8 h-[1px] bg-[#a8b5a0]" />
        </motion.div>

        {/* Value Prop */}
        <motion.h1
          variants={headlineContainerVariants}
          initial="hidden"
          animate="visible"
          suppressHydrationWarning
          className="text-5xl md:text-7xl text-[#4a5a43] leading-tight mb-8 font-light"
          style={{ fontFamily: "'Lock Serif Light', serif" }}
        >
          {title.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        {/* Skillset */}
        <motion.p
          variants={childVariants}
          style={{
            x: parallaxX_light,
            y: parallaxY_light,
            fontFamily: "'Fragment Mono', monospace",
          }}
          className="text-lg text-[#6b7a63] max-w-2xl leading-relaxed mb-12"
        >
          Software Developer specializing in D365 F&O (X++) and Business
          Central, fused with expertise in building performant web applications
          using React, Next.js, and Figma.
        </motion.p>

        {/* CTA Button with subtle detail */}
        <motion.a
          href="#work"
          variants={childVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-[#8a9a7e] text-white rounded-full font-medium tracking-wide hover:bg-[#6b7a63] transition-colors duration-300 shadow-lg shadow-[#8a9a7e]/20 relative overflow-hidden group flex items-center gap-2"
        >
          <span>View My Work</span>
          <motion.span
            className="text-xs"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          />
        </motion.a>

        {/* Scroll indicator with cute touch */}
        <motion.div
          variants={childVariants}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#a8b5a0] tracking-widest uppercase flex items-center gap-2">
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ·
            </motion.span>
            Scroll
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ·
            </motion.span>
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#8a9a7e] to-transparent"
          />
        </motion.div>
      </motion.section>

      {/* Bottom decorative accent with dots */}
      <motion.div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <motion.div
          style={{ x: parallaxX_verylight }}
          className="flex items-center gap-4"
        >
          <motion.div 
            className="w-1 h-1 rounded-full bg-[#a8b5a0]/50"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#a8b5a0]/30 to-transparent" />
          <motion.div 
            className="w-1 h-1 rounded-full bg-[#a8b5a0]/50"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};