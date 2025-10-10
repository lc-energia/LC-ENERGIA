import * as React from "react"
import { cn } from "@/lib/utils"

// Estilos migrados de src/styles/style.css (.service-item) y FeatureCard.tsx
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-primary-500 hover:-translate-y-1",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

// Componente para el contenido de la tarjeta
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6", className)}
    {...props}
  />
))
CardContent.displayName = "CardContent"

// Componente para el título de la tarjeta
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-bold text-lg mb-1", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

// Componente para la descripción de la tarjeta
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

// Componente para el pie de página de la tarjeta
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardFooter, CardTitle, CardDescription }