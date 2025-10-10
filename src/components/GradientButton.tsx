'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  animated = true,
  fullWidth = false,
  className = ''
}) => {
  const getGradientClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'from-secondary to-primary hover:from-secondary/90 hover:to-primary/90';
      case 'accent':
        return 'from-primary via-secondary to-primary hover:from-primary/90 hover:via-secondary/90 hover:to-primary/90';
      default:
        return 'from-primary to-secondary hover:from-primary/90 hover:to-secondary/90';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center font-medium text-white transition-all duration-300">
        {children}
      </span>

      {/* Animated border effect */}
      {animated && (
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg,
              ${variant === 'secondary'
                ? 'rgba(139, 195, 74, 0.3), rgba(255, 140, 0, 0.3), rgba(139, 195, 74, 0.3)'
                : variant === 'accent'
                ? 'rgba(255, 140, 0, 0.3), rgba(139, 195, 74, 0.3), rgba(255, 140, 0, 0.3)'
                : 'rgba(255, 140, 0, 0.3), rgba(139, 195, 74, 0.3)'
              })`,
            filter: 'blur(8px)',
            transform: 'scale(1.2)'
          }}
        />
      )}

      {/* Shine effect on hover */}
      {animated && (
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            backgroundPosition: '200% 200%',
          }}
        />
      )}
    </>
  );

  const baseClasses = cn(
    'relative overflow-hidden group rounded-full font-medium transition-all duration-300',
    'hover:shadow-lg hover:scale-105 hover:-translate-y-1',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
    getGradientClasses(),
    getSizeClasses(),
    fullWidth && 'w-full justify-center',
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {buttonContent}
    </button>
  );
};

export default GradientButton;