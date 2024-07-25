import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailSharp, IoCallSharp } from "react-icons/io5";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import logo from '../../assets/Ganesh Portfolio Logo.png';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const { ref: contRef, inView: contInView } = useInView({
    threshold: 0.1,
  });
  const { ref: contRef2, inView: contInView2 } = useInView({
    threshold: 0.1,
  });
  const iconContainers = [
    {
      icon: <FaGithub className='size-24 sm:size-12 text-white  '/>,
      icon2: <FaGithub className='size-10 text-buttonRed  '/>,
      label: "Github",
      subLabel: "pillaiganeshmohan",
      delay: '1000ms',
      link:'https://github.com/pillaiganeshmohan'
    },
    {
      icon: <FaLinkedin className='size-24 sm:size-12 text-white  '/>,
      icon2: <FaLinkedin className='size-10 text-buttonRed  '/>,
      label: "LinkedIn",
      subLabel: "ganeshmohanpillai",
      delay: '1500ms',
      link:'https://www.linkedin.com/in/ganeshmohanpillai'
    },
    {
      icon: <IoMailSharp className='size-24 sm:size-12 text-white '/>,
      icon2: <IoMailSharp className='size-10 text-buttonRed  '/>,
      label: "Email",
      subLabel: "pillaiganeshmohanwork@gmail.com",
      delay: '2000ms',
      link:'mailto:pillaiganeshmohanwork@gmail.com'
    },
    {
      icon: <BsTwitterX className='size-24 sm:size-12 text-white  '/>,
      icon2: <BsTwitterX className='size-10 text-buttonRed  '/>,
      label: "X",
      subLabel: "ganeshmohan1210",
      delay: '2500ms',
      link:'https://twitter.com/ganeshmohan1210'
    },
    {
      icon: <IoCallSharp className='size-24 sm:size-12 text-white  '/>,
      icon2: <IoCallSharp className='size-10 text-buttonRed  '/>,
      label: "Contact Number",
      subLabel: "+91 9136247119",
      delay: '3000ms',
      link:'tel:+91 9136247119'
    },
    {
      icon2: <BsInstagram className='size-10 text-buttonRed  '/>,
      link:'https://www.instagram.com/_i__am_lucifer/'
    }
  ];

  const iconContainers2 = [
    {
      icon: <FaGithub className='size-24 sm:size-12 text-white  '/>,
      icon2: <FaGithub className='size-10 text-buttonRed  '/>,
      label: "Github",
      subLabel: "pillaiganeshmohan",
      delay: '1000ms',
      link:'https://github.com/pillaiganeshmohan'
    },
    {
      icon: <FaLinkedin className='size-24 sm:size-12 text-white  '/>,
      icon2: <FaLinkedin className='size-10 text-buttonRed  '/>,
      label: "LinkedIn",
      subLabel: "ganeshmohanpillai",
      delay: '1500ms',
      link:'https://www.linkedin.com/in/ganeshmohanpillai'
    },
   {
      icon: <BsTwitterX className='size-24 sm:size-12 text-white  '/>,
      icon2: <BsTwitterX className='size-10 text-buttonRed  '/>,
      label: "X",
      subLabel: "ganeshmohan1210",
      delay: '2000ms',
      link:'https://twitter.com/ganeshmohan1210'
    },
    {
      icon: <IoCallSharp className='size-24 sm:size-12 text-white  '/>,
      icon2: <IoCallSharp className='size-10 text-buttonRed  '/>,
      label: "Contact Number",
      subLabel: "+91 9136247119",
      delay: '2500ms',
      link:'tel:+91 9136247119'
    }, {
      icon: <IoMailSharp className='size-24 sm:size-12 text-white '/>,
      icon2: <IoMailSharp className='size-10 text-buttonRed  '/>,
      label: "Email",
      subLabel: "pillaiganeshmohanwork@gmail.com",
      delay: '3000ms',
      link:'mailto:pillaiganeshmohanwork@gmail.com'
    },
    
  ];

  return (
    <div id='contact' className='w-full flex  flex-col items-center justify-center'>
        <label className="text-7xl sm:text-5xl font-dsdigital mt-10 sm:mt-2 py-10 text-greenfont w-full flex flex-col items-center justify-center">
         Contact Me
       </label>
       <div className='w-11/12 flex items-center sm:gap-8 sm:align-middle sm:justify-center sm:grid-cols-2 justify-evenly font-montserrat sm:hidden'>
        {iconContainers.slice(0, -1).map((container, index) => (
          <div 
            ref={contRef}
            key={index}
            className={`${contInView?'animate-horizontalWave':''} w-1/5 sm:w-full flex flex-col items-center gap-5 sm:gap-2 justify-center `}
            style={{ animationDelay: container.delay }}
          >
            <a href={container.link} className={`w-[175px] sm:w-[125px] sm:h-[107px] h-[156px] rounded-full ${contInView?'animate-Wavebg':''} flex items-center justify-center bg-[#191717] shadow-covered shadow-buttonRed hover:bg-buttonRed`} style={{ animationDelay: container.delay }} target="_blank" rel="noopener noreferrer">
              {container.icon}
            </a>  
            <label className='w-full text-2xl sm:text-[15px] text-center font-bold text-white'>{container.label}</label>
            <label className='w-full text-md sm:text-[10px] text-center font-semibold text-white'>{container.subLabel}</label>
          </div>
        ))}
       </div>
       {/* Mobile view */}
       <div className='w-11/12 items-center hidden sm:grid sm:gap-6 sm:align-middle sm:justify-center sm:grid-cols-2 justify-evenly font-montserrat'>
  {iconContainers2.map((container, index) => (
    <div
      ref={contRef2}
      key={index}
      className={`${contInView2 ? 'animate-horizontalWave' : ''} w-1/5 sm:w-full flex flex-col items-center gap-5 sm:gap-2 justify-center ${index === iconContainers2.length - 1 ? 'sm:col-span-2' : ''}`}
      style={{ animationDelay: container.delay }}
    >
      <a href={container.link} className={`w-[175px] sm:w-[110px] sm:h-[97px] h-[156px] sm:mb-3 rounded-full ${contInView2 ? 'animate-Wavebg' : ''} flex items-center justify-center bg-[#191717] shadow-covered shadow-buttonRed hover:bg-buttonRed`} style={{ animationDelay: container.delay }} target="_blank" rel="noopener noreferrer">
        {container.icon}
      </a>
      <label className='w-full text-2xl sm:text-[16px] text-center font-bold text-white'>{container.label}</label>
      <label className='w-full text-md sm:text-[14px] text-center font-semibold text-white'>{container.subLabel}</label>
    </div>
  ))}
</div>
       <hr className='w-[88%] h-2 text-white mt-8 mb-4'/>

       <div className='w-[88%] flex font-montserrat'>
        <div className='w-3/5 sm:w-full flex flex-col sm:items-center'>
            <img src={logo} alt='' className='w-1/3 sm:w-1/2'/>      
            <label className='w-11/12 sm:w-full text-justify text-white sm:text-lg text-2xl py-5'>
              I believe in myself. I work efficiently both as an individual contributor as well as along with a team. Besides the details given in my resume, I believe in character, values, vision, and action. I look for positivity in all things. I am a quick learner and believe in learning from my mistakes.
            </label>  
        </div>
        <div className='w-1/5 sm:w-full flex flex-col items-end justify-center sm:hidden'>
          <div className='w-3/4 flex flex-col gap-3'>
             <label className='text-2xl text-white font-semibold font-montserrat'>Links</label>
             <a href='#home' className='cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-buttonRed'>Home</a>
             <a href='#about' className='cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-buttonRed'>About</a>
             <a href='#experiences' className='cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-buttonRed'>Experiences</a>
             <a href='#projects' className='cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-buttonRed'>Projects</a>
             <a href='#certifications' className='cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-buttonRed'>Certifications</a>
             <a href='#skills' className='cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-buttonRed'>Skills</a>
             <a href='#publications' className='cursor-pointer w-fit text-greenfont text-xl hover:border-b-2 hover:border-buttonRed'>Publications</a>
          </div>
        </div>
        <div className='w-1/5 sm:w-full flex flex-col space-y-6 items-end sm:hidden'>
          <label className='text-2xl w-[85%] text-white font-semibold'>Contact Me</label>
          <div className='w-fit grid grid-cols-3 items-center gap-12'>
          {iconContainers.map((container, index) => (
      
            <a href={container.link} className={`size-10 text-buttonRed`} target="_blank" rel="noopener noreferrer">
              {container.icon2}
            </a> 
          ))}
          </div> 
        </div>
       </div>
       <hr className='w-[88%] h-2 text-white my-4 sm:my-2'/>
       <div className='text-sm sm:w-11/12 sm:text-[11px] sm:text-center text-white font-montserrat mb-4'>
         Copyright © 2024 Ganesh Mohan Pillai | All rights reserved
       </div>
    </div>
  )
}

export default Contact;
