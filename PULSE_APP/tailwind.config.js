module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Specify the files Tailwind should scan
  theme: {
    extend: {
      fontFamily: {
        'helvetica-neue': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    }, // Extend or override Tailwind CSS classes here
  },
  plugins: [], // Add any custom plugins here
};
