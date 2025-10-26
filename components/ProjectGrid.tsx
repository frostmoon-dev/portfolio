// File: components/ProjectGrid.tsx
// Mission: Elegant project showcase with staggered animations

"use client";

import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Company Website Redesign",
    description: "Led a complete WordPress website transformation, implementing cohesive branding, modern design patterns, and an improved user experience that elevated the company's digital presence.",
    imageUrl: "/company.png",
    tags: ["WordPress", "Branding", "Web Design", "UI/UX"],
    url: "#",
  },
  {
    title: "Personal Portfolio",
    description: "Crafted this elegant portfolio using Next.js and Framer Motion, featuring smooth animations, 3D interactions, and a sophisticated sage green aesthetic to showcase my work beautifully.",
    imageUrl: "/portfolio.png",
    tags: ["Next.js", "React", "Framer Motion", "Tailwind"],
    url: "#",
  },
  {
    title: "Power BI Analytics Dashboard",
    description: "Designed and developed interactive Power BI dashboards to visualize complex business data, enabling stakeholders to make data-driven decisions with elegant, intuitive visualizations.",
    imageUrl: "/placeholder-3.jpg",
    tags: ["Power BI", "DAX", "Data Visualization", "Analytics"],
    url: "#",
  },
  {
    title: "Electron To-Do List App",
    description: "Built a cross-platform desktop task management application using Electron, combining the flexibility of web technologies with native desktop performance and functionality.",
    imageUrl: "/todoapp.png",
    tags: ["Electron", "JavaScript", "Desktop App", "Node.js"],
    url: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const ProjectGrid = () => {
  return (
    <section id="work" className="py-24 bg-gradient-to-b from-[#f8f9f5] to-[#f0f4ed] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c5d4bc] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#a8b5a0] rounded-full blur-3xl" />
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
              className="h-[2px] w-16 bg-gradient-to-r from-[#8a9a7e] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span 
              className="text-sm text-[#8a9a7e] tracking-[0.3em] uppercase font-medium"
              style={{ fontFamily: "'Fragment Mono', monospace" }}
            >
              Featured Work
            </span>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl text-[#4a5a43] mb-5 font-light"
            style={{ fontFamily: "'Lock Serif Light', serif" }}
          >
            Selected Projects
          </h2>
          
          <p 
            className="text-lg text-[#6b7a63] max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Fragment Mono', monospace" }}
          >
            A curated collection of enterprise solutions and creative digital experiences,
            bridging robust backend systems with elegant user interfaces.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#8a9a7e]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#a8b5a0]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#c5d4bc]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};