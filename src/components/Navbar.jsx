import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import menuImg from '../images/icons/menu.svg';

import ThemeToggle from './ThemeToggle';

import { navLinks } from '../constants';
import useTheme from '../utils/useTheme';

const Navbar = () => {
  const [active, setActive] = useState('/');
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useTheme();

  return (
    <div className='container'>
      <nav className='container py-4 px-8 bg-background dark:bg-dark-background flex items-center justify-between fixed top-0 z-20'>
        <Link to={`/`}>
          <div className='w-[80px]' onClick={() => setActive('/')} aria-hidden="true">
            {theme === 'light' ? (
              <StaticImage src='../images/logo-blue.png' alt='logo' />
            ) : (
              <StaticImage src='../images/sk-logo.png' alt='logo' />
            )}
          </div>
        </Link>

        <div className='flex items-center gap-10'>
          <ul className='list-none hidden sm:flex flex-row gap-4 sm:gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? 'text-black dark:text-white'
                    : 'text-secondaryText dark:text-dark-txt'
                } hover:text-black hover:dark:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
                aria-hidden="true"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle changeTheme={setTheme} />

          {/* Toggle Button Mobile View */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={menuImg}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
              aria-hidden="true"
            />

            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title
                        ? 'text-black dark:text-white'
                        : 'text-secondaryText dark:text-dark-txt'
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                    aria-hidden="true"
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
