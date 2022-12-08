/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'redOrange': '#B85C38',
      'darkBrown': '#2D2424',
      'lightBrown': '#5C3D2E',
      'cream': '#E0C097',
      'brokenWhite': '#E4DCCF',
      'darkTeal': '#576F72',
      'lightTeal': '#7D9D9C',
      'grey': '#F0EBE3'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
