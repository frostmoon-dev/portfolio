// File: components/ArchiveGrid.tsx
// Mission: Refined archive section with elegant grid layout

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
            <span className="text-sm text-[#c5d4bc] tracking-[0.3em] uppercase font-medium">
              Creative Vault
            </span>
          </div>

          <h2 
            className="text-5xl md:text-6xl mb-5 font-light text-[#f8f9f5]"
            style={{ fontFamily: "'Lock Serif Light', serif" }}
          >
            Archive
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

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-[#a8b5a0]/30 to-transparent"
        />
      </div>
    </section>
  );
};