import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0D0D0D",
        "dark-lift": "#161616",
        cloud: "#F0EEE8",
        reflex: "#1E2FA3",
        "reflex-mid": "#3D50D4",
        periwinkle: "#7B8CDE",
        "grid-line": "rgba(240, 238, 232, 0.12)",
      },
      fontFamily: {
        display: ["var(--font-clash)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
        emphasis: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "400ms",
        slow: "800ms",
      },
      spacing: {
        18: "4.5rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.14em",
      },
    },
  },
  plugins: [],

};
export default config;
