# Sistema de Colores LC Energia

Este documento describe el sistema de colores centralizado implementado en el proyecto, siguiendo las mejores prácticas de Tailwind CSS.

## Paleta de Colores

### Primary (Verde Principal)
- **500**: `#9BBD2D` - Color principal de marca
- **400**: `#9bbd2d` - Variantes más claras
- **600**: `#7d9824` - Variantes más oscuras
- **Uso**: Elementos principales de marca, enlaces activos, iconos

### Secondary (Naranja Énfasis)
- **500**: `#F49918` - Color secundario para CTAs
- **400**: `#f49918` - Hover states
- **600**: `#cf7d0a` - Estados más oscuros
- **Uso**: Botones principales, llamadas a la acción, elementos de énfasis

### Neutral (Gris Base)
- **50**: `#f9f9f9` - Fondos muy claros
- **100**: `#f4f4f4` - Fondos claros
- **400**: `#e2e2e2` - Color neutro principal
- **500**: `#E2E2E2` - Fondo de secciones
- **Uso**: Fondos de sección, separadores, elementos neutros

### Dark (Oscuro)
- **200**: `#1A2A36` - Texto principal
- **100**: `#2d2d2d` - Textos secundarios
- **Uso**: Textos, bordes oscuros, elementos de alto contraste

## Gradientes Personalizados

- `bg-gradient-primary`: Gradiente verde principal
- `bg-gradient-secondary`: Gradiente naranja secundario
- `bg-gradient-hero`: Gradiente para hero sections

## Sombras Personalizadas

- `shadow-primary`: Sombra con tono verde
- `shadow-secondary`: Sombra con tono naranja

## Convenciones de Uso

### 1. Nombres Semánticos
Usa siempre nombres semánticos en lugar de colores específicos:
```tsx
// ✅ Correcto
className="text-primary bg-secondary hover:bg-secondary-600"

// ❌ Incorrecto
className="text-[#9BBD2D] bg-[#F49918]"
```

### 2. Jerarquía Visual
- **Primary**: Para elementos principales de marca
- **Secondary**: Para CTAs y elementos de acción
- **Neutral**: Para fondos y elementos estructurales
- **Dark**: Para texto y elementos de alto contraste

### 3. Estados Interactivos
Usa las variantes de color para estados:
- Hover: `hover:bg-primary-600`
- Focus: `focus:ring-primary`
- Active: `active:bg-primary-700`

## Implementación

El sistema está configurado en `tailwind.config.mjs` y se usa en toda la aplicación. Para modificar cualquier color:

1. Cambia el valor en `tailwind.config.mjs`
2. El cambio se aplicará automáticamente en toda la aplicación

## CSS Variables

Para compatibilidad con estilos existentes, se mantienen variables CSS:
```css
:root {
    --color-primary: #9BBD2D;
    --color-secondary: #F49918;
    --color-neutral: #E2E2E2;
    --color-dark: #1A2A36;
}
```

## Beneficios

- **Mantenibilidad**: Cambios centralizados
- **Consistencia**: Uso consistente en toda la app
- **Escalabilidad**: Fácil adición de nuevas variantes
- **Accesibilidad**: Cumple con ratios de contraste
- **Desarrollo**: Autocompletado y sugerencias en IDE