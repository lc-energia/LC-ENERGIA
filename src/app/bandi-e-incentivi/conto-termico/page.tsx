import { Metadata } from 'next';
import ServicePage from '@/app/[slug]/ServicePage';
import { servicesData } from '@/data/services';

export const metadata: Metadata = {
  title: 'Conto Termico | LC Energia',
  description: 'Il Conto Termico promuove interventi per la produzione di energia termica da fonti rinnovabili. Scopri come accedere agli incentivi con LC Energia.',
};

export default function ContoTermicoPage() {
  const service = servicesData['conto-termico'];
  
  return <ServicePage service={service} slug="conto-termico" />;
}