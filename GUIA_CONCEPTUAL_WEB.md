# Guía Conceptual y de Contenido Completo - LC Energia

## 1. Filosofía y Objetivos del Sitio Web

Este documento ofrece una visión completa de la arquitectura y el **contenido textual íntegro** del sitio web de LC Energia. El objetivo es servir como una guía definitiva para el desarrollador, uniendo la estrategia conceptual con el contenido final que debe ser implementado.

### Objetivos Principales:

1.  **Generar Confianza**: Posicionar a LC Energia como una empresa experta y fiable.
2.  **Educar al Usuario**: Explicar de forma clara los beneficios de los servicios.
3.  **Captar Clientes Potenciales**: Facilitar la solicitud de presupuestos.

---

## 2. Arquitectura Conceptual de la Información

La web se organiza en las siguientes páginas conceptuales:

- **Página de Inicio (`/`)**: El primer impacto. Presenta la identidad, capacidad y confianza de la marca.
- **Página de Empresa (`/azienda`)**: Consolida la confianza a través de la historia, el equipo y las acreditaciones.
- **Página de Servicio (`/[slug]`)**: El núcleo educativo. Detalla un servicio para convertir el interés en acción.
- **Página de Contacto (`/contact`)**: El punto de conversión final, diseñado para ser directo y sin fricciones.

---

## 3. Desglose Conceptual y Contenido Completo por Página

Esta sección detalla cada bloque de contenido por página, incluyendo el texto completo que debe mostrarse.

### 3.1. Página de Inicio (`/`)

**Narrativa**: *"Somos expertos en energía, estos son nuestros servicios principales y por esto puedes confiar en nosotros."*

- **Bloque 1: Bienvenida (Hero Section - Componente: `NewCarousel`)**
  - **Propósito**: Impactar y comunicar la propuesta de valor principal.
  - **Contenido**: Este bloque es visual. Debe mostrar imágenes de alta calidad de proyectos y eslóganes potentes que roten.

- **Bloque 2: Propuesta de Valor (Componente: `DynamicNewTestimonial`)**
  - **Propósito**: Generar confianza a través de la prueba social.
  - **Contenido**: Testimonios de clientes. (Nota: El contenido específico debe ser añadido a un archivo de datos, ej. `testimonials-data.ts`).

- **Bloque 3: Quiénes Somos (Componente: `About`)**
  - **Propósito**: Presentar brevemente la empresa y su misión.
  - **Contenido**: Un resumen del texto de la página "Azienda".
    > "LC Energia vanta di personale qualificato e con grande esperienza nel settore della progettazione e realizzazione di impianti civili e industriali. L’impegno dell’azienda è volto a contribuire in prima linea agli obiettivi Europei e Nazionali per la decarbonizzazione e l’efficientamento energetico."

- **Bloque 4: Nuestros Servicios (Componente: `Services`)**
  - **Propósito**: Mostrar el abanico de soluciones que se ofrecen.
  - **Contenido**: Una cuadrícula visual con los servicios principales extraídos de `services-data.ts`. Cada elemento debe enlazar a su página de detalle.

### 3.2. Página de Empresa (`/azienda`)

**Narrativa**: *"Tenemos la experiencia, el equipo y las credenciales para llevar a cabo tu proyecto con éxito."*

- **Bloque 1: Título de la Página (Componente: `PageHeader`)**
  - **Propósito**: Establecer el contexto.
  - **Contenido del Título**: `Azienda`

