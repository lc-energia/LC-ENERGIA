import { type ClassValue, clsx } from "clsx"

/**
 * Utility function for composing Tailwind CSS classes.
 * It uses clsx for conditional class joining.
 * @param inputs - Array of class values (strings, objects, arrays)
 * @returns A single string of combined classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}