import dynamic from 'next/dynamic';
import PremiumHero from '@/components/features/PremiumHero';

// Lazy load componentes below the fold para mejor performance
// Best Practice 2025: Code splitting automático
const Feature = dynamic(() => import('@/components/features/Feature'), {
  loading: () => <div className="min-h-[400px] bg-gradient-to-br from-white via-neutral-50 to-white" />,
});

const Services = dynamic(() => import('@/components/features/Services'), {
  loading: () => <div className="min-h-[600px] bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30" />,
});

const DynamicNewTestimonial = dynamic(() => import('@/components/features/DynamicNewTestimonial'), {
  loading: () => <div className="min-h-[400px] bg-white" />,
});

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
