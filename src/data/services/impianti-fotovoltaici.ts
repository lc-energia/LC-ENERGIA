import { ServiceData } from '../services-data';

export const ImpiantiFotovoltaiciService: ServiceData = {
  title: 'Impianti Fotovoltaici',
    breadcrumb: 'Impianti Fotovoltaici',
    introduction: '<br>Progettiamo e installiamo impianti fotovoltaici "chiavi in mano" <br>partendo da una valutazione preliminare che considera i seguenti elementi di base:',
    specialBox: 'Caricare l\'auto direttamente a casa, invece che nelle stazioni di ricarica pubbliche, offre la possibilità di sfruttare l\'energia prodotta dai pannelli solari della tua casa, rendendo così questa soluzione più ecologica ed economicamente conveniente.',
    mainFeatures: [
      { text: 'Consumo annuo\'utenza', icon: 'fa-bolt' },
      { text: 'Spazio disponibile', icon: 'fa-ruler-combined' },
      { text: 'Orientamento dell\'area di posa dei pannelli', icon: 'fa-compass' },
      { text: 'Presenza di ombreggiamenti e possibili soluzioni migliorative', icon: 'fa-cloud-sun' },
    ],
    sections: [
      {
        title: 'Perché conviene?',
        content: 'Detrazione fiscale al 50% per edifici residenziali. Ad oggi esiste la possibilità di recuperare il 50% delle spese sostenute per l’acquisto e la realizzazione di un sistema fotovoltaico grazie agli incentivi governativi.',
      },
      {
        title: 'Scambio sul posto',
        content: 'Il meccanismo dello scambio sul posto è una modalità di gestione dell’energia elettrica che permette al soggetto responsabile di un impianto fotovoltaico di immettere in rete l’energia elettrica prodotta ma non immediatamente autoconsumata, per poi prelevarla in un momento differente.',
      },
      {
        title: 'Autoconsumo',
        content: 'L’energia prodotta dall’impianto fotovoltaico può essere direttamente auto-consumata dall’abitazione, garantendo così un notevole risparmio in bolletta.',
      },
      {
        title: 'Normativa per l’incremento delle energie rinnovabili',
        content: 'Il decreto legislativo 199/2021 ha stabilito nuovi obblighi che dovranno essere rispettati in merito all’utilizzo di energia prodotta da fonti rinnovabili negli stabili di nuova costruzione o soggetti a ristrutturazioni.',
      },
    ],
    partnersTitle: 'PARTNERS e collaborazioni',
    partnersIntroduction: 'LC Energia collabora da anni con le migliori marche del settore, garantendo ai propri Clienti qualità e affidabilità dei prodotti installati.',
    partners: [
      { src: '/img/image8.png', alt: 'Partner 1' },
      { src: '/img/image1.jpg', alt: 'Partner 2' },
      { src: '/img/image2.jpg', alt: 'Partner 3' },
      { src: '/img/image3.png', alt: 'Partner 4' },
      { src: '/img/image4.jpg', alt: 'Partner 5' },
      { src: '/img/image5.jpg', alt: 'Partner 6' },
      { src: '/img/image6.jpg', alt: 'Partner 7' },
      { src: '/img/image7.png', alt: 'Partner 8' },
    ],
};
