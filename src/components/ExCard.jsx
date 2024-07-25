import React, { useState, useEffect } from 'react';
import '../App.css';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function ExCard({ name, date, title, list, link }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { ref: exRef, inView: exInView, entry } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (exInView) {
      setShouldAnimate(true);
    } else if (entry && entry.boundingClientRect.top > 0) {
      setShouldAnimate(false);
    }
  }, [exInView, entry]);

  return (
    <div
    ref={exRef}
      className={`w-[370px] sm:w-[170px] xs:w-[155px] xs:h-[270px] h-[470px] sm:h-[290px] flex flex-col sm:mb-0 mb-10 bg-[#191717] ${shouldAnimate ? 'move-up' : ''} opacity-0 text-white text-xl sm:text-[9px] xs:text-[7px] rounded-2xl translate-y-1/4`}
    >
      <label className="text-white bg-buttonRed rounded-2xl flex flex-col font-montserrat items-center justify-center sm:gap-0 gap-8 xs:leading-[20px] px-1 py-2 font-semibold">
        <label>{name}</label>
        <label>{date}</label>
        <label>{title}</label>
      </label>
      <div className="w-full h-full flex flex-col justify-evenly items-center">
        <ul className="w-11/12 list-disc list-outside xs:h-[90px] text-white sm:text-[7px] xs:text[6px] sm:leading-4 text-lg pl-4 sm:pl-2">
          {list &&
            list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <div className="w-full flex items-center justify-center">
          <a href={link} target="_blank" rel="noopener noreferrer" to={link} className="w-3/4 bg-buttonRed text-white text-center px-4 py-4 xs:px-2  sm:py-1 text-xl sm:text-[11px] rounded-lg font-montserrat font-bold whitespace-nowrap">
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExCard;
