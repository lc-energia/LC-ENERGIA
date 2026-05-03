# Sistema de Diseño Unificado - LC Energia

Este documento describe el sistema de diseño unificado implementado para mantener consistencia visual en toda la aplicación.

## 🎨 Colores Institucionales

### Colores Principales
- **Verde Institucional**: `#9BBD2D` - Color principal de la marca
- **Naranja Institucional**: `#F49918` - Color secundario/acento

### Paleta Completa

```typescript
// Verde (Primary)
primary-50: #f2f8e6
primary-500: #9BBD2D  // Principal
primary-900: #5e6d19

// Naranja (Secondary)
secondary-50: #fff9e6
secondary-500: #F49918  // Principal
secondary-900: #8f5c0c
```

## 🎯 Cómo Usar el Sistema de Diseño

### 1. Importar el Sistema

```typescript
// Importar design tokens
import { colors, gradients, shadows, componentStyles } from '@/lib/design-system';

// Importar variantes de animación
import { fadeInUp, staggerContainer, cardEntrance, viewportSettings } from '@/lib/animation-variants';
```

### 2. Usar Clases CSS Predefinidas

#### Colores de Texto
```tsx
// Texto con colores institucionales
<h1 className="text-primary">Título Verde</h1>
<h1 className="text-secondary">Título Naranja</h1>

// Gradientes de texto
<h1 className="text-gradient-primary">Título con Gradiente Verde</h1>
<h1 className="text-gradient-secondary">Título con Gradiente Naranja</h1>
<h1 className="text-gradient-combined">Título con Gradiente Combinado</h1>
```

#### Fondos con Gradientes
```tsx
<div className="bg-gradient-primary">Fondo Verde</div>
<div className="bg-gradient-secondary">Fondo Naranja</div>
<div className="bg-gradient-combined">Fondo Combinado</div>
```

#### Sombras Institucionales
```tsx
<div className="shadow-primary">Sombra Verde</div>
<div className="shadow-secondary">Sombra Naranja</div>
<div className="shadow-combined">Sombra Combinada</div>

// Con hover
<button className="shadow-primary-hover">Botón con Sombra Hover</button>
```

#### Animaciones CSS
```tsx
<div className="animate-float">Flotación Suave</div>
<div className="animate-pulse-soft">Pulso Suave</div>
<div className="animate-shine">Brillo Animado</div>
```

#### Efectos Hover
```tsx
<div className="hover-scale">Escala en Hover</div>
<div className="hover-lift">Elevación en Hover</div>
<div className="hover-shine">Brillo en Hover</div>
```

### 3. Usar Variantes de Framer Motion

#### Animaciones de Entrada
```tsx
import { fadeInUp, cardEntrance, viewportSettings } from '@/lib/animation-variants';

// Fade In Up
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={viewportSettings}
>
  Contenido
</motion.div>

// Card Entrance
<motion.div variants={cardEntrance} initial="hidden" whileInView="visible">
  Tarjeta
</motion.div>
```

#### Contenedores con Stagger
```tsx
import { staggerContainer } from '@/lib/animation-variants';

<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
>
  {items.map(item => (
    <motion.div variants={fadeInUp} key={item.id}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

#### Iconos con Pop
```tsx
import { iconPop } from '@/lib/animation-variants';

<motion.div
  variants={iconPop}
  initial="hidden"
  whileInView="visible"
>
  <FontAwesomeIcon icon={faIcon} />
</motion.div>
```

### 4. Componentes Pre-estilizados

#### Botones
```tsx
import { componentStyles } from '@/lib/design-system';

// Botón primario con gradiente
<button className={componentStyles.button.primary.gradient}>
  Botón Verde
</button>

// Botón secundario con gradiente
<button className={componentStyles.button.secondary.gradient}>
  Botón Naranja
</button>

// Botón combinado
<button className={componentStyles.button.combined.gradient}>
  Botón Combinado
</button>
```

#### Tarjetas
```tsx
// Tarjeta básica
<div className={componentStyles.card.base}>Contenido</div>

// Tarjeta con glassmorphism
<div className={componentStyles.card.glass}>Contenido</div>

// Tarjeta con gradiente
<div className={componentStyles.card.gradient.combined}>Contenido</div>
```

#### Iconos con Fondo
```tsx
import { componentStyles } from '@/lib/design-system';

