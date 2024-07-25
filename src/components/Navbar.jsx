import React, { useState } from 'react';
import logo from '../assets/Ganesh Portfolio Logo.png';
import call from '../assets/PhoneMessage.png'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-full h-[15%] flex sm:justify-between sm:items-center sticky top-0 sm:py-2 px-[5%] bg-black z-20'>
      <div className='w-1/5 sm:hidden'>
      <a href='#home'>
      <img src={logo} className='h-full' alt='' />
      </a>
      </div>
      <div className='w-3/5 text-greenfont flex sm:hidden justify-between items-center text-lg font-montserrat'>
        {['Home', 'About', 'Experiences', 'Projects', 'Certifications', 'Skills', 'Publications'].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-buttonRed after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            {item}
          </a>
        ))}
      </div>
  
      <div className='sm:w-1/3 sm:flex sm:items-center  hidden'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-buttonRed focus:outline-none z-20">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

      </div>
      <div className='w-1/4 s:w-1/3 hidden sm:flex '>
      <a href='#home'>
      <img src={logo} className='h-full' alt='' />

      </a>
      </div>
      <div className='w-1/5 sm:w-1/3 flex items-center justify-end'>
      <a href='#contact'>
      <img src={call} className='hidden sm:flex'/>

      </a>
        <a href="#contact" className="relative px-5 py-3 sm:hidden overflow-hidden font-medium text-white bg-buttonRed border border-buttonRed rounded-lg shadow-inner group">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white text-xl font-bold ease">Let's Connect</span>
        </a>      
      </div>
      {isMenuOpen && (
        <div className="sm:absolute top-14 right-0 w-full bg-black ">
          {['Home', 'About', 'Experiences', 'Projects', 'Certifications', 'Skills', 'Publications'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block px-7 py-2 font-montserrat text-greenfont hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
