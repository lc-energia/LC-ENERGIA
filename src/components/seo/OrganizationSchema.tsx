/**
 * Schema.org Organization structured data (JSON-LD)
 * Mejora SEO y rich snippets en resultados de búsqueda
 */

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LC Energia",
    "url": "https://www.lcenergia.it",
    "logo": "https://www.lcenergia.it/img/logo.png",
    "description": "LC Energia offre servizi di alta qualità per la riqualificazione energetica e la progettazione tecnologica, contribuendo attivamente alla decarbonizzazione e all'efficienza energetica.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Monza e Brianza",
      "addressCountry": "IT"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "45.5845",
        "longitude": "9.2744"
      },
      "geoRadius": "50000"
    },
    "serviceType": [
      "Impianti Fotovoltaici",
      "Impianti Geotermici",
      "Progettazione Energetica",
      "Progettazione Antincendio",
      "Progettazione Acustica",
      "Consulenza Energetica",
      "Stazioni di Ricarica",
      "Efficienza Energetica"
    ],
    "knowsAbout": [
      "Energia Rinnovabile",
      "Efficienza Energetica",
      "Progettazione Tecnica",
      "Sostenibilità Ambientale",
      "Certificazioni Energetiche"
    ],
    "brand": {
      "@type": "Brand",
      "name": "LC Energia"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
