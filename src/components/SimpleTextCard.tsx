import { motion, Variants } from 'framer-motion';
import { FC } from 'react';

interface SimpleTextCardProps {
  feature: {
    text: string;
    icon: string;
  };
  variants: Variants;
  i: number;
  columnClass: string;
}

const SimpleTextCard: FC<SimpleTextCardProps> = ({ feature, variants, i, columnClass }) => {
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
            <i className={`fa ${feature.icon} fa-3x text-primary`}></i>
          </div>
          <p className="card-text fw-bold">{feature.text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SimpleTextCard;
