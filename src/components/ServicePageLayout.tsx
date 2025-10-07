'use client';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { fadeIn } from '@/variants';

interface ServicePageLayoutProps {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
  introText?: string;
}

const ServicePageLayout = ({
  title,
  children,
  subtitle,
  introText
}: ServicePageLayoutProps) => {
  return (
    <>
      <PageHeader title={title} />

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-4xl mx-auto"
          >
            {subtitle && (
              <h6 className="text-primary font-bold text-lg uppercase mb-4">{subtitle}</h6>
            )}
            <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
              {title}
            </h1>
            {introText && (
              <p
                className="text-lg text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: introText }}
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {children}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicePageLayout;