import { Metadata } from 'next';
import BandiIncentiviContent from './BandiIncentiviContent';

const siteUrl = 'https://www.lcenergia.it';

export const metadata: Metadata = {
  title: 'Bandi e Incentivi | LC ENERGIA - Finanziamenti per Energia Rinnovabile',
  description: 'Scopri i bandi e incentivi disponibili per i tuoi progetti energetici: Contributo PNRR fino al 40%, Conto Termico 3.0 fino al 65%. LC Energia ti guida nell\'accesso ai finanziamenti.',
  keywords: ['bandi energia', 'incentivi fotovoltaico', 'contributo PNRR', 'conto termico', 'finanziamenti rinnovabili', 'detrazioni fiscali energia'],
  openGraph: {
    title: 'Bandi e Incentivi per Energia Rinnovabile | LC ENERGIA',
    description: 'Accedi ai principali bandi e incentivi per la transizione energetica: PNRR e Conto Termico 3.0',
    url: `${siteUrl}/bandi-e-incentivi`,
    siteName: 'LC ENERGIA',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bandi e Incentivi | LC ENERGIA',
    description: 'Scopri i bandi e incentivi per energia rinnovabile: PNRR e Conto Termico 3.0',
  },
  alternates: {
    canonical: `${siteUrl}/bandi-e-incentivi`,
  },
};

export default function BandiIncentiviPage() {
  return <BandiIncentiviContent />;
}
