'use client';

import { motion } from 'framer-motion';
import { FC, memo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { CardTitle, CardDescription } from '@/components/ui/Typography';



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
  text?: string;
}

interface FeatureCardProps {
  feature: Feature;
  i: number;
}

const FeatureCard: FC<FeatureCardProps> = memo(function FeatureCard({ feature, i }) {
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
           {/* Imagen si existe */}
           {feature.image && (
             <div className="mb-4 flex justify-center">
               <div className="relative overflow-hidden rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
                 <Image
                   src={feature.image}
                   alt={feature.title}
                   width={300}
                   height={200}
                   className="w-full h-auto object-contain"
                 />
               </div>
             </div>
           )}

           <CardTitle className="text-base font-bold mb-3 text-gray-800 group-hover:text-[#F49918] transition-colors duration-300 text-center">
             {feature.title}
           </CardTitle>
           <CardDescription className="text-gray-600 leading-relaxed text-sm text-left">
             {feature.description}
           </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
});

export default FeatureCard;