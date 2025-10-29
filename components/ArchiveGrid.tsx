// File: components/ArchiveGrid.tsx
// Mission: Refined archive section with cute minimalistic touches

"use client";

import { ArchiveItem } from "./ArchiveItem";
import { motion } from "framer-motion";

const archiveItems = [
  { id: "01", title: "UI Snippet", imageUrl: "/archive-1.jpg" },
  { id: "02", title: "Logo Concept", imageUrl: "/archive-2.jpg" },
  { id: "03", title: "Motion Test", imageUrl: "/archive-3.jpg" },
  { id: "04", title: "Icon Set", imageUrl: "/archive-4.jpg" },
  { id: "05", title: "Texture Study", imageUrl: "/archive-5.jpg" },
  { id: "06", title: "Early Wireframe", imageUrl: "/archive-6.jpg" },
  { id: "07", title: "Color Palette", imageUrl: "/archive-7.jpg" },
  { id: "08", title: "3D Model WIP", imageUrl: "/archive-8.jpg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const ArchiveGrid = () => {
  return (
    <section
      id="archive"
      className="py-24 bg-gradient-to-b from-[#4a5a43] to-[#3d4a38] text-[#f8f9f5] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Floating decorative dots */}
      <motion.div
        className="absolute top-32 left-20 w-2 h-2 rounded-full bg-[#c5d4bc]/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-48 right-32 w-3 h-3 rounded-full bg-[#a8b5a0]/20"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/3 w-2 h-2 rounded-full bg-[#e8ede5]/20"
        animate={{
          y: [0, -12, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="h-[2px] w-16 bg-gradient-to-r from-[#a8b5a0] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-sm text-[#c5d4bc] tracking-[0.3em] uppercase font-medium flex items-center gap-2">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ·
              </motion.span>
              Creative Vault
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                ·
              </motion.span>
            </span>
          </div>

          <h2 
            className="text-5xl md:text-6xl mb-5 font-light text-[#f8f9f5] flex items-center gap-3"
            style={{ fontFamily: "'Lock Serif Light', serif" }}
          >
            Archive
            <motion.span
              className="text-2xl text-[#c5d4bc]"
              animate={{ 
                rotate: [0, 15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              ✦
            </motion.span>
          </h2>
          
          <p 
            className="text-lg text-[#e8ede5] max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Fragment Mono', monospace" }}
          >
            A curated stash of playful, bite-sized creations and experiments—
            snapshots of the creative process.
          </p>
        </motion.div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6"
        >
          {archiveItems.map((item) => (
            <ArchiveItem key={item.id} {...item} />
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex items-center justify-center"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-[#c5d4bc]"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#a8b5a0]/30 to-transparent" />
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-[#a8b5a0]"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#a8b5a0]/30 to-transparent" />
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-[#8a9a7e]"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};