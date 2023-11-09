/** @type {import('tailwindcss').Config} */

import { AMBER, BLACK, SLATE300, SLATE400, SLATE600, SLATE700, WHITE } from './src/constants/colors';

module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: WHITE,
        txt: SLATE700,
        secondaryText: SLATE600,
        amber: AMBER,
        dark: {
          background: BLACK,
          txt: SLATE300,
          secondaryText: SLATE400
        }
      },
      fontFamily: {
        Agbalumo: ['Agbalumo', 'Poppins']
      },
      boxShadow: {
        card: '0px 35px 120px -15px #d7d7d7',
        'dark-card': '0px 35px 120px -15px #353343'
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')"
      }
    }
  },
  plugins: []
};
