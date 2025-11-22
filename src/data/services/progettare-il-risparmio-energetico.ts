import { ServiceData } from '../services-data';

export const ProgettareIlRisparmioEnergeticoService: ServiceData = {
  title: 'Progettare il Risparmio Energetico',
    breadcrumb: 'Progettare il Risparmio Energetico',
    introduction: 'L’obiettivo del risparmio energetico è perseguibile solo attraverso competenze specifiche.<br><br>LC Energia offre supporto e consulenza per orientarsi nel panorama degli incentivi e realizzare progetti di efficienza energetica in modo ottimale.',
    sections: [
      {
        title: 'Competenze Specifiche',
        content: 'È fondamentale avere esperienza e abilitazioni come:',
        list: [
          'Esperto gestione energia.',
          'Energy manager.',
          'Leed certificator.',
        ],
      },
      {
        title: 'Strumenti e Incentivi',
        content: 'Numerosi strumenti tecnici e finanziari sono oggi a disposizione del fruitore interessato ai temi della sostenibilità, con la possibilità di effettuare investimenti per l’efficienza energetica sfruttando gli incentivi governativi.',
        incentives: [
          {
            title: 'Contributo PNRR',
            description: 'Ottieni il 40% a fondo perduto per impianti fotovoltaici nelle Comunità Energetiche Rinnovabili.',
            link: '/contributo-pnrr'
          },
          {
            title: 'Conto Termico',
            description: 'Incentivi fino al 65% per la produzione di energia termica da fonti rinnovabili.',
            link: '/conto-termico'
          }
        ]
      },
    ],
};
