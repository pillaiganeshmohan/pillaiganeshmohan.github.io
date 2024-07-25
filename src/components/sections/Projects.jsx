import React from 'react';
import ProjectCard from '../ProjectCard';
import '../../App.css';
import gradientLeft from '../../assets/gradLeft.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomDots from '../CustomDots';

function Projects() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => <CustomDots dots={dots} onDotClick={index => sliderRef.current.slickGoTo(index)} />,
    customPaging: i => <div className="dot"></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  const sliderRef = React.useRef(null);


  return (
    <div>
      <img id='projects' src={gradientLeft} alt='' className='absolute left-0 ' />

      <label className="text-7xl sm:text-5xl font-dsdigital pt-20 text-greenfont w-full flex flex-col items-center justify-center">
        Projects
      </label>
      <div className="w-full relative pl-[2%] sm:pl-[2%] sm:gap-2 sm:pr-0 pb-10 sm:pb-5">
        <Slider  ref={sliderRef} {...settings}>
          
        
            <ProjectCard
              name="Lost Laptop Tracking System Using MAC Address"
              content="A laptop tracking system using MAC address is a solution designed to help track and recover lost or stolen laptops. It utilizes the .pcap log files from ISP to search for the MAC address of the lost system and alerts if found."
              link='https://github.com/pillaiganeshmohan/Lost-Laptop-Tracking-System-Using-MAC-Address.git'
            />
         
          
            <ProjectCard
              name="Camsafe"
              content="Camsafe, a real-time criminal face recognition is a dynamic system designed to rapidly identify and match faces against a database of known criminals. It then alerts the necessary police authorities."
              link='https://github.com/pillaiganeshmohan/Camsafe.git'
            />
          
          
            <ProjectCard
              name="eMeds App"
              content="eMeds is an Android medicine review app that aims to help users make informed judgements about their medication choices. Users can look for specific medications and view ratings from other users who have used the same medication."
              link='https://github.com/pillaiganeshmohan/eMeds.git'
            />
          
            <ProjectCard
              name="Stock Price Prediction"
              content="Stock Price Prediction predicts the stock price using LSTM. It takes the data of 3 months and predicts the stock price for next month accordingly. It also generates the chart based on Actual vs predicted data for better insights."
              link='https://github.com/pillaiganeshmohan/Stock-Price-Prediction.git'
            />
          
          
            <ProjectCard
              name="Anime Merchandise Website"
              content="Anime Merchandise Website is an affordable e-commerce site for anime merch. It features an Admin panel for managing products, users, and cart items. The site includes registration, login, add-to-cart, and checkout features."
              link='https://github.com/pillaiganeshmohan/Anime-Merchandise-Website.git'
            />
        
          
            <ProjectCard
              name="E-Learning Website"
              content="E-Learning Website is a comprehensive online education platform. It has an Admin panel for managing courses, videos, comments, quizzes, and users. The User panel includes registration, login, access to lecture notes and videos, and timed assessments."
              link='https://github.com/pillaiganeshmohan/E-Learning-Website.git'
            />
          
          <div className={`font-montserrat wi h-[400px] sm:h-[220px] z-10 hover:transform hover: tracking-tighter transition-all ease-in-out delay-100 hover:scale-110 hover:scroll-smooth flex flex-col bg-[#191717] mt-10 text-white rounded-2xl shadow-lg shadow-buttonRed`}>
            <div className='w-full flex h-full sm:h-[220px] items-center justify-center'>
            <a
            href='https://github.com/pillaiganeshmohan?tab=repositories'
            className="relative  w-fit block after:block after:content-[''] after:absolute text-2xl font-montserrat font-semibold text-greenfont text-center h after:h-[1px] after:bg-buttonRed after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            target="_blank" rel="noopener noreferrer" 
          >
            View All
          </a>
              
            </div>
          </div>         
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
