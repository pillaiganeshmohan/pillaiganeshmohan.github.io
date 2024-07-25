import React from 'react';
import gradRight from '../../assets/gradRight.png';
import { useInView } from 'react-intersection-observer';

function Certifications() {
  const certifications = [
    {
      item: 'Ethical Hacking Essentials by EC-Council',
      link: 'https://drive.google.com/file/d/1PLDI1TOrQjzMgQHGmWjbWxIQMVwKUKdH/view?usp=drivesdk'
    },
    {
      item: 'Digital Forensics Essentials by EC-Council',
      link: 'https://drive.google.com/file/d/1noc4uzaVNnL5TK_qH-6Yp5NNjP8E0V7p/view?usp=drivesdk'
    },
    {
      item: 'Network Defense Essentials by EC-Council',
      link: 'https://drive.google.com/file/d/1GD89AwYcytrc6gnnpcctzGtGKSsMCqh9/view?usp=drivesdk'
    },
    {
      item: 'SQL Injection Attacks by EC-Council',
      link: 'https://drive.google.com/file/d/1qavyT1VkaEaf9HL_7x8NuIenirvrJhwK/view?usp=drivesdk'
    },
    {
      item: 'Introduction to Dark Web, Anonymity and Cryptocurrency by EC-Council',
      link: 'https://drive.google.com/file/d/1RB6fKN1QyyvPtheS7m1RpffB-eAnIrSD/view?usp=drivesdk'
    },
    {
      item: 'Android Bug Bounty Hunting by EC-Council',
      link: 'https://drive.google.com/file/d/1OJQcw6I-xEE4X1r9thBtDc0pTKyloCl_/view?usp=drivesdk'
    },
    {
      item: 'Cloud Platform Fundamentals: Core Infrastructure by Google',
      link: 'https://drive.google.com/file/d/1faS67du5QYPYOS3WVX43B9AxECxY5h_t/view?usp=drivesdk'
    },
    {
      item: 'Operating Systems and You: Becoming a Power User by Google',
      link: 'https://drive.google.com/file/d/1K51vYi_fb419C6DqFC86tHksi9vmW_LM/view?usp=drivesdk'
    },
    {
      item: 'Cloud Product Fundamentals by Google',
      link: 'https://drive.google.com/file/d/1GiBeD6lm2mH1gikD-CZwQhXPxIrvdIcC/view?usp=drivesdk'
    },
    {
      item: 'Programming Fundamentals by Duke University',
      link: 'https://drive.google.com/file/d/1vwYwlU1jP9urHvXeWjVUkVt-oFn2OT3U/view?usp=drivesdk'
    },
    {
      item: 'Crash Course on Python by Google',
      link: 'https://drive.google.com/file/d/1YpfcJ_XtkoN2Cgu8XdBpl-pF6p1w9SCz/view?usp=drivesdk'
    },
    {
      item: 'View All',
      link: 'https://drive.google.com/drive/folders/1x1CltXDLyqm6BqJpBumI0vSM8anYpPIW'
    }
  ];

  const { ref: certRef, inView: certInView } = useInView({
    threshold: 0.1,
  });

  const sequence = [2, 1, 0, 3, 4, 5, 8, 7, 6, 9, 10, 11];

  return (
    <div id='certifications' className='w-full relative'>
      <img src={gradRight} alt='' className='absolute right-0' />

      <label className="text-7xl sm:text-5xl font-dsdigital py-10 text-greenfont w-full flex flex-col items-center justify-center">
        Certifications
      </label>

      <div className='grid grid-cols-3 sm:grid-cols-2 sm:gap-7 gap-12 font-montserrat w-full px-20 sm:px-7' ref={certRef}>
        {certifications.map((cert, index) => (
          <a 
            href={cert.link}
            target="_blank" rel="noopener noreferrer"
            key={index}
            className={`bg-[#191717] ${cert.item === 'View All' ? 'text-greenfont hover:underline' : 'text-white'} hover:bg-buttonRed cursor-pointer text-center z-10 px-4 font-semibold opacity-0 rounded-xl shadow-buttonRed flex items-center justify-center text-xl sm:text-sm sm:leading-5 tracking-tighter h-[120px] shadow-covered`}
            style={{
              animation: certInView ? `Blink 2s ${sequence.indexOf(index) * 0.1}s forwards` : 'none'
            }}
          >
            {cert.item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
