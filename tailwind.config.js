/** @type {import('tailwindcss').Config} */

import {
  AMBER,
  BLACK,
  SLATE300,
  SLATE400,
  SLATE600,
  SLATE700,
  WHITE
} from './src/constants/colors';

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`
  ],
  darkMode: 'class',
  theme: {
    colors: {
      background: WHITE,
      txt: SLATE700,
      secondaryText: SLATE600,
      white: WHITE,
      black: BLACK,
      amber: AMBER,
      dark: {
        background: BLACK,
        txt: SLATE300,
        secondaryText: SLATE400
      }
    },
    extend: {
      fontFamily: {
        Agbalumo: ['Agbalumo', 'Poppins']
      }
    }
  },
  plugins: []
};
