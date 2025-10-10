'use client';
import { useState } from 'react';
import type SwiperClass from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { carouselData } from '@/data/carousel-data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SwiperPagination from './SwiperPagination';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const NewCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  return (
    <div className="w-full p-0 relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiperInstance}
        className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
      >
        {carouselData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 flex items-center bg-gradient-to-t from-black/70 to-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <motion.h1
                      className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <motion.p
                      className="text-lg text-white mb-6 mt-4 max-w-2xl [text-shadow:1px_1px_1px_rgba(0,0,0,0.7),_-2px_-2px_4px_rgba(0,0,0,0.7),_0_0_6px_#000000]"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      dangerouslySetInnerHTML={{ __html: slide.text }}
                    />
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Link
                        href={slide.link}
                        className="inline-block bg-[#F49918] text-white rounded-full py-3 px-6 font-medium hover:bg-[#e68a16] transition-colors"
                      >
                        Read More
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperPagination swiper={swiperInstance} totalSlides={carouselData.length} />
    </div>
  );
};

export default NewCarousel;