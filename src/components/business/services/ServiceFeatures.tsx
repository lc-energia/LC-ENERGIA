/**
 * ServiceFeatures - Grid de características del servicio
 * Reutilizable para mostrar features con iconos
 */

'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faRulerCombined,
  faCompass,
  faCloudSun,
  faCheckCircle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { staggerContainer, cardEntrance, viewportSettings } from '@/lib/animation-variants';

interface Feature {
  text: string;
  icon: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

const iconMap: Record<string, IconDefinition> = {
  'fa-bolt': faBolt,
  'fa-ruler-combined': faRulerCombined,
  'fa-compass': faCompass,
  'fa-cloud-sun': faCloudSun,
  'fa-check-circle': faCheckCircle,
};

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
    >
      {features.map((feature, index) => {
        const icon = iconMap[feature.icon] || faCheckCircle;

        return (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-card hover-lift transition-smooth"
            variants={cardEntrance}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
              <FontAwesomeIcon icon={icon} className="text-white text-xl" />
            </div>
            <p className="text-gray-700 font-medium">{feature.text}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
