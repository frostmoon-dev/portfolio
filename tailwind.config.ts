import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF0DE",
        "cream-soft": "#FFF8EC",
        paper: "#FFFBF4",
        note: "#FDF3D8",
        ink: "#3D2B29",
        "ink-soft": "#5B4340",
        "ink-muted": "#7A615D",
        burgundy: "#694A47",
        "burgundy-deep": "#4D3432",
        teal: "#96C1C5",
        "teal-deep": "#41656A",
        "teal-tint": "#EEF5F5",
        "teal-pale": "#E8F1F1",
        rose: "#C98B86",
        "rose-deep": "#9A5F58",
        "rose-tint": "#F8E8E4",
        sage: "#A9BA96",
        "sage-deep": "#5F7550",
        "sage-tint": "#EFF3E8",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        soft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".3" },
        },
        fill: {
          from: { width: "4%" },
          to: { width: "100%" },
        },
        bob: {
          "0%, 100%": { transform: "rotate(-5deg) translateY(0)" },
          "50%": { transform: "rotate(-5deg) translateY(-5px)" },
        },
        tick: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        soft: "soft 2.6s ease-in-out infinite",
        fill: "fill 1.1s ease-out forwards",
        bob: "bob 5.5s ease-in-out infinite",
        ticker: "tick 42s linear infinite",
        "ticker-reverse": "tick 52s linear infinite reverse",
        rise: "rise .5s cubic-bezier(.22,.61,.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
