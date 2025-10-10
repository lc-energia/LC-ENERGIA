'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'strong';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  className = '',
  variant = 'default',
  rounded = 'xl'
}) => {
  const getGlassStyles = () => {
    switch (variant) {
      case 'subtle':
        return {
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        };
      case 'strong':
        return {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        };
      default:
        return {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        };
    }
  };

  const getRoundedClass = () => {
    switch (rounded) {
      case 'sm': return 'rounded-sm';
      case 'md': return 'rounded-md';
      case 'lg': return 'rounded-lg';
      case 'xl': return 'rounded-xl';
      case '2xl': return 'rounded-2xl';
      case 'full': return 'rounded-full';
      default: return 'rounded-xl';
    }
  };

  const glassStyles = getGlassStyles();

  return (
    <div
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        'hover:shadow-2xl hover:scale-[1.02]',
        getRoundedClass(),
        className
      )}
      style={{
        ...glassStyles,
        WebkitBackdropFilter: glassStyles.backdropFilter, // Safari support
      }}
    >
      {/* Efecto de brillo superior */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Efecto de luz ambiental */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
        }}
      />

      {/* Contenido de la card */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Efecto de reflejo inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"
        style={{
          opacity: 0.6,
        }}
      />

      {/* Efecto de partículas animadas (opcional) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
};

export default GlassmorphismCard;