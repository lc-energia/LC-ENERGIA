'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { carouselData } from '@/data/carousel-data';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const NewCarousel = () => {
  return (
    <div className="w-full p-0 pb-5">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom', // Use a custom pagination container
          renderBullet: function (index, className) {
            return '<span class="' + className + ' w-3 h-3 bg-gray-400 rounded-full transition-colors duration-300"></span>';
          },
        }}
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
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
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
                    >
                      {slide.text}
                    </motion.p>
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
        {/* Custom Pagination Container */}
        <div className="swiper-pagination-custom absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10"></div>
      </Swiper>
    </div>
  );
};

export default NewCarousel;