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
      <div className="bg-white rounded-lg shadow-sm h-full text-center border-0">
        <div className="p-4">
          <div className="mb-3">
            <i className={`fa ${feature.icon} fa-3x text-[#F49918]`}></i>
          </div>
          <p className="font-bold">{feature.text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SimpleTextCard;
