/**
 * Carousel and Testimonial Type Definitions
 */

export interface CarouselSlide {
  img: string;
  alt: string;
  title: string;
  text: string;
  link: string;
}

export interface Testimonial {
  type: 'text';
  text: string;
}
