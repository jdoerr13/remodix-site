/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          brand: ['Cinzel', 'serif'], // For REMODIX title
        },
        letterSpacing: {
          wide: '0.05em',
        },
        keyframes: {
          'flip-logo': {
            '0%, 100%': {
              transform: 'rotateY(0deg)',
              opacity: '1',
            },
            '50%': {
              transform: 'rotateY(180deg)',
              opacity: '0.3',
            },
          },
        },
        animation: {
          'flip-logo': 'flip-logo 4s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  };
  