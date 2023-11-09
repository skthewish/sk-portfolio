import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';

const About = () => {
  return (
    <section
      id='about'
      className='container min-h-screen w-full px-8 py-[68px] flex items-center justify-center'
    >
      <div className='text-center flex flex-col'>
        <h1 className='text-4xl md:text-5xl 2xl:text-6xl text-txt dark:text-dark-txt font-Agbalumo'>
          Introduction
        </h1>

        <p className='mt-8 dark:text-dark-secondaryText text-secondaryText text-xl md:text-2xl 2xl:text-3xl max-w-4xl 2xl:max-w-full leading-10 md:leading-10 2xl:leading-[50px]'>
          I'm a skilled software developer with experience in designing and
          developing high-quality web applications that deliver exceptional user
          experiences, and expertise in frameworks like React.js, Next.js and
          Gatsby. I'm a quick learner and create{' '}
          <span className='text-txt dark:text-dark-txt'>efficient</span>,{' '}
          <span className='text-txt dark:text-dark-txt'>scalable</span>, and{' '}
          <span className='text-txt dark:text-dark-txt'>user-friendly</span>{' '}
          solutions that solve real-world problems. Passionate about staying
          up-to-date with emerging technologies and best practices to ensure the
          development of cutting-edge software products.
          <br />
          <span className='text-amber'>
            Let's work together to bring your ideas to life!
          </span>
        </p>

        <div className='flex flex-col md:flex-row gap-8 justify-center items-center mt-8'>
          {services.map((service) => (
            <Tilt
              className='w-full max-w-[300px] md:w-[200px]'
              key={service.id}
            >
              <div className='w-full border border-slate-300 p-8 rounded-[20px] shadow-card flex md:flex-col justify-center items-center gap-8'>
                <img
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                />
                <h4 className='whitespace-pre-line'>{service.title}</h4>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
