/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1D4ED8", 
          secondary: "#64748B",
          background: "#F8FAFC",
          card: "#FFFFFF", 
        },
        borderRadius: {
          xl: "1rem",
        },
        spacing: {
          'card-padding': '1.5rem',
        },
      },
    },
    plugins: [],
  };
  