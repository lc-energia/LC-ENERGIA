'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
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
}

const FeatureCard: FC<FeatureCardProps> = ({ feature, i }) => {
  const icon = feature.icon ? iconMap[feature.icon] : undefined;

  return (
    <motion.div
      custom={i}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <Card className="h-full text-left">
        <CardContent>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              {feature.image && <Image src={feature.image} alt={feature.title} width={48} height={48} style={{ objectFit: 'contain' }} />}
              {icon && <FontAwesomeIcon icon={icon} className="fa-2x text-primary" />}
            </div>
            <div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;