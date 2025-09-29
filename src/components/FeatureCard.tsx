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
      <div className="bg-white rounded-lg shadow-sm h-full text-center border-0">
        <div className="p-4">
          <div className="mb-3">
            {feature.image && <Image src={feature.image} alt={feature.title} width={100} height={100} style={{ objectFit: 'contain' }} />}
            {icon && <FontAwesomeIcon icon={icon} className="fa-3x text-[#F49918]" />}
          </div>
          <h5 className="font-bold text-lg">{feature.title}</h5>
          <p>{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;