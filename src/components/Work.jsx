import React from 'react';
import { Link } from 'gatsby';

import { projects } from '../constants';
import Card from './atomic/Card';
import gallery from '../images/icons/gallery.png';

const Work = () => {
  return (
    <section id='work' className='container w-full px-8 pt-[68px] lg:pb-[50px] flex items-center justify-center'>
      <div className='text-center flex flex-col items-center'>
        <h1 className='section-head-text'>What I have done so far</h1>

        <div className='flex flex-col md:flex-row gap-8 justify-center items-center mt-[50px]'>
          {projects.map((project) => (
            <Card key={project.id} className='w-full md:w-[200px] lg:w-[300px] md:h-[250px] lg:h-fit'>
              <div className='w-full h-full flex md:flex-col justify-center items-center gap-8'>
                <div className='w-[100px] h-[100px] rounded-full border border-black dark:border-white bg-background grid items-center p-5 relative cursor-pointer'>
                  <img src={project.icon} alt='me' className='object-cover w-full' />
                  <img src={gallery} alt='photos' className='h-7 absolute bottom-0 right-0' />
                </div>

                <h4 className='whitespace-pre-line text-txt dark:text-dark-txt font-bold flex-1 flex items-center justify-center'>
                  <Link to={project.link} target='_blank'>
                    {project.title}
                  </Link>
                </h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
