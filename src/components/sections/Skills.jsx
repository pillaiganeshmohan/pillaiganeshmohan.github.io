import React, { useEffect, useState } from 'react';
import Skillbar from '../Skillbar';
import gradLeft from '../../assets/gradLeft.png';
import '../../App.css';


function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Implement your logic to detect visibility or trigger animations
    // For example, when scrolled to the section
    const handleScroll = () => {
      // Detect when to trigger animation
      // For simplicity, I'm triggering animation on component mount
      setIsVisible(true);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };},[])


  const skillsData = [
    { title: 'Front-End Web Development', skills: 'React Js, Tailwind CSS, Axios, Redux Toolkit, PHP', efficiency: '80', isLeft: true },
    { title: 'Programming Languages', skills: 'Python, C, C++, Java', efficiency: '70', isLeft: false },
    { title: 'UI/UX Designing', skills: 'Figma', efficiency: '85', isLeft: true },
    { title: 'Ethical Hacking and Digital Forensics', skills: 'Web App Vulnerability Testing, Penetration Testing, Digital Forensic Recovery', efficiency: '50', isLeft: false },
    { title: 'Hands-On Operating Systems', skills: 'Windows, Kali Linux, Ubuntu', efficiency: '90', isLeft: true },
    { title: 'Other', skills: 'Effective Communication, Leadership Ability, Analytical & Problem-Solving', efficiency: '95', isLeft: false },
  ];

  return (
    <div id='skills' className='w-full flex flex-col items-center justify-center'>
      <img src={gradLeft} alt='' className='absolute left-0' />
      <label className="text-7xl sm:text-5xl font-dsdigital mt-10 py-10 text-greenfont w-full flex flex-col items-center justify-center">
        Skills
      </label>
      <div className='w-11/12 grid grid-cols-2 sm:grid-cols-1 gap-20 sm:gap-8 sm:px-5 px-20'>
        {skillsData.map((skill, index) => (
          <Skillbar
            key={index}
            title={skill.title}
            skills={skill.skills}
            efficiency={skill.efficiency}
            isLeft={skill.isLeft}
            // Apply animation classes based on isLeft
            className={`bg-gray-200 p-4 font-montserrat ${isVisible ? 'slidein' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
