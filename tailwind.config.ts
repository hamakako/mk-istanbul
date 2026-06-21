import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        mk: {
          navy: "#170C79",
          teal: "#8ACBD0",
          cyan: "#56B6C6",
          cream: "#EFE3CA",
          ink: "#141326",
          line: "#D8D1EA"
        }
      },
      boxShadow: {
        soft: "0 16px 36px rgba(23, 12, 121, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
