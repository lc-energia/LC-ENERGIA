'use client';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';

interface ServicePageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const ServicePageLayout = ({ title, children }: ServicePageLayoutProps) => {
  return (
    <>
      <PageHeader title={title} />
      <div className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServicePageLayout;