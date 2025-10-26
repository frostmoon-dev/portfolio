// File: tailwind.config.ts
// Mission: Configure Tailwind with sage green color palette

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sage Green Palette
        sage: {
          50: "#f8f9f5",   // lightest cream
          100: "#f0f4ed",  // very light sage
          200: "#e5ede0",  // light sage
          300: "#c5d4bc",  // soft sage
          400: "#a8b5a0",  // medium sage
          500: "#8a9a7e",  // sage green (primary)
          600: "#6b7a63",  // darker sage
          700: "#4a5a43",  // deep sage
          800: "#3a4735",  // very deep sage
          900: "#2a3328",  // darkest
        },
        // Keep your original brand colors as aliases
        "brand-gray-dark": "#111111",
        "brand-gray": "#EDEDED",
        "brand-gray-light": "#A8A8A8",
        "brand-gray-border": "#2A2A2A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lock Serif Light", "Georgia", "serif"],
        script: ["Biro Script reduced Regular", "cursive"],
        mono: ["Fragment Mono", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-sage": "linear-gradient(135deg, #f8f9f5 0%, #e5ede0 100%)",
        "gradient-sage-radial": "radial-gradient(circle, #c5d4bc 0%, #8a9a7e 100%)",
      },
      boxShadow: {
        "sage-sm": "0 2px 8px rgba(138, 154, 126, 0.1)",
        "sage-md": "0 4px 16px rgba(138, 154, 126, 0.15)",
        "sage-lg": "0 8px 32px rgba(138, 154, 126, 0.2)",
        "sage-xl": "0 16px 48px rgba(138, 154, 126, 0.25)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;