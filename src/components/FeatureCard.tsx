import { motion, Variants } from 'framer-motion';
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
  variants: Variants;
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
      <div className="bg-white rounded-lg shadow-sm h-full text-center border-0">
        <div className="p-4">
          <div className="mb-3">
            {feature.image && <Image src={feature.image} alt={feature.title} width={100} height={100} style={{ objectFit: 'contain' }} />}
            {feature.icon && <i className={`fa ${feature.icon} fa-3x text-[#F49918]`}></i>}
          </div>
          <h5 className="font-bold text-lg">{feature.title}</h5>
          <p>{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;