import type { Metadata } from "next";

const siteUrl = 'https://www.lcenergia.it'; // TODO: Replace with your actual domain

export const metadata: Metadata = {
  title: {
    default: 'LC ENERGIA | Soluzioni Energetiche e Progettazione',
    template: `%s | LC ENERGIA`,
  },
  description: "LC Energia offre servizi di alta qualità per la riqualificazione energetica e la progettazione tecnologica, contribuendo attivamente alla decarbonizzazione e all'efficienza energetica. Scopri di più su come i nostri tecnici qualificati possono aiutarti a ottimizzare i tuoi impianti civili e industriali.",
  keywords: "riqualificazione energetica, progettazione tecnologica, impianti civili e industriali, risparmio energetico, energia rinnovabile, DGR Lombardia n.816 2023, condomini, UNI TS 11819, transizione energetica, nzeb, stazioni di ricarica, pannelli solari, impianti fotovoltaici, geotermico, progettazione e consulenza tecnica, diagnosi energetica, termografia, certificazione energetica, consulenza detrazione fiscale, Legge 10, prevenzione incendi, requisiti acustici passivi, contabilizzazione energetica condomini, Monza e Brianza",
  openGraph: {
    title: 'LC ENERGIA | Soluzioni Energetiche e Progettazione',
    description: 'Soluzioni all’avanguardia per la riqualificazione energetica e la progettazione di impianti civili e industriali.',
    url: siteUrl,
    siteName: 'LC ENERGIA',
    images: [
      {
        url: `${siteUrl}/img/logo.png`, // Main social sharing image
        width: 800,
        height: 600,
        alt: 'Logo LC ENERGIA',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LC ENERGIA | Soluzioni Energetiche e Progettazione',
    description: 'Soluzioni all’avanguardia per la riqualificazione energetica e la progettazione di impianti civili e industriali.',
    images: [`${siteUrl}/img/logo.png`],
  },
  metadataBase: new URL(siteUrl),
};
