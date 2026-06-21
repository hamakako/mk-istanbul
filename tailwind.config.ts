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
          cream: "#EFE3CA",
          ink: "#141326",
          line: "#DAD6EF"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 12, 121, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
