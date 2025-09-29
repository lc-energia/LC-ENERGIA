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
  columnClass: string;
}

const SimpleTextCard: FC<SimpleTextCardProps> = ({ feature, i, columnClass }) => {
  const icon = iconMap[feature.icon];

  return (
    <motion.div
      className={columnClass}
      custom={i}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <div className="bg-white rounded-lg shadow-sm h-full text-center border-0">
        <div className="p-4">
          <div className="mb-3">
            {icon && <FontAwesomeIcon icon={icon} className="fa-3x text-[#F49918]" />}
          </div>
          <p className="font-bold">{feature.text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SimpleTextCard;
