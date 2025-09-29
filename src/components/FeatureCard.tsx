'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  IconDefinition,
  faFileSignature, 
  faBuilding, 
  faFireExtinguisher, 
  faCertificate,
  faFileAlt,
  faTasks,
  faBullhorn,
  faHardHat
} from '@fortawesome/free-solid-svg-icons';

const iconMap: { [key: string]: IconDefinition } = {
  'fa-file-signature': faFileSignature,
  'fa-building': faBuilding,
  'fa-fire-extinguisher': faFireExtinguisher,
  'fa-certificate': faCertificate,
  'fa-file-alt': faFileAlt,
  'fa-tasks': faTasks,
  'fa-bullhorn': faBullhorn,
  'fa-hard-hat': faHardHat,
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

interface Feature {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

interface FeatureCardProps {
  feature: Feature;
  i: number;
  columnClass: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ feature, i, columnClass }) => {
  const icon = feature.icon ? iconMap[feature.icon] : undefined;

  return (
    <motion.div
      className={columnClass}
      custom={i}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <div className="bg-white rounded-lg shadow-md p-6 h-full transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-primary text-left">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {feature.image && <Image src={feature.image} alt={feature.title} width={48} height={48} style={{ objectFit: 'contain' }} />}
            {icon && <FontAwesomeIcon icon={icon} className="fa-2x text-[#F49918]" />}
          </div>
          <div>
            <h5 className="font-bold text-lg mb-1">{feature.title}</h5>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;