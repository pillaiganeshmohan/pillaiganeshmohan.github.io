import React from 'react'
import ExCard from '../ExCard'
import gradRight from '../../assets/gradRight.png'
import { useInView } from 'react-intersection-observer';
import '../../App.css'

function Experiences() {
  const { ref: exRef, inView: exInView } = useInView({
    threshold: 0.1, 
  });
    const camSafeTasks = [
        'Developed a software for Criminal Face Detection from CCTV cameras known as CAMSAFE.',
        'Worked on Frontend using React js, Tailwind and python.',
        'Designed UI/UX in Figma.'
        
      ];
      const IITBTasks = [
        'Worked on 8 medical projects.',
        'Developed Frontend using React js, Tailwind and python.',
        'Designed UI/UX in Figma.',
        'Integrated Django APIs using Axios.'
      ]; 
      const MESTasks = [
        'Managed various social media platforms for the institute.',
        'Generated innovative ideas and content for the page.',
        'Shot Content and edited videos for the growth of the page.'
      ]; 
      const SyncTasks = [
        'Completed various tasks as per given in the internship.',
        'Developed an entire e-learning website with login page and database connectivity.',
        'Created music web-app using ReactJs.'
      ]; 
      const AryakashTasks = [
        'Developed a college management website known as MODERNSHALA.',
        'Designed and styled a complete layout using HTML and CSS.',
        'Learned basic knowledge of Angular and NodeJS framework.'
      ];  


    
  return (
    <div id='experiences' className='w-full sm:items-center sm:justify-center flex flex-col sm:gap-0 gap-10'>
        <img src={gradRight} alt='' className='absolute right-0'/>

        <label className='text-7xl sm:text-5xl font-dsdigital pt-10 mt-10 sm:mb-10 text-greenfont w-full flex flex-col items-center justify-center'>Experiences</label>
        <div className='flex w-full sm:hidden justify-evenly'>
        <ExCard name='Tech Vyassa IT Software Solution' date='December 2023 - June 2024' title='Software Developer Intern' list={camSafeTasks} link='https://drive.google.com/file/d/1r3ZyYVXiGM1vWGq3t1m3hYIo1QFOjcZT/view?usp=drivesdk'/>
        <ExCard name='IIT Bombay' date='December 2023 - May 2024' title='Frontend Developer & UI Designer' list={IITBTasks} link='https://drive.google.com/file/d/1NZUwW_Wsewm_ouk1nXC4NPqt49IctG6o/view?usp=drivesdk'/>
        <ExCard name='MES Pillai Group of Institutions' date='May 2023 - July 2023' title='Social Media Co-ordinator' list={MESTasks} link='https://drive.google.com/file/d/11MRCY4ksmySoE7UjZE9T4zMmMDBqFBRY/view?usp=drivesdk'/>
        </div>
        <div className='flex w-full sm:hidden justify-center gap-24 sm:gap-0 '>
        <ExCard name='Sync Intern’s' date='May 2023 - June 2023' title='Full-Stack Web Developer Intern' list={SyncTasks} link='https://drive.google.com/file/d/1aAYPxtCHHPU_rPTlFrsovewXm8vrVpnf/view?usp=drivesdk'/>
        <ExCard name='Aryakash Infotech Pvt. Ltd.' date='May 2020 - May 2020' title='Full-Stack Web Developer Intern' list={AryakashTasks} link='https://drive.google.com/file/d/13HVmNrd6f13ZKtYcn7FjdRKYEKUMIyMa/view?usp=drivesdk'/>
        
       
        </div>
        <div className='sm:grid hidden sm:grid-cols-2 sm:gap-3 gap-5 xs:gap-3'>
          <ExCard name='Tech Vyassa IT Software Solution' date='December 2023 - June 2024' title='Software Developer Intern' list={camSafeTasks} link='https://drive.google.com/file/d/1r3ZyYVXiGM1vWGq3t1m3hYIo1QFOjcZT/view?usp=drivesdk'/>
          <ExCard name='IIT Bombay' date='December 2023 - May 2024' title='Frontend Developer & UI Designer' list={IITBTasks} link='https://drive.google.com/file/d/1NZUwW_Wsewm_ouk1nXC4NPqt49IctG6o/view?usp=drivesdk'/>
          <ExCard name='MES Pillai Group of Institutions' date='May 2023 - July 2023' title='Social Media Co-ordinator' list={MESTasks} link='https://drive.google.com/file/d/11MRCY4ksmySoE7UjZE9T4zMmMDBqFBRY/view?usp=drivesdk'/>
          <ExCard name='Sync Intern’s' date='May 2023 - June 2023' title='Full-Stack Web Developer Intern' list={SyncTasks} link='https://drive.google.com/file/d/1aAYPxtCHHPU_rPTlFrsovewXm8vrVpnf/view?usp=drivesdk'/>
          <div className='sm:col-span-2 flex justify-center'>
            <ExCard name='Aryakash Infotech Pvt. Ltd.' date='May 2020 - May 2020' title='Full-Stack Web Developer Intern' list={AryakashTasks} link='https://drive.google.com/file/d/13HVmNrd6f13ZKtYcn7FjdRKYEKUMIyMa/view?usp=drivesdk'/>
          </div>
        </div>
    </div>
  )
}

export default Experiences
