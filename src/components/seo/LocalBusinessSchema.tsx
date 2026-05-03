/**
 * LocalBusiness Schema Component
 * Provides structured data for local business search results
 */

const siteUrl = 'https://www.lcenergia.it';

const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#localbusiness`,
  name: 'LC Energia',
  description: 'Studio di progettazione impiantistica e consulenza energetica specializzato in riqualificazione energetica, impianti fotovoltaici, geotermici e certificazioni.',
  url: siteUrl,
  logo: `${siteUrl}/img/logo.png`,
  image: `${siteUrl}/img/home page.webp`,
  telephone: '+39 0362 992142',
  email: 'info@lc-energia.it',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via della Valle 39',
    addressLocality: 'Carate Brianza',
    addressRegion: 'MB',
    postalCode: '20841',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.6833,
    longitude: 9.2333,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '12:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '14:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 45.6833,
      longitude: 9.2333,
    },
    geoRadius: '50000',
  },
  sameAs: [
    // Add social media links when available
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+39 0362 992142',
    contactType: 'customer service',
    email: 'info@lc-energia.it',
    availableLanguage: ['Italian'],
    areaServed: 'IT',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi di Progettazione Energetica',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Progettazione Impiantistica',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Impianti Fotovoltaici',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Certificazione Energetica',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diagnosi Energetica',
        },
      },
    ],
  },
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
}
