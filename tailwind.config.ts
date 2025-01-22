import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        secondary: "#FBaf85",
        black: "#101010",
        darkGray: "#979797",
        lightGray1: "#F1F1F1",
        lightGray2: "#FAFAFA",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn-primary": {
          backgroundColor: "#D87D4A", // Primary brown color
          color: "#FFFFFF", // White text
          padding: "0.75rem 1.5rem", // Adjust padding as needed
          fontWeight: "600",
          borderRadius: "0.375rem", // Slightly rounded corners
          textAlign: "center",
          display: "inline-block",
          transition: "background-color 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#C56C3B", // Darker brown on hover
          },
          "&:focus": {
            outline: "2px solid #D87D4A",
            outlineOffset: "2px",
          },
        },
      });
    }),
  ],
} satisfies Config;
