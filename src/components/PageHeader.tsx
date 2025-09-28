
'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const headerStyle = {
    background: `linear-gradient(rgba(26, 42, 54, 0.8), rgba(26, 42, 54, 0.8)), url(/img/imagenheader.JPEG) center center no-repeat`,
    backgroundSize: 'cover',
  };

  return (
    <div style={headerStyle} className="py-20 sm:py-24 md:py-28 mb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
};

export default PageHeader;