- **Bloque 2: Nuestra Historia y Misión**
  - **Propósito**: Contar la historia de la empresa y sus valores.
  - **Contenido Completo (de `valuePropositions` en `azienda-data.ts`):**
    > **Párrafo 1**: "LC Energia vanta di personale qualificato e con grande esperienza nel settore della progettazione e realizzazione di impianti civili e industriali. L’impegno dell’azienda è volto a contribuire in prima linea agli obiettivi Europei e Nazionali per la decarbonizzazione e l’efficientamento energetico. Per questo LC Energia, oltre a fornire consulenza e progettazione per gli impianti termici, si è specializzata nella realizzazione di impianti fotovoltaici sia nel settore civile che industriale."
    > 
    > **Párrafo 2**: "Sfruttando le nostre competenze operiamo sempre nel rispetto degli obblighi legislativi e normativi per fornire al cliente un servizio a regola d’arte. Attraverso interventi di riqualificazione architettonica e impiantistica su diversi edifici nel campo industriale, civile, pubblico e nei processi produttivi, LC Energia permette ai suoi clienti di ottenere significativi risparmi energetici oltre a una miglior qualità di vita."
    > 
    > **Párrafo 3**: "Il successo di LC Energia deriva dalla corretta applicazione delle conoscenze tecniche e dall'utilizzo razionale delle nuove tecnologie per la produzione di energia e la riduzione dei consumi. La società opera attraverso due principali settori operativi:"
    > - Consulenza tecnica e progettazione che include anche attività di prevenzione incendi, acustica e assistenza ai lavori.
    > - Realizzazione di impianti ad alto profilo tecnologico per la produzione di energia elettrica e termica per l’abbattimento dei consumi energetici.
    > 
    > **Párrafo 4**: "LC Energia si impegna a offrire soluzioni su misura per le esigenze specifiche dei clienti, garantendo risultati tangibili attraverso un percorso collaudato che include la diagnosi energetica, la valutazione degli interventi e la stima economica degli investimenti proposti. Grazie a un'approfondita conoscenza del settore e alla competenza tecnica, LC Energia si posiziona come un partner affidabile per il raggiungimento degli obiettivi di efficienza energetica e sostenibilità."

- **Bloque 3: Razones para Elegirnos**
  - **Propósito**: Reforzar las ventajas competitivas.
  - **Contenido Completo (de `reasons` en `azienda-data.ts`):**
    > - **Título**: `Soluzioni efficienti, ottimizzazione dei sistemi`
    >   **Descripción**: `Ogni progetto/impianto è sviluppato dando priorità all’affidabilità dei sistemi e al controllo dei costi di realizzazione ed esercizio.`
    > - **Título**: `Energia rinnovabile consapevole`
    >   **Descripción**: `Progettiamo il futuro sfruttando l’apporto delle energie rinnovabili, nel rispetto delle normative e laddove risulta tecnicamente ed economicamente conveniente.`
    > - **Título**: `Consulenza specializzata nell’ambito della prevenzione incendi`
    >   **Descripción**: `Siamo specializzati nella redazione di attività ai fini dell’ottenimento del Certificato di Prevenzione Incendi.`
    > - **Título**: `Supporto e consulenza nel campo dell’acustica degli edifici`
    >   **Descripción**: `Offriamo una consulenza specifica per il settore acustico sia in ambito civile che industriale.`

- **Bloque 4: El Equipo**
  - **Propósito**: Humanizar la marca y mostrar la experiencia.
  - **Contenido Completo (de `teamMembers` en `azienda-data.ts`):**
    > - Colzani Roberto - *Perito Industriale*
    > - Colzani Luca - *Ingegnere Energetico*
    > - Ricchetti Lorenzo - *Ingegnere Energetico*
    > - Mauri Silvia - *Ingegnere Edile*
    > - Galtarossa Barbara - *Amministrazione*
    > - Colzani Eliana - *Creativo Multidisciplinare*

- **Bloque 5: Acreditaciones y Certificaciones**
  - **Propósito**: Proporcionar pruebas tangibles de la cualificación.
  - **Contenido Completo (texto estático de la página):**
    > "Iscritti ai rispettivi Albi Professionali Provinciali
    > Certificatori Energetici di cui al D.G.R. 8/5018 – 20.07.2007
    > Accreditati Energy Building Manager, Regione Lombardia ai sensi del D.G.R. VIII/8355 del 5 Novembre 2008
    > Iscritti nell’elenco dei progettisti antincendio del Ministero dell’Interno di cui al D.Lgs n.139/2006 (ex Legge 818/84)
    > Verificatori in materia di sicurezza degli impianti ai sensi del DM 22/1/08 n. 37
    > Consulenti tecnici del Tribunale di Monza"

### 3.3. Página de Servicio (`/[slug]`)

**Narrativa**: *"Esto es todo lo que necesitas saber sobre [nombre del servicio] y por qué es la solución perfecta para ti."*

