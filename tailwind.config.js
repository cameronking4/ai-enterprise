const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      pointerEvents: ['group-hover'],
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0e1016',
      },
      linearGradients: {
        'bg-top': ['180deg', '#0e1016 0%', 'transparent 50%'],
        'bg-bottom': ['0deg', '#0e1016 0%', 'transparent 100%'],
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require('tailwind-scrollbar'),
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}