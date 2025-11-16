import PremiumHero from '@/components/features/PremiumHero';
import Feature from '@/components/features/Feature';
import Services from '@/components/features/Services';
import DynamicNewTestimonial from '@/components/features/DynamicNewTestimonial';

export default function Home() {
  return (
    <>
      {/* Hero - Sin wrapper adicional, el componente ya tiene su diseño */}
      <PremiumHero />

      {/* Feature - Números estadísticos */}
      <Feature />

      {/* Services - Ya tiene su propio fondo */}
      <Services />

      {/* Testimonials - Fondo blanco limpio */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <DynamicNewTestimonial />
      </section>
    </>
  );
}
