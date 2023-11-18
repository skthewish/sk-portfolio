import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { projects } from '../constants';
import Card from './atomic/Card';
import gallery from '../images/icons/gallery.png';
import goTo from '../images/icons/go-to.png';
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
        <motion.h1 variants={zoomIn(0, 1)} className='section-head-text'>
          What I have done so far
        </motion.h1>

        <div className='flex flex-col md:flex-row gap-8 justify-center items-center mt-[50px]'>
          {projects.map((project, i) => (
            <motion.div variants={bounceUp(50, 0.1 * i, 0.4, 1)} className='w-full'>
              <Card key={project.id} className='w-full md:w-[200px] lg:w-[300px] md:h-[250px] lg:h-fit'>
                <div className='w-full h-full flex md:flex-col justify-center items-center gap-8 relative'>
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

                  <h4 className='whitespace-pre-line text-txt dark:text-dark-txt font-bold flex-1 flex items-center justify-center'>
                    <Link to={project.link} target='_blank' rel='noopener noreferrer'>
                      {project.title}
                    </Link>
                  </h4>
                  {project.link && (
                    <Link
                      to={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='absolute bottom-[-24px] right-[-24px]'
                    >
                      <img src={goTo} alt='go to' className='h-4 m-2' />
                    </Link>
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
