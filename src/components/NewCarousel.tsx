'use client';
import { useState } from 'react';
import type SwiperClass from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { carouselData } from '@/data/carousel-data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SwiperPagination from './SwiperPagination';
import AnimatedHTMLText from './AnimatedText';
import { useParallax } from '@/hooks/useParallax';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const NewCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  // Efectos parallax para diferentes capas
  const bgOffsetY = useParallax(0.5);  // Fondo lento
  const contentOffsetY = useParallax(0.8); // Contenido más rápido

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
            {/* Capa de fondo con parallax lento */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-110"
              style={{
                backgroundImage: 'url(' + slide.img + ')',
                transform: 'translateY(' + bgOffsetY + 'px) scale(1.1)',
                willChange: 'transform'
              }}
            />

            {/* Capa de overlay con parallax medio */}
            <div
              className="absolute inset-0 flex items-center bg-gradient-to-t from-black/70 via-black/30 to-transparent"
              style={{
                transform: 'translateY(' + (contentOffsetY * 0.3) + 'px)',
                willChange: 'transform'
              }}
            >
              {/* Capa de contenido con parallax rápido */}
              <div
                className="container mx-auto px-4 sm:px-6 lg:px-8"
                style={{
                  transform: 'translateY(' + contentOffsetY + 'px)',
                  willChange: 'transform'
                }}
              >
                <div className="max-w-3xl">
                    <AnimatedHTMLText
                      html={slide.title}
                      className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight"
                      delay={0.2}
                      duration={0.8}
                    />
                    <div
                      className="text-lg text-white mb-6 mt-4 max-w-2xl leading-relaxed"
                      style={{
                        textShadow: '1px 1px 1px rgba(0,0,0,0.7), -2px -2px 4px rgba(0,0,0,0.7), 0 0 6px #000000'
                      }}
                    >
                      <AnimatedHTMLText
                        html={slide.text}
                        className="text-lg text-white leading-relaxed"
                        delay={0.6}
                        duration={0.8}
                      />
                    </div>
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
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