import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import moonImg from '../images/moon.png';
import sunImg from '../images/sun.png';

import useTheme from '../utils/useTheme';

const ThemeToggle = () => {
  const { toggleTheme: changeTheme } = useTheme();
  
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        changeTheme(theme);
        return (
        <button
          onClick={() => {
            if (theme === 'dark') {
              toggleTheme('light');
              changeTheme('light');
            } else {
              toggleTheme('dark');
              changeTheme('dark');
            }
          }}
          className='h-8 w-8 p-1 dark:p-[6px] inline-block cursor-pointer border border-dark-background dark:border-background rounded-full'
        >
          {theme === 'light' && (
            <img src={moonImg} alt='dark' className='object-contain' />
          )}
          {theme === 'dark' && (
            <img src={sunImg} alt='light' className='object-contain' />
          )}
        </button>
      )}}
    </ThemeToggler>
  );
};

export default ThemeToggle;
