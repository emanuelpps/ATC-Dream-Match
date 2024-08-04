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
        "intro-background": "url('/assets/images/background-grass.jpg')",
        "home-background": "url('/assets/images/grass-green-stadium.jpg')",
        "mobile-background": "url('/assets/images/mobile-background.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
