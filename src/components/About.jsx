import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';

const About = () => {
  return (
    <section id='about' className='container min-h-screen w-full px-8 pt-[68px] flex items-center justify-center'>
      <div className='text-center flex flex-col'>
        <h1 className='section-head-text'>Introduction</h1>

        <p className='section-sub-text mt-8'>
          I'm a skilled software developer with experience in designing and developing high-quality web applications
          that deliver exceptional user experiences, and expertise in frameworks like React.js, Next.js and Gatsby. I'm
          a quick learner and create <span className='text-txt dark:text-dark-txt'>efficient</span>,{' '}
          <span className='text-txt dark:text-dark-txt'>scalable</span>, and{' '}
          <span className='text-txt dark:text-dark-txt'>user-friendly</span> solutions that solve real-world problems.
          Passionate about staying up-to-date with emerging technologies and best practices to ensure the development of
          cutting-edge software products.
          <br />
          <span className='text-amber'>Let's work together to bring your ideas to life!</span>
        </p>

        <div className='flex flex-col md:flex-row gap-8 justify-center items-center mt-8'>
          {services.map((service) => (
            <Tilt className='w-full max-w-[300px] md:w-[200px]' key={service.id}>
              <div className='w-full border border-slate-700 dark:border-slate-300 p-8 rounded-[20px] shadow-card dark:shadow-dark-card flex md:flex-col justify-center items-center gap-8'>
                <div className='w-[80px] md:w-[100px] h-[80px] md:h-[100px] grid items-center'>
                  <img src={service.icon} alt={service.title} className='object-contain' />
                </div>
                <h4 className='whitespace-pre-line text-txt dark:text-dark-txt font-bold'>{service.title}</h4>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
