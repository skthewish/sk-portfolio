import React from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import { StaticImage } from 'gatsby-plugin-image';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { projects } from '../constants';
import Card from './atomic/Card';
import gallery from '../images/icons/gallery.png';
import { bounceUp, zoomIn } from '../utils/motion';

const Work = () => {
  const [open, setOpen] = React.useState(false);
  const [slides, setSlides] = React.useState([]);

  return (
    <motion.section
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.6 }}
      id='work'
      className='container w-full px-8 pt-[68px] lg:pb-[50px] flex items-center justify-center'
    >
      <div className='text-center flex flex-col items-center'>
        <motion.h1
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.6 }}
          variants={zoomIn(0, 1)}
          className='section-head-text'
        >
          Projects
        </motion.h1>

        <div className='flex flex-col lg:flex-row gap-8 justify-center items-center mt-[50px]'>
          {projects.map((project, i) => (
            <motion.div
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0.6 }}
              variants={bounceUp(50, 0.1 * i, 0.4, 1)}
              className='w-full'
              key={project.id}
            >
              <Card className='w-full lg:w-[300px] lg:h-fit'>
                <div className='w-full h-full flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-8 relative'>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setSlides(project.images);
                    }}
                  >
                    <div className='w-[100px] h-[100px] rounded-full border border-black dark:border-white bg-background grid items-center p-5 relative cursor-pointer'>
                      <img src={project.icon} alt='me' className='object-cover w-full' />
                      <img src={gallery} alt='photos' className='h-7 absolute bottom-0 right-0' />
                    </div>
                  </button>

                  <div>
                    <h4 className='whitespace-pre-line text-txt dark:text-dark-txt font-bold flex-1 flex items-center justify-center'>
                      <a href={project.link} target='_blank' rel='noopener noreferrer'>
                        {project.title}
                      </a>
                    </h4>

                    <div className='flex gap-3 mt-2 justify-center flex-wrap'>
                      {project.techIcons.map((icon, i) => (
                        <div className='w-6 h-6 grid items-center bg-background p-1 rounded-lg' key={i}>
                          <img src={icon} alt='tech icon' />
                        </div>
                      ))}
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='absolute top-[-24px] right-[-24px] h-4 w-4 m-2'
                    >
                      <StaticImage src={'../images/icons/go-to.png'} alt='go to' />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}

          <Lightbox open={open} close={() => setOpen(false)} slides={slides} plugins={[Zoom, Thumbnails]} />
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
