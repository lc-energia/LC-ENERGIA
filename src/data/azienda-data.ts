export const valuePropositions = [
  {
    content: "LC Energia vanta di personale qualificato e con grande esperienza nel settore della progettazione e realizzazione di impianti civili e industriali. L’impegno dell’azienda è volto a contribuire in prima linea agli obiettivi Europei e Nazionali per la decarbonizzazione e l’efficientamento energetico. Per questo LC Energia, oltre a fornire consulenza e progettazione per gli impianti termici, si è specializzata nella realizzazione di impianti fotovoltaici sia nel settore civile che industriale."
  },
  {
    content: "Sfruttando le nostre competenze operiamo sempre nel rispetto degli obblighi legislativi e normativi per fornire al cliente un servizio a regola d’arte. Attraverso interventi di riqualificazione architettonica e impiantistica su diversi edifici nel campo industriale, civile, pubblico e nei processi produttivi, LC Energia permette ai suoi clienti di ottenere significativi risparmi energetici oltre a una miglior qualità di vita."
  },
  {
    content: "Il successo di LC Energia deriva dalla corretta applicazione delle conoscenze tecniche e dall'utilizzo razionale delle nuove tecnologie per la produzione di energia e la riduzione dei consumi. La società opera attraverso due principali settori operativi:",
    list: [
        "Consulenza tecnica e progettazione che include anche attività di prevenzione incendi, acustica e assistenza ai lavori.",
        "Realizzazione di impianti ad alto profilo tecnologico per la produzione di energia elettrica e termica per l’abbattimento dei consumi energetici."
    ]
  },
  {
    content: "LC Energia si impegna a offrire soluzioni su misura per le esigenze specifiche dei clienti, garantendo risultati tangibili attraverso un percorso collaudato che include la diagnosi energetica, la valutazione degli interventi e la stima economica degli investimenti proposti. Grazie a un'approfondita conoscenza del settore e alla competenza tecnica, LC Energia si posiziona come un partner affidabile per il raggiungimento degli obiettivi di efficienza energetica e sostenibilità."
  }
];

export const reasons = [
  { icon: 'fa-solar-panel', title: 'Soluzioni efficienti, ottimizzazione dei sistemi', description: 'Ogni progetto/impianto è sviluppato dando priorità all’affidabilità dei sistemi e al controllo dei costi di realizzazione ed esercizio.' },
  { icon: 'fa-wind', title: 'Energia rinnovabile consapevole', description: 'Progettiamo il futuro sfruttando l’apporto delle energie rinnovabili, nel rispetto delle normative e laddove risulta tecnicamente ed economicamente conveniente.' },
  { icon: 'fa-lightbulb', title: 'Consulenza specializzata nell’ambito della prevenzione incendi', description: 'Siamo specializzati nella redazione di attività ai fini dell’ottenimento del Certificato di Prevenzione Incendi.' },
  { icon: 'fa-headset', title: 'Supporto e consulenza nel campo dell’acustica degli edifici', description: 'Offriamo una consulenza specifica per il settore acustico sia in ambito civile che industriale.' }
];

export const teamMembers = [
  { name: 'Colzani Roberto', role: 'Perito Industriale' },
  { name: 'Colzani Luca', role: 'Ingegnere Energetico' },
  { name: 'Ricchetti Lorenzo', role: 'Ingegnere Energetico' },
  { name: 'Mauri Silvia', role: 'Ingegnere Edile' },
  { name: 'Galtarossa Barbara', role: 'Amministrazione' },
  { name: 'Colzani Eliana', role: 'Creativo Multidisciplinare' }
];

export interface Accreditation {
  title: string;
  description: string;
  icon: string;
  pageTitle: string;
  pageDescription: string;
}

export const accreditations: Accreditation[] = [
  {
    title: "Accrediti LC Energia",
    description: "Iscritti all'ordine degli Ingegneri e all'albo Provinciale dei Periti Industriali.<br>Certificatori Energetici di cui alla D.G.R. Lombardia.<br>Iscritti negli elenchi del Ministero degli Interni dei professionisti abilitati alla progettazione antincendio ed all'estensione di perizie giurate di cui alla Legge 818/84.<br>Verificatori in materia di sicurezza degli impianti ai sensi della Legge 46/90.<br>Consulenti tecnici del Tribunale di Como, Monza, Lecco.",
    icon: "bi bi-shield-fill-check",
    pageTitle: "Accrediti LC Energia",
    pageDescription: "Iscritti all'ordine degli Ingegneri e all'albo Provinciale dei Periti Industriali.",
  },
];
