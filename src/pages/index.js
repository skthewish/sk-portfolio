import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Layout from '../components/Layout';
import Work from '../components/Work';
import IconButton from '../components/atomic/Button';

import resumeFile from '../assets/sukhdev-cv.pdf';

const IndexPage = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <div className='bg-background dark:bg-dark-background min-h-screen w-full relative z-0'>
        <Navbar />
        <Banner />
        <About />
        <Experience />
        <Work />
        <Contact />
        <div className='fixed bottom-2 sm:bottom-5 right-2 sm:right-5 gap-2 flex flex-col'>
          <a href={resumeFile} download='Sukhdev-CV.pdf'>
            <IconButton className='p-3 w-10 sm:w-[50px] h-10 sm:h-[50px]'>
              <StaticImage src={'../images/icons/resume.png'} alt='resume' />
            </IconButton>
          </a>

          {show && (
            <IconButton className='p-3 w-10 sm:w-[50px] h-10 sm:h-[50px]' onClick={handleClick}>
              <StaticImage src={'../images/icons/line-angle-up-icon.png'} alt='go to top' />
            </IconButton>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Sukhdev | Portfolio</title>
    <link id='icon' rel='icon' href='../images/sk-logo-sm.png' />
  </>
);
