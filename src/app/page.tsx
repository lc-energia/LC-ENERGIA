import PremiumHero from '@/components/PremiumHero';
import Feature from '@/components/Feature';
import Services from '@/components/Services';
import DynamicNewTestimonial from '@/components/DynamicNewTestimonial';

export default function Home() {
  return (
    <>
      <PremiumHero />

      <section className="py-6 sm:py-8 bg-white">
        <Feature />
      </section>

      <section className="py-6 sm:py-8 bg-neutral-50">
        <Services />
      </section>

      <section className="py-6 sm:py-8 bg-white">
        <DynamicNewTestimonial />
      </section>
    </>
  );
}
