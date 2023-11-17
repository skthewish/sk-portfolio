import React from 'react';
import { motion } from 'framer-motion';
import Avatar from './atomic/Avatar';
import pc from '../images/pc.png';

const Banner = () => {
  return (
    <section className='container relative min-h-screen w-full px-8 pt-[68px] flex items-center justify-center'>
      <div className='text-center flex flex-col items-center'>
        <Avatar />
        <h1 className='banner-head-text mt-[60px] sm:mt-6'>
          Hey! I'm <span className='text-amber font-Agbalumo'>Sukhdev</span>
        </h1>
        <h6 className='banner-sub-text mt-6'>
          I Develop Responsive User Interfaces <br className='hidden md:block lg:hidden' /> and Web Applications
        </h6>
        <div className='w-full md:w-[80%] lg:max-w-[75%] mt-[60px] sm:mt-10'>
          <img src={pc} alt='pc-screen' />
        </div>
      </div>
      <div className='hidden absolute xs:bottom-10 bottom-4 w-full md:flex justify-center items-center'>
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
