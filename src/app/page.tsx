import NewCarousel from '@/components/NewCarousel';
import NewTestimonial from '@/components/NewTestimonial';
import About from '@/components/About';
import Feature from '@/components/Feature';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <NewCarousel />

      <section className="py-12 sm:py-16 bg-light">
        <NewTestimonial />
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <About />
      </section>

      <section className="py-12 sm:py-16 bg-light">
        <Feature />
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Services />
      </section>
    </>
  );
}