// Icono primario (verde)
<div className={componentStyles.icon.primary.wrapper}>
  <FontAwesomeIcon icon={faIcon} className={componentStyles.icon.primary.text} />
</div>

// Icono combinado (verde + naranja)
<div className={componentStyles.icon.combined.wrapper}>
  <FontAwesomeIcon icon={faIcon} className={componentStyles.icon.combined.text} />
</div>
```

#### Badges
```tsx
// Badge primario
<span className={componentStyles.badge.primary}>Nuevo</span>

// Badge con gradiente
<span className={componentStyles.badge.gradient}>Premium</span>
```

### 5. Secciones Estandarizadas

```tsx
import { componentStyles } from '@/lib/design-system';

// Sección con fondo blanco
<section className={componentStyles.section.withBackground.white}>
  Contenido
</section>

// Sección con gradiente combinado
<section className={componentStyles.section.withBackground.combined}>
  Contenido
</section>
```

## 📐 Espaciado Consistente

Usa estos valores para padding y margin:

```tsx
// Padding de secciones
py-12 sm:py-16 lg:py-20  // Estándar

// Gaps en grids
gap-6 lg:gap-8           // Para tarjetas pequeñas
gap-8 lg:gap-10          // Para tarjetas grandes

// Margin entre elementos
mb-4                      // Pequeño
mb-8                      // Medio
mb-12 o mb-16            // Grande
```

## 🎬 Patrones de Animación Recomendados

### Para Secciones Completas
```tsx
<motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={viewportSettings}
>
  {/* Contenido con animaciones individuales */}
</motion.section>
```

### Para Títulos
```tsx
<motion.h2
  className="text-gradient-combined"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Título
</motion.h2>
```

### Para Tarjetas
```tsx
<motion.div
  variants={cardEntrance}
  initial="hidden"
  whileInView="visible"
  whileHover={{ scale: 1.05 }}
  className="hover-lift hover-shine"
>
  {/* Contenido de tarjeta */}
</motion.div>
```

### Para Botones
```tsx
<motion.button
  className="bg-gradient-primary"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
>
  Clic aquí
</motion.button>
```

## 🚀 Mejores Prácticas

1. **Consistencia**: Usa siempre las clases predefinidas en lugar de colores hardcodeados
2. **Animaciones**: Usa viewport={viewportSettings} para consistencia
3. **Gradientes**: Prefiere `text-gradient-combined` para títulos importantes
4. **Hover**: Combina `hover-lift` + `hover-shine` para efectos premium
5. **Iconos**: Usa siempre el wrapper con gradiente institucional
6. **Spacing**: Mantén el espaciado vertical consistente (py-12 sm:py-16 lg:py-20)

## 📱 Responsive Design

```tsx
// Tamaños de texto responsive
text-3xl sm:text-4xl lg:text-5xl    // Títulos principales
text-xl sm:text-2xl lg:text-3xl     // Títulos secundarios
text-base sm:text-lg                // Texto normal

// Padding responsive
p-6 sm:p-8 lg:p-10                  // Tarjetas
px-4 sm:px-6 lg:px-8                // Contenedores

// Grids responsive
grid-cols-1 md:grid-cols-2 lg:grid-cols-3    // Servicios
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   // Estadísticas
```

## 🎨 Variables CSS Disponibles

```css
/* Colores */
var(--color-primary)
var(--color-secondary)

/* Gradientes */
var(--gradient-primary)
var(--gradient-secondary)
var(--gradient-combined)

/* Sombras */
var(--shadow-primary)
var(--shadow-secondary)
var(--shadow-combined)

/* Transiciones */
var(--transition-fast)
var(--transition-normal)
var(--transition-slow)
```

## 📝 Ejemplo Completo de Componente

```tsx
'use client';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardEntrance, viewportSettings } from '@/lib/animation-variants';
import { componentStyles } from '@/lib/design-system';

export default function MyComponent() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-combined mb-4">
            Título de Sección
          </h2>
          <p className="text-lg text-gray-600">
            Descripción de la sección
          </p>
        </motion.div>

        {/* Grid de tarjetas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={cardEntrance}
              className="hover-lift hover-shine"
            >
              <div className={componentStyles.card.glass}>
                {/* Contenido */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

---

**Recuerda**: Este sistema está diseñado para mantener la identidad visual de LC Energia consistente en toda la aplicación. Siempre usa los colores institucionales (Verde #9BBD2D y Naranja #F49918) y las animaciones predefinidas.
