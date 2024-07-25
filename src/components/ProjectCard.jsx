import React from 'react'
import '../App.css'
import { useInView } from 'react-intersection-observer';


function ProjectCard({name, content, link}) {

  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });
  return (
    <div ref={projectRef} className={`font-montserrat mb-10 ${projectInView?'':''} w-max-[370px] w-[370px] xs:w-[160px] sm:w-[175px] h-[400px] sm:h-[220px] z-10 hover:transform hover: tracking-tighter transition-all ease-in-out delay-100 hover:scale-110  sm:hover:scale-100 hover:scroll-smooth flex flex-col bg-[#191717] mx-[10%] sm:mx-0  mt-10 text-white  rounded-2xl shadow-lg shadow-buttonRed`}>
        <label className='text-white h-1/4 text-center text-xl sm:text-[10px] rounded-3xl flex flex-col font-montserrat items-center justify-center gap-8 px-2 py-4 font-bold sm:leading-4'>
        <label className='w-full sm:mt-4'>{name}</label>
    
        </label>
        <label className='w-full h-1/2 text-lg sm:text-[9px] xs:text-[8px] sm:leading-4 text-center font-normal px-3'>
        {content}
        </label>
        <div className='w-full flex flex-col justify-evenly items-center h-1/4'>
        <div className='w-full flex items-center justify-center '>
        <a href={link} target="_blank" rel="noopener noreferrer" className='w-3/4 sm:2/3 sm:py-2 sm:px-2 bg-buttonRed text-center text-white px-4 py-4 text-xl sm:text-xs rounded-lg font-montserrat font-bold whitespace-nowrap'>View Code</a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard