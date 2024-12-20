/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path to match your project structure
  "./public/index.html",
];
export const theme = {
  extend: {
    colors: {
      primary: '#1E3A8A', // Custom color for buttons, headings, etc.
      secondary: '#3B82F6',
      accent: '#F59E0B',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // Custom font family
    },
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
};
export const plugins = [
  require('@tailwindcss/forms'), // For better styling of form elements
  require('@tailwindcss/typography'), // For better typography
];
