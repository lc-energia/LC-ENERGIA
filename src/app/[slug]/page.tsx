
import { servicesData } from '@/data/services-data';
import ServicePage from './ServicePage';
import { notFound } from 'next/navigation';

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} slug={slug} />;
};

export default Page;
