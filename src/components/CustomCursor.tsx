'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    // Solo en desktop
    if (typeof window === 'undefined' || window.innerWidth < 1024) {
      return;
    }

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Configurar hover states para diferentes elementos
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Botones y enlaces
      if (target.matches('button, a, [role="button"], .cursor-pointer')) {
        setIsHovering(true);
        setCursorText(target.textContent?.substring(0, 20) || '');
      }
      // Imágenes
      else if (target.matches('img')) {
        setIsHovering(true);
        setCursorText('Ver');
      }
      // Inputs
      else if (target.matches('input, textarea, select')) {
        setIsHovering(true);
        setCursorText('Escribir');
      }
      // Cards y elementos interactivos
      else if (target.matches('.card, .hover-card, .interactive')) {
        setIsHovering(true);
        setCursorText('Explorar');
      }
      else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement;

      // Solo quitar hover si no estamos moviendo a otro elemento interactivo
      if (!relatedTarget || !relatedTarget.matches('button, a, img, input, textarea, select, .card, .hover-card, .interactive, [role="button"]')) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // No mostrar en mobile/tablet
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Ocultar cursor nativo */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }

        @media (max-width: 1023px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>

      {/* Cursor personalizado */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Círculo exterior */}
        <div
          className={`absolute rounded-full border-2 transition-all duration-300 ${
            isHovering
              ? 'w-12 h-12 bg-primary/10 border-primary scale-150'
              : 'w-6 h-6 bg-transparent border-primary/50 scale-100'
          } ${
            isClicking ? 'scale-75' : ''
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: isHovering ? '0 0 20px rgba(255, 140, 0, 0.3)' : 'none'
          }}
        />

        {/* Círculo interior */}
        <div
          className={`absolute rounded-full transition-all duration-200 ${
            isHovering
              ? 'w-2 h-2 bg-primary'
              : 'w-1 h-1 bg-primary'
          } ${isClicking ? 'scale-150' : ''}`}
          style={{
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Texto del cursor */}
        {cursorText && (
          <div
            className="absolute text-xs font-medium text-primary whitespace-nowrap transition-all duration-200"
            style={{
              transform: 'translate(-50%, 20px)',
              opacity: isHovering ? 1 : 0,
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            {cursorText}
          </div>
        )}

        {/* Efecto de ripple al hacer clic */}
        {isClicking && (
          <div
            className="absolute rounded-full border-2 border-primary/30 animate-ping"
            style={{
              width: '40px',
              height: '40px',
              transform: 'translate(-50%, -50%)',
              animationDuration: '0.5s'
            }}
          />
        )}
      </div>
    </>
  );
};

export default CustomCursor;