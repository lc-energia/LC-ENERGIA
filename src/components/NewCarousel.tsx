'use client';
import { useState } from 'react';
import type SwiperClass from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { carouselData } from '@/data/carousel-data';
import Link from 'next/link';
import Image from 'next/image';
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
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiperInstance}
        className="relative h-[70vh] min-h-[500px] lg:min-h-[700px]"
      >
        {carouselData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.img}
              alt={slide.alt}
              fill
              priority={index === 0}
              style={{ objectFit: 'cover' }}
              className="-z-10"
            />
            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 via-black/50 to-transparent">
              <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-4xl">
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg sm:text-xl text-white/95 mb-8 mt-4 max-w-3xl leading-relaxed [text-shadow:1px_1px_1px_rgba(0,0,0,0.7),_-2px_-2px_4px_rgba(0,0,0,0.7),_0_0_6px_#000000]"
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
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      href={slide.link}
                      className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary text-center justify-center"
                    >
                      Scopri di più
                      <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary text-center justify-center"
                    >
                      Richiedi preventivo
                      <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
                    </Link>
                  </motion.div>
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