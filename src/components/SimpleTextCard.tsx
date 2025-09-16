import { motion, Variants } from 'framer-motion';
import { FC } from 'react';

interface SimpleTextCardProps {
  text: string;
  variants: Variants;
  i: number;
  columnClass: string;
}

const SimpleTextCard: FC<SimpleTextCardProps> = ({ text, variants, i, columnClass }) => {
  return (
    <motion.div
      className={columnClass}
      custom={i}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="card h-100 shadow-sm border-0 text-center">
        <div className="card-body p-4 d-flex align-items-center justify-content-center">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SimpleTextCard;
