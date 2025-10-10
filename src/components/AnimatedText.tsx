'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'letters' | 'words' | 'lines';
  delay?: number;
  duration?: number;
  stagger?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'slideIn' | 'scaleIn';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  type = 'words',
  delay = 0,
  duration = 0.5,
  stagger = 0.03,
  animation = 'fadeUp',
}) => {
  // Dividir el texto según el tipo
  const getSplits = () => {
    switch (type) {
      case 'letters':
        return text.split('').map((char, index) => ({
          id: index,
          content: char === ' ' ? '\u00A0' : char, // Espacio no rompible
        }));
      case 'words':
        return text.split(' ').map((word, index) => ({
          id: index,
          content: word,
        }));
      case 'lines':
        // Dividir por líneas (simplificado)
        return text.split('\n').map((line, index) => ({
          id: index,
          content: line,
        }));
      default:
        return text.split(' ').map((word, index) => ({
          id: index,
          content: word,
        }));
    }
  };

  // Definir las variantes de animación
  const getVariants = () => {
    switch (animation) {
      case 'fadeUp':
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case 'slideIn':
        return {
          hidden: { x: -30, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'scaleIn':
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        };
      default:
        return {
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
    }
  };

  const splits = getSplits();
  const variants = getVariants();

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {splits.map((split, index) => (
        <motion.span
          key={split.id}
          className={type === 'words' ? 'inline-block mr-1' : 'inline-block'}
          variants={variants}
          transition={{
            duration,
            delay: delay + index * stagger,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {split.content}
          {type === 'words' && index < splits.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Componente especial para títulos con span HTML (como los del carousel)
export const AnimatedHTMLText: React.FC<{
  html: string;
  className?: string;
  delay?: number;
  duration?: number;
}> = ({ html, className = '', delay = 0, duration = 0.6 }) => {
  // Simple parseo de HTML para spans con colores
  const parseHTML = (htmlString: string) => {
    // Reemplazar spans con marcadores para después estilizar
    const parts = htmlString.split(/(<span[^>]*>.*?<\/span>)/g);
    const result: Array<{ text: string; isColored: boolean; className?: string }> = [];

    parts.forEach(part => {
      if (part.includes('<span')) {
        // Extraer el texto y la clase del span
        const textMatch = part.match(/<span[^>]*class="([^"]*)"[^>]*>(.*?)<\/span>/);
        if (textMatch) {
          result.push({
            text: textMatch[2],
            isColored: true,
            className: textMatch[1]
          });
        }
      } else if (part.trim()) {
        result.push({
          text: part,
          isColored: false
        });
      }
    });

    return result;
  };

  const parsedContent = parseHTML(html);

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {parsedContent.map((item, index) => (
        <motion.span
          key={index}
          className={item.isColored ? (item.className || 'text-primary') : 'inline-block mr-1'}
          dangerouslySetInnerHTML={{ __html: item.text }}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{
            duration,
            delay: delay + index * 0.05,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedText;