import { MetadataRoute } from 'next';

/**
 * Robots.txt dinámico
 * Configura cómo los motores de búsqueda rastrean el sitio
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.lcenergia.it';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/scripts/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
