import type { Metadata } from 'next';
import AccreditiContent from './AccreditiContent';

const siteUrl = 'https://www.lcenergia.it';

export const metadata: Metadata = {
  title: 'Accrediti',
  description: 'LC Energia è certificata con numerose abilitazioni professionali nel settore energetico: certificazione energetica, progettazione antincendio, Energy Building Manager e altro.',
  keywords: 'accrediti LC Energia, certificazioni, abilitazioni professionali, certificazione energetica, progettazione antincendio, Energy Building Manager, sicurezza impianti',
  openGraph: {
    title: 'Accrediti | LC ENERGIA',
    description: 'Scopri le certificazioni e abilitazioni professionali che garantiscono la nostra competenza nel settore energetico.',
    url: `${siteUrl}/accrediti`,
    siteName: 'LC ENERGIA',
    type: 'website',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accrediti | LC ENERGIA',
    description: 'Scopri le certificazioni e abilitazioni professionali che garantiscono la nostra competenza nel settore energetico.',
  },
  alternates: {
    canonical: `${siteUrl}/accrediti`,
  },
};

export default function AccreditationsPage() {
  return <AccreditiContent />;
}
