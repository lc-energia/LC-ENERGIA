import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

interface Feature {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

interface FeatureCardProps {
  feature: Feature;
  variants: any;
  i: number;
  columnClass: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ feature, variants, i, columnClass }) => {
  return (
    <motion.div
      className={columnClass}
      custom={i}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="card h-100 shadow-sm border-0 text-center">
        <div className="card-body p-4">
          <div className="mb-3">
            {feature.image && <Image src={feature.image} alt={feature.title} width={100} height={100} style={{ objectFit: 'contain' }} />}
            {feature.icon && <i className={`fa ${feature.icon} fa-3x text-primary`}></i>}
          </div>
          <h5 className="card-title">{feature.title}</h5>
          <p className="card-text">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;