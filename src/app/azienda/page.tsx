import type { Metadata } from 'next';
import AziendaContent from './AziendaContent';

const siteUrl = 'https://www.lcenergia.it';

export const metadata: Metadata = {
  title: 'Azienda',
  description: 'LC Energia vanta personale qualificato e con grande esperienza nel settore della progettazione e realizzazione di impianti civili e industriali per la decarbonizzazione e l\'efficientamento energetico.',
  keywords: 'LC Energia, azienda, chi siamo, team, esperienza, efficienza energetica, decarbonizzazione, impianti fotovoltaici, Monza e Brianza',
  openGraph: {
    title: 'Azienda | LC ENERGIA',
    description: 'Scopri il nostro team di professionisti qualificati e la nostra esperienza nel settore energetico.',
    url: `${siteUrl}/azienda`,
    siteName: 'LC ENERGIA',
    type: 'website',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azienda | LC ENERGIA',
    description: 'Scopri il nostro team di professionisti qualificati e la nostra esperienza nel settore energetico.',
  },
  alternates: {
    canonical: `${siteUrl}/azienda`,
  },
};

export default function AziendaPage() {
  return <AziendaContent />;
}
