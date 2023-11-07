import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { navLinks } from '../constants';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <div className='container'>
      <nav className='container py-4 px-8 bg-background dark:bg-dark-background flex items-center justify-between fixed top-0 z-20'>
        <Link to={`/`}>
          <div className='w-[80px]' onClick={() => setActive('/')}>
            <StaticImage src='../images/sk-logo.png' alt='logo' />
          </div>
        </Link>
        <div className='flex items-center gap-10'>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? 'text-black dark:text-white'
                    : 'text-secondaryText dark:text-dark-txt'
                } hover:text-black hover:dark:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
