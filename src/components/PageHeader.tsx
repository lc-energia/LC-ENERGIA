
'use client';

import { motion } from 'framer-motion';
import { HeroTitle } from '@/components/ui/Typography';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {


  return (
    <div className="page-header py-20 sm:py-24 md:py-28 mb-5 bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(26,42,54,0.8),rgba(26,42,54,0.8)),url('/img/imagenheader.JPEG')]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <HeroTitle as="h1" color="white" className="text-white !text-white">
            {title}
          </HeroTitle>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
