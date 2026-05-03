/**
 * Services Data - Modularized
 * Cada servicio en su propio archivo para mejor mantenibilidad
 */

import { ProgettareIlRisparmioEnergeticoService } from './progettare-il-risparmio-energetico';
import { ImpiantiFotovoltaiciService } from './impianti-fotovoltaici';
import { ProgettazioneEConsulenzaTecnicaService } from './progettazione-e-consulenza-tecnica';
import { ContabilizzazioneCaloreImpiantiTermiciCentralizzatiService } from './contabilizzazione-calore-impianti-termici-centralizzati';
import { ProgettazioneAntincendioService } from './progettazione-antincendio';
import { ProgettazioneAcusticaService } from './progettazione-acustica';
import { ImpiantiGeotermiciService } from './impianti-geotermici';
import { StazioniDiRicaricaService } from './stazioni-di-ricarica';
import { RiqualificazioneDiCentraliTermicheEsistentiService } from './riqualificazione-di-centrali-termiche-esistenti';
import { ContributoPnrrService } from './contributo-pnrr';
import { ContoTermicoService } from './conto-termico';
import { ServiceData, Section } from '@/types/service-types';

// Re-export types for convenience
export type { ServiceData, Section };

export const servicesData: { [key: string]: ServiceData } = {
  'progettare-il-risparmio-energetico': ProgettareIlRisparmioEnergeticoService,
  'impianti-fotovoltaici': ImpiantiFotovoltaiciService,
  'progettazione-e-consulenza-tecnica': ProgettazioneEConsulenzaTecnicaService,
  'contabilizzazione-calore-impianti-termici-centralizzati': ContabilizzazioneCaloreImpiantiTermiciCentralizzatiService,
  'progettazione-antincendio': ProgettazioneAntincendioService,
  'progettazione-acustica': ProgettazioneAcusticaService,
  'impianti-geotermici': ImpiantiGeotermiciService,
  'stazioni-di-ricarica': StazioniDiRicaricaService,
  'riqualificazione-di-centrali-termiche-esistenti': RiqualificazioneDiCentraliTermicheEsistentiService,
  'contributo-pnrr': ContributoPnrrService,
  'conto-termico': ContoTermicoService,
};
