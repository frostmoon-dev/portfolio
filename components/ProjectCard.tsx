// File: components/ProjectCard.tsx
// Mission: Sophisticated project cards with magnetic hover effects

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  url: string;
};

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  url,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="h-full group"
    >
      <Link
        href={url}
        target="_blank"
        className="block rounded-2xl overflow-hidden border border-[#a8b5a0]/30 bg-[#fcfdfb] h-full shadow-lg shadow-[#8a9a7e]/5 hover:shadow-2xl hover:shadow-[#8a9a7e]/15 transition-all duration-500 relative"
        style={{ transform: "translateZ(50px)" }}
      >
        {/* Image Container with Overlay */}
        <div className="relative w-full h-64 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="transition-all duration-500"
            />
          </motion.div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9f5] via-transparent to-transparent opacity-60" />
          
          {/* Arrow Icon */}
          <motion.div
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-5 h-5 text-[#4a5a43]" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-7">
          <motion.h3 
            className="text-2xl text-[#4a5a43] mb-3 font-light tracking-tight"
            style={{ fontFamily: "'Lock Serif Light', serif" }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <p className="text-[#6b7a63] mb-5 leading-relaxed" style={{ fontFamily: "'Fragment Mono', monospace", fontSize: "0.9rem" }}>
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-xs text-[#6b7a63] bg-[#e8ede5] px-3 py-1.5 rounded-full font-medium border border-[#a8b5a0]/20 hover:bg-[#d4e0ce] hover:border-[#8a9a7e]/40 transition-all duration-300"
                style={{ fontFamily: "'Fragment Mono', monospace" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#8a9a7e] via-[#a8b5a0] to-transparent"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </Link>
    </motion.div>
  );
};