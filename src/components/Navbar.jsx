import React, { useState } from 'react';
import { Link } from 'gatsby';

import ThemeToggle from './atomic/ThemeToggle';

import { navLinks } from '../constants';
import useTheme from '../utils/useTheme';

import logoBlue from '../images/logo-blue.png';
import logoLight from '../images/sk-logo.png';
import menuDark from '../images/icons/menu-dark.png';
import menuLight from '../images/icons/menu-light.png';

const Navbar = () => {
  const [active, setActive] = useState('/');
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();

  return (
    <div className='container'>
      <nav className='container py-4 px-8 bg-background dark:bg-dark-background flex items-center justify-between fixed top-0 z-20'>
        <Link to={`/`}>
          <div className='w-[60px] sm:w-[80px]' onClick={() => setActive('/')} aria-hidden='true'>
            {theme === 'light' && <img src={logoBlue} alt='logo' />}
            {theme === 'dark' && <img src={logoLight} alt='logo' />}
          </div>
        </Link>

        <div className='flex items-center gap-10'>
          <ul className='list-none hidden sm:flex flex-row gap-6 md:gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-black dark:text-white' : 'text-secondaryText dark:text-dark-txt'
                } hover:text-black hover:dark:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
                aria-hidden='true'
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />

          {/* Toggle Button Mobile View */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <button className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)}>
              {theme === 'light' && <img src={menuDark} alt='logo' />}
              {theme === 'dark' && <img src={menuLight} alt='logo' />}
            </button>

            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-14 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? 'dark:text-white' : 'text-dark-txt'
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                    aria-hidden='true'
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
