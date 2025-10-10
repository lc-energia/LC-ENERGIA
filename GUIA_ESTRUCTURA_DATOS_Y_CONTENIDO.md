# Guía de Estructura de Datos y Contenido (Versión Final)

## 1. Propósito del Documento

Este documento es la guía definitiva que refleja la **estructura de datos exacta** y el **contenido textual íntegro** del sitio web. A diferencia de versiones anteriores, esta guía no es conceptual, sino un espejo del código fuente (`.ts` files). Su propósito es mostrar al desarrollador la correspondencia 1:1 entre los campos de datos (ej. `title`, `content`, `list`) y el texto que deben renderizar, eliminando cualquier ambigüedad durante la implementación.

---

## 2. Contenido y Estructura por Página

### 2.1. Página de Inicio (`/`)

#### **Bloque 1: Bienvenida (Hero Section - `NewCarousel`)**
- **Fuente de Datos**: `carouselData`
- **Estructura y Contenido**:
  ```json
  [
    {
      "img": "/img/2.png",
      "alt": "Moderno edificio commerciale con facciata in vetro.",
      "title": "LC Energia, al tuo fianco.",
      "text": "L’esperienza e lo studio continuo delle nuove tecnologie ci permettono di fornire le soluzioni più avanzate per raggiungere la miglior efficienza ed efficacia.",
      "link": "/azienda"
    },
    {
      "img": "/img/3.png",
      "alt": "Installazione di pannelli solari su un tetto residenziale.",
      "title": "Pionieri dell'Energia Solare e Rinnovabile",
      "text": "Ogni progetto è studiato su misura per soddisfare le tue esigenze. Scopri le migliori soluzioni per il tuo impianto, offriamo consulenza e supporto tecnico a 360 gradi garantendo la massima qualità in ogni dettaglio",
      "link": "/impianti-fotovoltaici"
    },
    {
      "img": "/img/1.png",
      "alt": "Schema tecnico di un impianto energetico.",
      "title": "LC Energia",
      "text": "Innovazione, Esperienza, Eccellenza.",
      "link": "/riqualificazione-di-centrali-termiche-esistenti"
    }
  ]
  ```

#### **Bloque 2: Testimonios (`DynamicNewTestimonial`)**
- **Fuente de Datos**: `testimonialData`
- **Estructura y Contenido**:
  ```json
  [
    { "type": "text", "text": "Energia pulita per un futuro sostenibile." },
    { "type": "text", "text": "Soluzioni efficienti per un mondo migliore." },
    { "type": "text", "text": "Innovazione in ogni progetto, rispettando il pianeta." },
    { "type": "text", "text": "Impegnati per l'ambiente e l'efficienza energetica." },
    { "type": "text", "text": "Tecnologia verde che trasforma gli edifici." },
    { "type": "text", "text": "Esperienza e visione per le energie rinnovabili." },
    { "type": "text", "text": "Adattiamo il presente per proteggere il futuro." },
    { "type": "text", "text": "Verso un ambiente più pulito e sicuro." },
    { "type": "text", "text": "Prestazioni superiori, impatto ambientale ridotto." },
    { "type": "text", "text": "Efficienza energetica che fa la differenza." }
  ]
  ```

### 2.2. Página de Empresa (`/azienda`)

#### **Bloque 1: Título (`PageHeader`)**
- **Contenido**: `Azienda`

