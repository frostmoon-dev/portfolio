// File: components/ArchiveItem.tsx
// Mission: Playful archive items with smooth interactions

"use client";

import { motion } from "framer-motion";

type ArchiveItemProps = {
  title: string;
  imageUrl: string;
  id: string;
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ArchiveItem = ({ title, imageUrl, id }: ArchiveItemProps) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.08, 
        rotate: [0, -2, 2, 0],
        transition: { 
          scale: { duration: 0.3 },
          rotate: { duration: 0.4, ease: "easeInOut" }
        }
      }}
      whileTap={{ scale: 0.95 }}
      className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#e8ede5] via-[#d4e0ce] to-[#c5d4bc] group cursor-pointer shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-shadow duration-500"
    >
      {/* Decorative Pattern Background */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white rounded-full blur-xl" />
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#8a9a7e] rounded-full blur-2xl" />
        </div>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-[#6b7a63] text-4xl font-light opacity-20"
            style={{ fontFamily: "'Lock Serif Light', serif" }}
            whileHover={{ scale: 1.1, opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            {id}
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-[#4a5a43]/95 via-[#4a5a43]/60 to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Title Overlay */}
      <motion.div 
        className="absolute inset-0 flex items-end justify-center p-4"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <p 
          className="text-white text-center text-sm font-medium tracking-wide"
          style={{ fontFamily: "'Fragment Mono', monospace" }}
        >
          {title}
        </p>
      </motion.div>

      {/* Number Badge */}
      <motion.div
        className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center z-20 shadow-xl shadow-black/20"
        whileHover={{ 
          rotate: 360,
          scale: 1.1,
        }}
        transition={{ 
          rotate: { duration: 0.6, ease: "easeInOut" },
          scale: { duration: 0.2 }
        }}
      >
        <span 
          className="text-[#4a5a43] font-bold text-sm"
          style={{ fontFamily: "'Fragment Mono', monospace" }}
        >
          {id}
        </span>
      </motion.div>

      {/* Corner Accent Triangle */}
      <motion.div 
        className="absolute bottom-0 right-0 w-0 h-0 border-l-[32px] border-l-transparent border-b-[32px] border-b-[#a8b5a0]"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        style={{ transformOrigin: "bottom right" }}
      />

      {/* Subtle shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%", y: "-100%" }}
        whileHover={{ x: "100%", y: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
};