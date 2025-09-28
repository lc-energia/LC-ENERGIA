
export interface Section {
  title: string;
  content: string;
  list?: string[];
  fullWidth?: boolean;
  hideLogo?: boolean;
  modes?: {
    title: string;
    description: string;
    image: string;
  }[];
  features?: {
    title: string;
    description: string;
    icon: string;
  }[];
  questions?: {
    question: string;
    answer: string;
  }[];
}

export interface ServiceData {
  title: string;
  breadcrumb: string;
  introduction: string;
  mainFeatures?: { text: string; icon: string }[];
  sections: Section[];
  partnersTitle?: string;
  partnersIntroduction?: string;
  partners?: {
    src: string;
    alt: string;
  }[];
}

export const servicesData: { [key: string]: ServiceData } = {
  'progettare-il-risparmio-energetico': {
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
      },
    ],
  },
  'impianti-fotovoltaici': {
    title: 'Impianti Fotovoltaici',
    breadcrumb: 'Impianti Fotovoltaici',
    introduction: 'IL NOSTRO INTERVENTO<br>Progettiamo e installiamo impianti fotovoltaici "chiavi in mano" partendo da una valutazione preliminare che considera i seguenti elementi di base:',
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
      { src: '/img/image1.png', alt: 'Partner 2' },
      { src: '/img/image2.png', alt: 'Partner 3' },
      { src: '/img/image3.png', alt: 'Partner 4' },
      { src: '/img/image4.png', alt: 'Partner 5' },
      { src: '/img/image5.png', alt: 'Partner 6' },
      { src: '/img/image6.png', alt: 'Partner 7' },
      { src: '/img/image7.png', alt: 'Partner 8' },
    ],
  },
  'progettazione-e-consulenza-tecnica': {
    title: 'Progettazione e consulenza tecnica',
    breadcrumb: 'Progettazione e consulenza tecnica',
    introduction: 'Nella realizzazione di opere impiantistiche vi è la necessità di gestire le diverse fasi operative in modo da coordinare lo svolgimento dei lavori e garantire la funzionalità del prodotto finale.',
    sections: [
      {
        title: 'Impianti Elettrici',
        content: '',
        list: [
          'Impianti elettrici civili ed industriali',
          'Sistemi domotici',
          'Building Automation',
          'Impianti di illuminazione',
        ],
      },
      {
        title: 'Progettazione Impiantistica',
        content: 'Per ogni tipologia edilizia, l’impianto rappresenta una struttura vitale per la gestione e la fruibilità dell’intero edificio. La qualità della progettazione influisce su sicurezza, comfort, risparmio e manutenzione.',
      },
      {
        title: 'Impianti Meccanici',
        content: '',
        list: [
          'Impianti di riscaldamento, climatizzazione, ventilazione meccanica',
          'Impianti alimentati da fonti rinnovabili (geotermia, solare termico termodinamico/fotovoltaico)',
          'Impianti di cogenerazione',
          'Impianti a biomassa',
        ],
      },
      {
        title: 'Progettazione e consulenza tecnica',
        content: 'LC Energia gestisce direttamente, con personale qualificato, attraverso le diverse fasi di progettazione:',
        list: [
          'Progettazione integrata degli impianti con collaborazione costante con le altre figure professionali coinvolte.',
          'Definizione della tipologia di impianto in relazione alla struttura, con sistemi di controllo e monitoraggio on-site e remoto.',
          'Assistenza ai lavori per perseguire e conseguire il risultato previsto nelle fasi di progettazione ed esecuzione.',
          'Assistenza al collaudo delle opere e la loro certificazione.',
        ],
      },
      {
        title: 'Impianti Speciali',
        content: '',
        list: [
          'Impianti di rivelazione incendio',
          'Impianti TVCC',
          'Impianti antintrusione',
          'Impianti scariche atmosferiche',
          'Impianti telefonici e trasmissione dati',
          'Impianti EVAC',
          'Quadri elettrici',
          'Illuminazione di sicurezza',
          'Impianti tecnologici',
          'Diffusione sonora',
          'Impianti di videoproiezione',
          'Impianti di conversazione',
          'TV digitale terrestre e satellitare',
          'Rifasamento elettrico',
        ],
      },
      {
        title: 'Collaudi e certificazioni',
        content: 'Collaudi e start-up degli impianti meccanici ed elettrici civili ed industriali. Redazione di Dichiarazioni di rispondenza per impianti antecedenti il D.M. 37/08.',
      },
    ],
  },
  'contabilizzazione-calore-impianti-termici-centralizzati': {
    title: 'Contabilizzazione e Ripartizione del Calore',
    breadcrumb: 'Contabilizzazione e Ripartizione del Calore',
    introduction: 'Sistemi di contabilizzazione e ripartizione del calore',
    sections: [
      {
        title: '',
        content: 'In Italia fino a pochi anni orsono la ripartizione delle spese di riscaldamento, nei condomini dotati di impianto centralizzato, avveniva prevalentemente a millesimi di riscaldamento indipendentemente dall’effettivo utilizzo del singolo condomino.',
      },
      {
        title: 'Tecnologia Avanzata',
        content: 'Negli ultimi decenni, con l\'avvento della tecnologia, è possibile misurare il calore effettivo prelevato da un impianto termico centralizzato per riscaldare la propria unità immobiliare.',
      },
      {
        title: 'Gestione Autonoma del Riscaldamento',
        content: 'Questi sistemi di contabilizzazione del calore, abbinati a sistemi di termoregolazione individuali, permettono al singolo condomino di gestire autonomamente il riscaldamento nella sua abitazione e di pagare in base all’effettivo consumo e prelievo di energia.',
      },
    ],
  },
  'progettazione-antincendio': {
    title: 'Progettazione Prevenzioni Incendi',
    breadcrumb: 'Progettazione Prevenzioni Incendi',
    introduction: 'Siamo specializzati nella redazione di pratiche per l’ottenimento del Certificato di Prevenzione Incendi o S.C.I.A. presso i Comandi Provinciali dei Vigili del Fuoco. La nostra esperienza include l\'osseverazione delle opere di prevenzione incendi a firma di un tecnico iscritto nell’elenco del Ministero degli Interni ai sensi del DLgs. 139/06, nonché certificazioni antincendio e di resistenza al fuoco delle strutture. <br> LC Energia si impegna a garantire che tutti i nostri progetti rispettino le normative vigenti, offrendo soluzioni efficienti e sicure per la protezione antincendio.',
    sections: [
      {
        title: 'Servizi Offerti',
        content: 'Offriamo una gamma completa di servizi per la prevenzione incendi, tra cui:',
        features: [
          {
            title: 'Autorizzazioni VVF',
            description: 'Ottenimento delle autorizzazioni dei Comandi VVF, anche eventualmente con istanza di deroga.',
            icon: 'fa-file-signature',
          },
          {
            title: 'Progettazione Architettonica',
            description: 'Progettazione architettonica di prevenzione incendi.',
            icon: 'fa-building',
          },
          {
            title: 'Progettazione Impiantistica',
            description: 'Progettazione impiantistica antincendio.',
            icon: 'fa-fire-extinguisher',
          },
          {
            title: 'Certificazione Manufatti',
            description: 'Certificazione di manufatti, impianti e strutture edilizie.',
            icon: 'fa-certificate',
          },
        ]
      },
     
    ],
  },
  'progettazione-acustica': {
    title: 'Progettazione Acustica',
    breadcrumb: 'Progettazione Acustica',
    introduction: 'LC Energia offre una consulenza specifica per il settore acustico con la redazione delle pratiche di valutazione del clima acustico. <br>Forniamo soluzioni efficaci e conformi alle normative vigenti, garantendo il comfort acustico degli ambienti. La nostra esperienza nel settore acustico ci consente di assistere i clienti in ogni fase del processo, dalla progettazione alla certificazione finale.',
    sections: [
      {
        title: 'Isolamento da Rumori',
        content: 'Offriamo servizi di analisi e progettazione per garantire un adeguato isolamento acustico delle strutture, comprese:',
        features: [
          {
            title: 'Redazione delle pratiche di valutazione del clima acustico.',
            description: '',
            icon: 'fa-file-alt',
          },
          {
            title: 'Analisi dei requisiti acustici delle strutture (D.P.C.M. 5/12/97).',
            description: '',
            icon: 'fa-tasks',
          },
          {
            title: 'Verifiche di impatto acustico.',
            description: '',
            icon: 'fa-bullhorn',
          },
          {
            title: 'Assistenza lavori e collaudo acustico degli edifici.',
            description: '',
            icon: 'fa-hard-hat',
          },
        ]
      },
      
    ],
  },
  'impianti-geotermici': {
    title: 'Impianti Geotermici',
    breadcrumb: 'Impianti Geotermici',
    introduction: 'LC Energia da diversi anni realizza impianti che utilizzano fonti alternative, in particolare impianti geotermici puri o integrati con altri sistemi di produzione dell’energia, nell’ambito di una politica di ricerca della massima soddisfazione del cliente.<br><br>Per questo da alcuni anni ormai, la normativa europea prescrive l’adozione di tecnologie funzionanti con fonti rinnovabili e pulite quali il sole, il vento e il terreno nell’ambito delle nuove costruzioni e delle ristrutturazioni edilizie.',
    sections: [
      {
        title: 'REALIZZAZIONE',
        content: 'Gli impianti geotermici sono sistemi che richiedono una corretta valutazione che LC Energia effettua per ogni impianto con l’ausilio di tecnici qualificati sia nel campo della tecnica ingegeneristica che di quella geologica.',
      },
      {
        title: 'TECNOLOGIA DELL\'IMPIANTO',
        content: 'Il D.Lgs 199/21 oggi impone che il 60% dell’energia termica consumata dai nuovi edifici e nel caso di ristrutturazioni importanti, sia prodotta da fonti rinnovabili. Questo obbligo pone la necessità di definire preventivamente la tipologia dei sistemi di climatizzazione da installare.',
      },
      {
        title: 'Vantaggi',
        content: 'I plus di questa soluzione sono i seguenti: sistema efficiente, soluzione per eliminare problematiche atmosferiche, impianto che sfrutta una risorsa inesauribile di energia, edificio valorizzato, maggior sicurezza degli impianti e possibilità di rinunciare all\'allaccio del gas-metano.',
      },
      {
        title: 'CLIMATIZZAZIONE ESTIVA',
        content: 'Abbattere le bollette energetiche, ridurre i consumi di combustibile e valorizzare la prestazione energetica della propria abitazione è possibile con i nuovi sistemi geotermici di terza generazione, che presentano una efficienza media maggiore del 20% rispetto ai precedenti sistemi.',
      },
    ],
  },
  'stazioni-di-ricarica': {
    title: 'Stazioni di Ricarica',
    breadcrumb: 'Stazioni di Ricarica',
    introduction: 'Caricare l\'auto direttamente a casa, invece che nelle stazioni di ricarica pubbliche, offre la possibilità di sfruttare l’energia prodotta dai pannelli solari della tua casa, rendendo così questa soluzione più ecologica ed economicamente conveniente.',
    sections: [
      {
        title: 'Vantaggi',
        content: 'La potenza erogata da una stazione domestica consente di raggiungere una maggiore velocità di ricarica, rispetto all’utilizzo delle normali prese elettriche. Inoltre, attivando la funzione Dynamic Power Management (che rappresenta un\'opzione indispensabile nelle installazioni residenziali in cui la potenza disponibile è limitata), si consente al wall box di modulare la corrente destinata alla ricarica del veicolo elettrico basandosi sul consumo istantaneo di tutti gli elettrodomestici, tenendo anche in considerazione la corrente generata da pannelli fotovoltaici o altre fonti rinnovabili, (se presenti). Una volta attivata la funzione Dynamic Power Management, è possibile scegliere tra 3 diverse modalità di funzionamento: Full, EcoSmart e EcoPlus.',
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
      {
        title: 'FAQ',
        content: '',
        questions: [
          {
            question: 'Come ricaricare la tua auto con la nostra stazione di ricarica innovativa?',
            answer: 'La nostra stazione di ricarica offre la possibilità di caricare la tua auto in modo intelligente. Quando è attiva la funzione Dynamic Power Management, è possibile scegliere tra 3 diverse modalità di funzionamento: Full, Ecosmart e Ecoplus.',
          },
        ],
      },
    ],
  },
  'riqualificazione-di-centrali-termiche-esistenti': {
    title: 'Riqualificazione di centrali termiche esistenti',
    breadcrumb: 'Riqualificazione di centrali termiche esistenti',
    introduction: 'Riqualificazione di centrali termiche esistenti<br>LC Energia offre consulenza e progettazione per la riqualificazione delle centrali termiche esistenti civili e industriali, al fine di conseguire il miglioramento dell\'efficienza energetica. Tramite i nostri tecnici qualificati ed accreditati offriamo la necessaria consulenza per la redazione della documentazione richiesta, la quale risulta di fondamentale importanza per poter valutare e definire gli eventuali interventi di efficientamento dell\'edificio.',
    sections: [
      {
        title: 'Sotto il profilo normativo',
        content: 'Adeguamento sotto il profilo della sicurezza antincendio e ambientale comprese denunce INAIL (D.M. 1/12/75), pratiche gas combustibile (D.M. 37/2008, Delibera 40/08), certificazione prevenzione incendi (D.P.R. 37/98), diagnosi e certificazione energetica (decreto 311/07 e delibere Regione Lombardia 8745/08 e successivi aggiornamenti).',
      },
      {
        title: 'Centrali termiche esistenti con generatori di età maggiore di 15 anni',
        content: 'La normativa regionale Lombardia DGR 3502 del 5/8/2020, aggiornata dalla DGR n.816 2023 fornisce le linee guida per la riqualificazione delle centrali termiche esistenti civili e industriali con generatori aventi potenza superiore a 116,3 kW, di età superiore a 15 anni e con rendimento di combustione superiore ai limiti minimi previsti per legge. Tale normativa, nell\'ottica dell\'efficientamento energetico e della riduzione delle emissioni di gas climalteranti, prevede la presentazione di una diagnosi energetica, redatta ai sensi delle norme UNI CEI EN 16247-1/2: 2022.',
      },
      {
        title: 'Ambiti di riqualificazione',
        content: '',
        list: [
          'Integrazione dei generatori esistenti con nuovi apparecchi alimentati da energia rinnovabile quali pompe di calore, solare termico, nuovi produttori di acqua calda sanitaria.',
          'Inserimento di impianti fotovoltaici per la autoproduzione di energia elettrica.',
          'Riqualifica del sistema di emissione, termoregolazione.',
          'Sostituzione dei serramenti obsoleti.',
          'Riqualifica dell\'involucro edilizio mediante coibentazione delle strutture disperdenti, in particolare pareti esterne e copertura.',
        ],
      },
    ],
  },
};
