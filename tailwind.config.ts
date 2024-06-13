import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Red": "hsl(1, 90%, 64%)",
        "Blue": "hsl(219, 85%, 26%)",
        "White": "hsl(0, 0%, 100%)",
        "Very-Light-Grayish-Blue": "hsl(210, 60%, 98%)",
        "Light-Grayish-Blue-1": "hsl(211, 68%, 94%)",
        "Light-Grayish-Blue-2": "hsl(205, 33%, 90%)",
        "Grayish-Blue": "hsl(219, 14%, 63%)",
        "Dark-Grayish-Blue": "hsl(219, 12%, 42%)",
        "Very-Dark-Blue": "hsl(224, 21%, 14%)"
      }
    },
  },
  plugins: [],
};
export default config;
