module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.6rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '2.6rem',
      '6xl': '3rem',
      '7xl': '5rem',
    },
    screens: {
      'xm': '371px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
      '2xl': '1536px',

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
