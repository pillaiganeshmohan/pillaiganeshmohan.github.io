import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ganesh from '../../assets/ganesh.png';
import gradientleft from '../../assets/gradLeft.png';
import '../../App.css';

function About() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.1, 
  });

  return (
    <div id='about' className='relative'>
      <img src={gradientleft} alt='' className='absolute left-0' />
      <label className='text-7xl sm:text-5xl font-dsdigital py-10 mt-10 sm:mt-0 text-greenfont w-full flex items-center justify-center'>
        About Me
      </label>
      <div className='w-full flex sm:flex-col' ref={aboutRef}>
        <div className={`w-1/2 sm:w-full flex items-center justify-center`}>
          <img src={ganesh} alt='' className={`w-3/4 sm:w-[87%] opacity-0 z-10  ${aboutInView?'blinking ':''}`} />
        </div>
        <div className={`w-1/2 sm:w-full sm:items-center sm:justify-center sm:text-lg sm:tracking-tighter text-[25px] font-montserrat flex items-center opacity-0 ${aboutInView?'blinking':''} text-white text-justify`}>
          <label className='w-4/5 sm:w-[87%] sm:mt-10'>
            I am a driven and versatile Computer Engineering student specializing in networking, cybersecurity, and full-stack web development. With a deep understanding of network systems and security protocols, I am equipped to design and implement robust solutions that protect sensitive information. Additionally, my proficiency in full-stack web development allows me to create dynamic and user-friendly web applications. Moreover, my experience in managing social media platforms and creating engaging content has honed my communication and marketing skills. I am a proactive learner, staying up-to-date with emerging technologies in order to provide cutting-edge solutions and contribute to the success of organizations in the ever-evolving digital landscape.
          </label>
        </div>
      </div>
    </div>
  );
}

export default About;
