import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className='container relative min-h-screen w-full px-8 py-[68px] flex items-center justify-center'>
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
			<div className='absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[40px] rounded-3xl border-2 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Banner;
