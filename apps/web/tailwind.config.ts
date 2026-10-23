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
        primary: {
          DEFAULT: "#10B981", // Emerald-500: Healthy Green
          hover: "#059669",
          light: "#D1FAE5",
        },
        accent: {
          DEFAULT: "#F97316", // Warm Tangerine
          hover: "#EA580C",
          light: "#FFEDD5",
        },
        expiry: {
          fresh: "#10B981",
          warning: "#F59E0B",
          urgent: "#EF4444",
        }
      },
    },
  },
  plugins: [],
};
export default config;
