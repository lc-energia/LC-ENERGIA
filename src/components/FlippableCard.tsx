'use client';
import { FC } from 'react';

interface FlippableCardProps {
  text: string;
}

// FINAL DEBUGGING STEP: This is a completely static component with no animation.
const FlippableCard: FC<FlippableCardProps> = ({ text }) => {
  return (
    <div className="bg-[#F49918] text-white flex items-center justify-center p-4 rounded-lg shadow-lg min-h-[120px] h-full">
      <p className="text-lg font-semibold text-center">{text}</p>
    </div>
  );
};

export default FlippableCard;