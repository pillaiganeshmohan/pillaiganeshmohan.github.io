import React, { useRef, useEffect } from 'react';
import hacker from '../../assets/hacker.png';
import '../../App.css'; 
import ShinyButton from '../shiny-button';
import { Link } from 'react-router-dom';
function Landing() {
    const animateRef = useRef(null);

    useEffect(() => {
        const chars = animateRef.current.querySelectorAll('.nameChar');
        chars.forEach((char, index) => {
            char.style.animationDelay = `${index * 0.1}s`;
        });
    }, []);

    const textLine1 = 'Ganesh Mohan';
    const textLine2 = 'Pillai';

    return (
        <div id='home' className='w-full h-[92%] sm:h-[50vh] flex flex-col pl-[5%] sm:pl-[7%] pr-[2%]'>
            <div className='w-full flex sm:mt-2 h-full'>
                <div className='w-1/2 sm:w-11/12 flex sm:z-10 flex-col sm:justify-center sm:gap-4 justify-evenly tracking-widest '>
                    <label className='text-[5rem] sm:text-5xl xs:text-4xl font-montserrat  leading-none text-white font-semibold'>
                        Hey,<br/>I'm&nbsp;
                        <span
                            className='font-dsdigital text-greenfont text-[4.8rem] sm:text-[40px] sm:tracking-tighter text-container' 
                            ref={animateRef}
                        >
                            {textLine1.split('').map((char, index) => (
                                <span key={index} className='nameChar animate'>
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                            <br />
                            {textLine2.split('').map((char, index) => (
                                <span key={index} className='nameChar animate'>
                                    {char}
                                </span>
                            ))}
                        </span>
                    </label>
                    <div className='w-full flex flex-col sm:gap-2'>
                        <label className='w-[72%] sm:w-[103%] xs:w-[99%] font-dsdigital text-greenfont text-[36px] sm:text-[22px] xs:text-[19px] whitespace-nowrap typing-demo'>
                            Cybersecurity Professional &nbsp;
                        </label>
                        <label className='w-[55%] sm:w-[79%] xs:w-[75%] font-dsdigital text-greenfont text-[36px] sm:text-[22px] xs:text-[19px] typing-demo1'>
                            Front-end Developer
                        </label>
                        <label className='w-[38%] sm:w-[55%] xs:w-[52%] font-dsdigital text-greenfont text-[36px] sm:text-[22px] xs:text-[19px] typing-demo2 border-transparent'>
                            UI/UX Designer
                        </label>
                    </div>
                    <a href='https://drive.google.com/file/d/1ulSSPKM5bHIOEAEe88vXfUtgPD4R6GRb/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='relative overflow-hidden w-2/5 sm:w-1/2 bg-buttonRed text-white text-center py-4 sm:py-3 xs:py-2 text-lg sm:text-xs  rounded-lg xs:rounded-md  font-montserrat font-bold whitespace-nowrap'>
                        View my Resume
                        <span className='w-full buttonShine absolute top-0 left-0 h-1/2 bg-gradient-to-br from-transparent via-white to-transparent from-15% opacity-0 transform -rotate-45 translate-x-0 translate-y-0 scale-0'>
                        </span>
                    </a>
                </div>
                <div className='w-1/ sm:h-[60vh] sm:left-0 sm:top-14 flex items-start mt-3 justify-center sm:absolute sm:opacity-40'>
                    <img src={hacker} alt="" className='w-11/12 sm:w-full' />
                </div>
            </div>
        </div>
    );
}

export default Landing;