*(Se usará el servicio "Impianti Fotovoltaici" como ejemplo detallado)*

- **Bloque 1: Título del Servicio (Componente: `PageHeader`)**
  - **Propósito**: Identificar claramente el servicio.
  - **Contenido del Título**: `Impianti Fotovoltaici`

- **Bloque 2: Introducción y Beneficios Principales**
  - **Propósito**: Resumir el servicio y sus ventajas.
  - **Contenido de Introducción (de `introduction` en `services-data.ts`):**
    > "Progettiamo e installiamo impianti fotovoltaici 'chiavi in mano' partendo da una valutazione preliminare che considera i seguenti elementi di base:"
  - **Contenido de Beneficios (de `mainFeatures`):**
    > - Consumo annuo'utenza
    > - Spazio disponibile
    > - Orientamento dell'area di posa dei pannelli
    > - Presenza di ombreggiamenti e possibili soluzioni migliorative

- **Bloque 3: Detalles del Servicio**
  - **Propósito**: Profundizar en los aspectos clave.
  - **Contenido Completo (de `sections` en `services-data.ts`):**
    > **Título**: `Perché conviene?`
    > **Texto**: `Detrazione fiscale al 50% per edifici residenziali. Ad oggi esiste la possibilità di recuperare il 50% delle spese sostenute per l’acquisto e la realizzazione di un sistema fotovoltaico grazie agli incentivi governativi.`
    > 
    > **Título**: `Scambio sul posto`
    > **Texto**: `Il meccanismo dello scambio sul posto è una modalità di gestione dell’energia elettrica che permette al soggetto responsabile di un impianto fotovoltaico di immettere in rete l’energia elettrica prodotta ma non immediatamente autoconsumata, per poi prelevarla in un momento differente.`
    > 
    > **Título**: `Autoconsumo`
    > **Texto**: `L’energia prodotta dall’impianto fotovoltaico può essere direttamente auto-consumata dall’abitazione, garantendo così un notevole risparmio in bolletta.`
    > 
    > **Título**: `Normativa per l’incremento delle energie rinnovabili`
    > **Texto**: `Il decreto legislativo 199/2021 ha stabilito nuovi obblighi che dovranno essere rispettati in merito all’utilizzo di energia prodotta da fonti rinnovabili negli stabili di nuova costruzione o soggetti a ristrutturazioni.`

- **Bloque 4: Partners Tecnológicos**
  - **Propósito**: Generar confianza mostrando las marcas con las que se trabaja.
  - **Contenido (de `partners` en `services-data.ts`):**
    > **Título**: `PARTNERS e collaborazioni`
    > **Introducción**: `LC Energia collabora da anni con le migliori marche del settore, garantendo ai propri Clienti qualità e affidabilità dei prodotti installati.`
    > **Logos**: Se mostrará una galería con los logos de los partners.

### 3.4. Página de Contacto (`/contact`)

**Narrativa**: *"Estamos aquí para ayudarte. Contáctanos de la forma que prefieras."*

- **Bloque 1: Título y Llamada a la Acción**
  - **Propósito**: Animar al usuario a dar el siguiente paso.
  - **Contenido Completo:**
    > **Título**: `Richiedi un preventivo`
    > **Texto**: `Se hai bisogno di un preventivo, non esitare a contattarci:`

- **Bloque 2: Opciones de Contacto Directo**
  - **Propósito**: Ofrecer métodos de contacto rápidos y sencillos.
  - **Contenido Completo:**
    > **Opción 1: Email**
    > - **Título**: `Invia una mail`
    > - **Dato**: `info@lc-energia.it`
    > - **Botón**: `Scrivi ora` (enlaza a `mailto:info@lc-energia.it`)
    > 
    > **Opción 2: Teléfono**
    > - **Título**: `Chiama ora`
    > - **Dato**: `0362 992142`
    > - **Botón**: `Chiama` (enlaza a `tel:0362992142`)

- **Bloque 3: Ubicación Física**
  - **Propósito**: Mostrar la ubicación de la empresa.
  - **Contenido**: Un mapa interactivo de Google Maps mostrando la dirección: `Via della Valle, 39, 20841 Carate Brianza MB, Italy`.