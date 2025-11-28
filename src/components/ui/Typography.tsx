/**
 * Componentes tipográficos estandarizados para LC Energia
 * Sistema escalable y consistente basado en Poppins + Open Sans
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

interface HeadingProps extends TypographyProps {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'inverse' | 'muted' | 'white';
}

// Componentes de encabezados
export function Heading1({ children, className, as = 'h1', color = 'primary' }: HeadingProps) {
  const Tag = as;
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    accent: 'text-accent',
    inverse: 'text-inverse',
    muted: 'text-muted',
    white: 'text-white'
  };
  return (
    <Tag className={cn(
      'hero-title font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-none',
      colorClasses[color],
      'mb-4',
      className
    )}>
      {children}
    </Tag>
  );
}

export function Heading2({ children, className, as = 'h2', color = 'primary' }: HeadingProps) {
  const Tag = as;
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    accent: 'text-accent',
    inverse: 'text-inverse',
    muted: 'text-muted',
    white: 'text-white'
  };
  return (
    <Tag className={cn(
      'section-title font-heading text-base md:text-lg lg:text-xl font-bold tracking-tight leading-tight',
      colorClasses[color],
      'mb-3',
      className
    )}>
      {children}
    </Tag>
  );
}

export function Heading3({ children, className, as = 'h3', color = 'primary' }: HeadingProps) {
  const Tag = as;
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    accent: 'text-accent',
    inverse: 'text-inverse',
    muted: 'text-muted',
    white: 'text-white'
  };
  return (
    <Tag className={cn(
      'font-heading text-base md:text-lg lg:text-xl font-semibold leading-tight',
      colorClasses[color],
      'mb-2',
      className
    )}>
      {children}
    </Tag>
  );
}

export function Heading4({ children, className, as = 'h4', color = 'primary' }: HeadingProps) {
  const Tag = as;
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    accent: 'text-accent',
    inverse: 'text-inverse',
    muted: 'text-muted',
    white: 'text-white'
  };
  return (
    <Tag className={cn(
      'font-heading text-sm md:text-base lg:text-lg font-semibold leading-tight',
      colorClasses[color],
      'mb-2',
      className
    )}>
      {children}
    </Tag>
  );
}

export function Heading5({ children, className, as = 'h5', color = 'primary' }: HeadingProps) {
  const Tag = as;
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    accent: 'text-accent',
    inverse: 'text-inverse',
    muted: 'text-muted',
    white: 'text-white'
  };
  return (
    <Tag className={cn(
      'font-heading text-xs md:text-sm lg:text-sm font-semibold leading-tight',
      colorClasses[color],
      'mb-1',
      className
    )}>
      {children}
    </Tag>
  );
}

export function Heading6({ children, className, as = 'h6', color = 'primary' }: HeadingProps) {
  const Tag = as;
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    accent: 'text-accent',
    inverse: 'text-inverse',
    muted: 'text-muted',
    white: 'text-white'
  };
  return (
    <Tag className={cn(
      'font-heading text-xs md:text-xs lg:text-sm font-semibold leading-tight',
      colorClasses[color],
      'mb-1',
      className
    )}>
      {children}
    </Tag>
  );
}

// Componentes de texto
export interface TextProps extends TypographyProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'light' | 'normal' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'inverse' | 'muted' | 'white' | 'dark';
  justify?: boolean;
  maxWidth?: boolean;
  style?: React.CSSProperties;
}

export function Text({
  children,
  className,
  as = 'p',
  size = 'base',
  weight = 'normal',
  color = 'dark',
  justify = true,
  maxWidth = true,
  style
}: TextProps) {
  const Tag = as;

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    accent: 'text-accent',
    inverse: 'text-inverse',
    muted: 'text-muted',
    white: 'text-white',
    dark: 'text-dark-200'
  };

  return (
    <Tag style={style} className={cn(
      'font-body leading-relaxed',
      sizeClasses[size],
      weightClasses[weight],
      colorClasses[color],
      justify && 'text-justify',
      maxWidth && 'max-w-65ch',
      className
    )}>
      {children}
    </Tag>
  );
}

// Componentes específicos para la aplicación
export function HeroTitle({ children, className, as = 'h1', color }: { children: React.ReactNode; className?: string; as?: React.ElementType; color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'inverse' | 'muted' | 'white'; }) {
  return (
    <Heading1 as={as} color={color} className={cn('text-center', className)}>
      {children}
    </Heading1>
  );
}

export function SectionTitle({ children, className, color }: { children: React.ReactNode; className?: string; color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'inverse' | 'muted' | 'white'; }) {
  return (
    <Heading2 color={color} className={cn(className)}>
      {children}
    </Heading2>
  );
}

export function CardTitle({ children, className, color }: { children: React.ReactNode; className?: string; color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'inverse' | 'muted' | 'white'; }) {
  return (
    <Heading3 color={color} className={cn('text-left', className)}>
      {children}
    </Heading3>
  );
}

export function CardDescription({ children, className, color = 'dark' }: { children: React.ReactNode; className?: string; color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'inverse' | 'muted' | 'white' | 'dark'; }) {
  return (
    <Text
      size="sm"
      color={color}
      className={cn(className)}
    >
      {children}
    </Text>
  );
}

export function ServiceTitle({ children, className, color }: { children: React.ReactNode; className?: string; color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'inverse' | 'muted' | 'white'; }) {
  return (
    <Heading4 color={color} className={cn('text-left', className)}>
      {children}
    </Heading4>
  );
}

export function ServiceDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Text
      size="sm"
      color="secondary"
      className={cn(className)}
    >
      {children}
    </Text>
  );
}

export function TestimonialText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Text
      as="blockquote"
      size="base"
      color="secondary"
      className={cn('italic text-center', className)}
    >
      {children}
    </Text>
  );
}

export function StatsNumber({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn(
      'stats-number font-heading text-3xl md:text-4xl font-bold text-accent',
      className
    )}>
      {children}
    </span>
  );
}

// Componentes para formularios
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export function FormLabel({ children, className, htmlFor, required, ...props }: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'form-label font-heading text-sm font-semibold text-primary block mb-2',
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
    </label>
  );
}

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function FormInput({ className, id, error, 'aria-describedby': ariaDescribedby, ...props }: FormInputProps) {
  return (
    <>
      <input
        id={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : ariaDescribedby}
        className={cn(
          'form-input font-body text-base text-primary w-full px-4 py-2 border rounded-md',
          'focus:ring-2 focus:ring-accent focus:border-transparent',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </>
  );
}

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export function FormTextarea({ className, id, error, 'aria-describedby': ariaDescribedby, ...props }: FormTextareaProps) {
  return (
    <>
      <textarea
        id={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : ariaDescribedby}
        className={cn(
          'form-textarea font-body text-base text-primary w-full px-4 py-2 border rounded-md',
          'focus:ring-2 focus:ring-accent focus:border-transparent resize-none',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </>
  );
}

// Componentes para botones
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const baseClasses = 'btn font-heading font-semibold transition-all duration-200 inline-flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-accent text-white hover:bg-accent/90 focus:ring-2 focus:ring-accent/50',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        variant === 'primary' && 'tracking-wide text-uppercase',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Componentes para navegación
export function NavLink({
  children,
  className,
  active = false,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean }) {
  return (
    <a
      className={cn(
        'nav-link font-heading text-base font-normal transition-colors duration-200 force-accent-color',
        'hover:text-accent focus:text-accent',
        active && 'nav-link-active font-semibold text-accent',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

// Componentes de utilidad
export function HighlightText({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <span style={style} className={cn(
      'text-accent font-semibold',
      className
    )}>
      {children}
    </span>
  );
}

export function SmallText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Text size="sm" color="tertiary" className={cn('block', className)}>
      {children}
    </Text>
  );
}

export function LargeText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Text size="lg" className={cn('font-normal', className)}>
      {children}
    </Text>
  );
}

export function Badge({ children, className, variant = 'primary' }: { children: React.ReactNode; className?: string; variant?: 'primary' | 'secondary' }) {
  const variantClasses = {
    primary: 'bg-accent/10 text-accent',
    secondary: 'bg-secondary/10 text-secondary',
  };

  return (
    <span className={cn(
      'inline-block px-3 py-1 font-heading font-semibold rounded-full text-sm',
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  );
}

// Exportar un objeto con todos los componentes para facilitar importación
export const Typography = {
  H1: Heading1,
  H2: Heading2,
  H3: Heading3,
  H4: Heading4,
  H5: Heading5,
  H6: Heading6,
  Text,
  HeroTitle,
  SectionTitle,
  CardTitle,
  CardDescription,
  ServiceTitle,
  ServiceDescription,
  TestimonialText,
  StatsNumber,
  FormLabel,
  FormInput,
  FormTextarea,
  Button,
  NavLink,
  HighlightText,
  SmallText,
  LargeText,
  Badge
};

export default Typography;