'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import { testimonialData } from '@/data/carousel-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';

const NewTestimonial = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-200 mb-4">
              Cosa dicono di <span className="text-primary">noi</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'impegno per l'energia sostenibile attraverso le parole dei nostri clienti
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-primary text-2xl" />
              </div>
            </div>

            <Swiper
              modules={[Autoplay, A11y]}
              autoHeight={true}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="relative pt-12"
            >
              {testimonialData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-12 px-8"
                  >
                    <div className="relative">
                      {/* Content */}
                      <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gray-700 font-light italic mb-8 text-center">
                        {testimonial.text}
                      </p>

                      {/* Decorative elements */}
                      <div className="flex justify-center space-x-2 mb-8">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>

                      {/* Bottom line */}
                      <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Side decorations */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 hidden lg:block">
              <div className="w-8 h-8 bg-secondary/20 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 hidden lg:block">
              <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600 mb-6">
              Pronto a unirti ai nostri clienti soddisfatti?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary transition-all duration-300 hover:scale-105"
            >
              Inizia il tuo progetto
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewTestimonial;
