import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className='container relative min-h-screen w-full px-8 py-[68px] flex items-center justify-center'>
      <div className='text-center flex flex-col items-center'>
        <h1 className='banner-head-text'>
          Hey! I'm <span className='text-amber font-Agbalumo'>Sukhdev</span>
        </h1>
        <h6 className='banner-sub-text mt-6'>
          I Develop Responsive User Interfaces <br className='hidden md:block 2xl:hidden' /> and Web Applications
        </h6>
        <div className='w-full md:w-[80%] mt-10'>
          <StaticImage src='../images/new-pc.png' alt='pc-screen' />
        </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[40px] rounded-3xl border-2 border-black dark:border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-2 h-2 rounded-full bg-black dark:bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Banner;
