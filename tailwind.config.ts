import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "main-nav": "68px"
      },
      colors: {
        primary: "#004D57",
        secondary: "#F0F0F0",
        accent: "#1E8572"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(black 1px, transparent 0))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "projects": "0 0.5rem 1rem -0.4rem #004D57",
        "nav": "0 0.1rem 1rem -0.1rem #004D57",
        "heading": "0 0.1rem 1rem -0.3rem #004D57",
        "buttons": "0 0.1rem 1rem -0.3rem #004D57",
        "project-details": "0 0.1rem 1rem -0.3rem #004D57",
      },
      screens: {
        'mobile-lg': '27rem',
        'tablet': '50em',
        'laptop': '60em',
        'desktop': '75em'
      }
    },
  },
  plugins: [],
};
export default config;
