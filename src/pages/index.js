import * as React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <div className='bg-background dark:bg-dark-background min-h-screen w-full relative z-0'>
      <Navbar />
      <Banner />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Sukhdev | Portfolio</title>;
