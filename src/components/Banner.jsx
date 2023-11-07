import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Banner = () => {
  return (
    <section className='container min-h-screen w-full px-8 py-[68px] flex items-center justify-center'>
      <div className='text-center flex flex-col items-center'>
        <h1 className='text-6xl text-txt dark:text-dark-txt font-Agbalumo'>
          Hey! I'm <span className='text-amber font-Agbalumo'>Sukhdev</span>
        </h1>
        <h6 className='text-2xl mt-6 leading-10 text-secondaryText dark:text-dark-secondaryText'>
          I Develop Responsive User Interfaces <br /> and Web Applications
        </h6>
        <div className='w-[60%] mt-8'>
          <StaticImage src='../images/new-pc.png' alt='pc-screen' />
        </div>
      </div>
    </section>
  );
};

export default Banner;
