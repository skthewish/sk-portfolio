import React from 'react';
import { motion } from 'framer-motion';

import { services } from '../constants';
import Card from './atomic/Card';
import { bounceUp, zoomIn } from '../utils/motion';

const About = () => {
  return (
    <section id='about' className='container min-h-screen w-full px-8 pt-[68px] flex flex-col items-center justify-center'>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.6 }}
        className='text-center flex flex-col'
      >
        <motion.h1 variants={zoomIn(0, 0.5)} className='section-head-text'>
          Introduction
        </motion.h1>

        <motion.p variants={bounceUp(50, 0, 0.4, 1)} className='section-sub-text mt-8'>
          I'm a skilled software developer with experience in designing and developing high-quality web applications
          that deliver exceptional user experiences, and expertise in frameworks like React.js, Next.js and Gatsby. I'm
          a quick learner and create <span className='text-txt dark:text-dark-txt'>efficient</span>,{' '}
          <span className='text-txt dark:text-dark-txt'>scalable</span>, and{' '}
          <span className='text-txt dark:text-dark-txt'>user-friendly</span> solutions that solve real-world problems.
          Passionate about staying up-to-date with emerging technologies and best practices to ensure the development of
          cutting-edge software products.
          <br />
          <span className='text-amber'>Let's work together to bring your ideas to life!</span>
        </motion.p>
      </motion.div>

      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.5 }}
        className='flex flex-col md:flex-row gap-8 justify-center items-center mt-8'
      >
        {services.map((service, i) => (
          <motion.div variants={bounceUp(50, 0.1 * i, 0.4, 1)}>
            <Card className='w-full max-w-[300px] md:w-[200px]'>
              <div className='w-full flex md:flex-col justify-center items-center gap-8'>
                <div className='w-[80px] md:w-[100px] h-[80px] md:h-[100px] grid items-center'>
                  <img src={service.icon} alt={service.title} className='object-contain' />
                </div>
                <h4 className='whitespace-pre-line text-txt dark:text-dark-txt font-bold'>{service.title}</h4>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
