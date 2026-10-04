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
        background: "var(--bg-primary)",
        "text-light": "var(--text-light)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        editorial: ["var(--font-editorial)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        main: ["var(--font-main)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
