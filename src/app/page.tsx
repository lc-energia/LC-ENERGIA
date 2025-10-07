import NewCarousel from '@/components/NewCarousel';
import About from '@/components/About';
import Feature from '@/components/Feature';
import Services from '@/components/Services';
import DynamicNewTestimonial from '@/components/DynamicNewTestimonial';

export default function Home() {
  return (
    <>
      <NewCarousel />

      <section className="py-12 sm:py-16 bg-neutral-50">
        <DynamicNewTestimonial />
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <About />
      </section>

      <section className="py-12 sm:py-16 bg-neutral-50">
        <Feature />
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Services />
      </section>
    </>
  );
}
