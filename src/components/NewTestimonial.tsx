'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, EffectFade } from 'swiper/modules';
import { testimonialData } from '@/data/carousel-data';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const NewTestimonial = () => {
  return (
    <section className="relative py-8 sm:py-10 overflow-hidden">
      {/* Fondo sutil con gradiente institucional */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7db042]/5 via-transparent to-[#e67e00]/5" />

      {/* Efectos decorativos minimalistas */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#7db042]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#e67e00]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative max-w-4xl mx-auto text-center">

          {/* Indicadores de progreso personalizados */}
          <div className="mb-6 relative">
            <div className="h-px bg-gradient-to-r from-transparent via-[#7db042]/30 to-transparent" />
            <motion.div
              className="absolute top-0 left-0 h-px bg-gradient-to-r from-[#7db042] via-[#99c34a] to-[#e67e00]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            />
          </div>

          {/* Carrusel de frases */}
          <Swiper
            modules={[Autoplay, A11y, EffectFade]}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            autoHeight={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            className="relative"
            allowTouchMove={false}
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="py-4 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed bg-gradient-to-r from-[#374151] via-[#4b5563] to-[#374151] bg-clip-text text-transparent">
                    {testimonial.text}
                  </p>

                  {/* Puntos decorativos */}
                  <div className="mt-4 flex justify-center items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#7db042]" />
                    <div className="w-2 h-2 rounded-full bg-[#e67e00]" />
                    <div className="w-2 h-2 rounded-full bg-[#99c34a]" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Indicadores inferiores minimalistas */}
          <div className="mt-6 flex justify-center gap-1">
            {testimonialData.map((_, index) => (
              <div
                key={index}
                className="h-1 w-8 rounded-full bg-gradient-to-r from-[#7db042]/30 to-[#e67e00]/30"
                style={{
                  background: `linear-gradient(90deg, #7db042, #e67e00)`,
                  opacity: 0.3
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTestimonial;