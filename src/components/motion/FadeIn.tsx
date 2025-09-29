'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

type FadeInDirection = 'up' | 'down' | 'left' | 'right';

interface FadeInProps {
  direction: FadeInDirection;
  delay: number;
  children: React.ReactNode;
  className?: string;
  viewport?: { once: boolean; amount: number };
}

const FadeIn: React.FC<FadeInProps> = ({
  direction,
  delay,
  children,
  className,
  viewport = { once: true, amount: 0.25 },
}) => {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
