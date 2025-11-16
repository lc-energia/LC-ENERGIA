import { ServiceData } from '../services-data';

export const StazioniDiRicaricaService: ServiceData = {
  title: 'Stazioni di Ricarica',
    breadcrumb: 'Stazioni di Ricarica',
    introduction: 'Caricare l\'auto direttamente a casa, invece che nelle stazioni di ricarica pubbliche, offre la possibilità di sfruttare l’energia prodotta dai pannelli solari della tua casa, rendendo così questa soluzione più ecologica ed economicamente conveniente.',
    sections: [
{
        title: 'Vantaggi',
        content: "La potenza erogata da una stazione domestica consente di raggiungere una maggiore velocità di ricarica, rispetto all'utilizzo delle normali prese elettriche. Inoltre, attivando la funzione Dynamic Power Management (che rappresenta un'opzione indispensabile nelle installazioni residenziali in cui la potenza disponibile è limitata), si consente al wall box di modulare la corrente destinata alla ricarica del veicolo elettrico basandosi sul consumo istantaneo di tutti gli elettrodomestici, tenendo anche in considerazione la corrente generata da pannelli fotovoltaici o altre fonti rinnovabili, (se presenti). Una volta attivata la funzione Dynamic Power Management, è possibile scegliere tra 3 diverse modalità di funzionamento: <strong>Full, EcoSmart e EcoPlus</strong>.",
        fullWidth: true,
      },
      {
        title: 'Modalità di Funzionamento',
        content: '',
                modes: [
          {
            title: 'FULL Mode',
            description: 'Ricarica alla massima potenza, in base alla richiesta energetica del veicolo. Utilizza sia la potenza disponibile dalla rete che quella generata dall\'impianto locale di produzione da fonte rinnovabile (se presente).',
            image: '/img/full.png',
          },
          {
            title: 'ECOSMART',
            description: 'Utilizza la potenza generata dalla fonte rinnovabile più un contributo minimo proveniente dalla rete. La percentuale proveniente dalla rete è predefinita e può essere incrementata dall\'utente per garantire continuità di carica.',
            image: '/img/ecosmart.png',
          },
          {
            title: 'ECOPLUS',
            description: 'Utilizza solo la potenza derivante da un impianto di produzione locale da fonte rinnovabile. La carica è totalmente dipendente dalla potenza generata e può essere soggetta a sospensioni.',
            image: '/img/ecoplus.png',
          },
        ],
      },
      
    ],
};
