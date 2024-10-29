tailwind.config.js
export default {
  content: [
    "./**/*.{html,js,jsx,ts,tsx}", // Match all files for testing
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
// type.import('tailwind.css').Config 
// export default {
//   content: [
//     "./index.html",                     // Main HTML file
//     "./src/**/*.{js,jsx,ts,tsx,html}",  // All JS/TS/HTML files in `src`
//     "./src/components/**/*.{js,jsx,ts,tsx}", // Components directory
//     "./src/pages/**/*.{js,jsx,ts,tsx}", // Pages directory
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           50: '#f0f9ff',
//           100: '#e0f2fe',
//           200: '#bae6fd',
//           300: '#7dd3fc',
//           400: '#38bdf8',
//           500: '#0ea5e9',
//           600: '#0284c7',
//           700: '#0369a1',
//           800: '#075985',
//           900: '#0c4a6e',
//         },
//       },
//     },
//   },
//   plugins: [],
// };


