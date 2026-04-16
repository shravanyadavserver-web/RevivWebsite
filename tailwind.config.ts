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
        primary: "#0B20B5",
        "primary-dark": "#081890",
        "primary-light": "#E8EBFA",
        accent: "#F5A623",
        navy: "#041E42",
        "section-bg": "#EDF2FA",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
