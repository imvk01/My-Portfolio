// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable manual dark mode toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-background': '#f0f4f8',     // Light mode background
        'custom-background-dark': '#111827', // Dark mode background
        'custom-card': '#ffffff',            // Light card
        'custom-card-dark': '#1f2937',       // Dark card
        'custom-accent': '#3b82f6',          // Accent color
      },
    },
  },
  plugins: [],
}