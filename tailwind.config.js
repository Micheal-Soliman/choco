/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          50: '#fdf8f3',
          100: '#f8ede3',
          200: '#f0d9c7',
          300: '#e4c4a8',
          400: '#d4a574',
          500: '#c4885f',
          600: '#a86f47',
          700: '#8b5a3c',
          800: '#6f4a35',
          900: '#5a3d2d',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e8',
          300: '#f5ebdb',
          400: '#ede0c8',
          500: '#e3d2b3',
          600: '#d4be96',
          700: '#bfa77a',
          800: '#a08760',
          900: '#7d6a4c',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
    },
  },
  plugins: [],
}
