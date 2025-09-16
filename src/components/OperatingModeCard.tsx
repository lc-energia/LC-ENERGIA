import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

interface Mode {
  title: string;
  description: string;
  image: string;
}

interface OperatingModeCardProps {
  mode: Mode;
  variants: any;
  i: number;
}

const OperatingModeCard: FC<OperatingModeCardProps> = ({ mode, variants, i }) => {
  return (
    <motion.div
      className="col-lg-4 col-md-6"
      custom={i}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="card h-100 shadow-sm border-0 text-center">
        <div className="card-body p-4">
          <div className="mb-3 d-flex justify-content-center">
            <Image src={mode.image} alt={mode.title} width={150} height={150} style={{ objectFit: 'contain' }} />
          </div>
          <h5 className="card-title">{mode.title}</h5>
          <p className="card-text">{mode.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OperatingModeCard;
