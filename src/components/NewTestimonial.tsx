'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import { testimonialData } from '@/data/carousel-data';

// Import Swiper styles
import 'swiper/css';

const NewTestimonial = () => {
  return (
    <div className="py-4 sm:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto text-center">
          <Swiper
            modules={[Autoplay, A11y]}
            autoHeight={true} // Keep autoHeight as it works well with the slide effect
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="relative"
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="py-4">
                  <p className="text-xl sm:text-2xl leading-relaxed text-gray-700">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewTestimonial;