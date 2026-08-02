import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#007BFF",
          cyan: "#00BFFF",
          slate: "#36454F",
          dark: "#0A0E14",
          panel: "#10161F",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(0,123,255,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(0,191,255,0.12), transparent 40%)",
      },
    },
  },
  plugins: [],
};
export default config;
