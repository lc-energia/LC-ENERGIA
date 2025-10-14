import { Metadata } from 'next';
import ServicePage from '@/app/[slug]/ServicePage';
import { servicesData } from '@/data/services-data';

export const metadata: Metadata = {
  title: 'Contributo PNRR | LC Energia',
  description: 'Ottieni il 40% a fondo perduto per il tuo impianto fotovoltaico con i fondi PNRR. LC Energia ti supporta nell\'accesso ai contributi per le Comunità Energetiche Rinnovabili.',
};

export default function ContributoPNRRPage() {
  const service = servicesData['contributo-pnrr'];
  
  return <ServicePage service={service} slug="contributo-pnrr" />;
}