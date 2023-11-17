import * as React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Layout from '../components/Layout';
import Work from '../components/Work';

const IndexPage = () => {

  return (
    <Layout>
      <div className='bg-background dark:bg-dark-background min-h-screen w-full relative z-0'>
        <Navbar />
        <Banner />
        <About />
        <Experience />
        <Work />
        <Contact />
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