#### **Bloque 2: Historia y Misión**
- **Fuente de Datos**: `valuePropositions`
- **Estructura y Contenido**:
  ```json
  [
    {
      "content": "LC Energia vanta di personale qualificato e con grande esperienza nel settore della progettazione e realizzazione di impianti civili e industriali. L’impegno dell’azienda è volto a contribuire in prima linea agli obiettivi Europei e Nazionali per la decarbonizzazione e l’efficientamento energetico. Per questo LC Energia, oltre a fornire consulenza e progettazione per gli impianti termici, si è specializzata nella realizzazione di impianti fotovoltaici sia nel settore civile che industriale."
    },
    {
      "content": "Sfruttando le nostre competenze operiamo sempre nel rispetto degli obblighi legislativi e normativi per fornire al cliente un servizio a regola d’arte. Attraverso interventi di riqualificazione architettonica e impiantistica su diversi edifici nel campo industriale, civile, pubblico e nei processi produttivi, LC Energia permette ai suoi clienti di ottenere significativi risparmi energetici oltre a una miglior qualità di vita."
    },
    {
      "content": "Il successo di LC Energia deriva dalla corretta applicazione delle conoscenze tecniche e dall'utilizzo razionale delle nuove tecnologie per la produzione di energia e la riduzione dei consumi. La società opera attraverso due principali settori operativi:",
      "list": [
        "Consulenza tecnica e progettazione che include anche attività di prevenzione incendi, acustica e assistenza ai lavori.",
        "Realizzazione di impianti ad alto profilo tecnologico per la produzione di energia elettrica e termica per l’abbattimento dei consumi energetici."
      ]
    },
    {
      "content": "LC Energia si impegna a offrire soluzioni su misura per le esigenze specifiche dei clienti, garantendo risultati tangibili attraverso un percorso collaudato che include la diagnosi energetica, la valutazione degli interventi e la stima economica degli investimenti proposti. Grazie a un'approfondita conoscenza del settore e alla competenza tecnica, LC Energia si posiziona come un partner affidabile per il raggiungimento degli obiettivi di efficienza energetica e sostenibilità."
    }
  ]
  ```

#### **Bloque 3: Razones para Elegirnos**
- **Fuente de Datos**: `reasons`
- **Estructura y Contenido**:
  ```json
  [
    { "icon": "fa-solar-panel", "title": "Soluzioni efficienti, ottimizzazione dei sistemi", "description": "Ogni progetto/impianto è sviluppato dando priorità all’affidabilità dei sistemi e al controllo dei costi di realizzazione ed esercizio." },
    { "icon": "fa-wind", "title": "Energia rinnovabile consapevole", "description": "Progettiamo il futuro sfruttando l’apporto delle energie rinnovabili, nel rispetto delle normative e laddove risulta tecnicamente ed economicamente conveniente." },
    { "icon": "fa-lightbulb", "title": "Consulenza specializzata nell’ambito della prevenzione incendi", "description": "Siamo specializzati nella redazione di attività ai fini dell’ottenimento del Certificato di Prevenzione Incendi." },
    { "icon": "fa-headset", "title": "Supporto e consulenza nel campo dell’acustica degli edifici", "description": "Offriamo una consulenza specifica per il settore acustico sia in ambito civile che industriale." }
  ]
  ```

#### **Bloque 4: El Equipo**
- **Fuente de Datos**: `teamMembers`
- **Estructura y Contenido**:
  ```json
  [
    { "name": "Colzani Roberto", "role": "Perito Industriale" },
    { "name": "Colzani Luca", "role": "Ingegnere Energetico" },
    { "name": "Ricchetti Lorenzo", "role": "Ingegnere Energetico" },
    { "name": "Mauri Silvia", "role": "Ingegnere Edile" },
    { "name": "Galtarossa Barbara", "role": "Amministrazione" },
    { "name": "Colzani Eliana", "role": "Creativo Multidisciplinare" }
  ]
  ```

#### **Bloque 5: Acreditaciones (Texto Estático)**
- **Contenido**: `Iscritti ai rispettivi Albi Professionali Provinciali...` (texto completo)

### 2.3. Páginas de Servicio (`/[slug]`)

- **Fuente de Datos**: `servicesData` (Objeto donde cada clave es el slug del servicio)

---

#### **Grupo de Servicio: `progettare-il-risparmio-energetico`**
```json
{
  "title": "Progettare il Risparmio Energetico",
  "breadcrumb": "Progettare il Risparmio Energetico",
  "introduction": "L’obiettivo del risparmio energetico è perseguibile solo attraverso competenze specifiche.<br><br>LC Energia offre supporto e consulenza per orientarsi nel panorama degli incentivi e realizzare progetti di efficienza energetica in modo ottimale.",
  "sections": [
    {
      "title": "Competenze Specifiche",
      "content": "È fondamentale avere esperienza e abilitazioni come:",
      "list": [
        "Esperto gestione energia.",
        "Energy manager.",
        "Leed certificator."
      ]
    },
    {
      "title": "Strumenti e Incentivi",
      "content": "Numerosi strumenti tecnici e finanziari sono oggi a disposizione del fruitore interessato ai temi della sostenibilità, con la possibilità di effettuare investimenti per l’efficienza energetica sfruttando gli incentivi governativi."
    }
  ]
}
```

