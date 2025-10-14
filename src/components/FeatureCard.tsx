'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent } from '@/components/ui/Card';
import { CardTitle, CardDescription } from '@/components/ui/Typography';
import { 
  IconDefinition,
  faFileSignature, 
  faBuilding, 
  faFireExtinguisher, 
  faCertificate,
  faFileAlt,
  faTasks,
  faBullhorn,
  faHardHat,
  faChargingStation,
  faBolt
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
  'fa-charging-station': faChargingStation,
  'fa-bolt': faBolt,
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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="h-full text-left bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        <CardContent className="p-6 relative z-10">
          {/* Imagen grande arriba si existe */}
          {feature.image && (
            <div className="mb-6 flex justify-center">
              <div className="relative overflow-hidden rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  width={200} 
                  height={120}
                  className="w-full h-auto object-contain bg-white p-2"
                />
              </div>
            </div>
          )}
          
          {/* Icono solo si no hay imagen */}
          {!feature.image && (
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F49918] to-[#c27a12] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {icon && <FontAwesomeIcon icon={icon} className="text-white text-2xl" />}
              </div>
            </div>
          )}
          
          <CardTitle className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#F49918] transition-colors duration-300 text-center">
            {feature.title}
          </CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed text-sm text-center">
            {feature.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;