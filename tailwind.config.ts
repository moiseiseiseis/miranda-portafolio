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
        brand: {
          dark: "#30253E",   /* Tu fondo principal oscuro */
          lime: "#C3C88C",   /* Acentos vibrantes */
          forest: "#638872", /* Botones secundarios o tarjetas */
          teal: "#80B9B1",   /* Detalles / Hover */
          mint: "#94C7B4",   /* Textos destacados o iconos */
        },
      },
      fontFamily: {
        grotesque: ['var(--font-grotesque)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;