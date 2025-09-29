'use client';

import React, { useState, useEffect } from 'react';
import { Swiper as SwiperClass } from 'swiper';

interface SwiperPaginationProps {
  swiper: SwiperClass | null;
  totalSlides: number;
}

const SwiperPagination: React.FC<SwiperPaginationProps> = ({ swiper, totalSlides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiper) {
      const updateActiveIndex = () => {
        setActiveIndex(swiper.realIndex);
      };

      swiper.on('slideChange', updateActiveIndex);
      return () => {
        swiper.off('slideChange', updateActiveIndex);
      };
    }
  }, [swiper]);

  if (!swiper) return null;

  return (
    <div className="swiper-pagination-custom absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-[#F49918]' : 'bg-gray-400'}`}
          onClick={() => swiper.slideToLoop(index)}
        ></span>
      ))}
    </div>
  );
};

export default SwiperPagination;
