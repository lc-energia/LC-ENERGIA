/**
 * Schema.org Service structured data (JSON-LD)
 * Para páginas individuales de servicios
 */

interface ServiceSchemaProps {
  name: string;
  description: string;
  slug: string;
}

export default function ServiceSchema({ name, description, slug }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "LC Energia",
      "url": "https://www.lcenergia.it"
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
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://www.lcenergia.it/${slug}`,
      "serviceLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Monza e Brianza",
          "addressCountry": "IT"
        }
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
