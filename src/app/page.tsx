import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import PremiumHero from '@/components/features/PremiumHero';

const siteUrl = 'https://www.lcenergia.it';

export const metadata: Metadata = {
  title: 'LC ENERGIA | Soluzioni Energetiche Innovative per il Futuro',
  description: 'LC Energia offre servizi di progettazione impiantistica, riqualificazione energetica, impianti fotovoltaici e geotermici. Specialisti in efficienza energetica per edifici civili e industriali a Monza e Brianza.',
  keywords: 'impianti fotovoltaici, riqualificazione energetica, progettazione impiantistica, efficienza energetica, Monza Brianza, pannelli solari, geotermico, certificazione energetica, stazioni ricarica elettrica',
  openGraph: {
    title: 'LC ENERGIA | Soluzioni Energetiche Innovative',
    description: 'Progettazione impiantistica, impianti fotovoltaici e riqualificazione energetica. Il tuo partner per l\'efficienza energetica.',
    url: siteUrl,
    siteName: 'LC ENERGIA',
    images: [
      {
        url: `${siteUrl}/img/home page.webp`,
        width: 1200,
        height: 630,
        alt: 'LC Energia - Soluzioni Energetiche Innovative',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LC ENERGIA | Soluzioni Energetiche Innovative',
    description: 'Il tuo partner per l\'efficienza energetica a Monza e Brianza.',
    images: [`${siteUrl}/img/home page.webp`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

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
