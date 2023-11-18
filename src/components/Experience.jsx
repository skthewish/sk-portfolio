import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import useTheme from '../utils/useTheme';
import { zoomIn } from '../utils/motion';

const Experience = () => {
  const { theme } = useTheme();
  return (
    <section id='experience' className='container min-h-screen w-full px-8 pt-[68px] flex items-center justify-center'>
      <div className='text-center flex flex-col items-center'>
        <motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.6 }}>
          <motion.h4 variants={zoomIn(0, 0.5)} className='section-sub-text'>
            What I have done so far
          </motion.h4>
          <motion.h1 variants={zoomIn(0, 0.5)} className='section-head-text'>
            Work Experience
          </motion.h1>
        </motion.div>

        <div className='mt-8'>
          <VerticalTimeline
            lineColor={theme === 'light' ? '#94a3b8' : '#cbd5e1'}
            className='before:!left-2 xs:before:!left-5 screen1174:before:!left-[50%]'
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

function ExperienceCard({ experience }) {
  const { theme } = useTheme();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'transparent',
        color: theme === 'light' ? '#94a3b8' : '#cbd5e1',
        border: `1px solid ${theme === 'light' ? '#94a3b8' : '#cbd5e1'}`,
        boxShadow: `0 3px 0 ${theme === 'light' ? '#94a3b8' : '#cbd5e1'}`
      }}
      className='[&>div]:ml-10 xs:[&>div]:ml-[60px] [&>div]:top-[-12px] xs:[&>div]:top-[-4px]'
      contentArrowStyle={{ borderRight: `7px solid ${theme === 'light' ? '#94a3b8' : '#cbd5e1'}` }}
      date={experience.date}
      dateClassName='!inline-block !relative !top-0 !left-0 !right-0 !float-left !text-left text-secondaryText dark:text-dark-secondaryText !text-[12px] !font-semibold'
      iconStyle={{ boxShadow: `0 0 0 4px ${theme === 'light' ? '#94a3b8' : '#cbd5e1'}` }}
      iconClassName='bg-background dark:bg-dark-background !w-[20px] xs:!w-[40px] screen1174:!w-[60px] !h-[20px] xs:!h-[40px] screen1174:!h-[60px]'
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.companyName}
            className='w-[60%] h-[60%] object-contain opacity-80'
          />
        </div>
      }
    >
      <div className='text-left'>
        <h3 className='text-txt dark:text-dark-txt text-xl md:text-2xl font-bold'>{experience.title}</h3>
        <p className='text-secondaryText dark:text-dark-secondaryText text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.companyName}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 text-left'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-secondaryText dark:text-dark-secondaryText text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export default Experience;
