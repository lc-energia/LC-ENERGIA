import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Estilos migrados de src/styles/style.css (.btn, .btn-primary, .btn-secondary, .btn-square)
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary (Naranja, basado en el CSS original que usaba un color oscuro para el fondo)
        primary: "bg-primary-700 text-white border border-primary-700 hover:bg-primary-800 hover:border-primary-800 active:translate-y-px shadow-md hover:shadow-lg",
        // Secondary (Verde Lima)
        secondary: "bg-secondary-700 text-white border border-secondary-700 hover:bg-secondary-800 hover:border-secondary-800 active:translate-y-px shadow-md hover:shadow-lg",
        // Outline Primary
        outline: "border border-primary-700 text-primary-700 bg-transparent hover:bg-primary-50 hover:text-primary-800",
        // Ghost (Para enlaces de navegación)
        ghost: "hover:bg-neutral-100 text-gray-700 hover:text-primary-700",
        // Link (Para enlaces simples)
        link: "text-primary-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-6 py-4 text-lg",
        icon: "h-10 w-10", // .btn-square
        smIcon: "h-8 w-8", // .btn-sm-square
        lgIcon: "h-12 w-12", // .btn-lg-square
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }