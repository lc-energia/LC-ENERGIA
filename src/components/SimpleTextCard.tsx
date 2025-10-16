'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faBolt, faRulerCombined, faCompass, faCloudSun } from '@fortawesome/free-solid-svg-icons';

const iconMap: { [key: string]: IconDefinition } = {
  'fa-bolt': faBolt,
  'fa-ruler-combined': faRulerCombined,
  'fa-compass': faCompass,
  'fa-cloud-sun': faCloudSun,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
};

interface SimpleTextCardProps {
  feature: {
    text: string;
    icon: string;
  };
  i: number;
}

const SimpleTextCard: FC<SimpleTextCardProps> = ({ feature, i }) => {
  const icon = iconMap[feature.icon];

  return (
    <motion.div
      custom={i}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-6 h-full border border-primary-100 transition-smooth relative overflow-hidden min-h-[80px]">
        {/* Efecto decorativo */}
        <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-primary-50 to-transparent rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>

        <div className="relative z-10 flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 mt-1">
            {icon && <FontAwesomeIcon icon={icon} className="text-white text-base" />}
          </div>

          <div className="flex-grow min-w-0">
            <p className="text-base font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300 leading-tight break-words">
              {feature.text}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SimpleTextCard;
