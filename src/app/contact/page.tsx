import type { Metadata } from 'next';
import ContactContent from './ContactContent';

const siteUrl = 'https://www.lcenergia.it';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta LC Energia per un preventivo gratuito. Siamo specializzati in soluzioni energetiche, impianti fotovoltaici e progettazione impiantistica a Monza e Brianza.',
  keywords: 'contatti LC Energia, preventivo, email, telefono, Carate Brianza, Monza e Brianza, consulenza energetica',
  openGraph: {
    title: 'Contatti | LC ENERGIA',
    description: 'Richiedi un preventivo gratuito per i nostri servizi di efficienza energetica e impianti fotovoltaici.',
    url: `${siteUrl}/contact`,
    siteName: 'LC ENERGIA',
    type: 'website',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contatti | LC ENERGIA',
    description: 'Richiedi un preventivo gratuito per i nostri servizi di efficienza energetica e impianti fotovoltaici.',
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
