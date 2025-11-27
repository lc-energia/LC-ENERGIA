/**
 * Common Type Definitions
 */

// Color variants used throughout the app
export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'inverse'
  | 'muted'
  | 'white'
  | 'dark';

// Animation direction variants
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

// Size variants
export type SizeVariant = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

// Weight variants
export type WeightVariant = 'light' | 'normal' | 'semibold' | 'bold';

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Icon definition (for FontAwesome compatibility)
export interface IconConfig {
  icon: string;
  className?: string;
}
