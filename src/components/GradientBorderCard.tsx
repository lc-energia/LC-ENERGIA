'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientBorderCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'rainbow';
  animated?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  borderWidth?: 'thin' | 'normal' | 'thick';
}

const GradientBorderCard: React.FC<GradientBorderCardProps> = ({
  children,
  className = '',
  variant = 'primary',
  animated = true,
  rounded = 'xl',
  borderWidth = 'normal'
}) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'secondary':
        return 'from-secondary to-primary';
      case 'accent':
        return 'from-primary via-secondary to-primary';
      case 'rainbow':
        return 'from-primary via-secondary to-primary';
      default:
        return 'from-primary to-secondary';
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

  const getBorderWidth = () => {
    switch (borderWidth) {
      case 'thin': return 'p-0.5';
      case 'thick': return 'p-1';
      default: return 'p-0.5';
    }
  };

  return (
    <div className={cn('relative group', getRoundedClass(), className)}>
      {/* Gradiente animado */}
      <div
        className={cn(
          'absolute inset-0 rounded-[inherit] opacity-75 group-hover:opacity-100 transition-opacity duration-300',
          animated ? 'animate-gradient' : ''
        )}
        style={{
          background: `linear-gradient(135deg,
            ${variant === 'rainbow'
              ? '#FF8C00, #8BC34A, #FF8C00, #8BC34A'
              : variant === 'accent'
              ? '#FF8C00, #8BC34A, #FF8C00'
              : variant === 'secondary'
              ? '#8BC34A, #FF8C00'
              : '#FF8C00, #8BC34A'
            })`,
          backgroundSize: animated ? '400% 400%' : '100% 100%',
          animation: animated ? 'gradientShift 3s ease-in-out infinite' : 'none',
          filter: 'blur(1px)',
          zIndex: 0
        }}
      />

      {/* Contenedor con máscara para crear el borde */}
      <div
        className={cn(
          'relative bg-white rounded-[inherit]',
          getBorderWidth()
        )}
        style={{
          zIndex: 1,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
      >
        {/* Contenido interior */}
        <div className="relative bg-white rounded-[inherit] p-6 md:p-8">
          {children}
        </div>
      </div>

      {/* Efecto de brillo en hover */}
      <div
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
          zIndex: 2,
        }}
      />

      {/* Efecto de sombra con gradiente */}
      <div
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
        style={{
          background: `linear-gradient(135deg,
            ${variant === 'secondary'
              ? 'rgba(139, 195, 74, 0.3)'
              : 'rgba(255, 140, 0, 0.3)'
            },
            ${variant === 'secondary'
              ? 'rgba(255, 140, 0, 0.3)'
              : 'rgba(139, 195, 74, 0.3)'
            })`,
          transform: 'scale(1.05)',
        }}
      />

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          animation: gradientShift 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GradientBorderCard;