---

#### **Grupo de Servicio: `impianti-fotovoltaici`**
```json
{
  "title": "Impianti Fotovoltaici",
  "breadcrumb": "Impianti Fotovoltaici",
  "introduction": "<br>Progettiamo e installiamo impianti fotovoltaici \"chiavi in mano\" <br>partendo da una valutazione preliminare che considera i seguenti elementi di base:",
  "mainFeatures": [
    { "text": "Consumo annuo'utenza", "icon": "fa-bolt" },
    { "text": "Spazio disponibile", "icon": "fa-ruler-combined" },
    { "text": "Orientamento dell'area di posa dei pannelli", "icon": "fa-compass" },
    { "text": "Presenza di ombreggiamenti e possibili soluzioni migliorative", "icon": "fa-cloud-sun" }
  ],
  "sections": [
    { "title": "Perché conviene?", "content": "Detrazione fiscale al 50%..." },
    { "title": "Scambio sul posto", "content": "Il meccanismo dello scambio sul posto..." },
    { "title": "Autoconsumo", "content": "L’energia prodotta dall’impianto..." },
    { "title": "Normativa per l’incremento delle energie rinnovabili", "content": "Il decreto legislativo 199/2021..." }
  ],
  "partnersTitle": "PARTNERS e collaborazioni",
  "partnersIntroduction": "LC Energia collabora da anni con le migliori marche del settore...",
  "partners": [ ... ]
}
```

---

#### **Grupo de Servicio: `progettazione-e-consulenza-tecnica`**
```json
{
  "title": "Progettazione e consulenza tecnica",
  "breadcrumb": "Progettazione e consulenza tecnica",
  "introduction": "Nella realizzazione di opere impiantistiche...",
  "sections": [
    { "title": "Impianti Elettrici", "list": ["Impianti elettrici civili ed industriali", "Sistemi domotici", "Building Automation", "Impianti di illuminazione"] },
    { "title": "Progettazione Impiantistica", "content": "Per ogni tipologia edilizia..." },
    { "title": "Impianti Meccanici", "list": ["Impianti di riscaldamento...", "Impianti alimentati da fonti rinnovabili...", "Impianti di cogenerazione", "Impianti a biomassa"] },
    { "title": "Progettazione e consulenza tecnica", "content": "LC Energia gestisce direttamente...", "list": ["Progettazione integrata...", "Definizione della tipologia...", "Assistenza ai lavori...", "Assistenza al collaudo..."] },
    { "title": "Impianti Speciali", "list": ["Impianti di rivelazione incendio", "Impianti TVCC", "Impianti antintrusione", ... ] },
    { "title": "Collaudi e certificazioni", "content": "Collaudi e start-up degli impianti..." }
  ]
}
```

*(... y así sucesivamente para todos los demás servicios: `contabilizzazione-calore`, `progettazione-antincendio`, `progettazione-acustica`, `impianti-geotermici`, `stazioni-di-ricarica`, `riqualificazione-di-centrali-termiche`)*

### 2.4. Página de Contacto (`/contact`)

- **Bloque 1: Título y Texto Introductorio (Estático)**
  - **Título**: `Richiedi un preventivo`
  - **Texto**: `Se hai bisogno di un preventivo, non esitare a contattarci:`

- **Bloque 2: Opciones de Contacto (Estático)**
  - **Email**: `info@lc-energia.it` (Título: `Invia una mail`, Botón: `Scrivi ora`)
  - **Teléfono**: `0362 992142` (Título: `Chiama ora`, Botón: `Chiama`)

- **Bloque 3: Ubicación (Estático)**
  - **URL del Mapa**: `https://www.google.com/maps/embed?pb=!1m18...`
