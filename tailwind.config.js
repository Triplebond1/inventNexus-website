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
      'gray' : {
        '50' :'E6E6E6',
        '100': '#DADADA',
        '150': '#CFCFCF',
        '200': '#C4C4C4',
        '250': '#B8B8B8',
        '300': '#ADADAD',
        '350': '#A2A2A2',
        '400': '#969696',
        '450': '#8B8B8B',
        '500': '#808080', // Base color
        '550': '#747474',
        '600': '#696969',
        '650': '#5E5E5E',
        '700': '#525252',
        '750': '#474747',
        '800': '#3C3C3C',
        '850': '#303030',
        '900': '#252525',
        '950': '#1A1A1A'
      },
      
      black: "#000000",
      white: "#ffffff",
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
