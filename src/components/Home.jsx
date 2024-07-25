import React, { useEffect, useState } from 'react';
import Landing from './sections/Landing';
import Navbar from './Navbar';
import About from './sections/About';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Skills from './sections/Skills';
import Publications from './sections/Publications';
import Contact from './sections/Contact';
import Loader from './Loader';

function Home() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
  }, [])


  return (
    <>
    {isLoading && <Loader/>}
    {!isLoading &&
    <div id='home' className='bg-black w-full flex flex-col scroll-smooth'>
      <Navbar />
      <Landing />
      <About />
      <Experiences />
      <Projects />
      <Certifications />
      <Skills />
      <Publications />
      <Contact />
    </div>
    }
    </>
  );
}

export default Home;
 