import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#2196F3",
        "editor-border": "#e7e5e4",
        "text-primary": "#292524",
        "text-secondary": "#57534e",
        "text-muted": "#a8a29e",
      },
      fontFamily: {
        noto: ["var(--font-noto)"],
        "courier-prime": ["var(--font-courier-prime)"],
      },
      keyframes: {
        "hero-fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "hero-slide-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-slide-left": {
          from: { opacity: "0", transform: "translateX(-24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "hero-slide-right": {
          from: { opacity: "0", transform: "translateX(24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "hero-pop": {
          "0%": { opacity: "0", transform: "scale(0.6)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "vinyl-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "badge-swing": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "board-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "vinyl-spin": "vinyl-spin 6s linear infinite",
        "badge-swing": "badge-swing 4s ease-in-out infinite",
        "board-float": "board-float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
