import React from 'react'
import gradRight from '../../assets/gradRight.png'
import '../../App.css'
import { useInView } from 'react-intersection-observer';


function Publications() {
  const { ref: pubRef, inView: pubInView } = useInView({
    threshold: 0.1, 
  });
  return (
    <div id='publications' className='w-full flex flex-col font-montserrat items-center justify-center'>
          <img src={gradRight} alt='' className='absolute right-0'/>

         <label className="text-7xl sm:text-5xl font-dsdigital mt-10 py-10 text-greenfont w-full flex flex-col items-center justify-center">
         Publications
       </label>
       <div ref={pubRef} className={`w-max-[370px] ${pubInView?'scale-stuff':''} transform opacity-0 w-[370px] sm:w-[185px] sm:h-[200px] h-[300px] flex flex-col bg-[#191717] text-white  rounded-2xl shadow-covered mb-6 shadow-buttonRed`}>
        <label className='text-white h-1/3 text-center text-xl sm:text-xs rounded-3xl flex flex-col font-montserrat items-end justify-center gap-8 px-2 sm:px-1 sm:py-2 py-4 font-bold '>
        <label className='w-full '>Lost Laptop Tracking System Using MAC Address</label>
    
        </label>
        <label className='w-full h-1/3 text-lg sm:text-[10px] sm:leading-4 text-center flex items-center font-normal px-3'>
        A research paper published in Cybersecurity, Privacy, & Networks eJournal under SSRN Publications.
        </label>
        <div className='w-full flex flex-col justify-evenly items-center h-1/3'>
        <div className='w-full flex items-center justify-center '>
        <a href='https://dx.doi.org/10.2139/ssrn.4744393' target="_blank" rel="noopener noreferrer" className='w-1/3 sm:w-1/2 bg-buttonRed   text-white px-4 sm:py-2 py-4 text-xl sm:text-sm rounded-lg text-center font-montserrat font-bold whitespace-nowrap'>View</a>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Publications