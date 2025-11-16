import { servicesData } from '@/data/services-data';
import ServicePage from './ServicePage';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Helper para limpiar HTML de las descripciones
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: 'Servicio no encontrado',
    };
  }

  const description = stripHtml(service.introduction).substring(0, 160);
  const siteUrl = 'https://www.lcenergia.it';

  return {
    title: service.title,
    description,
    keywords: `${service.title}, LC Energia, energie rinnovabili, Monza e Brianza, progettazione energetica, efficienza energetica`,
    openGraph: {
      title: `${service.title} | LC ENERGIA`,
      description,
      url: `${siteUrl}/${slug}`,
      siteName: 'LC ENERGIA',
      type: 'website',
      locale: 'it_IT',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | LC ENERGIA`,
      description,
    },
    alternates: {
      canonical: `${siteUrl}/${slug}`,
    },
  };
}

// Generar rutas estáticas en build time (SSG)
export async function generateStaticParams() {
  const slugs = Object.keys(servicesData);
  return slugs.map((slug) => ({ slug }));
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} slug={slug} />;
};

export default Page;
