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
        navy: {
          DEFAULT: "#050e1f",
          2: "#0a1628",
          3: "#0f2040",
        },
        blue: {
          DEFAULT: "#1a6ef5",
          2: "#2d7ff9",
          3: "#4d93fa",
        },
        cyan: {
          fleet: "#00d4aa",
          2: "#00f0c0",
        },
        slate: {
          fleet: "#7a8fa6",
          2: "#a8bace",
        },
        white: {
          fleet: "#f0f6ff",
          2: "#d6e4f7",
        },
        border: {
          fleet: "#1a2d45",
          2: "#243d5c",
        },
      },
      fontFamily: {
        sans: ["var(--font-space)", "system-ui", "sans-serif"],
        body: ["var(--font-dm)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-dot": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
