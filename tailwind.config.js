module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,tsx,ts,js,jsx}', './src/*.{html,tsx,ts,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        raulroboto: ['var(--font-roboto)'],
        raulmono: ['var(--font-spacemono)'],
      },
      textShadow: {
        text: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        basicInset: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        basic: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        basic: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        xxs: '270px',
        xs: '375px',
        xsm: '550px',
        sm: '640px',
        md: '820px',
        mmd: '846px',
        mlg: '980px',
        lg: '1024px',
        xlg: '1191px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        darkBlack: '#1d2021',
        darkGray: '#282828',
        lightGray: '#fbf1c7',
        teal: '#458588',
        red: '#cc241d',
        softGreen: '#98971a',
        offWhite: '#f5f5f5',
        softOrange: '#d79921',
      },
    },
    gridTemplateColumns: {
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridRow: {
      'span-16': 'span 16 / span 16',
    },
    gridRowStart: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    gridRowEnd: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-dark-mode')(),
    require('tailwindcss-textshadow'),
  ],
}
