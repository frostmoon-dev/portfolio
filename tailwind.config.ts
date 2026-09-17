import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFF0DE",
        surface: "#FFFBF3",
        "surface-alt": "#F3E1C4",
        ink: "#4A3230",
        "ink-muted": "#6E5549",
        primary: "#694A47",
        "primary-dark": "#4A3230",
        secondary: "#96C1C5",
        "secondary-ink": "#3F6C71",
        accent: "#EFB8B4",
        "accent-ink": "#8A4A46",
        border: "#D8C4AE",
        success: "#7C9A6F",
        warning: "#C98A2E",
        error: "#B3564A",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        hand: ["var(--font-hand)"],
      },
      keyframes: {
        "pin-wiggle": {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        blink: "blink 1.4s step-start infinite",
      },
    },
  },
  plugins: [],
};

export default config;
