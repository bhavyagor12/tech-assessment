import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: {
          primary: {
            DEFAULT: "#006258",
            hover: "#8AB7B2",
            disabled: "#006258",
          },
          secondary: "#FFFFFF",
          text: {
            primary: "#F7F7F8",
            secondary: "#ABAFB4",
            disabled: "#ABAFB4",
            buttonText: "#FFFFFF",
          },
          elevation: {
            background: "#080A0B",
            elevation1: "#0C0E10",
            elevation2: "#111315",
            elevation3: "#16181A",
          },
          states: {
            success: {
              main: "#27D17F",
              elevation1: "#27D17F1A", // 10% Opacity
              elevation2: "#27D17F80", // 50% Opacity
            },
            error: "#F44336",
            warning: "#FFC107",
          },
        },
        light: {
          primary: {
            DEFAULT: "#006258",
            hover: "#3E8F77",
            disabled: "#3E8F77",
          },
          secondary: "#000000",
          text: {
            primary: "#0C0F0E",
            secondary: "#3B3B3B",
            disabled: "#ABAFB4",
            buttonText: "#FFFFFF",
          },
          elevation: {
            background: "#F9F9F9",
            elevation1: "#F1F1F1",
            elevation2: "#E8E8E8",
            elevation3: "#DFDFDF",
          },
          states: {
            success: {
              main: "#28A745",
              elevation1: "#3E8F772F", // 25% Opacity
              elevation2: "#27D17F80", // 50% Opacity
            },
            error: "#F44336",
            warning: "#FFC107",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
