/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blaze-orange': {
          '50': '#fff8ec',
          '100': '#fff0d3',
          '200': '#ffdca5',
          '300': '#ffc26d',
          '400': '#ff9d32',
          '500': '#ff7f0a',
          '600': '#ff6600',
          '700': '#cc4902',
          '800': '#a1390b',
          '900': '#82310c',
          '950': '#461604',
      },
      black: "#000000",
      white: "#ffffff",
      gray: "#fafafa",
      'dark-Gray': "#A9A9A9",
      slate: "#c2c9cd",
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },


    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
